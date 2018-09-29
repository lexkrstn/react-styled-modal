import React from 'react';
import PropTypes from 'prop-types';
import styled, {injectGlobal} from 'styled-components';
import {createUniversalPortal} from "react-portal-universal";
import {Dialog, Content, Backdrop} from './elements';
import {transitionEndEvent, theme} from './helpers';
import {Context} from './provider';

injectGlobal`
	.modal-open {
		overflow: hidden !important;
	}
`;

class Modal extends React.Component {
	static propTypes = {
		open: PropTypes.bool,
		effect: PropTypes.oneOf(['none', 'fade']),
		centered: PropTypes.bool,
		size: PropTypes.oneOf(['small', 'medium', 'large']),
		closeOnEsc: PropTypes.bool,
		// Callbacks
		onClose: PropTypes.func,
		// Components
		Dialog: PropTypes.func,
		Content: PropTypes.func,
		Backdrop: PropTypes.func,
		// The provider's (or its stub) interface
		provider: PropTypes.object.isRequired
	};

	static defaultProps = {
		size: 'medium',
		open: false,
		effect: 'fade',
		centered: false,
		closeOnEsc: true,
		onClose: () => {},
		Dialog, Content, Backdrop
	};

	constructor(props) {
		super(props);
		this.state = {
			open: props.open,
			displayed: props.open,
			hasOpenClass: props.open,
			id: props.provider.generateId(),
			elevation: 0
		};
		this.modalRef = React.createRef();
		this.dialogRef = React.createRef();
	}

	static getDerivedStateFromProps(props, state) {
		const newState = props.open === state.open ? null : {
			open: props.open,
			displayed: props.effect === 'none' ? props.open : true,
			hasOpenClass: props.effect === 'none' ? props.open : false
		};
		if (props.open && !state.open) {
			newState.elevation = props.provider.popup(state.id);
		}
		else if (!props.open && state.open) {
			props.provider.hide(state.id);
		}
		return newState;
	}

	chargeClassTimeoutId() {
		this.classTimeoutId = setTimeout(() => {
			this.setState({
				displayed: true,
				hasOpenClass: true
			});
			this.classTimeoutId = null;
		}, 0);
	}

	clearClassTimeoutId() {
		if (this.classTimeoutId) {
			clearTimeout(this.classTimeoutId);
			this.classTimeoutId = null;
		}
	}

	chargeTransitionEndHandler() {
		this.handleTransitionEnd = () => {
			this.setState({
				displayed: false,
				hasOpenClass: false
			});
			this.clearTransitionEndHandler();
		};
		this.dialogRef.current.addEventListener(
			transitionEndEvent(),
			this.handleTransitionEnd
		);
	}

	clearTransitionEndHandler() {
		if (this.handleTransitionEnd) {
			this.dialogRef.current.removeEventListener(
				transitionEndEvent(),
				this.handleTransitionEnd
			);
			this.handleTransitionEnd = null;
		}
	}

	addBodyClass() {
		document.body.classList.add('modal-open');
	}

	removeBodyClass() {
		document.body.classList.remove('modal-open');
	}

	componentWillUnmount() {
		this.removeBodyClass();
		this.clearClassTimeoutId();
		this.clearTransitionEndHandler();
	}

	render() {
		const {className, centered, size, children, effect, Dialog, Content, Backdrop} = this.props;
		const {displayed, hasOpenClass, elevation} = this.state;

		const modalClasses = [className];
		if (hasOpenClass) modalClasses.push('open');
		if (effect) modalClasses.push(effect);
		if (centered) modalClasses.push('centered');
		if (size) modalClasses.push(size);

		const modal = <div
			className={modalClasses.join(' ')}
			tabIndex="-1"
			role="dialog"
			style={{
				display: displayed ? 'block' : 'none',
				zIndex: theme('zIndex', 1072)(this.props) + elevation
			}}
			onClick={this.handleModalClick}
			onKeyUp={this.handleKeyUp}
			ref={this.modalRef}
		>
			<Dialog
				role="document"
				innerRef={this.dialogRef}
				onClick={this.handleDialogClick}
			>
				<Content>{children}</Content>
			</Dialog>
		</div>;

		const backdropClasses = [];
		if (hasOpenClass) backdropClasses.push('open');
		if (effect) backdropClasses.push(effect);

		const backdrop = <Backdrop
			className={backdropClasses.join(' ')}
			style={{
				display: displayed ? 'block' : 'none',
				zIndex: theme('zIndex', 1072)(this.props) + elevation - 1
			}}
		/>;

		return <React.Fragment>
			{createUniversalPortal(modal, '#modal-root')}
			{createUniversalPortal(backdrop, '#modal-root')}
		</React.Fragment>
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.displayed && !prevState.displayed) {
			this.addBodyClass();
		} else if (!this.state.displayed && prevState.displayed) {
			this.removeBodyClass();
		}
		if (this.props.effect !== 'none' && this.state.displayed && !this.state.hasOpenClass) {
			this.clearClassTimeoutId();
			this.clearTransitionEndHandler();
			if (this.state.open) {
				this.chargeClassTimeoutId();
				if (!this.hasFocus()) {
					this.focus();
				}
			} else {
				this.chargeTransitionEndHandler();
			}
		}
	}

	focus() {
		this.modalRef.current.focus();
	}

	hasFocus() {
		var el = document.activeElement;
		var modalEl = this.modalRef.current;
		while (el) {
			if (el == modalEl) {
				return true;
			}
			el = el.parentElement;
		}
		return false;
	}

	handleModalClick = () => {
		if (this.clickFromDialog) {
			this.clickFromDialog = false;
		} else {
			this.props.onClose();
		}
	};

	handleDialogClick = () => {
		this.clickFromDialog = true;
	};

	handleKeyUp = (e) => {
		if ((e.key === 'Escape' || e.keyCode === 27) && this.props.closeOnEsc) {
			this.props.onClose();
		}
	};
}

const ConsumerModal = (props) => (
	<Context.Consumer>
		{provider => <Modal {...props} provider={provider} />}
	</Context.Consumer>
);

export default styled(ConsumerModal)`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: ${theme('zIndex', 1072)};
	overflow: hidden;
	outline: 0;

	&, *, ::before, ::after {
		box-sizing: border-box;
	}

	&.open {
		overflow-x: hidden;
		overflow-y: auto;
	}

	&.fade {
		opacity: 0;
		transition: opacity .15s linear;

		&.open {
			opacity: 1;
		}
	}

	&.fade ${Dialog} {
        transition: transform .3s ease-out;
        transform: translate(0,-25%);
    }

	&.open ${Dialog} {
		transform: translate(0,0);
	}

	&.centered ${Dialog} {
		display: flex;
		align-items: center;
		min-height: calc(100% - (1.75rem * 2));

		&::before {
			content: '';
			display: block;
			height: calc(100vh - (1.75rem * 2));
		}
	}

	&.small ${Dialog} {
		@media (min-width: 576px) {
			max-width: ${theme('smallWidth', '300px')};
		}
	}

	&.large ${Dialog} {
		@media (min-width: 576px) {
			max-width: ${theme('largeWidth', '800px')};
		}
	}
`;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {createUniversalPortal} from "react-portal-universal";
import {Dialog, Content, Backdrop} from './elements';
import {transitionEvent} from './helpers';

class Modal extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		open: PropTypes.bool,
		effect: PropTypes.string,
		// Callbacks
		onClose: PropTypes.func,
		// Components
		Dialog: PropTypes.func,
		Content: PropTypes.func,
		Backdrop: PropTypes.func
	};

	static defaultProps = {
		open: false,
		effect: 'fade',
		onClose: () => {},
		Dialog, Content, Backdrop
	};

	constructor(props) {
		super(props);
		this.state = {
			displayed: props.open,
			hasOpenClass: props.open
		};
		this.dialogRef = React.createRef();
	}

	// DEPRECATED
	componentWillReceiveProps(props) {
		if (props.open !== this.props.open) {
			if (props.open) {
				// Don't wait the previous animation to end, delete the handler
				if (this.handleTransitionEnd) {
					this.dialogRef.current.removeEventListener(
						'transitionend', this.handleTransitionEnd);
					this.handleTransitionEnd = null;
				}
				// Set display: block...
				this.setState({
					displayed: true,
					hasOpenClass: false
				});
				// ... and in the next JS frame add the class
				this.classTimeoutId = setTimeout(() => {
					this.setState({
						displayed: true,
						hasOpenClass: true
					});
					this.classTimeoutId = null;
				}, 0);
			} else {
				// Don't wait the previous animation to end, delete the handler
				if (this.classTimeoutId) {
					clearTimeout(this.classTimeoutId);
					this.classTimeoutId = null;
				}
				// Remove the class...
				this.setState({
					displayed: true,
					hasOpenClass: false
				});
				// ... and set display: none after transition ends
				this.handleTransitionEnd = () => {
					this.setState({
						displayed: false,
						hasOpenClass: false
					});
					this.dialogRef.current.removeEventListener(
						'transitionend', this.handleTransitionEnd);
					this.handleTransitionEnd = null;
				};
				this.dialogRef.current.addEventListener(
					'transitionend', this.handleTransitionEnd);
			}
		}
	}

	/*componentDidMount() {
		transitionEvent
	}*/

	componentWillUnmount() {
		// Cleanup the timeout handler
		if (this.classTimeoutId) {
			clearTimeout(this.classTimeoutId);
			this.classTimeoutId = null;
		}
		// Cleanup the transitionend handler
		if (this.handleTransitionEnd) {
			this.dialogRef.current.removeEventListener(
				'transitionend', this.handleTransitionEnd);
			this.handleTransitionEnd = null;
		}
	}

	render() {
		const {className, children, effect, Dialog, Content, Backdrop} = this.props;
		const {displayed, hasOpenClass} = this.state;

		const modalClasses = [className];
		if (hasOpenClass) modalClasses.push('open');
		if (effect) modalClasses.push(effect);

		const modal = <div
			className={modalClasses.join(' ')}
			tabIndex="-1"
			role="dialog"
			style={{display: displayed ? 'block' : 'none'}}
			onClick={this.handleModalClick}
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
			style={{display: displayed ? 'block' : 'none'}}
		/>;

		return <React.Fragment>
			{createUniversalPortal(modal, '#modal-root')}
			{createUniversalPortal(backdrop, '#modal-root')}
		</React.Fragment>
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
}

export default styled(Modal)`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1050;
	display: none;
	overflow: hidden;
	outline: 0;
	z-index: 1072;

	&, *, ::before, ::after {
		box-sizing: border-box;
	}

	&.open {
		overflow-x: hidden;
		overflow-y: auto;
	}

	&.fade {
		transition: opacity .15s linear;
	}

	&.fade ${Dialog} {
        transition: transform .3s ease-out;
        transform: translate(0,-25%);
    }

	&.open ${Dialog} {
		transform: translate(0,0);
	}
`;

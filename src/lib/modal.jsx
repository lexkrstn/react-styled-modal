import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {createUniversalPortal} from "react-portal-universal";
import {Dialog, Content, Backdrop} from './elements';

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

	render() {
		const {
			className, children, open, effect,
			Dialog, Content, Backdrop
		} = this.props;

		const modalClasses = [className];
		if (open) modalClasses.push('open');
		if (effect) modalClasses.push(effect);

		const modal = <div
			className={ modalClasses.join(' ') }
			tabIndex="-1"
			role="dialog"
			style={{ display: open ? 'block' : 'none' }}
			onClick={ this.handleModalClick }
		>
			<Dialog role="document" onClick={ this.handleDialogClick }>
				<Content>{children}</Content>
			</Dialog>
		</div>;

		const backdropClasses = [];
		if (open) backdropClasses.push('open');
		if (effect) backdropClasses.push(effect);

		const backdrop = <Backdrop
			className={ backdropClasses.join(' ') }
			style={{ display: open ? 'block' : 'none' }}
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

	handleCloseButtonClick = () => {
		this.props.onClose();
	};
}

export default styled(Modal)`
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

	transition: opacity .15s linear;

	&, *, ::before, ::after {
		box-sizing: border-box;
	}

	&.open {
		overflow-x: hidden;
		overflow-y: auto;
	}

	&.open ${Dialog} {
		-webkit-transform: translate(0,0);
		transform: translate(0,0);
	}
`;

import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal, ThemeProvider, css} from 'styled-components';
import Modal, {ModalProvider} from '../lib';

injectGlobal`
	html, body {
		padding: 0;
		margin: 0;
	}
	html {
		height: 100%;
		font-size: 16px;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
	}
	body {
		color: #333;
		min-height: 100%;
		height: 100%;
	}

	#app-root {
		height: 100%;
		padding: 0 15px;
		display: flex;
		align-items: center;
	}
`;

const redModalTheme = {
	modal: {
		borderRadius: '0',
		textColor: '#fff',
		headerColor: '#d33724',
		headerBorderBottom: '1px solid #c23321',
		bodyColor: '#dd4b39',
		footerColor: '#d33724',
		footerBorderTop: '1px solid #c23321',
		closeButtonOpacity: .3,
		closeButtonHoverOpacity: .7
	}
};

const hollowButtonTheme = {
	button: {
		borderColor: '#fff',
		borderColorHover: 'rgba(255, 255, 255, .7)',
		textColor: '#fff',
		textColorHover: 'rgba(255, 255, 255, .7)',
		color: 'transparent',
		colorHover: 'transparent',
	}
};

class App extends React.PureComponent {
	state = {
		isBareOpen: false,
		isSimpleOpen: false,
		isScrollingOpen: false,
		isCenteredOpen: false,
		isSmallOpen: false,
		isThemedOpen: false,
		isStackedOpen: false,
		isPetOpen: false
	};

	render() {
		const {
			isSimpleOpen, isScrollingOpen, isCenteredOpen, isSmallOpen,
			isBareOpen, isThemedOpen, isStackedOpen, isPetOpen
		} = this.state;
		return <Container>
			<Button expanded onClick={() => this.setState({isSimpleOpen: true})}>Simple modal</Button>
			<Button expanded onClick={() => this.setState({isBareOpen: true})}>Bare modal</Button>
			<Button expanded onClick={() => this.setState({isScrollingOpen: true})}>Scrolling modal</Button>
			<Button expanded onClick={() => this.setState({isCenteredOpen: true})}>Centered modal</Button>
			<Button expanded onClick={() => this.setState({isSmallOpen: true})}>Small modal (no effect)</Button>
			<Button expanded onClick={() => this.setState({isThemedOpen: true})}>Themed modal</Button>
			<Button expanded onClick={() => this.setState({isStackedOpen: true})}>Stacked modals</Button>

			<Modal open={isSimpleOpen} onClose={this.handleClose}>
				<Modal.Header>
					<Modal.Title>Simple modal</Modal.Title>
					<Modal.CloseButton onClick={this.handleClose} />
				</Modal.Header>
				<Modal.Body>
					Modal content...
				</Modal.Body>
				<Modal.Footer>
					<Button>Button</Button>
				</Modal.Footer>
			</Modal>

			<Modal open={isBareOpen} onClose={this.handleClose}>
				Modal content...
			</Modal>

			<Modal open={isScrollingOpen} onClose={this.handleClose}>
				<Modal.Header>
					<Modal.Title>Scrolling modal</Modal.Title>
					<Modal.CloseButton onClick={this.handleClose} />
				</Modal.Header>
				<Modal.Body>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
				</Modal.Body>
				<Modal.Footer>
					<Button>Button</Button>
				</Modal.Footer>
			</Modal>

			<Modal open={isCenteredOpen} onClose={this.handleClose} centered={true}>
				<Modal.Header>
					<Modal.Title>Centered modal</Modal.Title>
					<Modal.CloseButton onClick={this.handleClose} />
				</Modal.Header>
				<Modal.Body>
					&hellip;
				</Modal.Body>
			</Modal>

			<Modal open={isSmallOpen} onClose={this.handleClose} size="small" effect="none">
				<Modal.Header>
					<Modal.Title>Small modal with no effect</Modal.Title>
					<Modal.CloseButton onClick={this.handleClose} />
				</Modal.Header>
				<Modal.Body>
					&hellip;
				</Modal.Body>
			</Modal>

			<ThemeProvider theme={redModalTheme}>
				<ThemeProvider theme={hollowButtonTheme}>
					<Modal open={isThemedOpen} onClose={this.handleClose}>
						<Modal.Header>
							<Modal.Title>Themed modal</Modal.Title>
							<Modal.CloseButton onClick={this.handleClose} />
						</Modal.Header>
						<Modal.Body>
							Modal content...
						</Modal.Body>
						<Modal.Footer>
							<Button>Button</Button>
						</Modal.Footer>
					</Modal>
				</ThemeProvider>
			</ThemeProvider>

			<ModalProvider>
				<Modal open={isStackedOpen} onClose={this.handleClose}>
					<Modal.Header>
						<Modal.Title>Stacked modal</Modal.Title>
						<Modal.CloseButton onClick={this.handleClose} />
					</Modal.Header>
					<Modal.Body>
						Modal content...
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.openPet}>Open stacked!</Button>
					</Modal.Footer>
				</Modal>

				<Modal centered open={isPetOpen} onClose={this.closePet}>
					<Modal.Header>
						<Modal.Title>Pet modal</Modal.Title>
						<Modal.CloseButton onClick={this.closePet} />
					</Modal.Header>
					<Modal.Body>
						Modal content...
					</Modal.Body>
					<Modal.Footer>
						<Button>Button</Button>
					</Modal.Footer>
				</Modal>
			</ModalProvider>
		</Container>;
	}

	handleClose = () => {
		this.setState({
			isSimpleOpen: false,
			isBareOpen: false,
			isScrollingOpen: false,
			isCenteredOpen: false,
			isSmallOpen: false,
			isThemedOpen: false,
			isStackedOpen: false
		});
	};

	openPet = () => this.setState({isPetOpen: true});
	closePet = () => this.setState({isPetOpen: false});
}

const Container = styled.div`
	box-sizing: border-box;
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	max-width: 260px;
	margin: 0 auto;
`;

export const btnTheme = (propName, defaultValue) => (props) => {
	const prop = props.theme && props.theme.button && props.theme.button[propName];
	return prop !== undefined ? prop : defaultValue;
};

const Button = styled.button.attrs({type: 'button'})`
	box-sizing: border-box;
	background: ${btnTheme('color', '#3b71aa')};
	margin: 0 0 15px;
	line-height: 1.3;
	padding: 7px 16px;
	font-size: 16px;
	color: ${btnTheme('textColor', '#fff')};
	border: 1px solid ${btnTheme('borderColor', '#3b6592')};
	border-radius: 2px;
	cursor: pointer;
	outline: none;

	&:hover {
		background: ${btnTheme('colorHover', '#356190')};
		color: ${btnTheme('textColorHover', '#fff')};
		border-color: ${btnTheme('borderColorHover', '#3b6592')};
	}

	&:last-child {
		margin-bottom: 0;
	}

	${(props) =>  props.expanded && css`
		display: block;
		width: 100%;
	`}
`;

ReactDOM.render(<App />, document.getElementById('app-root'));

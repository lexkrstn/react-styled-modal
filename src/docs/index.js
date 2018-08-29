import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';
import Modal from '../lib';

injectGlobal`
	html, body {
		padding: 0;
		margin: 0;
	}
	html {
		font-size: 16px;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
	}
	body {
		color: #333;
	}
`;

class App extends React.Component {
	state = {
		isSimpleOpen: false,
		isScrollingOpen: false,
		isCenteredOpen: false,
		isSmallOpen: false
	};

	render() {
		const {isSimpleOpen, isScrollingOpen, isCenteredOpen, isSmallOpen} = this.state;
		return <div>
			<button onClick={() => this.setState({isSimpleOpen: true})}>Open simple modal</button>
			<button onClick={() => this.setState({isScrollingOpen: true})}>Open scrolling modal</button>
			<button onClick={() => this.setState({isCenteredOpen: true})}>Open centered modal</button>
			<button onClick={() => this.setState({isSmallOpen: true})}>Open small modal</button>
			
			<Modal open={isSimpleOpen} onClose={this.handleClose}>
				<Modal.Header>
					<Modal.Title>Simple modal</Modal.Title>
					<Modal.CloseButton onClick={this.handleClose} />
				</Modal.Header>
				<Modal.Body>
					Modal content...
				</Modal.Body>
				<Modal.Footer>
					<button>Button</button>
				</Modal.Footer>
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
					<button>Button</button>
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

			<Modal open={isSmallOpen} onClose={this.handleClose} size="small">
				<Modal.Header>
					<Modal.Title>Small modal</Modal.Title>
					<Modal.CloseButton onClick={this.handleClose} />
				</Modal.Header>
				<Modal.Body>
					&hellip;
				</Modal.Body>
			</Modal>
		</div>;
	}

	handleClose = () => {
		this.setState({
			isSimpleOpen: false,
			isScrollingOpen: false,
			isCenteredOpen: false,
			isSmallOpen: false
		});
	};
}

ReactDOM.render(<App />, document.getElementById('app-root'));

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
		isOpen: false
	};

	render() {
		const {isOpen} = this.state;
		return <div>
			<h1>My UI</h1>
			<button onClick={() => this.setState({isOpen: true})}>Button</button>
			<Modal open={isOpen} onClose={this.handleClose} title="Title">
				<Modal.Header>
					<Modal.Title>Title</Modal.Title>
					<Modal.CloseButton  onClick={this.handleClose} />
				</Modal.Header>
				<Modal.Body>
					Modal content...
				</Modal.Body>
				<Modal.Footer>
					<button type="submit">Save</button>
				</Modal.Footer>
			</Modal>
		</div>;
	}

	handleClose = () => {
		this.setState({isOpen: false});
	};
}

ReactDOM.render(<App />, document.getElementById('app-root'));

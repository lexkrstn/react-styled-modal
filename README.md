# Customizable Modals (React + Styled Components)

Fully customizable `React` modal component written with support of `styled-components`.

See [DEMO](https://lexkrstn.github.io/react-modal/)

## Advantages:
- Customizable via styled-components themes and/or subcomponent style overriding
  (see examples below).
- Does **NOT depend** on any external library like jQuery, Bootstrap etc.
- Supports **SSR** via [react-portal-universal](https://github.com/MichalZalecki/react-portal-universal).

## Example of usage:

```javascript
import Modal from 'react-styled-modal';
...
<Modal open={this.state.isOpen} onClose={() => this.setState({isOpen: false})}>
    <Modal.Header>
        <Modal.Title>Simple modal</Modal.Title>
        <Modal.CloseButton onClick={() => this.setState({isOpen: false})} />
    </Modal.Header>
    <Modal.Body>
        Modal content...
    </Modal.Body>
    <Modal.Footer>
        <button>Button</button>
    </Modal.Footer>
</Modal>
```

## Installation

```bash
npm i -S react-styled-modal
```

## Prerequisites

The modals are rendered through portals and require there must be an empty
`#modal-root` element somewhere in your DOM. For the most cases you may put it
just after your application's root element inside the body tag.

## Options

**The Modal component props**
- `open` (*required*) Toggles a modal's open state.
- `effect` (*default = "fade"*) Effect name.
- `centered` (*default = false*) Vertically centers the modal.
- `size` (*default = "medium", "small|medium|large"*) Predefined size name. Sets maximum width.
- `onClose` The callback is executed when user clicks on a backdrop.
- `Dialog`, `Content`, `Backdrop` hold `Modal.Dialog`, `Modal.Content` and
  `Modal.Backdrop` components by defaults. You may pass re-styled
  components extended from the basic ones to customize their representation.
  Try to avoid using this method whenever it's possible.

## TODO:
- Using without effect
- Customizing via themes
- Stacking
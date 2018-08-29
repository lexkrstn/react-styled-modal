# Customizable Modals (React + Styled Components)

Fully customizable `React` modal component written with support of `styled-components`.
See [DEMO](https://lexkrstn.github.io/react-modal/)

## Advantages:
- Customizable via styled-components themes and/or subcomponent style overriding
  (see examples below).
- Does **NOT depend** on any external library like jQuery, Bootstrap etc.
- Supports SSR via [react-portal-universal](https://github.com/MichalZalecki/react-portal-universal).

## Example of usage:

```javascript
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

## Options

- `open` (required) Toggles a modal's open state.
- `effect` (default = "fade") Effect name.
- `centered` (default = false) Vertically centers the modal.
- `size` (default = "medium", "small|medium|large") Predefined size name. Sets maximum width.
- `onClose` The callback is executed when user clicks on a backdrop.
- `Dialog`, `Content`, `Backdrop` hold `Modal.Dialog`, `Modal.Content` and
  `Modal.Backdrop` styled React components by defaults. You may pass re-styled
  components extended from the basic ones to customize their representation.
  Try to avoid using this method whenever it's possible.

## TODO:
- Using without effect
- Customizing via themes
- Stacking
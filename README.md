# Customizable Modals (React + Styled Components)

Fully customizable `React` modal component written with support of `styled-components`.

See [DEMO](https://lexkrstn.github.io/react-styled-modal/)

## Advantages:
- Customizable via styled-components themes and/or subcomponent style overriding
  (see examples below).
- Does **NOT depend** on any external library like jQuery, Bootstrap etc.
- Supports **SSR** via [react-portal-universal](https://github.com/MichalZalecki/react-portal-universal).
- Responsive.

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
`#modal-root` element somewhere in your DOM. For most cases you may put it
just after your application's root element inside the body tag.

## Options

**The Modal component props:**
- `open` (*required*) Toggles a modal's open state.
- `effect` (*default = "fade"*) Effect name.
- `centered` (*default = false*) Vertically centers the modal.
- `size` (*default = "medium", "small|medium|large"*) Predefined size name. Sets maximum width.
- `onClose` The callback is executed when user clicks on a backdrop.
- `Dialog`, `Content`, `Backdrop` hold `Modal.Dialog`, `Modal.Content` and
  `Modal.Backdrop` components by defaults. You may pass re-styled
  components extended from the basic ones to customize their representation.
  Try to avoid using this method whenever it's possible.

## Theming

The preferrable method to theme your modal is to do it via passing the `prop` to
the closest `ThemeProvider` component. This way you may define style variations
of your modals. But if you need more flexibility you're also can extend
base styles of all the (sub)components and pass them to the approiate modal's
props (see the section above).

The modal component (and it's subcomponents) may use the following theme
options under the `props.theme.modal.*` (notice that last `modal` subdomain):

```javascript
modal: {
    zIndex: 1072,
    smallMaxWidth: '300px',
    mediumWidth: '500px',
    largeWidth: '800px',

    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,.2)',
    borderWidth: '1px',
    borderRadius: '.3rem',
    boxShadow: 'none',
    outline: 0,
    bodyPadding: '1rem',

    titleLineHeight: 1.5,
    titleFontSize: '1.25rem',
    titleFontFamily: 'inherit',
    titleFontWeight: 500,
    titleTextColor: 'inherit',

    closeButtonFontSize: '1.5rem',
    closeButtonFontWeight: 700,
    closeButtonLineHeight: 1.25,
    closeButtonTextColor: '#000',
    closeButtonTextShadow: '0 1px 0 #fff',
    closeButtonOpacity: .5,
    closeButtonBackground: 'transparent',
    closeButtonBorder: 0,
    closeButtonPadding: '1rem',

    bodyColor: 'transparent',

    headerColor: 'transparent',
    headerPadding: '1rem',
    headerBorderBottom: '1px solid #e9ecef',

    footerColor: 'transparent',
    footerPadding: '1rem',
    footerBorderTop: '1px solid #e9ecef',

    backdropZIndex: 1040,
    backdropColor: '#000',
    backdropOpacity: .5
}
```

## Stacking

To enable stacking you have to wrap each group of the modals using the same
stack into a `<ModalProvider></ModalProvider>` component (or just use single
global one). For example:

```javascript
import Modal, {ModalProvider} from 'react-styled-modal';
...
<ModalProvider>
    <Modal>...</Modal>
    ...
    <SomeComponent>
        <Modal>...</Modal>
    </SomeComponent>
</ModalProvider>
```

Unless `<Modal/>` components are not nested in any `<ModalProvider/>` you can't
keep them open simultanuosly, but it's ok having modals unwrapped if they don't
use that feature.

## TODO:
- Investigate and minimize rerenderings.
- More effects (maybe including a "no effect" effect =)).

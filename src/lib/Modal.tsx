import React, { KeyboardEvent, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { transitionEndEvent, theme } from './helpers';
import { ModalProviderContextValue } from './ModalProvider';
import * as S from './styles';

const EFFECTS = ['none', 'fade'] as const;
const SIZES = ['small', 'medium', 'large'] as const;

export interface ModalProps {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  effect?: typeof EFFECTS[number],
  centered?: boolean;
  size?: typeof SIZES[number];
  closeOnEsc?: boolean;
  onClose?: () => void;
  Dialog?: typeof S.Dialog;
  Content?: typeof S.Content;
  Backdrop?: typeof S.Backdrop;
  provider?: ModalProviderContextValue;
}

interface ModalState {
  open: boolean;
  displayed: boolean;
  hasOpenClass: boolean;
  id: number;
  elevation: number;
}

export default class Modal extends React.Component<ModalProps, ModalState> {
  static propTypes: { [K in keyof Omit<Required<ModalProps>, 'children'>]: any } = {
    className: PropTypes.string,
    open: PropTypes.bool,
    effect: PropTypes.oneOf(EFFECTS),
    centered: PropTypes.bool,
    size: PropTypes.oneOf(SIZES),
    closeOnEsc: PropTypes.bool,
    // Callbacks
    onClose: PropTypes.func,
    // Components
    Dialog: PropTypes.elementType,
    Content: PropTypes.elementType,
    Backdrop: PropTypes.elementType,
    // The provider's (or its stub) interface
    provider: PropTypes.object.isRequired,
  };

  static defaultProps: ModalProps = {
    size: 'medium',
    open: false,
    effect: 'fade',
    centered: false,
    closeOnEsc: true,
    Dialog: S.Dialog,
    Content: S.Content,
    Backdrop: S.Backdrop,
  };

  modalRef = React.createRef<HTMLDivElement>();
  dialogRef = React.createRef<HTMLDivElement>();
  classTimeoutId: NodeJS.Timeout = null;
  clickFromDialog = false;

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      open: props.open,
      displayed: props.open,
      hasOpenClass: props.open,
      id: props.provider.generateId(),
      elevation: 0,
    };
  }

  static getDerivedStateFromProps(props: ModalProps, state: ModalState): Partial<ModalState> {
    const newState: Partial<ModalState> = props.open === state.open ? null : {
      open: props.open,
      displayed: props.effect === 'none' ? props.open : true,
      hasOpenClass: props.effect === 'none' ? props.open : false
    };
    if (props.open && !state.open) {
      newState.elevation = props.provider.popup(state.id);
    } else if (!props.open && state.open) {
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

  handleTransitionEnd = () => {
    this.setState({
      displayed: false,
      hasOpenClass: false
    });
    this.clearTransitionEndHandler();
  };

  chargeTransitionEndHandler() {
    this.dialogRef.current.addEventListener(transitionEndEvent(), this.handleTransitionEnd);
  }

  clearTransitionEndHandler() {
    this.dialogRef.current.removeEventListener(transitionEndEvent(), this.handleTransitionEnd);
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
    // Don't render on server-side
    if (typeof document === 'undefined') return null;

    const { className, centered, size, children, effect, Dialog, Content, Backdrop } = this.props;
    const { displayed, hasOpenClass, elevation } = this.state;

    const modalClasses = [className];
    if (hasOpenClass) modalClasses.push('open');
    if (effect) modalClasses.push(effect);
    if (centered) modalClasses.push('centered');
    if (size) modalClasses.push(size);

    const modal = (
      <S.Modal
        className={modalClasses.join(' ')}
        style={{
          display: displayed ? 'block' : 'none',
          zIndex: theme('zIndex', 1072)(this.props) + elevation
        }}
        onClick={this.handleModalClick}
        onKeyUp={this.handleKeyUp}
        ref={this.modalRef}
      >
        <S.GlobalStyle />
        <Dialog
          ref={this.dialogRef}
          onClick={this.handleDialogClick}
        >
          <Content>{children}</Content>
        </Dialog>
      </S.Modal>
    );

    const backdropClasses = [];
    if (hasOpenClass) backdropClasses.push('open');
    if (effect) backdropClasses.push(effect);

    const backdrop = (
      <Backdrop
        className={backdropClasses.join(' ')}
        style={{
          display: displayed ? 'block' : 'none',
          zIndex: theme('zIndex', 1072)(this.props) + elevation - 1
        }}
      />
    );

    return (
      <>
        {ReactDOM.createPortal(modal, document.body)}
        {ReactDOM.createPortal(backdrop, document.body)}
      </>
    );
  }

  componentDidUpdate(prevProps: ModalProps, prevState: ModalState): void {
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
    let el = document.activeElement;
    const modalEl = this.modalRef.current;
    while (el) {
      if (el === modalEl) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  handleModalClick = () => {
    if (this.clickFromDialog) {
      this.clickFromDialog = false;
    } else if (this.props.onClose) {
      this.props.onClose();
    }
  };

  handleDialogClick = () => {
    this.clickFromDialog = true;
  };

  handleKeyUp = (e: KeyboardEvent) => {
    if ((e.key === 'Escape' || e.keyCode === 27) && this.props.closeOnEsc && this.props.onClose) {
      this.props.onClose();
    }
  };
}

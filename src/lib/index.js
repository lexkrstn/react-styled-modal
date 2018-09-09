import ModalProvider from './provider';
import Modal from './modal';
import {Header, Body, Footer, Title, CloseButton, Backdrop, Content, Dialog} from './elements';

Modal.Provider = ModalProvider;
Modal.Dialog = Dialog;
Modal.Content = Content;
Modal.Backdrop = Backdrop;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Title = Title;
Modal.CloseButton = CloseButton;

export {Header, Body, Footer, Title, CloseButton, Backdrop, Content, Dialog, ModalProvider};
export default Modal;

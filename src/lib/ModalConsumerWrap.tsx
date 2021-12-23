import React, { Component, ReactElement } from 'react';
import CloseButton from './CloseButton';
import ModalProvider, { ModalContext } from './ModalProvider';
import Modal, { ModalProps } from './Modal';
import * as S from './styles';

export default class ModalConsumerWrap extends Component<ModalProps> {
  static readonly Provider = ModalProvider;
  static readonly Dialog = S.Dialog;
  static readonly Content = S.Content;
  static readonly Backdrop = S.Backdrop;
  static readonly Header = S.Header;
  static readonly Body = S.Body;
  static readonly Footer = S.Footer;
  static readonly Title = S.Title;
  static readonly CloseButton = CloseButton;

  render() {
    return (
      <ModalContext.Consumer>
        {provider => <Modal {...this.props} provider={provider} />}
      </ModalContext.Consumer>
    );
  }
}

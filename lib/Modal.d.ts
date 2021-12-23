/// <reference types="node" />
import React, { KeyboardEvent, ReactNode } from 'react';
import { ModalProviderContextValue } from './ModalProvider';
import * as S from './styles';
declare const EFFECTS: readonly ["none", "fade"];
declare const SIZES: readonly ["small", "medium", "large"];
export interface ModalProps {
    children?: ReactNode;
    className?: string;
    open?: boolean;
    effect?: typeof EFFECTS[number];
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
    static propTypes: {
        [K in keyof Omit<Required<ModalProps>, 'children'>]: any;
    };
    static defaultProps: ModalProps;
    modalRef: React.RefObject<HTMLDivElement>;
    dialogRef: React.RefObject<HTMLDivElement>;
    classTimeoutId: NodeJS.Timeout;
    clickFromDialog: boolean;
    constructor(props: ModalProps);
    static getDerivedStateFromProps(props: ModalProps, state: ModalState): Partial<ModalState>;
    chargeClassTimeoutId(): void;
    clearClassTimeoutId(): void;
    handleTransitionEnd: () => void;
    chargeTransitionEndHandler(): void;
    clearTransitionEndHandler(): void;
    addBodyClass(): void;
    removeBodyClass(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    componentDidUpdate(prevProps: ModalProps, prevState: ModalState): void;
    focus(): void;
    hasFocus(): boolean;
    handleModalClick: () => void;
    handleDialogClick: () => void;
    handleKeyUp: (e: KeyboardEvent) => void;
}
export {};
//# sourceMappingURL=Modal.d.ts.map
import { Component } from 'react';
import CloseButton from './CloseButton';
import ModalProvider from './ModalProvider';
import { ModalProps } from './Modal';
import * as S from './styles';
export default class ModalConsumerWrap extends Component<ModalProps> {
    static readonly Provider: typeof ModalProvider;
    static readonly Dialog: import("styled-components").StyledComponent<"div", any, {
        role: "document";
    }, "role">;
    static readonly Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    static readonly Backdrop: import("styled-components").StyledComponent<"div", any, {}, never>;
    static readonly Header: import("styled-components").StyledComponent<"div", any, {}, never>;
    static readonly Body: import("styled-components").StyledComponent<"div", any, {}, never>;
    static readonly Footer: import("styled-components").StyledComponent<"div", any, S.FooterProps, never>;
    static readonly Title: import("styled-components").StyledComponent<"h5", any, {}, never>;
    static readonly CloseButton: typeof CloseButton;
    render(): JSX.Element;
}
//# sourceMappingURL=ModalConsumerWrap.d.ts.map
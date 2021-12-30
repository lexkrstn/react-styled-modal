export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare const Dialog: import("styled-components").StyledComponent<"div", any, {
    role: "document";
}, "role">;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"h5", any, {}, never>;
export declare const CloseButton: import("styled-components").StyledComponent<"button", any, {
    type: "button";
    'aria-label': "Close";
    'data-dismiss': string;
}, "type" | "aria-label" | "data-dismiss">;
export declare const Header: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FOOTER_ALIGN: readonly ["center", "left", "right", "spread"];
export declare type FooterAlign = typeof FOOTER_ALIGN[number];
export declare type FooterProps = {
    [K in FooterAlign]?: boolean;
};
export declare const Footer: import("styled-components").StyledComponent<"div", any, FooterProps, never>;
export declare const Backdrop: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Modal: import("styled-components").StyledComponent<"div", any, {
    tabIndex: -1;
    role: "dialog";
}, "tabIndex" | "role">;
//# sourceMappingURL=styles.d.ts.map
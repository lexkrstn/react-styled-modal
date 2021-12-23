import React from 'react';
interface StackItem {
    id: number;
    elevation: number;
}
export interface ModalProviderContextValue {
    generateId: () => number;
    popup: (id: number) => number;
    hide: (id: number) => void;
}
export declare const ModalContext: React.Context<ModalProviderContextValue>;
/**
 * The root component enabling modal stacking.
 */
export default class ModalProvider extends React.PureComponent implements ModalProviderContextValue {
    /**
     * ATTENTION! We use the component's state to store some data so that it could
     * be rehydrated when using SSR. It's not a real state of the react component
     * and we do not call setState() to set its properties. The sole purpose of
     * it to make the data rehydrateable.
     */
    state: {
        lastModalId: number;
        maxElevation: number;
        stack: StackItem[];
    };
    /**
     * The interface to pass it to the Provider as it's value.
     */
    iface: ModalProviderContextValue;
    generateId(): number;
    popup(id: number): number;
    hide(id: number): void;
    findMaxElevation(): number;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ModalProvider.d.ts.map
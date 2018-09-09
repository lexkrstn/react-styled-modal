import React from 'react';

export const Context = React.createContext({
    // Stub
    generateId: () => -1,
    popup: () => 0,
    hide: () => 0
});

/**
 * The root component enabling modal stacking.
 */
export default class ModalProvider extends React.PureComponent {
    // We you a component's state to store elevation data so that it could be
    // rehydrated when using SSR. It's not a real state of the react component
    // and we do not call setState() to set its properties. The sole purpose of
    // it to make the data rehydrateable.
    state = {
        lastModalId: 0,
        maxElevation: 0,
        stack: []
    };

    constructor(props) {
        super(props);

        this.iface = {
            generateId: this.generateId.bind(this),
            popup: this.popup.bind(this),
            hide: this.hide.bind(this)
        };
    }

    generateId() {
        return ++this.state.lastModalId;
    }

    popup(id) {
        this.state.maxElevation += 2;
        this.state.stack.push({id, elevation: this.state.maxElevation});
        return this.state.maxElevation;
    }

    hide(modalId) {
        var index = this.state.stack.findIndex(({id}) => id === modalId);
        if (index >= 0) {
            this.state.stack.splice(index, 1);
            this.state.maxElevation = this.findMaxElevation();
        }
    }

    findMaxElevation() {
        return this.state.stack.reduce(
            (accum, current) =>  Math.max(accum, current.elevation)
        , 0);
    }

    render() {
        return <Context.Provider value={this.iface}>
            {this.props.children}
        </Context.Provider>;
    }
}

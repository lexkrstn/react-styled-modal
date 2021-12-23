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

export const ModalContext = React.createContext<ModalProviderContextValue>({
  // Stub
  generateId: () => -1,
  popup: () => 0,
  hide: () => undefined,
});

/**
 * The root component enabling modal stacking.
 */
export default class ModalProvider extends React.PureComponent
  implements ModalProviderContextValue {
  /**
   * ATTENTION! We use the component's state to store some data so that it could
   * be rehydrated when using SSR. It's not a real state of the react component
   * and we do not call setState() to set its properties. The sole purpose of
   * it to make the data rehydrateable.
   */
  state = {
    lastModalId: 0,
    maxElevation: 0,
    stack: [] as StackItem[],
  };

  /**
   * The interface to pass it to the Provider as it's value.
   */
  iface: ModalProviderContextValue = {
    generateId: this.generateId.bind(this),
    popup: this.popup.bind(this),
    hide: this.hide.bind(this),
  };

  generateId(): number {
    return ++this.state.lastModalId;
  }

  popup(id: number): number {
    this.state.maxElevation += 2;
    this.state.stack.push({id, elevation: this.state.maxElevation});
    return this.state.maxElevation;
  }

  hide(id: number): void {
    const index = this.state.stack.findIndex(s => s.id === id);
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
    return (
      <ModalContext.Provider value={this.iface}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

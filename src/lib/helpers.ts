let cachedTransitionEndEvent = '';

export function transitionEndEvent(): string {
  if (!cachedTransitionEndEvent) {
    const transitions: Record<string, string> = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };
    const el = document.createElement('div');
    for (const key of Object.keys(transitions)) {
      if (el.style[key as keyof CSSStyleDeclaration] !== undefined) {
        cachedTransitionEndEvent = transitions[key];
        break;
      }
    }
  }
  return cachedTransitionEndEvent;
}

export const theme = (propName: string, defaultValue: any) => (props: any) => {
  const prop = props.theme && props.theme.modal && props.theme.modal[propName];
  return prop !== undefined ? prop : defaultValue;
};

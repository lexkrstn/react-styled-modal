export function transitionEndEvent() {
	if (!transitionEndEvent.cached) {
		const transitions = {
			transition      : "transitionend",
			OTransition     : "oTransitionEnd",
			MozTransition   : "transitionend",
			WebkitTransition: "webkitTransitionEnd"
		};
		const el = document.createElement("div");
		const propNames = Object.getOwnPropertyNames(transitions);
		for (let i = 0; i < propNames.length; ++i) {
			if (el.style[propNames[i]] !== undefined) {
				transitionEndEvent.cached = transitions[propNames[i]];
				break;
			}
		}
	}
	return transitionEndEvent.cached;
}

export const theme = (propName, defaultValue) => (props) => {
	const prop = props.theme && props.theme.modal && props.theme.modal[propName];
	return prop !== undefined ? prop : defaultValue;
};

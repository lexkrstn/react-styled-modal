export function transitionEvent() {
	if (!transitionEvent.cached) {
		const transitions = {
			"transition"      : "transitionend",
			"OTransition"     : "oTransitionEnd",
			"MozTransition"   : "transitionend",
			"WebkitTransition": "webkitTransitionEnd"
		};
		const el = document.createElement("div");
		const propNames = Object.getOwnPropertyNames(transitions);
		for (const i = 0; i < propNames.length; ++i) {
			if (el.style[propNames[i]]) {
				transitionEvent.cached = transitions[propNames[i]];
				break;
			}
		}
	}
	return transitionEvent.cached;
}
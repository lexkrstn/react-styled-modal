(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-styled-modal"] = factory();
	else
		root["react-styled-modal"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 522:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(689));
var S = __importStar(__webpack_require__(375));
function CloseButton(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (react_1.default.createElement(S.CloseButton, __assign({}, rest), children || (react_1.default.createElement("span", { "aria-hidden": "true" }, "\u00D7"))));
}
exports["default"] = CloseButton;


/***/ }),

/***/ 917:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(689));
var react_dom_1 = __importDefault(__webpack_require__(405));
var prop_types_1 = __importDefault(__webpack_require__(580));
var helpers_1 = __webpack_require__(610);
var S = __importStar(__webpack_require__(375));
var EFFECTS = ['none', 'fade'];
var SIZES = ['small', 'medium', 'large'];
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.modalRef = react_1.default.createRef();
        _this.dialogRef = react_1.default.createRef();
        _this.classTimeoutId = null;
        _this.clickFromDialog = false;
        _this.handleTransitionEnd = function () {
            _this.setState({
                displayed: false,
                hasOpenClass: false
            });
            _this.clearTransitionEndHandler();
        };
        _this.handleModalClick = function () {
            if (_this.clickFromDialog) {
                _this.clickFromDialog = false;
            }
            else if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.handleDialogClick = function () {
            _this.clickFromDialog = true;
        };
        _this.handleKeyUp = function (e) {
            if ((e.key === 'Escape' || e.keyCode === 27) && _this.props.closeOnEsc && _this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.state = {
            open: props.open,
            displayed: props.open,
            hasOpenClass: props.open,
            id: props.provider.generateId(),
            elevation: 0,
        };
        return _this;
    }
    Modal.getDerivedStateFromProps = function (props, state) {
        var newState = props.open === state.open ? null : {
            open: props.open,
            displayed: props.effect === 'none' ? props.open : true,
            hasOpenClass: props.effect === 'none' ? props.open : false
        };
        if (props.open && !state.open) {
            newState.elevation = props.provider.popup(state.id);
        }
        else if (!props.open && state.open) {
            props.provider.hide(state.id);
        }
        return newState;
    };
    Modal.prototype.chargeClassTimeoutId = function () {
        var _this = this;
        this.classTimeoutId = setTimeout(function () {
            _this.setState({
                displayed: true,
                hasOpenClass: true
            });
            _this.classTimeoutId = null;
        }, 0);
    };
    Modal.prototype.clearClassTimeoutId = function () {
        if (this.classTimeoutId) {
            clearTimeout(this.classTimeoutId);
            this.classTimeoutId = null;
        }
    };
    Modal.prototype.chargeTransitionEndHandler = function () {
        this.dialogRef.current.addEventListener((0, helpers_1.transitionEndEvent)(), this.handleTransitionEnd);
    };
    Modal.prototype.clearTransitionEndHandler = function () {
        this.dialogRef.current.removeEventListener((0, helpers_1.transitionEndEvent)(), this.handleTransitionEnd);
    };
    Modal.prototype.addBodyClass = function () {
        document.body.classList.add('modal-open');
    };
    Modal.prototype.removeBodyClass = function () {
        document.body.classList.remove('modal-open');
    };
    Modal.prototype.componentWillUnmount = function () {
        this.removeBodyClass();
        this.clearClassTimeoutId();
        this.clearTransitionEndHandler();
    };
    Modal.prototype.render = function () {
        // Don't render on server-side
        if (typeof document === 'undefined')
            return null;
        var _a = this.props, className = _a.className, centered = _a.centered, size = _a.size, children = _a.children, effect = _a.effect, Dialog = _a.Dialog, Content = _a.Content, Backdrop = _a.Backdrop;
        var _b = this.state, displayed = _b.displayed, hasOpenClass = _b.hasOpenClass, elevation = _b.elevation;
        var modalClasses = [className];
        if (hasOpenClass)
            modalClasses.push('open');
        if (effect)
            modalClasses.push(effect);
        if (centered)
            modalClasses.push('centered');
        if (size)
            modalClasses.push(size);
        var modal = (react_1.default.createElement(S.Modal, { className: modalClasses.join(' '), style: {
                display: displayed ? 'block' : 'none',
                zIndex: (0, helpers_1.theme)('zIndex', 1072)(this.props) + elevation
            }, onClick: this.handleModalClick, onKeyUp: this.handleKeyUp, ref: this.modalRef },
            react_1.default.createElement(S.GlobalStyle, null),
            react_1.default.createElement(Dialog, { ref: this.dialogRef, onClick: this.handleDialogClick },
                react_1.default.createElement(Content, null, children))));
        var backdropClasses = [];
        if (hasOpenClass)
            backdropClasses.push('open');
        if (effect)
            backdropClasses.push(effect);
        var backdrop = (react_1.default.createElement(Backdrop, { className: backdropClasses.join(' '), style: {
                display: displayed ? 'block' : 'none',
                zIndex: (0, helpers_1.theme)('zIndex', 1072)(this.props) + elevation - 1
            } }));
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_dom_1.default.createPortal(modal, document.body),
            react_dom_1.default.createPortal(backdrop, document.body)));
    };
    Modal.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.displayed && !prevState.displayed) {
            this.addBodyClass();
        }
        else if (!this.state.displayed && prevState.displayed) {
            this.removeBodyClass();
        }
        if (this.props.effect !== 'none' && this.state.displayed && !this.state.hasOpenClass) {
            this.clearClassTimeoutId();
            this.clearTransitionEndHandler();
            if (this.state.open) {
                this.chargeClassTimeoutId();
                if (!this.hasFocus()) {
                    this.focus();
                }
            }
            else {
                this.chargeTransitionEndHandler();
            }
        }
    };
    Modal.prototype.focus = function () {
        this.modalRef.current.focus();
    };
    Modal.prototype.hasFocus = function () {
        var el = document.activeElement;
        var modalEl = this.modalRef.current;
        while (el) {
            if (el === modalEl) {
                return true;
            }
            el = el.parentElement;
        }
        return false;
    };
    Modal.propTypes = {
        className: prop_types_1.default.string,
        open: prop_types_1.default.bool,
        effect: prop_types_1.default.oneOf(EFFECTS),
        centered: prop_types_1.default.bool,
        size: prop_types_1.default.oneOf(SIZES),
        closeOnEsc: prop_types_1.default.bool,
        // Callbacks
        onClose: prop_types_1.default.func,
        // Components
        Dialog: prop_types_1.default.elementType,
        Content: prop_types_1.default.elementType,
        Backdrop: prop_types_1.default.elementType,
        // The provider's (or its stub) interface
        provider: prop_types_1.default.object.isRequired,
    };
    Modal.defaultProps = {
        size: 'medium',
        open: false,
        effect: 'fade',
        centered: false,
        closeOnEsc: true,
        Dialog: S.Dialog,
        Content: S.Content,
        Backdrop: S.Backdrop,
    };
    return Modal;
}(react_1.default.Component));
exports["default"] = Modal;


/***/ }),

/***/ 838:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(689));
var CloseButton_1 = __importDefault(__webpack_require__(522));
var ModalProvider_1 = __importStar(__webpack_require__(805));
var Modal_1 = __importDefault(__webpack_require__(917));
var S = __importStar(__webpack_require__(375));
var ModalConsumerWrap = /** @class */ (function (_super) {
    __extends(ModalConsumerWrap, _super);
    function ModalConsumerWrap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalConsumerWrap.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(ModalProvider_1.ModalContext.Consumer, null, function (provider) { return react_1.default.createElement(Modal_1.default, __assign({}, _this.props, { provider: provider })); }));
    };
    ModalConsumerWrap.Provider = ModalProvider_1.default;
    ModalConsumerWrap.Dialog = S.Dialog;
    ModalConsumerWrap.Content = S.Content;
    ModalConsumerWrap.Backdrop = S.Backdrop;
    ModalConsumerWrap.Header = S.Header;
    ModalConsumerWrap.Body = S.Body;
    ModalConsumerWrap.Footer = S.Footer;
    ModalConsumerWrap.Title = S.Title;
    ModalConsumerWrap.CloseButton = CloseButton_1.default;
    return ModalConsumerWrap;
}(react_1.Component));
exports["default"] = ModalConsumerWrap;


/***/ }),

/***/ 805:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModalContext = void 0;
var react_1 = __importDefault(__webpack_require__(689));
exports.ModalContext = react_1.default.createContext({
    // Stub
    generateId: function () { return -1; },
    popup: function () { return 0; },
    hide: function () { return undefined; },
});
/**
 * The root component enabling modal stacking.
 */
var ModalProvider = /** @class */ (function (_super) {
    __extends(ModalProvider, _super);
    function ModalProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * ATTENTION! We use the component's state to store some data so that it could
         * be rehydrated when using SSR. It's not a real state of the react component
         * and we do not call setState() to set its properties. The sole purpose of
         * it to make the data rehydrateable.
         */
        _this.state = {
            lastModalId: 0,
            maxElevation: 0,
            stack: [],
        };
        /**
         * The interface to pass it to the Provider as it's value.
         */
        _this.iface = {
            generateId: _this.generateId.bind(_this),
            popup: _this.popup.bind(_this),
            hide: _this.hide.bind(_this),
        };
        return _this;
    }
    ModalProvider.prototype.generateId = function () {
        return ++this.state.lastModalId;
    };
    ModalProvider.prototype.popup = function (id) {
        this.state.maxElevation += 2;
        this.state.stack.push({ id: id, elevation: this.state.maxElevation });
        return this.state.maxElevation;
    };
    ModalProvider.prototype.hide = function (id) {
        var index = this.state.stack.findIndex(function (s) { return s.id === id; });
        if (index >= 0) {
            this.state.stack.splice(index, 1);
            this.state.maxElevation = this.findMaxElevation();
        }
    };
    ModalProvider.prototype.findMaxElevation = function () {
        return this.state.stack.reduce(function (accum, current) { return Math.max(accum, current.elevation); }, 0);
    };
    ModalProvider.prototype.render = function () {
        return (react_1.default.createElement(exports.ModalContext.Provider, { value: this.iface }, this.props.children));
    };
    return ModalProvider;
}(react_1.default.PureComponent));
exports["default"] = ModalProvider;


/***/ }),

/***/ 610:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.theme = exports.transitionEndEvent = void 0;
var cachedTransitionEndEvent = '';
function transitionEndEvent() {
    if (!cachedTransitionEndEvent) {
        var transitions = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd'
        };
        var el = document.createElement('div');
        for (var _i = 0, _a = Object.keys(transitions); _i < _a.length; _i++) {
            var key = _a[_i];
            if (el.style[key] !== undefined) {
                cachedTransitionEndEvent = transitions[key];
                break;
            }
        }
    }
    return cachedTransitionEndEvent;
}
exports.transitionEndEvent = transitionEndEvent;
var theme = function (propName, defaultValue) { return function (props) {
    var prop = props.theme && props.theme.modal && props.theme.modal[propName];
    return prop !== undefined ? prop : defaultValue;
}; };
exports.theme = theme;


/***/ }),

/***/ 965:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ModalConsumerWrap_1 = __importDefault(__webpack_require__(838));
exports["default"] = ModalConsumerWrap_1.default;


/***/ }),

/***/ 375:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modal = exports.Backdrop = exports.Footer = exports.Header = exports.CloseButton = exports.Title = exports.Body = exports.Content = exports.Dialog = exports.GlobalStyle = void 0;
var styled_components_1 = __importStar(__webpack_require__(518));
var helpers_1 = __webpack_require__(610);
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .modal-open {\n    overflow: hidden !important;\n  }\n"], ["\n  .modal-open {\n    overflow: hidden !important;\n  }\n"])));
exports.Dialog = styled_components_1.default.div.attrs({ role: 'document' }).withConfig({ displayName: "Dialog", componentId: "-1mucdf8" })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: auto;\n  margin: .5rem;\n  pointer-events: none;\n  color: ", ";\n\n  @media (min-width: 576px) {\n    max-width: ", ";\n    margin: 1.75rem auto;\n  }\n"], ["\n  position: relative;\n  width: auto;\n  margin: .5rem;\n  pointer-events: none;\n  color: ", ";\n\n  @media (min-width: 576px) {\n    max-width: ", ";\n    margin: 1.75rem auto;\n  }\n"])), (0, helpers_1.theme)('textColor', 'inherit'), (0, helpers_1.theme)('mediumWidth', '500px'));
exports.Content = styled_components_1.default.div.withConfig({ displayName: "Content", componentId: "-a8g57t" })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: ", ";\n  background-clip: padding-box;\n  border: ", " solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  outline: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: ", ";\n  background-clip: padding-box;\n  border: ", " solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  outline: ", ";\n"])), (0, helpers_1.theme)('backgroundColor', '#fff'), (0, helpers_1.theme)('borderWidth', '1px'), (0, helpers_1.theme)('borderColor', 'rgba(0,0,0,.2)'), (0, helpers_1.theme)('borderRadius', '.3rem'), (0, helpers_1.theme)('boxShadow', 'none'), (0, helpers_1.theme)('outline', 0));
exports.Body = styled_components_1.default.div.withConfig({ displayName: "Body", componentId: "-iswecj" })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  flex: 1 1 auto;\n  padding: ", ";\n  background-color: ", ";\n"], ["\n  position: relative;\n  flex: 1 1 auto;\n  padding: ", ";\n  background-color: ", ";\n"])), (0, helpers_1.theme)('bodyPadding', '1rem'), (0, helpers_1.theme)('bodyColor', 'transparent'));
exports.Title = styled_components_1.default.h5.withConfig({ displayName: "Title", componentId: "-53yww0" })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0;\n  line-height: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n"], ["\n  margin: 0;\n  line-height: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n"])), (0, helpers_1.theme)('titleLineHeight', 1.5), (0, helpers_1.theme)('titleFontSize', '1.25rem'), (0, helpers_1.theme)('titleFontFamily', 'inherit'), (0, helpers_1.theme)('titleFontWeight', 500), (0, helpers_1.theme)('titleTextColor', 'inherit'));
exports.CloseButton = styled_components_1.default.button.attrs({
    type: 'button',
    'aria-label': 'Close',
    'data-dismiss': 'modal',
}).withConfig({ displayName: "CloseButton", componentId: "-1fpccu9" })(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  float: right;\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  text-shadow: ", ";\n  opacity: ", ";\n  background: ", ";\n  border: ", ";\n  -webkit-appearance: none;\n  padding: ", ";\n  text-transform: none;\n  font-family: inherit;\n  transition: opacity 200ms ease;\n  outline: none;\n\n  &:hover {\n    opacity: ", ";\n  }\n\n  &:not(:disabled) {\n    cursor: pointer;\n  }\n"], ["\n  float: right;\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  text-shadow: ", ";\n  opacity: ", ";\n  background: ", ";\n  border: ", ";\n  -webkit-appearance: none;\n  padding: ", ";\n  text-transform: none;\n  font-family: inherit;\n  transition: opacity 200ms ease;\n  outline: none;\n\n  &:hover {\n    opacity: ", ";\n  }\n\n  &:not(:disabled) {\n    cursor: pointer;\n  }\n"])), (0, helpers_1.theme)('closeButtonFontSize', '1.5rem'), (0, helpers_1.theme)('closeButtonFontWeight', 700), (0, helpers_1.theme)('closeButtonLineHeight', 1.25), (0, helpers_1.theme)('closeButtonTextColor', '#000'), (0, helpers_1.theme)('closeButtonTextShadow', '0 1px 0 #fff'), (0, helpers_1.theme)('closeButtonOpacity', .5), (0, helpers_1.theme)('closeButtonBackground', 'transparent'), (0, helpers_1.theme)('closeButtonBorder', 0), (0, helpers_1.theme)('closeButtonPadding', '1rem'), (0, helpers_1.theme)('closeButtonHoverOpacity', .6));
exports.Header = styled_components_1.default.div.withConfig({ displayName: "Header", componentId: "-raxee" })(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: ", ";\n  border-bottom: ", ";;\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  background-color: ", ";\n\n  ", " {\n    margin:\n      -", "\n      -", "\n      -", "\n      auto;\n  }\n"], ["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: ", ";\n  border-bottom: ", ";;\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  background-color: ", ";\n\n  ", " {\n    margin:\n      -", "\n      -", "\n      -", "\n      auto;\n  }\n"])), (0, helpers_1.theme)('headerPadding', '1rem'), (0, helpers_1.theme)('headerBorderBottom', '1px solid #e9ecef'), (0, helpers_1.theme)('borderRadius', '.3rem'), (0, helpers_1.theme)('borderRadius', '.3rem'), (0, helpers_1.theme)('headerColor', 'transparent'), exports.CloseButton, (0, helpers_1.theme)('headerPadding', '1rem'), (0, helpers_1.theme)('headerPadding', '1rem'), (0, helpers_1.theme)('headerPadding', '1rem'));
exports.Footer = styled_components_1.default.div.withConfig({ displayName: "Footer", componentId: "-1h7bsix" })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: ", ";\n  border-top: ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: ", ";\n  border-top: ", ";\n  background-color: ", ";\n"])), (0, helpers_1.theme)('footerPadding', '1rem'), (0, helpers_1.theme)('footerBorderTop', '1px solid #e9ecef'), (0, helpers_1.theme)('footerColor', 'transparent'));
exports.Backdrop = styled_components_1.default.div.withConfig({ displayName: "Backdrop", componentId: "-yun6o0" })(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n  background-color: ", ";\n\n  &.fade {\n    transition: opacity .15s linear;\n    opacity: 0;\n    &.open {\n      opacity: ", ";\n    }\n  }\n\n  &.none {\n    opacity: ", ";\n  }\n"], ["\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n  background-color: ", ";\n\n  &.fade {\n    transition: opacity .15s linear;\n    opacity: 0;\n    &.open {\n      opacity: ", ";\n    }\n  }\n\n  &.none {\n    opacity: ", ";\n  }\n"])), (0, helpers_1.theme)('backdropZIndex', 1040), (0, helpers_1.theme)('backdropColor', '#000'), (0, helpers_1.theme)('backdropOpacity', .5), (0, helpers_1.theme)('backdropOpacity', .5));
exports.Modal = styled_components_1.default.div.attrs({
    tabIndex: -1,
    role: 'dialog',
}).withConfig({ displayName: "Modal", componentId: "-bnfawj" })(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n  overflow: hidden;\n  outline: 0;\n\n  &, *, ::before, ::after {\n    box-sizing: border-box;\n  }\n\n  &.open {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  &.fade {\n    opacity: 0;\n    transition: opacity .15s linear;\n\n    &.open {\n      opacity: 1;\n    }\n  }\n\n  &.fade ", " {\n    transition: transform .3s ease-out;\n    transform: translate(0,-25%);\n  }\n\n  &.open ", " {\n    transform: translate(0,0);\n  }\n\n  &.centered ", " {\n    display: flex;\n    align-items: center;\n    min-height: calc(100% - (1.75rem * 2));\n\n    &::before {\n      content: '';\n      display: block;\n      height: calc(100vh - (1.75rem * 2));\n    }\n  }\n\n  &.small ", " {\n    @media (min-width: 576px) {\n      max-width: ", ";\n    }\n  }\n\n  &.large ", " {\n    @media (min-width: 576px) {\n      max-width: ", ";\n    }\n  }\n"], ["\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n  overflow: hidden;\n  outline: 0;\n\n  &, *, ::before, ::after {\n    box-sizing: border-box;\n  }\n\n  &.open {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  &.fade {\n    opacity: 0;\n    transition: opacity .15s linear;\n\n    &.open {\n      opacity: 1;\n    }\n  }\n\n  &.fade ", " {\n    transition: transform .3s ease-out;\n    transform: translate(0,-25%);\n  }\n\n  &.open ", " {\n    transform: translate(0,0);\n  }\n\n  &.centered ", " {\n    display: flex;\n    align-items: center;\n    min-height: calc(100% - (1.75rem * 2));\n\n    &::before {\n      content: '';\n      display: block;\n      height: calc(100vh - (1.75rem * 2));\n    }\n  }\n\n  &.small ", " {\n    @media (min-width: 576px) {\n      max-width: ", ";\n    }\n  }\n\n  &.large ", " {\n    @media (min-width: 576px) {\n      max-width: ", ";\n    }\n  }\n"])), (0, helpers_1.theme)('zIndex', 1072), exports.Dialog, exports.Dialog, exports.Dialog, exports.Dialog, (0, helpers_1.theme)('smallWidth', '300px'), exports.Dialog, (0, helpers_1.theme)('largeWidth', '800px'));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(965);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map
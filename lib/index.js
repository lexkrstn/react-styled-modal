module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=require("react")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Context=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(o(0));const r=n.default.createContext({generateId:()=>-1,popup:()=>0,hide:()=>0});t.Context=r;t.default=class extends n.default.PureComponent{constructor(e){super(e),function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(this,"state",{lastModalId:0,maxElevation:0,stack:[]}),this.iface={generateId:this.generateId.bind(this),popup:this.popup.bind(this),hide:this.hide.bind(this)}}generateId(){return++this.state.lastModalId}popup(e){return this.state.maxElevation+=2,this.state.stack.push({id:e,elevation:this.state.maxElevation}),this.state.maxElevation}hide(e){var t=this.state.stack.findIndex(({id:t})=>t===e);t>=0&&(this.state.stack.splice(t,1),this.state.maxElevation=this.findMaxElevation())}findMaxElevation(){return this.state.stack.reduce((e,t)=>Math.max(e,t.elevation),0)}render(){return n.default.createElement(r.Provider,{value:this.iface},this.props.children)}}},function(e,t){e.exports=require("styled-components")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Backdrop=t.Footer=t.Header=t.CloseButton=t.Title=t.Body=t.Content=t.Dialog=void 0;var n=a(o(0)),r=a(o(2)),i=o(4);function a(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const l=r.default.div`
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;
    color: ${(0,i.theme)("textColor","inherit")};

    @media (min-width: 576px) {
        max-width: ${(0,i.theme)("mediumWidth","500px")};
        margin: 1.75rem auto;
    }
`;t.Dialog=l;const s=r.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: ${(0,i.theme)("backgroundColor","#fff")};
    background-clip: padding-box;
    border: ${(0,i.theme)("borderWidth","1px")} solid ${(0,i.theme)("borderColor","rgba(0,0,0,.2)")};
    border-radius: ${(0,i.theme)("borderRadius",".3rem")};
    box-shadow: ${(0,i.theme)("boxShadow","none")};
    outline: ${(0,i.theme)("outline",0)};
`;t.Content=s;const u=r.default.div`
    position: relative;
    flex: 1 1 auto;
    padding: ${(0,i.theme)("bodyPadding","1rem")};
    background-color: ${(0,i.theme)("bodyColor","transparent")};
`;t.Body=u;const c=r.default.h5`
    margin: 0;
    line-height: ${(0,i.theme)("titleLineHeight",1.5)};
    font-size: ${(0,i.theme)("titleFontSize","1.25rem")};
    font-family: ${(0,i.theme)("titleFontFamily","inherit")};
    font-weight: ${(0,i.theme)("titleFontWeight",500)};
    color: ${(0,i.theme)("titleTextColor","inherit")};
`;t.Title=c;const p=e=>{let t=d({},e);return n.default.createElement("button",d({type:"button","aria-label":"Close","data-dismiss":"modal"},t),n.default.createElement("span",{"aria-hidden":"true"},"×"))},f=(0,r.default)(p)`
    float: right;
    font-size: ${(0,i.theme)("closeButtonFontSize","1.5rem")};
    font-weight: ${(0,i.theme)("closeButtonFontWeight",700)};
    line-height: ${(0,i.theme)("closeButtonLineHeight",1.25)};
    color: ${(0,i.theme)("closeButtonTextColor","#000")};
    text-shadow: ${(0,i.theme)("closeButtonTextShadow","0 1px 0 #fff")};
    opacity: ${(0,i.theme)("closeButtonOpacity",.5)};
    background: ${(0,i.theme)("closeButtonBackground","transparent")};
    border: ${(0,i.theme)("closeButtonBorder",0)};
    -webkit-appearance: none;
    padding: ${(0,i.theme)("closeButtonPadding","1rem")};
    text-transform: none;
    font-family: inherit;
    transition: opacity 200ms ease;
    outline: none;

    &:hover {
        opacity: ${(0,i.theme)("closeButtonHoverOpacity",.6)};
    }

    &:not(:disabled) {
        cursor: pointer;
    }
`;t.CloseButton=f;const h=r.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${(0,i.theme)("headerPadding","1rem")};
    border-bottom: ${(0,i.theme)("headerBorderBottom","1px solid #e9ecef")};;
    border-top-left-radius: ${(0,i.theme)("borderRadius",".3rem")};
    border-top-right-radius: ${(0,i.theme)("borderRadius",".3rem")};
    background-color: ${(0,i.theme)("headerColor","transparent")};

    ${f} {
        margin:
            -${(0,i.theme)("headerPadding","1rem")}
            -${(0,i.theme)("headerPadding","1rem")}
            -${(0,i.theme)("headerPadding","1rem")}
            auto;
    }
`;t.Header=h;const m=r.default.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${(0,i.theme)("footerPadding","1rem")};
    border-top: ${(0,i.theme)("footerBorderTop","1px solid #e9ecef")};
    background-color: ${(0,i.theme)("footerColor","transparent")};
`;t.Footer=m;const b=r.default.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${(0,i.theme)("backdropZIndex",1040)};
    background-color: ${(0,i.theme)("backdropColor","#000")};

    &.fade {
        transition: opacity .15s linear;
        opacity: 0;
        &.open {
            opacity: ${(0,i.theme)("backdropOpacity",.5)};
        }
    }
`;t.Backdrop=b},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transitionEndEvent=function e(){if(!e.cached){const t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},o=document.createElement("div"),n=Object.getOwnPropertyNames(t);for(let r=0;r<n.length;++r)if(void 0!==o.style[n[r]]){e.cached=t[n[r]];break}}return e.cached},t.theme=void 0;t.theme=((e,t)=>o=>{const n=o.theme&&o.theme.modal&&o.theme.modal[e];return void 0!==n?n:t})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModalProvider",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.Header}}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return i.Body}}),Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return i.Footer}}),Object.defineProperty(t,"Title",{enumerable:!0,get:function(){return i.Title}}),Object.defineProperty(t,"CloseButton",{enumerable:!0,get:function(){return i.CloseButton}}),Object.defineProperty(t,"Backdrop",{enumerable:!0,get:function(){return i.Backdrop}}),Object.defineProperty(t,"Content",{enumerable:!0,get:function(){return i.Content}}),Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return i.Dialog}}),t.default=void 0;var n=a(o(1)),r=a(o(6)),i=o(3);function a(e){return e&&e.__esModule?e:{default:e}}r.default.Provider=n.default,r.default.Dialog=i.Dialog,r.default.Content=i.Content,r.default.Backdrop=i.Backdrop,r.default.Header=i.Header,r.default.Body=i.Body,r.default.Footer=i.Footer,r.default.Title=i.Title,r.default.CloseButton=i.CloseButton;var d=r.default;t.default=d},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o(0)),r=c(o(7)),i=u(o(2)),a=o(8),d=o(3),l=o(4),s=u(o(1));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}i.injectGlobal`
	.modal-open {
		overflow: hidden !important;
	}
`;class h extends n.default.Component{constructor(e){super(e),f(this,"handleModalClick",()=>{this.clickFromDialog?this.clickFromDialog=!1:this.props.onClose()}),f(this,"handleDialogClick",()=>{this.clickFromDialog=!0}),f(this,"handleKeyUp",e=>{"Escape"!==e.key&&27!==e.keyCode||!this.props.closeOnEsc||this.props.onClose()}),this.state={open:e.open,displayed:e.open,hasOpenClass:e.open,id:e.provider.generateId(),elevation:0},this.modalRef=n.default.createRef(),this.dialogRef=n.default.createRef()}static getDerivedStateFromProps(e,t){const o=e.open===t.open?null:{open:e.open,displayed:!0,hasOpenClass:!1};return e.open&&!t.open?o.elevation=e.provider.popup(t.id):!e.open&&t.open&&e.provider.hide(t.id),o}chargeClassTimeoutId(){this.classTimeoutId=setTimeout(()=>{this.setState({displayed:!0,hasOpenClass:!0}),this.classTimeoutId=null},0)}clearClassTimeoutId(){this.classTimeoutId&&(clearTimeout(this.classTimeoutId),this.classTimeoutId=null)}chargeTransitionEndHandler(){this.handleTransitionEnd=(()=>{this.setState({displayed:!1,hasOpenClass:!1}),this.clearTransitionEndHandler()}),this.dialogRef.current.addEventListener((0,l.transitionEndEvent)(),this.handleTransitionEnd)}clearTransitionEndHandler(){this.handleTransitionEnd&&(this.dialogRef.current.removeEventListener((0,l.transitionEndEvent)(),this.handleTransitionEnd),this.handleTransitionEnd=null)}addBodyClass(){document.body.classList.add("modal-open")}removeBodyClass(){document.body.classList.remove("modal-open")}componentWillUnmount(){this.removeBodyClass(),this.clearClassTimeoutId(),this.clearTransitionEndHandler()}render(){const{className:e,centered:t,size:o,children:r,effect:i,Dialog:d,Content:s,Backdrop:u}=this.props,{displayed:c,hasOpenClass:p,elevation:f}=this.state,h=[e];p&&h.push("open"),i&&h.push(i),t&&h.push("centered"),o&&h.push(o);const m=n.default.createElement("div",{className:h.join(" "),tabIndex:"-1",role:"dialog",style:{display:c?"block":"none",zIndex:(0,l.theme)("zIndex",1072)(this.props)+f},onClick:this.handleModalClick,onKeyUp:this.handleKeyUp,ref:this.modalRef},n.default.createElement(d,{role:"document",innerRef:this.dialogRef,onClick:this.handleDialogClick},n.default.createElement(s,null,r))),b=[];p&&b.push("open"),i&&b.push(i);const g=n.default.createElement(u,{className:b.join(" "),style:{display:c?"block":"none",zIndex:(0,l.theme)("zIndex",1072)(this.props)+f-1}});return n.default.createElement(n.default.Fragment,null,(0,a.createUniversalPortal)(m,"#modal-root"),(0,a.createUniversalPortal)(g,"#modal-root"))}componentDidUpdate(e,t){this.state.displayed&&!t.displayed?this.addBodyClass():!this.state.displayed&&t.displayed&&this.removeBodyClass(),this.state.displayed&&!this.state.hasOpenClass&&(this.clearClassTimeoutId(),this.clearTransitionEndHandler(),this.state.open?(this.chargeClassTimeoutId(),this.hasFocus()||this.focus()):this.chargeTransitionEndHandler())}focus(){this.modalRef.current.focus()}hasFocus(){for(var e=document.activeElement,t=this.modalRef.current;e;){if(e==t)return!0;e=e.parentElement}return!1}}f(h,"propTypes",{open:r.default.bool,effect:r.default.oneOf(["fade"]),centered:r.default.bool,size:r.default.oneOf(["small","medium","large"]),closeOnEsc:r.default.bool,onClose:r.default.func,Dialog:r.default.func,Content:r.default.func,Backdrop:r.default.func,provider:r.default.object.isRequired}),f(h,"defaultProps",{size:"medium",open:!1,effect:"fade",centered:!1,closeOnEsc:!0,onClose:()=>{},Dialog:d.Dialog,Content:d.Content,Backdrop:d.Backdrop});const m=e=>n.default.createElement(s.Context.Consumer,null,t=>n.default.createElement(h,p({},e,{provider:t})));var b=(0,i.default)(m)`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: ${(0,l.theme)("zIndex",1072)};
	overflow: hidden;
	outline: 0;

	&, *, ::before, ::after {
		box-sizing: border-box;
	}

	&.open {
		overflow-x: hidden;
		overflow-y: auto;
	}

	&.fade {
		opacity: 0;
		transition: opacity .15s linear;

		&.open {
			opacity: 1;
		}
	}

	&.fade ${d.Dialog} {
        transition: transform .3s ease-out;
        transform: translate(0,-25%);
    }

	&.open ${d.Dialog} {
		transform: translate(0,0);
	}

	&.centered ${d.Dialog} {
		display: flex;
		align-items: center;
		min-height: calc(100% - (1.75rem * 2));

		&::before {
			content: '';
			display: block;
			height: calc(100vh - (1.75rem * 2));
		}
	}

	&.small ${d.Dialog} {
		@media (min-width: 576px) {
			max-width: ${(0,l.theme)("smallWidth","300px")};
		}
	}

	&.large ${d.Dialog} {
		@media (min-width: 576px) {
			max-width: ${(0,l.theme)("largeWidth","800px")};
		}
	}
`;t.default=b},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-portal-universal")}]);
module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-portal-universal")},function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n);const r=i.a.createContext({generateId:()=>-1,popup:()=>0,hide:()=>0});class a extends i.a.PureComponent{constructor(e){super(e),function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(this,"state",{lastModalId:0,maxElevation:0,stack:[]}),this.iface={generateId:this.generateId.bind(this),popup:this.popup.bind(this),hide:this.hide.bind(this)}}generateId(){return++this.state.lastModalId}popup(e){return this.state.maxElevation+=2,this.state.stack.push({id:e,elevation:this.state.maxElevation}),this.state.maxElevation}hide(e){var t=this.state.stack.findIndex(({id:t})=>t===e);t>=0&&(this.state.stack.splice(t,1),this.state.maxElevation=this.findMaxElevation())}findMaxElevation(){return this.state.stack.reduce((e,t)=>Math.max(e,t.elevation),0)}render(){return i.a.createElement(r.Provider,{value:this.iface},this.props.children)}}var s=o(2),d=o.n(s),l=o(1),c=o.n(l),p=o(3);function u(){if(!u.cached){const e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=document.createElement("div"),o=Object.getOwnPropertyNames(e);for(let n=0;n<o.length;++n)if(void 0!==t.style[o[n]]){u.cached=e[o[n]];break}}return u.cached}const h=(e,t)=>o=>{const n=o.theme&&o.theme.modal&&o.theme.modal[e];return void 0!==n?n:t};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const m=c.a.div`
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;
    color: ${h("textColor","inherit")};

    @media (min-width: 576px) {
        max-width: ${h("mediumWidth","500px")};
        margin: 1.75rem auto;
    }
`,b=c.a.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: ${h("backgroundColor","#fff")};
    background-clip: padding-box;
    border: ${h("borderWidth","1px")} solid ${h("borderColor","rgba(0,0,0,.2)")};
    border-radius: ${h("borderRadius",".3rem")};
    box-shadow: ${h("boxShadow","none")};
    outline: ${h("outline",0)};
`,g=c.a.div`
    position: relative;
    flex: 1 1 auto;
    padding: ${h("bodyPadding","1rem")};
    background-color: ${h("bodyColor","transparent")};
`,y=c.a.h5`
    margin: 0;
    line-height: ${h("titleLineHeight",1.5)};
    font-size: ${h("titleFontSize","1.25rem")};
    font-family: ${h("titleFontFamily","inherit")};
    font-weight: ${h("titleFontWeight",500)};
    color: ${h("titleTextColor","inherit")};
`,v=e=>{let t=f({},e);return i.a.createElement("button",f({type:"button","aria-label":"Close","data-dismiss":"modal"},t),i.a.createElement("span",{"aria-hidden":"true"},"×"))},x=c()(v)`
    float: right;
    font-size: ${h("closeButtonFontSize","1.5rem")};
    font-weight: ${h("closeButtonFontWeight",700)};
    line-height: ${h("closeButtonLineHeight",1.25)};
    color: ${h("closeButtonTextColor","#000")};
    text-shadow: ${h("closeButtonTextShadow","0 1px 0 #fff")};
    opacity: ${h("closeButtonOpacity",.5)};
    background: ${h("closeButtonBackground","transparent")};
    border: ${h("closeButtonBorder",0)};
    -webkit-appearance: none;
    padding: ${h("closeButtonPadding","1rem")};
    text-transform: none;
    font-family: inherit;
    transition: opacity 200ms ease;
    outline: none;

    &:hover {
        opacity: ${h("closeButtonHoverOpacity",.6)};
    }

    &:not(:disabled) {
        cursor: pointer;
    }
`,$=c.a.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${h("headerPadding","1rem")};
    border-bottom: ${h("headerBorderBottom","1px solid #e9ecef")};;
    border-top-left-radius: ${h("borderRadius",".3rem")};
    border-top-right-radius: ${h("borderRadius",".3rem")};
    background-color: ${h("headerColor","transparent")};

    ${x} {
        margin:
            -${h("headerPadding","1rem")}
            -${h("headerPadding","1rem")}
            -${h("headerPadding","1rem")}
            auto;
    }
`,C=c.a.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${h("footerPadding","1rem")};
    border-top: ${h("footerBorderTop","1px solid #e9ecef")};
    background-color: ${h("footerColor","transparent")};
`,k=c.a.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${h("backdropZIndex",1040)};
    background-color: ${h("backdropColor","#000")};

    &.fade {
        transition: opacity .15s linear;
        opacity: 0;
        &.open {
            opacity: ${h("backdropOpacity",.5)};
        }
    }

    &.none {
        opacity: ${h("backdropOpacity",.5)};
    }
`;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function T(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}l["injectGlobal"]`
	.modal-open {
		overflow: hidden !important;
	}
`;class O extends i.a.Component{constructor(e){super(e),T(this,"handleModalClick",()=>{this.clickFromDialog?this.clickFromDialog=!1:this.props.onClose()}),T(this,"handleDialogClick",()=>{this.clickFromDialog=!0}),T(this,"handleKeyUp",e=>{"Escape"!==e.key&&27!==e.keyCode||!this.props.closeOnEsc||this.props.onClose()}),this.state={open:e.open,displayed:e.open,hasOpenClass:e.open,id:e.provider.generateId(),elevation:0},this.modalRef=i.a.createRef(),this.dialogRef=i.a.createRef()}static getDerivedStateFromProps(e,t){const o=e.open===t.open?null:{open:e.open,displayed:"none"!==e.effect||e.open,hasOpenClass:"none"===e.effect&&e.open};return e.open&&!t.open?o.elevation=e.provider.popup(t.id):!e.open&&t.open&&e.provider.hide(t.id),o}chargeClassTimeoutId(){this.classTimeoutId=setTimeout(()=>{this.setState({displayed:!0,hasOpenClass:!0}),this.classTimeoutId=null},0)}clearClassTimeoutId(){this.classTimeoutId&&(clearTimeout(this.classTimeoutId),this.classTimeoutId=null)}chargeTransitionEndHandler(){this.handleTransitionEnd=(()=>{this.setState({displayed:!1,hasOpenClass:!1}),this.clearTransitionEndHandler()}),this.dialogRef.current.addEventListener(u(),this.handleTransitionEnd)}clearTransitionEndHandler(){this.handleTransitionEnd&&(this.dialogRef.current.removeEventListener(u(),this.handleTransitionEnd),this.handleTransitionEnd=null)}addBodyClass(){document.body.classList.add("modal-open")}removeBodyClass(){document.body.classList.remove("modal-open")}componentWillUnmount(){this.removeBodyClass(),this.clearClassTimeoutId(),this.clearTransitionEndHandler()}render(){const{className:e,centered:t,size:o,children:n,effect:r,Dialog:a,Content:s,Backdrop:d}=this.props,{displayed:l,hasOpenClass:c,elevation:u}=this.state,f=[e];c&&f.push("open"),r&&f.push(r),t&&f.push("centered"),o&&f.push(o);const m=i.a.createElement("div",{className:f.join(" "),tabIndex:"-1",role:"dialog",style:{display:l?"block":"none",zIndex:h("zIndex",1072)(this.props)+u},onClick:this.handleModalClick,onKeyUp:this.handleKeyUp,ref:this.modalRef},i.a.createElement(a,{role:"document",innerRef:this.dialogRef,onClick:this.handleDialogClick},i.a.createElement(s,null,n))),b=[];c&&b.push("open"),r&&b.push(r);const g=i.a.createElement(d,{className:b.join(" "),style:{display:l?"block":"none",zIndex:h("zIndex",1072)(this.props)+u-1}});return i.a.createElement(i.a.Fragment,null,Object(p.createUniversalPortal)(m,"#modal-root"),Object(p.createUniversalPortal)(g,"#modal-root"))}componentDidUpdate(e,t){this.state.displayed&&!t.displayed?this.addBodyClass():!this.state.displayed&&t.displayed&&this.removeBodyClass(),"none"!==this.props.effect&&this.state.displayed&&!this.state.hasOpenClass&&(this.clearClassTimeoutId(),this.clearTransitionEndHandler(),this.state.open?(this.chargeClassTimeoutId(),this.hasFocus()||this.focus()):this.chargeTransitionEndHandler())}focus(){this.modalRef.current.focus()}hasFocus(){for(var e=document.activeElement,t=this.modalRef.current;e;){if(e==t)return!0;e=e.parentElement}return!1}}T(O,"propTypes",{open:d.a.bool,effect:d.a.oneOf(["none","fade"]),centered:d.a.bool,size:d.a.oneOf(["small","medium","large"]),closeOnEsc:d.a.bool,onClose:d.a.func,Dialog:d.a.func,Content:d.a.func,Backdrop:d.a.func,provider:d.a.object.isRequired}),T(O,"defaultProps",{size:"medium",open:!1,effect:"fade",centered:!1,closeOnEsc:!0,onClose:()=>{},Dialog:m,Content:b,Backdrop:k});const B=e=>i.a.createElement(r.Consumer,null,t=>i.a.createElement(O,E({},e,{provider:t})));var w=c()(B)`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: ${h("zIndex",1072)};
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

	&.fade ${m} {
        transition: transform .3s ease-out;
        transform: translate(0,-25%);
    }

	&.open ${m} {
		transform: translate(0,0);
	}

	&.centered ${m} {
		display: flex;
		align-items: center;
		min-height: calc(100% - (1.75rem * 2));

		&::before {
			content: '';
			display: block;
			height: calc(100vh - (1.75rem * 2));
		}
	}

	&.small ${m} {
		@media (min-width: 576px) {
			max-width: ${h("smallWidth","300px")};
		}
	}

	&.large ${m} {
		@media (min-width: 576px) {
			max-width: ${h("largeWidth","800px")};
		}
	}
`;o.d(t,"Header",function(){return $}),o.d(t,"Body",function(){return g}),o.d(t,"Footer",function(){return C}),o.d(t,"Title",function(){return y}),o.d(t,"CloseButton",function(){return x}),o.d(t,"Backdrop",function(){return k}),o.d(t,"Content",function(){return b}),o.d(t,"Dialog",function(){return m}),o.d(t,"ModalProvider",function(){return a}),w.Provider=a,w.Dialog=m,w.Content=b,w.Backdrop=k,w.Header=$,w.Body=g,w.Footer=C,w.Title=y,w.CloseButton=x;t.default=w}]);
module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Backdrop=t.Footer=t.Header=t.CloseButton=t.Title=t.Body=t.Content=t.Dialog=void 0;var o=i(n(0)),r=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const l=r.default.div`
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;

    @media (min-width: 576px) {
        max-width: 500px;
        margin: 1.75rem auto;
    }
`;t.Dialog=l;const d=r.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
`;t.Content=d;const s=r.default.div`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;t.Body=s;const u=r.default.h5`
    margin: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-family: inherit;
    font-weight: 500;
    color: inherit;
`;t.Title=u;const c=e=>{let t=a({},e);return o.default.createElement("button",a({type:"button","aria-label":"Close","data-dismiss":"modal"},t),o.default.createElement("span",{"aria-hidden":"true"},"×"))},f=(0,r.default)(c)`
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    padding: 1rem;
    text-transform: none;
    font-family: inherit;

    &:not(:disabled) {
        cursor: pointer;
    }
`;t.CloseButton=f;const p=r.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;

    ${f} {
        margin: -1rem -1rem -1rem auto;
    }
`;t.Header=p;const m=r.default.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
`;t.Footer=m;const h=r.default.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;

    &.fade {
        transition: opacity .15s linear;
        opacity: 0;
        &.open {
            opacity: .5;
        }
    }
`;t.Backdrop=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return r.Header}}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.Body}}),Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return r.Footer}}),Object.defineProperty(t,"Title",{enumerable:!0,get:function(){return r.Title}}),Object.defineProperty(t,"CloseButton",{enumerable:!0,get:function(){return r.CloseButton}}),Object.defineProperty(t,"Backdrop",{enumerable:!0,get:function(){return r.Backdrop}}),Object.defineProperty(t,"Content",{enumerable:!0,get:function(){return r.Content}}),Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return r.Dialog}}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(4)),r=n(2);o.default.Dialog=r.Dialog,o.default.Content=r.Content,o.default.Backdrop=r.Backdrop,o.default.Header=r.Header,o.default.Body=r.Body,o.default.Footer=r.Footer,o.default.Title=r.Title,o.default.CloseButton=r.CloseButton;var i=o.default;t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(0)),r=s(n(5)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(1)),a=n(6),l=n(2),d=n(7);function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i.injectGlobal`
	.modal-open {
		overflow: hidden !important;
	}
`;class c extends o.default.Component{constructor(e){super(e),u(this,"handleModalClick",()=>{this.clickFromDialog?this.clickFromDialog=!1:this.props.onClose()}),u(this,"handleDialogClick",()=>{this.clickFromDialog=!0}),this.state={open:e.open,displayed:e.open,hasOpenClass:e.open},this.dialogRef=o.default.createRef()}static getDerivedStateFromProps(e,t){return e.open===t.open?null:{open:e.open,displayed:!0,hasOpenClass:!1}}chargeClassTimeoutId(){this.classTimeoutId=setTimeout(()=>{this.setState({displayed:!0,hasOpenClass:!0}),this.classTimeoutId=null},0)}clearClassTimeoutId(){this.classTimeoutId&&(clearTimeout(this.classTimeoutId),this.classTimeoutId=null)}chargeTransitionEndHandler(){this.handleTransitionEnd=(()=>{this.setState({displayed:!1,hasOpenClass:!1}),this.clearTransitionEndHandler()}),this.dialogRef.current.addEventListener((0,d.transitionEndEvent)(),this.handleTransitionEnd)}clearTransitionEndHandler(){this.handleTransitionEnd&&(this.dialogRef.current.removeEventListener((0,d.transitionEndEvent)(),this.handleTransitionEnd),this.handleTransitionEnd=null)}addBodyClass(){document.body.classList.add("modal-open")}removeBodyClass(){document.body.classList.remove("modal-open")}componentWillUnmount(){this.removeBodyClass(),this.clearClassTimeoutId(),this.clearTransitionEndHandler()}render(){const{className:e,centered:t,size:n,children:r,effect:i,Dialog:l,Content:d,Backdrop:s}=this.props,{displayed:u,hasOpenClass:c}=this.state,f=[e];c&&f.push("open"),i&&f.push(i),t&&f.push("centered"),n&&f.push(n);const p=o.default.createElement("div",{className:f.join(" "),tabIndex:"-1",role:"dialog",style:{display:u?"block":"none"},onClick:this.handleModalClick},o.default.createElement(l,{role:"document",innerRef:this.dialogRef,onClick:this.handleDialogClick},o.default.createElement(d,null,r))),m=[];c&&m.push("open"),i&&m.push(i);const h=o.default.createElement(s,{className:m.join(" "),style:{display:u?"block":"none"}});return o.default.createElement(o.default.Fragment,null,(0,a.createUniversalPortal)(p,"#modal-root"),(0,a.createUniversalPortal)(h,"#modal-root"))}componentDidUpdate(e,t){this.state.displayed&&!t.displayed?this.addBodyClass():!this.state.displayed&&t.displayed&&this.removeBodyClass(),this.state.displayed&&!this.state.hasOpenClass&&(this.clearClassTimeoutId(),this.clearTransitionEndHandler(),this.state.open?this.chargeClassTimeoutId():this.chargeTransitionEndHandler())}}u(c,"propTypes",{open:r.default.bool,effect:r.default.oneOf(["fade"]),centered:r.default.bool,size:r.default.oneOf(["small","medium","large"]),onClose:r.default.func,Dialog:r.default.func,Content:r.default.func,Backdrop:r.default.func}),u(c,"defaultProps",{size:"medium",open:!1,effect:"fade",centered:!1,onClose:()=>{},Dialog:l.Dialog,Content:l.Content,Backdrop:l.Backdrop});var f=(0,i.default)(c)`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1050;
	display: none;
	overflow: hidden;
	outline: 0;
	z-index: 1072;

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

	&.fade ${l.Dialog} {
        transition: transform .3s ease-out;
        transform: translate(0,-25%);
    }

	&.open ${l.Dialog} {
		transform: translate(0,0);
	}

	&.centered ${l.Dialog} {
		display: flex;
		align-items: center;
		min-height: calc(100% - (1.75rem * 2));

		&::before {
			content: '';
			display: block;
			height: calc(100vh - (1.75rem * 2));
		}
	}

	&.small ${l.Dialog} {
		@media (min-width: 576px) {
			max-width: 300px;
		}
	}

	&.large ${l.Dialog} {
		@media (min-width: 576px) {
			max-width: 800px;
		}
	}
`;t.default=f},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-portal-universal")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transitionEndEvent=function e(){if(!e.cached){const t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=document.createElement("div"),o=Object.getOwnPropertyNames(t);for(let r=0;r<o.length;++r)if(void 0!==n.style[o[r]]){e.cached=t[o[r]];break}}return e.cached}}]);
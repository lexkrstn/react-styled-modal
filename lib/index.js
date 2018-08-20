module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Backdrop=t.Footer=t.Header=t.CloseButton=t.Title=t.Body=t.Content=t.Dialog=void 0;var n=a(o(0)),r=a(o(1));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const l=r.default.div`
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;

    @media (min-width: 576px) {
        max-width: 500px;
        margin: 1.75rem auto;
    }

    &.fade {
        transition: transform .3s ease-out;
        transform: translate(0,-25%);
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
`;t.Content=d;const u=r.default.div`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;t.Body=u;const f=r.default.h5`
    margin: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-family: inherit;
    font-weight: 500;
    color: inherit;
`;t.Title=f;const c=e=>{let t=i({},e);return n.default.createElement("button",i({type:"button","aria-label":"Close","data-dismiss":"modal"},t),n.default.createElement("span",{"aria-hidden":"true"},"×"))},s=(0,r.default)(c)`
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
`;t.CloseButton=s;const p=r.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;

    ${s} {
        margin: -1rem -1rem -1rem auto;
    }
`;t.Header=p;const m=r.default.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
`;t.Footer=m;const b=r.default.div`
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
`;t.Backdrop=b},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return r.Header}}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.Body}}),Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return r.Footer}}),Object.defineProperty(t,"Title",{enumerable:!0,get:function(){return r.Title}}),Object.defineProperty(t,"CloseButton",{enumerable:!0,get:function(){return r.CloseButton}}),Object.defineProperty(t,"Backdrop",{enumerable:!0,get:function(){return r.Backdrop}}),Object.defineProperty(t,"Content",{enumerable:!0,get:function(){return r.Content}}),Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return r.Dialog}}),t.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(o(4)),r=o(2);n.default.Dialog=r.Dialog,n.default.Content=r.Content,n.default.Backdrop=r.Backdrop,n.default.Header=r.Header,n.default.Body=r.Body,n.default.Footer=r.Footer,n.default.Title=r.Title,n.default.CloseButton=r.CloseButton;var a=n.default;t.default=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(o(0)),r=d(o(5)),a=d(o(1)),i=o(6),l=o(2);function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class f extends n.default.Component{constructor(...e){super(...e),u(this,"handleModalClick",()=>{this.clickFromDialog?this.clickFromDialog=!1:this.props.onClose()}),u(this,"handleDialogClick",()=>{this.clickFromDialog=!0}),u(this,"handleCloseButtonClick",()=>{this.props.onClose()})}render(){const{className:e,children:t,open:o,effect:r,Dialog:a,Content:l,Backdrop:d}=this.props,u=[e];o&&u.push("open"),r&&u.push(r);const f=n.default.createElement("div",{className:u.join(" "),tabIndex:"-1",role:"dialog",style:{display:o?"block":"none"},onClick:this.handleModalClick},n.default.createElement(a,{role:"document",onClick:this.handleDialogClick},n.default.createElement(l,null,t))),c=[];o&&c.push("open"),r&&c.push(r);const s=n.default.createElement(d,{className:c.join(" "),style:{display:o?"block":"none"}});return n.default.createElement(n.default.Fragment,null,(0,i.createUniversalPortal)(f,"#modal-root"),(0,i.createUniversalPortal)(s,"#modal-root"))}}u(f,"propTypes",{title:r.default.string,open:r.default.bool,effect:r.default.string,onClose:r.default.func,Dialog:r.default.func,Content:r.default.func,Backdrop:r.default.func}),u(f,"defaultProps",{open:!1,effect:"fade",onClose:()=>{},Dialog:l.Dialog,Content:l.Content,Backdrop:l.Backdrop});var c=(0,a.default)(f)`
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

	transition: opacity .15s linear;

	&, *, ::before, ::after {
		box-sizing: border-box;
	}

	&.open {
		overflow-x: hidden;
		overflow-y: auto;
	}

	&.open ${l.Dialog} {
		-webkit-transform: translate(0,0);
		transform: translate(0,0);
	}
`;t.default=c},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-portal-universal")}]);
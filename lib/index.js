(()=>{"use strict";var e={522:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},r=this&&this.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=l(o(689)),s=a(o(375));t.default=function(e){var{children:t}=e,o=r(e,["children"]);return d.default.createElement(s.CloseButton,Object.assign({},o),t||d.default.createElement("span",{"aria-hidden":"true"},"×"))}},917:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(o(689)),d=r(o(405)),s=r(o(580)),c=o(610),u=a(o(375));class h extends l.default.Component{constructor(e){super(e),this.modalRef=l.default.createRef(),this.dialogRef=l.default.createRef(),this.classTimeoutId=null,this.clickFromDialog=!1,this.handleTransitionEnd=()=>{this.setState({displayed:!1,hasOpenClass:!1}),this.clearTransitionEndHandler()},this.handleModalClick=()=>{this.clickFromDialog?this.clickFromDialog=!1:this.props.onClose&&this.props.onClose()},this.handleDialogClick=()=>{this.clickFromDialog=!0},this.handleKeyUp=e=>{("Escape"===e.key||27===e.keyCode)&&this.props.closeOnEsc&&this.props.onClose&&this.props.onClose()},this.state={open:e.open,displayed:e.open,hasOpenClass:e.open,id:e.provider.generateId(),elevation:0}}static getDerivedStateFromProps(e,t){const o=e.open===t.open?null:{open:e.open,displayed:"none"!==e.effect||e.open,hasOpenClass:"none"===e.effect&&e.open};return e.open&&!t.open?o.elevation=e.provider.popup(t.id):!e.open&&t.open&&e.provider.hide(t.id),o}chargeClassTimeoutId(){this.classTimeoutId=setTimeout((()=>{this.setState({displayed:!0,hasOpenClass:!0}),this.classTimeoutId=null}),0)}clearClassTimeoutId(){this.classTimeoutId&&(clearTimeout(this.classTimeoutId),this.classTimeoutId=null)}chargeTransitionEndHandler(){this.dialogRef.current.addEventListener((0,c.transitionEndEvent)(),this.handleTransitionEnd)}clearTransitionEndHandler(){this.dialogRef.current.removeEventListener((0,c.transitionEndEvent)(),this.handleTransitionEnd)}addBodyClass(){document.body.classList.add("modal-open")}removeBodyClass(){document.body.classList.remove("modal-open")}componentWillUnmount(){this.removeBodyClass(),this.clearClassTimeoutId(),this.clearTransitionEndHandler()}render(){if("undefined"==typeof document)return null;const{className:e,centered:t,size:o,children:n,effect:i,Dialog:a,Content:r,Backdrop:s}=this.props,{displayed:h,hasOpenClass:p,elevation:f}=this.state,m=[e];p&&m.push("open"),i&&m.push(i),t&&m.push("centered"),o&&m.push(o);const y=l.default.createElement(u.Modal,{className:m.join(" "),style:{display:h?"block":"none",zIndex:(0,c.theme)("zIndex",1072)(this.props)+f},onClick:this.handleModalClick,onKeyUp:this.handleKeyUp,ref:this.modalRef},l.default.createElement(u.GlobalStyle,null),l.default.createElement(a,{ref:this.dialogRef,onClick:this.handleDialogClick},l.default.createElement(r,null,n))),b=[];p&&b.push("open"),i&&b.push(i);const g=l.default.createElement(s,{className:b.join(" "),style:{display:h?"block":"none",zIndex:(0,c.theme)("zIndex",1072)(this.props)+f-1}});return l.default.createElement(l.default.Fragment,null,d.default.createPortal(y,document.body),d.default.createPortal(g,document.body))}componentDidUpdate(e,t){this.state.displayed&&!t.displayed?this.addBodyClass():!this.state.displayed&&t.displayed&&this.removeBodyClass(),"none"!==this.props.effect&&this.state.displayed&&!this.state.hasOpenClass&&(this.clearClassTimeoutId(),this.clearTransitionEndHandler(),this.state.open?(this.chargeClassTimeoutId(),this.hasFocus()||this.focus()):this.chargeTransitionEndHandler())}focus(){this.modalRef.current.focus()}hasFocus(){let e=document.activeElement;const t=this.modalRef.current;for(;e;){if(e===t)return!0;e=e.parentElement}return!1}}t.default=h,h.propTypes={className:s.default.string,open:s.default.bool,effect:s.default.oneOf(["none","fade"]),centered:s.default.bool,size:s.default.oneOf(["small","medium","large"]),closeOnEsc:s.default.bool,onClose:s.default.func,Dialog:s.default.elementType,Content:s.default.elementType,Backdrop:s.default.elementType,provider:s.default.object.isRequired},h.defaultProps={size:"medium",open:!1,effect:"fade",centered:!1,closeOnEsc:!0,Dialog:u.Dialog,Content:u.Content,Backdrop:u.Backdrop}},838:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(o(689)),d=r(o(522)),s=a(o(805)),c=r(o(917)),u=a(o(375));class h extends l.Component{render(){return l.default.createElement(s.ModalContext.Consumer,null,(e=>l.default.createElement(c.default,Object.assign({},this.props,{provider:e}))))}}t.default=h,h.Provider=s.default,h.Dialog=u.Dialog,h.Content=u.Content,h.Backdrop=u.Backdrop,h.Header=u.Header,h.Body=u.Body,h.Footer=u.Footer,h.Title=u.Title,h.CloseButton=d.default},805:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContext=void 0;const i=n(o(689));t.ModalContext=i.default.createContext({generateId:()=>-1,popup:()=>0,hide:()=>{}});class a extends i.default.PureComponent{constructor(){super(...arguments),this.state={lastModalId:0,maxElevation:0,stack:[]},this.iface={generateId:this.generateId.bind(this),popup:this.popup.bind(this),hide:this.hide.bind(this)}}generateId(){return++this.state.lastModalId}popup(e){return this.state.maxElevation+=2,this.state.stack.push({id:e,elevation:this.state.maxElevation}),this.state.maxElevation}hide(e){const t=this.state.stack.findIndex((t=>t.id===e));t>=0&&(this.state.stack.splice(t,1),this.state.maxElevation=this.findMaxElevation())}findMaxElevation(){return this.state.stack.reduce(((e,t)=>Math.max(e,t.elevation)),0)}render(){return i.default.createElement(t.ModalContext.Provider,{value:this.iface},this.props.children)}}t.default=a},610:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.theme=t.transitionEndEvent=void 0;let o="";t.transitionEndEvent=function(){if(!o){const e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=document.createElement("div");for(const n of Object.keys(e))if(void 0!==t.style[n]){o=e[n];break}}return o};t.theme=(e,t)=>o=>{const n=o.theme&&o.theme.modal&&o.theme.modal[e];return void 0!==n?n:t}},965:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(o(838));t.default=i.default},375:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=t.Backdrop=t.Footer=t.Header=t.CloseButton=t.Title=t.Body=t.Content=t.Dialog=t.GlobalStyle=void 0;const r=a(o(518)),l=o(610);t.GlobalStyle=r.createGlobalStyle`
  .modal-open {
    overflow: hidden !important;
  }
`,t.Dialog=r.default.div.attrs({role:"document"}).withConfig({displayName:"Dialog",componentId:"-1mucdf8"})`
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
  color: ${(0,l.theme)("textColor","inherit")};

  @media (min-width: 576px) {
    max-width: ${(0,l.theme)("mediumWidth","500px")};
    margin: 1.75rem auto;
  }
`,t.Content=r.default.div.withConfig({displayName:"Content",componentId:"-a8g57t"})`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: ${(0,l.theme)("backgroundColor","#fff")};
  background-clip: padding-box;
  border: ${(0,l.theme)("borderWidth","1px")} solid ${(0,l.theme)("borderColor","rgba(0,0,0,.2)")};
  border-radius: ${(0,l.theme)("borderRadius",".3rem")};
  box-shadow: ${(0,l.theme)("boxShadow","none")};
  outline: ${(0,l.theme)("outline",0)};
`,t.Body=r.default.div.withConfig({displayName:"Body",componentId:"-iswecj"})`
  position: relative;
  flex: 1 1 auto;
  padding: ${(0,l.theme)("bodyPadding","1rem")};
  background-color: ${(0,l.theme)("bodyColor","transparent")};
`,t.Title=r.default.h5.withConfig({displayName:"Title",componentId:"-53yww0"})`
  margin: 0;
  line-height: ${(0,l.theme)("titleLineHeight",1.5)};
  font-size: ${(0,l.theme)("titleFontSize","1.25rem")};
  font-family: ${(0,l.theme)("titleFontFamily","inherit")};
  font-weight: ${(0,l.theme)("titleFontWeight",500)};
  color: ${(0,l.theme)("titleTextColor","inherit")};
`,t.CloseButton=r.default.button.attrs({type:"button","aria-label":"Close","data-dismiss":"modal"}).withConfig({displayName:"CloseButton",componentId:"-1fpccu9"})`
  float: right;
  font-size: ${(0,l.theme)("closeButtonFontSize","1.5rem")};
  font-weight: ${(0,l.theme)("closeButtonFontWeight",700)};
  line-height: ${(0,l.theme)("closeButtonLineHeight",1.25)};
  color: ${(0,l.theme)("closeButtonTextColor","#000")};
  text-shadow: ${(0,l.theme)("closeButtonTextShadow","0 1px 0 #fff")};
  opacity: ${(0,l.theme)("closeButtonOpacity",.5)};
  background: ${(0,l.theme)("closeButtonBackground","transparent")};
  border: ${(0,l.theme)("closeButtonBorder",0)};
  -webkit-appearance: none;
  padding: ${(0,l.theme)("closeButtonPadding","1rem")};
  text-transform: none;
  font-family: inherit;
  transition: opacity 200ms ease;
  outline: none;

  &:hover {
    opacity: ${(0,l.theme)("closeButtonHoverOpacity",.6)};
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`,t.Header=r.default.div.withConfig({displayName:"Header",componentId:"-raxee"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${(0,l.theme)("headerPadding","1rem")};
  border-bottom: ${(0,l.theme)("headerBorderBottom","1px solid #e9ecef")};;
  border-top-left-radius: ${(0,l.theme)("borderRadius",".3rem")};
  border-top-right-radius: ${(0,l.theme)("borderRadius",".3rem")};
  background-color: ${(0,l.theme)("headerColor","transparent")};

  ${t.CloseButton} {
    margin:
      -${(0,l.theme)("headerPadding","1rem")}
      -${(0,l.theme)("headerPadding","1rem")}
      -${(0,l.theme)("headerPadding","1rem")}
      auto;
  }
`,t.Footer=r.default.div.withConfig({displayName:"Footer",componentId:"-1h7bsix"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${(0,l.theme)("footerPadding","1rem")};
  border-top: ${(0,l.theme)("footerBorderTop","1px solid #e9ecef")};
  background-color: ${(0,l.theme)("footerColor","transparent")};
`,t.Backdrop=r.default.div.withConfig({displayName:"Backdrop",componentId:"-yun6o0"})`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(0,l.theme)("backdropZIndex",1040)};
  background-color: ${(0,l.theme)("backdropColor","#000")};

  &.fade {
    transition: opacity .15s linear;
    opacity: 0;
    &.open {
      opacity: ${(0,l.theme)("backdropOpacity",.5)};
    }
  }

  &.none {
    opacity: ${(0,l.theme)("backdropOpacity",.5)};
  }
`,t.Modal=r.default.div.attrs({tabIndex:-1,role:"dialog"}).withConfig({displayName:"Modal",componentId:"-bnfawj"})`
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

  &.fade ${t.Dialog} {
    transition: transform .3s ease-out;
    transform: translate(0,-25%);
  }

  &.open ${t.Dialog} {
    transform: translate(0,0);
  }

  &.centered ${t.Dialog} {
    display: flex;
    align-items: center;
    min-height: calc(100% - (1.75rem * 2));

    &::before {
      content: '';
      display: block;
      height: calc(100vh - (1.75rem * 2));
    }
  }

  &.small ${t.Dialog} {
    @media (min-width: 576px) {
      max-width: ${(0,l.theme)("smallWidth","300px")};
    }
  }

  &.large ${t.Dialog} {
    @media (min-width: 576px) {
      max-width: ${(0,l.theme)("largeWidth","800px")};
    }
  }
`},580:e=>{e.exports=require("prop-types")},689:e=>{e.exports=require("react")},405:e=>{e.exports=require("react-dom")},518:e=>{e.exports=require("styled-components")}},t={};var o=function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}(965);module.exports["react-styled-modal"]=o})();
//# sourceMappingURL=index.js.map
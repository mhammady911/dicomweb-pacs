(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1062:function(e,t,n){},1104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(9),s=n.n(c),l=(n(1062),n(6)),u=n.n(l);function p(e,t){if(null!==e)return parseFloat(e).toFixed(t)}var f=n(17),d=n.n(f),m=n(19),y=n(83),v=n(76);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S,O,D,E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,I(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.imageId,n=e.scale,r=e.windowWidth,o=e.windowCenter,i=e.inconsistencyWarnings;if(!t)return null;var c,l=p(100*n,0),f=s.a.metaData.get("generalSeriesModule",t)||{},g=s.a.metaData.get("imagePlaneModule",t)||{},w=g.rows,b=g.columns,I=g.sliceThickness,h=g.sliceLocation,S=f.seriesNumber,O=f.seriesDescription,D=s.a.metaData.get("generalStudyModule",t)||{},E=D.studyDate,P=D.studyTime,x=D.studyDescription,j=s.a.metaData.get("patientModule",t)||{},k=j.patientId,U=j.patientName,C=(s.a.metaData.get("generalImageModule",t)||{}).instanceNumber,F=p(1e3/(s.a.metaData.get("cineModule",t)||{}).frameTime,1),N=function(e){var t=cornerstone.metaData.get("generalImageModule",e)||{},n=t.lossyImageCompression,r=t.lossyImageCompressionRatio,a=t.lossyImageCompressionMethod;return"01"===n&&""!==r?(a||"Lossy: ")+p(r,2)+" : 1":"Lossless / Uncompressed"}(t),M="W: ".concat(r.toFixed?r.toFixed(0):r," L: ").concat(r.toFixed?o.toFixed(0):o),R="".concat(b," x ").concat(w),_=this.props,T=_.imageIndex,V=_.stackSize,q=!(!i||0===i.length),H=function(e){if(Array.isArray(e)){var t=e.map((function(e,t){return a.a.createElement("li",{key:t},e)}));return a.a.createElement("ol",null,t)}return a.a.createElement(a.a.Fragment,null,e)},Y=a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"top-left overlay-element"},a.a.createElement("div",null,function(e){if(e)return e.replace("^",", ").replace(/\^/g," ").trim()}(U)),a.a.createElement("div",null,k)),a.a.createElement("div",{className:"top-right overlay-element"},a.a.createElement("div",null,x),a.a.createElement("div",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMM D, YYYY";return u()(e,"YYYYMMDD").format(t)}(E)," ",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm:ss";return u()(e,"HH:mm:ss").format(t)}(P))),a.a.createElement("div",{className:"bottom-right overlay-element"},a.a.createElement("div",null,"Zoom: ",l,"%"),a.a.createElement("div",null,M),a.a.createElement("div",{className:"compressionIndicator"},N)),a.a.createElement("div",{className:"bottom-left2 warning"},a.a.createElement("div",null,q?function(e,t){return a.a.createElement(a.a.Fragment,null,0!=t.length?a.a.createElement(v.a,{key:e,placement:"left",overlay:a.a.createElement(y.a,{placement:"left",className:"in tooltip-warning",id:"tooltip-left"},a.a.createElement("div",{className:"warningTitle"},"Series Inconsistencies"),a.a.createElement("div",{className:"warningContent"},H(t)))},a.a.createElement("div",{className:d()("warning")},a.a.createElement("span",{className:"warning-icon"},a.a.createElement(m.a,{name:"exclamation-triangle"})))):a.a.createElement(a.a.Fragment,null))}(S,i):"")),a.a.createElement("div",{className:"bottom-left overlay-element"},a.a.createElement("div",null,S>=0?"Ser: ".concat(S):""),a.a.createElement("div",null,V>1?"Img: ".concat(C," ").concat(T,"/").concat(V):""),a.a.createElement("div",null,F>=0?"".concat(p(F,2)," FPS"):"",a.a.createElement("div",null,R),a.a.createElement("div",null,"number"!=typeof(c=h)||isNaN(c)?"":"Loc: ".concat(p(h,2)," mm "),I?"Thick: ".concat(p(I,2)," mm"):""),a.a.createElement("div",null,O))));return a.a.createElement("div",{className:"OHIFCornerstoneViewportOverlay"},Y)}}])&&w(n.prototype,r),o&&w(n,o),t}(r.PureComponent);S=E,O="propTypes",D={scale:i.a.number.isRequired,windowWidth:i.a.oneOfType([i.a.number.isRequired,i.a.string.isRequired]),windowCenter:i.a.oneOfType([i.a.number.isRequired,i.a.string.isRequired]),imageId:i.a.string.isRequired,imageIndex:i.a.number.isRequired,stackSize:i.a.number.isRequired,inconsistencyWarnings:i.a.array.isRequired},O in S?Object.defineProperty(S,O,{value:D,enumerable:!0,configurable:!0,writable:!0}):S[O]=D;var P=E,x=n(1063),j=n.n(x),k=n(16),U=n(61),C=n(199),F=n.n(C),N=n(60);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=k.a.redux.actions,T=_.setViewportActive,V=_.setViewportSpecificData,q=k.a.measurements.MeasurementHandlers,H=q.onAdded,Y=q.onRemoved,A=q.onModified,W={added:H,removed:Y,modified:F()((function(e){return A(e)}),300)},L=Object(U.b)((function(e,t){var n;e.extensions&&e.extensions.cornerstone&&(n=e.extensions.cornerstone);var r=t.viewportIndex,a=r===e.viewports.activeViewportIndex,o=e.viewports.viewportSpecificData[r]||{},i=!1,c=24;if(o&&o.cine){var s=o.cine;i=!0===s.isPlaying,c=s.cineFrameRate||c}return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActive:a},n,{isStackPrefetchEnabled:a,isPlaying:i,frameRate:c})}),(function(e,t){var n=t.viewportIndex;return{setViewportActive:function(){e(T(n))},setViewportSpecificData:function(t){e(V(n,t))},onElementEnabled:function(t){var r=t.detail.element;Object(N.b)(n,r),e(V(n,{plugin:"cornerstone"}))},onMeasurementsChanged:function(e,t){return W[t](e)}}}))(j.a);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=k.a.utils.StackManager,ee=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=this,n=!(a=(e=G(t)).call.apply(e,[this].concat(i)))||"object"!==z(a)&&"function"!=typeof a?K(r):a,X(K(n),"state",{viewportData:null}),X(K(n),"getViewportData",function(){var e,n=(e=regeneratorRuntime.mark((function e(n,r,a,o,i){var c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.getCornerstoneStack(n,r,a,o,i),c={StudyInstanceUID:r,displaySetInstanceUID:a,stack:s},e.abrupt("return",c);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Z(o,r,a,i,c,"next",e)}function c(e){Z(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(e,t,r,a,o){return n.apply(this,arguments)}}()),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,e),n=t,o=[{key:"init",value:function(){console.log("OHIFCornerstoneViewport init()")}},{key:"destroy",value:function(){console.log("OHIFCornerstoneViewport destroy()"),$.clearStacks()}},{key:"getCornerstoneStack",value:function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(!e||!e.length)throw new Error("Studies not provided.");if(!t)throw new Error("StudyInstanceUID not provided.");if(!n)throw new Error("StudyInstanceUID not provided.");var o=e.find((function(e){return e.StudyInstanceUID===t}));if(!o)throw new Error("Study not found.");var i=o.displaySets.find((function(e){return e.displaySetInstanceUID===n}));if(!i)throw new Error("Display Set not found.");var c=$.findOrCreateStack(o,i),l=Object.assign({},c);if(l.currentImageIdIndex=a,r){var u=l.imageIds.findIndex((function(e){return s.a.metaData.get("SOPInstanceUID",e)===r}));u>-1?l.currentImageIdIndex=u:console.warn("SOPInstanceUID provided was not found in specified DisplaySet")}return l}}],(r=[{key:"setStateFromProps",value:function(){var e=this,t=this.props.viewportData,n=t.studies,r=t.displaySet,a=r.StudyInstanceUID,o=r.displaySetInstanceUID,i=r.sopClassUIDs,c=r.SOPInstanceUID,s=r.frameIndex;a&&o&&(i&&i.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),this.getViewportData(n,a,o,c,s).then((function(t){e.setState({viewportData:t})})))}},{key:"componentDidMount",value:function(){this.setStateFromProps()}},{key:"componentDidUpdate",value:function(e){var t=this.props.viewportData.displaySet,n=e.viewportData.displaySet;t.displaySetInstanceUID===n.displaySetInstanceUID&&t.SOPInstanceUID===n.SOPInstanceUID&&t.frameIndex===n.frameIndex||this.setStateFromProps()}},{key:"render",value:function(){var e=this,t=null;if(!this.state.viewportData)return null;var n=this.props.viewportIndex,r=this.props.viewportData.displaySet.inconsistencyWarnings,o=this.state.viewportData.stack,i=o.imageIds,c=o.currentImageIdIndex;return this.props.children&&this.props.children.length&&(t=this.props.children.map((function(t,n){return t&&a.a.cloneElement(t,{viewportIndex:e.props.viewportIndex,key:n})}))),a.a.createElement(a.a.Fragment,null,a.a.createElement(L,J({viewportIndex:n,imageIds:i,imageIdIndex:c,onNewImageDebounced:function(t){var r=t.currentImageIdIndex,a=t.sopInstanceUid,o=e.props.viewportData.displaySet.StudyInstanceUID;r>=0&&e.props.onNewImage({StudyInstanceUID:o,SOPInstanceUID:a,frameIndex:r,activeViewportIndex:n})},onNewImageDebounceTime:300,viewportOverlayComponent:function(e){return a.a.createElement(P,J({},e,{inconsistencyWarnings:r}))}},this.props.customProps)),t)}}])&&B(n.prototype,r),o&&B(n,o),t}(r.Component);X(ee,"defaultProps",{customProps:{}}),X(ee,"propTypes",{studies:i.a.object,displaySet:i.a.object,viewportIndex:i.a.number,children:i.a.node,customProps:i.a.object}),X(ee,"id","OHIFCornerstoneViewport");t.default=ee}}]);
//# sourceMappingURL=16.bundle.c6bf83898f1f11034549.js.map
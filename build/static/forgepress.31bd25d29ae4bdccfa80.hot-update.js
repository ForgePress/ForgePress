webpackHotUpdate("forgepress",{

/***/ "./packages/frontity-chakra-theme/src/components/index.js":
/*!****************************************************************!*\
  !*** ./packages/frontity-chakra-theme/src/components/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _archive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./archive */ \"./packages/frontity-chakra-theme/src/components/archive/index.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./packages/frontity-chakra-theme/src/components/footer.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header */ \"./packages/frontity-chakra-theme/src/components/header/index.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading */ \"./packages/frontity-chakra-theme/src/components/loading.js\");\n/* harmony import */ var _page404__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page404 */ \"./packages/frontity-chakra-theme/src/components/page404.js\");\n/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post */ \"./packages/frontity-chakra-theme/src/components/post/post.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search */ \"./packages/frontity-chakra-theme/src/components/search/index.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./title */ \"./packages/frontity-chakra-theme/src/components/title.js\");\n/* harmony import */ var _styles_font_face__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/font-face */ \"./packages/frontity-chakra-theme/src/components/styles/font-face.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// Theme is the root React component of our theme. The one we will export\n// in roots.\nvar Theme=(_ref)=>{var{state,libraries}=_ref;// Get information about the current URL.\nvar data=state.source.get(state.router.link);var parse=libraries.source.parse(state.router.link);// Check if the url is a search type\nvar isSearch=Boolean(parse.query[\"s\"]);var transitions=Object(react_spring__WEBPACK_IMPORTED_MODULE_13__[\"useTransition\"])(state.router.link,null,{/*from:{ opacity:0 },\n    enter:{ opacity: 1 },\n    leave: { opacity:0 , display:\"none\"}\n    */});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"ThemeProvider\"],{theme:_objectSpread(_objectSpread({},_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"theme\"]),{},{fonts:_objectSpread(_objectSpread({},_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].fonts),{},{heading:\"Kelson, system-ui, Helvetica, sans-serif\"}),colors:_objectSpread(_objectSpread({},_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].colors),state.theme.colors)})},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_styles_font_face__WEBPACK_IMPORTED_MODULE_12__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"CSSReset\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_title__WEBPACK_IMPORTED_MODULE_11__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(\"meta\",{name:\"description\",content:state.frontity.description}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(\"html\",{lang:\"en\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"],{as:\"main\",mt:{base:\"40px\",md:\"70px\"},minH:\"calc(100vh - 320px)\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{when:data.isFetching}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_search__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:isSearch}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_post_post__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{when:data.isPostType}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_page404__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:data.is404}))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Theme));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS1jaGFrcmEtdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanM/YzEzMCJdLCJuYW1lcyI6WyJUaGVtZSIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwYXJzZSIsImlzU2VhcmNoIiwiQm9vbGVhbiIsInF1ZXJ5IiwidHJhbnNpdGlvbnMiLCJ1c2VUcmFuc2l0aW9uIiwidGhlbWUiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJmcm9udGl0eSIsImRlc2NyaXB0aW9uIiwiYmFzZSIsIm1kIiwiaXNGZXRjaGluZyIsImlzUG9zdFR5cGUiLCJpczQwNCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrOUJBZUE7QUFDQTtBQUNBLEdBQU1BLE1BQUssQ0FBRyxRQUEwQixJQUF6QixDQUFFQyxLQUFGLENBQVNDLFNBQVQsQ0FBeUIsTUFDdEM7QUFDQSxHQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEdBQU1DLE1BQUssQ0FBR04sU0FBUyxDQUFDRSxNQUFWLENBQWlCSSxLQUFqQixDQUF1QlAsS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQXBDLENBQWQsQ0FDQTtBQUNBLEdBQU1FLFNBQVEsQ0FBR0MsT0FBTyxDQUFDRixLQUFLLENBQUNHLEtBQU4sQ0FBWSxHQUFaLENBQUQsQ0FBeEIsQ0FFQSxHQUFNQyxZQUFXLENBQUdDLG1FQUFhLENBQUNaLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUFkLENBQW9CLElBQXBCLENBQTJCLENBQzFEO0FBQ0o7QUFDQTtBQUNBLE1BSjhELENBQTNCLENBQWpDLENBT0EsTUFDRSw0REFBQyw2REFBRCxFQUNFLEtBQUssZ0NBQ0FPLHFEQURBLE1BRUhDLEtBQUssZ0NBQ0FELHFEQUFLLENBQUNDLEtBRE4sTUFFSEMsT0FBTyxDQUFFLDBDQUZOLEVBRkYsQ0FNSEMsTUFBTSxnQ0FBT0gscURBQUssQ0FBQ0csTUFBYixFQUF3QmhCLEtBQUssQ0FBQ2EsS0FBTixDQUFZRyxNQUFwQyxDQU5ILEVBRFAsRUFVRSwyREFBQywwREFBRCxNQVZGLENBV0UsMkRBQUMsd0RBQUQsTUFYRixDQWFFLDJEQUFDLCtDQUFELE1BYkYsQ0FjRSwyREFBQyw2Q0FBRCxNQUNFLG1FQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBRWhCLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZUMsV0FBakQsRUFERixDQUVFLG1FQUFNLElBQUksQ0FBQyxJQUFYLEVBRkYsQ0FkRixDQW9CRSwyREFBQywrQ0FBRCxNQXBCRixDQXdCRSwyREFBQyxtREFBRCxFQUNFLEVBQUUsQ0FBQyxNQURMLENBRUUsRUFBRSxDQUFFLENBQUVDLElBQUksQ0FBRSxNQUFSLENBQWdCQyxFQUFFLENBQUUsTUFBcEIsQ0FGTixDQUdFLElBQUksQ0FBQyxxQkFIUCxFQU1FLDJEQUFDLG1FQUFELE1BQ0UsMkRBQUMsZ0RBQUQsRUFBUyxJQUFJLENBQUVsQixJQUFJLENBQUNtQixVQUFwQixFQURGLENBRUUsMkRBQUMsZ0RBQUQsRUFBZSxJQUFJLENBQUViLFFBQXJCLEVBRkYsQ0FHRSwyREFBQyxrREFBRCxFQUFNLElBQUksQ0FBRU4sSUFBSSxDQUFDb0IsVUFBakIsRUFIRixDQUlFLDJEQUFDLGdEQUFELEVBQVMsSUFBSSxDQUFFcEIsSUFBSSxDQUFDcUIsS0FBcEIsRUFKRixDQU5GLENBeEJGLENBOENFLDJEQUFDLCtDQUFELE1BOUNGLENBREYsQ0FrREQsQ0FoRUQsQ0FrRWVDLHVIQUFPLENBQUN6QixLQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZnJvbnRpdHktY2hha3JhLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDU1NSZXNldCwgdGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBjb25uZWN0LCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBBcmNoaXZlIGZyb20gXCIuL2FyY2hpdmVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4vcGFnZTQwNFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdC9wb3N0XCI7XG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi9zZWFyY2hcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi90aXRsZVwiO1xuaW1wb3J0IEZvbnRGYWNlIGZyb20gXCIuL3N0eWxlcy9mb250LWZhY2VcIjtcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24sIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuXG4vLyBUaGVtZSBpcyB0aGUgcm9vdCBSZWFjdCBjb21wb25lbnQgb2Ygb3VyIHRoZW1lLiBUaGUgb25lIHdlIHdpbGwgZXhwb3J0XG4vLyBpbiByb290cy5cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XG4gIC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgcGFyc2UgPSBsaWJyYXJpZXMuc291cmNlLnBhcnNlKHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gQ2hlY2sgaWYgdGhlIHVybCBpcyBhIHNlYXJjaCB0eXBlXG4gIGNvbnN0IGlzU2VhcmNoID0gQm9vbGVhbihwYXJzZS5xdWVyeVtcInNcIl0pO1xuXG4gIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihzdGF0ZS5yb3V0ZXIubGluaywgbnVsbCAsIHtcbiAgICAvKmZyb206eyBvcGFjaXR5OjAgfSxcbiAgICBlbnRlcjp7IG9wYWNpdHk6IDEgfSxcbiAgICBsZWF2ZTogeyBvcGFjaXR5OjAgLCBkaXNwbGF5Olwibm9uZVwifVxuICAgICovXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXJcbiAgICAgIHRoZW1lPXt7XG4gICAgICAgIC4uLnRoZW1lLFxuICAgICAgICBmb250czoge1xuICAgICAgICAgIC4uLnRoZW1lLmZvbnRzLFxuICAgICAgICAgIGhlYWRpbmc6IFwiS2Vsc29uLCBzeXN0ZW0tdWksIEhlbHZldGljYSwgc2Fucy1zZXJpZlwiXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yczogeyAuLi50aGVtZS5jb2xvcnMsIC4uLnN0YXRlLnRoZW1lLmNvbG9ycyB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb250RmFjZSAvPlxuICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICB7LyogQWRkIHNvbWUgbWV0YXRhZ3MgdG8gdGhlIDxoZWFkPiBvZiB0aGUgSFRNTC4gKi99XG4gICAgICA8VGl0bGUgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtzdGF0ZS5mcm9udGl0eS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIEFkZCB0aGUgaGVhZGVyIG9mIHRoZSBzaXRlLiAqL31cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgey8qIEFkZCB0aGUgbWFpbiBzZWN0aW9uLiBJdCByZW5kZXJzIGEgZGlmZmVyZW50IGNvbXBvbmVudCBkZXBlbmRpbmdcbiAgICAgIG9uIHRoZSB0eXBlIG9mIFVSTCB3ZSBhcmUgaW4uICovfVxuICAgICAgPEJveFxuICAgICAgICBhcz1cIm1haW5cIlxuICAgICAgICBtdD17eyBiYXNlOiBcIjQwcHhcIiwgbWQ6IFwiNzBweFwiIH19XG4gICAgICAgIG1pbkg9XCJjYWxjKDEwMHZoIC0gMzIwcHgpXCJcbiAgICAgID5cblxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxMb2FkaW5nIHdoZW49e2RhdGEuaXNGZXRjaGluZ30gLz5cbiAgICAgICAgICA8U2VhcmNoUmVzdWx0cyB3aGVuPXtpc1NlYXJjaH0gLz5cbiAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgPFBhZ2U0MDQgd2hlbj17ZGF0YS5pczQwNH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIHsvKnsoZGF0YS5pc0ZldGNoaW5nICYmIDxMb2FkaW5nIC8+KSB8fFxuICAgICAgKGlzU2VhcmNoICYmIDxTZWFyY2hSZXN1bHRzIC8+KSB8fFxuICAgICAgKGRhdGEuaXNBcmNoaXZlICYmIDxBcmNoaXZlIC8+KSB8fFxuICAgICAgKGRhdGEuaXNQb3N0VHlwZSAmJiA8UG9zdCAvPikgfHxcbiAgICAgIChkYXRhLmlzNDA0ICYmIDxQYWdlNDA0IC8+KX0gKi99XG5cblxuXG4gICAgICA8L0JveD5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/frontity-chakra-theme/src/components/index.js\n");

/***/ })

})
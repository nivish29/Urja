/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d2eb98e4ad95\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzZlMTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkMmViOThlNGFkOTVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Sidebars/grantPromoCodeSidebar.jsx":
/*!***********************************************************!*\
  !*** ./app/components/Sidebars/grantPromoCodeSidebar.jsx ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import { ArrowRightToLine, Pencil } from \"lucide-react\"\n// import { useRef, useState } from \"react\"\n// const PromoCodeSideBar = () => {\n//   return (\n//     <div className=\" h-full flex flex-col justify-between\">\n//       <div className=\"p-5 overflow-y-auto\">\n//         <div className=\"flex items-center mb-8\">\n//           <ArrowRightToLine />\n//           <div className=\"text-xl font-light ml-4\">Generate Promo Code</div>\n//         </div>\n//         {/*form */}\n//         <h1 className=\"text-lg font-normal mt-8 mb-4\">\n//           Promo Code Information\n//         </h1>\n//         <form action=\"\">\n//           <div className=\"grid grid-cols-2 gap-3\">\n//             <div>\n//               <h1 className=\"font-normal text-sm mb-2 \">Unique Promo Code</h1>\n//               <input\n//                 type=\"text\"\n//                 className=\"border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm\"\n//                 placeholder=\"wiko@example.com\" // Hint text\n//                 name=\"email\"\n//               />\n//             </div>\n//             <div>\n//               <h1 className=\"font-normal text-sm   mb-2\">\n//                 Number of Questions\n//               </h1>\n//               <input\n//                 type=\"text\"\n//                 className=\"border h-8 rounded-md  border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm\"\n//                 placeholder=\"3\" // Hint text\n//                 name=\"firstName\"\n//               />\n//             </div>\n//           </div>\n//           <div>\n//             <h1 className=\"font-normal text-sm mb-2 mt-4 \">Expiry Date</h1>\n//             <input\n//               type=\"date\"\n//               className=\"border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm\"\n//               placeholder=\"dd/mm/yyyy\" // Hint text\n//               name=\"startdate\"\n//             />\n//           </div>\n//         </form>\n//       </div>\n//       <div className=\"ml-auto pr-5\">\n//         <button\n//           type=\"submit\"\n//           className=\"bg-black text-white px-10 py-2 rounded-lg mt-5 mb-2 hover:scale-95 hover:bg-neutral-800 transition-all duration-300\"\n//         >\n//           Grant\n//         </button>\n//       </div>\n//     </div>\n//   )\n// }\n// export default PromoCodeSideBar\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NpZGViYXJzL2dyYW50UHJvbW9Db2RlU2lkZWJhci5qc3giLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBQzFELDJDQUEyQztBQUUzQyxtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLDhEQUE4RDtBQUM5RCw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELGlDQUFpQztBQUNqQywrRUFBK0U7QUFDL0UsaUJBQWlCO0FBRWpCLHNCQUFzQjtBQUN0Qix5REFBeUQ7QUFDekQsbUNBQW1DO0FBQ25DLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IscURBQXFEO0FBQ3JELG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QixtSUFBbUk7QUFDbkksOERBQThEO0FBQzlELCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQiw0REFBNEQ7QUFDNUQsc0NBQXNDO0FBQ3RDLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsOEJBQThCO0FBQzlCLG9JQUFvSTtBQUNwSSwrQ0FBK0M7QUFDL0MsbUNBQW1DO0FBQ25DLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQiw4RUFBOEU7QUFDOUUscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QixpSUFBaUk7QUFDakksc0RBQXNEO0FBQ3RELGlDQUFpQztBQUNqQyxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsdUNBQXVDO0FBQ3ZDLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsNElBQTRJO0FBQzVJLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixhQUFhO0FBQ2IsTUFBTTtBQUNOLElBQUk7QUFDSixrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2lkZWJhcnMvZ3JhbnRQcm9tb0NvZGVTaWRlYmFyLmpzeD9lMWJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEFycm93UmlnaHRUb0xpbmUsIFBlbmNpbCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxuLy8gaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbi8vIGNvbnN0IFByb21vQ29kZVNpZGVCYXIgPSAoKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBvdmVyZmxvdy15LWF1dG9cIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi04XCI+XG4vLyAgICAgICAgICAgPEFycm93UmlnaHRUb0xpbmUgLz5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1saWdodCBtbC00XCI+R2VuZXJhdGUgUHJvbW8gQ29kZTwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICB7Lypmb3JtICovfVxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW5vcm1hbCBtdC04IG1iLTRcIj5cbi8vICAgICAgICAgICBQcm9tbyBDb2RlIEluZm9ybWF0aW9uXG4vLyAgICAgICAgIDwvaDE+XG4vLyAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuLy8gICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtc20gbWItMiBcIj5VbmlxdWUgUHJvbW8gQ29kZTwvaDE+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgaC04IHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHctZnVsbCBwbC0zIHBsYWNlaG9sZGVyOmZvbnQtbGlnaHQgdGV4dC1zbSBwbGFjZWhvbGRlcjp0ZXh0LXNtXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIndpa29AZXhhbXBsZS5jb21cIiAvLyBIaW50IHRleHRcbi8vICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuLy8gICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1zbSAgIG1iLTJcIj5cbi8vICAgICAgICAgICAgICAgICBOdW1iZXIgb2YgUXVlc3Rpb25zXG4vLyAgICAgICAgICAgICAgIDwvaDE+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgaC04IHJvdW5kZWQtbWQgIGJvcmRlci1ncmF5LTMwMCB3LWZ1bGwgcGwtMyBwbGFjZWhvbGRlcjpmb250LWxpZ2h0IHRleHQtc20gcGxhY2Vob2xkZXI6dGV4dC1zbVwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzXCIgLy8gSGludCB0ZXh0XG4vLyAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtc20gbWItMiBtdC00IFwiPkV4cGlyeSBEYXRlPC9oMT5cbi8vICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBoLTggcm91bmRlZC1tZCBib3JkZXItZ3JheS0zMDAgdy1mdWxsIHBsLTMgcGxhY2Vob2xkZXI6Zm9udC1saWdodCB0ZXh0LXNtIHBsYWNlaG9sZGVyOnRleHQtc21cIlxuLy8gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIiAvLyBIaW50IHRleHRcbi8vICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0ZGF0ZVwiXG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBwci01XCI+XG4vLyAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlIHB4LTEwIHB5LTIgcm91bmRlZC1sZyBtdC01IG1iLTIgaG92ZXI6c2NhbGUtOTUgaG92ZXI6YmctbmV1dHJhbC04MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIEdyYW50XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IFByb21vQ29kZVNpZGVCYXJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Sidebars/grantPromoCodeSidebar.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/utils/client_wrapper.jsx":
/*!**************************************!*\
  !*** ./app/utils/client_wrapper.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClientWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_SidebarMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/SidebarMain */ \"(app-pages-browser)/./app/utils/SidebarMain.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Sidebars_grantQuestionSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebars/grantQuestionSidebar */ \"(app-pages-browser)/./app/components/Sidebars/grantQuestionSidebar.jsx\");\n/* harmony import */ var _components_Sidebars_grantPromoCodeSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebars/grantPromoCodeSidebar */ \"(app-pages-browser)/./app/components/Sidebars/grantPromoCodeSidebar.jsx\");\n/* harmony import */ var _components_Sidebars_grantPromoCodeSidebar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Sidebars_grantPromoCodeSidebar__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ClientWrapper(param) {\n    let { children } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const isSignInPage = pathname === \"/signin\";\n    const [isGrantSidebarVisible, setGrantSidebarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isPromoCodeSidebarVisible, setPromoCodeSidebarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const toggleGrantSidebar = ()=>{\n        setGrantSidebarVisible((prev)=>!prev);\n    };\n    const togglePromoCodeSidebar = ()=>{\n        setPromoCodeSidebarVisible((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen overflow-hidden\",\n        children: [\n            !isSignInPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_SidebarMain__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onGrantQuestionClick: toggleGrantSidebar,\n                    onPromoCodeClick: togglePromoCodeSidebar\n                }, void 0, false, {\n                    fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow overflow-y-auto p-4 \".concat(isSignInPage ? \"w-full\" : \"\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out \".concat(isGrantSidebarVisible ? \"opacity-50 pointer-events-auto\" : \"opacity-0 pointer-events-none\"),\n                onClick: toggleGrantSidebar\n            }, void 0, false, {\n                fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 right-0 h-full w-[34rem] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out \".concat(isGrantSidebarVisible ? \"translate-x-0\" : \"translate-x-full\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebars_grantQuestionSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out \".concat(isPromoCodeSidebarVisible ? \"opacity-50 pointer-events-auto\" : \"opacity-0 pointer-events-none\"),\n                onClick: togglePromoCodeSidebar\n            }, void 0, false, {\n                fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 right-0 h-full w-[34rem] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out \".concat(isPromoCodeSidebarVisible ? \"translate-x-0\" : \"translate-x-full\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Sidebars_grantPromoCodeSidebar__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                    fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nihalvishwakarma/luminous_hackathon/website/app/utils/client_wrapper.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(ClientWrapper, \"a6wD1m+7/XDKyEbNm+30LxoVcZU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = ClientWrapper;\nvar _c;\n$RefreshReg$(_c, \"ClientWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9jbGllbnRfd3JhcHBlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEM7QUFDQztBQUNkO0FBQzhDO0FBQ0g7QUFFN0QsU0FBU0ssY0FBYyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ3BDLE1BQU1DLFdBQVdQLDREQUFXQTtJQUM1QixNQUFNUSxlQUFlRCxhQUFhO0lBQ2xDLE1BQU0sQ0FBQ0UsdUJBQXVCQyx1QkFBdUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDakUsTUFBTSxDQUFDUywyQkFBMkJDLDJCQUEyQixHQUMzRFYsK0NBQVFBLENBQUM7SUFFWCxNQUFNVyxxQkFBcUI7UUFDekJILHVCQUF1QixDQUFDSSxPQUFTLENBQUNBO0lBQ3BDO0lBQ0EsTUFBTUMseUJBQXlCO1FBQzdCSCwyQkFBMkIsQ0FBQ0UsT0FBUyxDQUFDQTtJQUN4QztJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOztZQUNaLENBQUNULDhCQUNBLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2hCLDBEQUFXQTtvQkFDVmlCLHNCQUFzQkw7b0JBQ3RCTSxrQkFBa0JKOzs7Ozs7Ozs7OzswQkFLeEIsOERBQUNLO2dCQUNDSCxXQUFXLGlDQUVWLE9BRENULGVBQWUsV0FBVzswQkFHM0JGOzs7Ozs7MEJBSUgsOERBQUNVO2dCQUNDQyxXQUFXLDBGQUlWLE9BSENSLHdCQUNJLG1DQUNBO2dCQUVOWSxTQUFTUjs7Ozs7OzBCQUdYLDhEQUFDRztnQkFDQ0MsV0FBVyx3SEFFVixPQURDUix3QkFBd0Isa0JBQWtCOzBCQUc1Qyw0RUFBQ04saUZBQW9CQTs7Ozs7Ozs7OzswQkFJdkIsOERBQUNhO2dCQUNDQyxXQUFXLDBGQUlWLE9BSENOLDRCQUNJLG1DQUNBO2dCQUVOVSxTQUFTTjs7Ozs7OzBCQUdYLDhEQUFDQztnQkFDQ0MsV0FBVyx3SEFFVixPQURDTiw0QkFBNEIsa0JBQWtCOzBCQUdoRCw0RUFBQ1AsbUZBQWdCQTs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QjtHQXRFd0JDOztRQUNMTCx3REFBV0E7OztLQUROSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXRpbHMvY2xpZW50X3dyYXBwZXIuanN4P2I1Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFNpZGViYXJNYWluIGZyb20gXCIuLi91dGlscy9TaWRlYmFyTWFpblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmFudFF1ZXN0aW9uU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFycy9ncmFudFF1ZXN0aW9uU2lkZWJhclwiO1xuaW1wb3J0IFByb21vQ29kZVNpZGVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhcnMvZ3JhbnRQcm9tb0NvZGVTaWRlYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgaXNTaWduSW5QYWdlID0gcGF0aG5hbWUgPT09IFwiL3NpZ25pblwiO1xuICBjb25zdCBbaXNHcmFudFNpZGViYXJWaXNpYmxlLCBzZXRHcmFudFNpZGViYXJWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzUHJvbW9Db2RlU2lkZWJhclZpc2libGUsIHNldFByb21vQ29kZVNpZGViYXJWaXNpYmxlXSA9XG4gICAgdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZUdyYW50U2lkZWJhciA9ICgpID0+IHtcbiAgICBzZXRHcmFudFNpZGViYXJWaXNpYmxlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZVByb21vQ29kZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgc2V0UHJvbW9Db2RlU2lkZWJhclZpc2libGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHshaXNTaWduSW5QYWdlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgPFNpZGViYXJNYWluXG4gICAgICAgICAgICBvbkdyYW50UXVlc3Rpb25DbGljaz17dG9nZ2xlR3JhbnRTaWRlYmFyfVxuICAgICAgICAgICAgb25Qcm9tb0NvZGVDbGljaz17dG9nZ2xlUHJvbW9Db2RlU2lkZWJhcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxtYWluXG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG8gcC00ICR7XG4gICAgICAgICAgaXNTaWduSW5QYWdlID8gXCJ3LWZ1bGxcIiA6IFwiXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIE92ZXJsYXkgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS0xMDAgei00MCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7XG4gICAgICAgICAgaXNHcmFudFNpZGViYXJWaXNpYmxlXG4gICAgICAgICAgICA/IFwib3BhY2l0eS01MCBwb2ludGVyLWV2ZW50cy1hdXRvXCJcbiAgICAgICAgICAgIDogXCJvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgIH1gfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVHcmFudFNpZGViYXJ9XG4gICAgICAvPlxuICAgICAgey8qIFJpZ2h0IFNsaWRpbmcgR3JhbnRRdWVzdGlvbiBTaWRlYmFyICovfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCByaWdodC0wIGgtZnVsbCB3LVszNHJlbV0gYmctd2hpdGUgc2hhZG93LWxnIHotNTAgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke1xuICAgICAgICAgIGlzR3JhbnRTaWRlYmFyVmlzaWJsZSA/IFwidHJhbnNsYXRlLXgtMFwiIDogXCJ0cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxHcmFudFF1ZXN0aW9uU2lkZUJhciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBPdmVybGF5ICovfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMTAwIHotNDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke1xuICAgICAgICAgIGlzUHJvbW9Db2RlU2lkZWJhclZpc2libGVcbiAgICAgICAgICAgID8gXCJvcGFjaXR5LTUwIHBvaW50ZXItZXZlbnRzLWF1dG9cIlxuICAgICAgICAgICAgOiBcIm9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVByb21vQ29kZVNpZGViYXJ9XG4gICAgICAvPlxuICAgICAgey8qIFJpZ2h0IFNsaWRpbmcgUHJvbW9Db2RlIFNpZGViYXIgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIHJpZ2h0LTAgaC1mdWxsIHctWzM0cmVtXSBiZy13aGl0ZSBzaGFkb3ctbGcgei01MCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7XG4gICAgICAgICAgaXNQcm9tb0NvZGVTaWRlYmFyVmlzaWJsZSA/IFwidHJhbnNsYXRlLXgtMFwiIDogXCJ0cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxQcm9tb0NvZGVTaWRlQmFyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VQYXRobmFtZSIsIlNpZGViYXJNYWluIiwidXNlU3RhdGUiLCJHcmFudFF1ZXN0aW9uU2lkZUJhciIsIlByb21vQ29kZVNpZGVCYXIiLCJDbGllbnRXcmFwcGVyIiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsImlzU2lnbkluUGFnZSIsImlzR3JhbnRTaWRlYmFyVmlzaWJsZSIsInNldEdyYW50U2lkZWJhclZpc2libGUiLCJpc1Byb21vQ29kZVNpZGViYXJWaXNpYmxlIiwic2V0UHJvbW9Db2RlU2lkZWJhclZpc2libGUiLCJ0b2dnbGVHcmFudFNpZGViYXIiLCJwcmV2IiwidG9nZ2xlUHJvbW9Db2RlU2lkZWJhciIsImRpdiIsImNsYXNzTmFtZSIsIm9uR3JhbnRRdWVzdGlvbkNsaWNrIiwib25Qcm9tb0NvZGVDbGljayIsIm1haW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/client_wrapper.jsx\n"));

/***/ })

});
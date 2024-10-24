"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/revenue/page",{

/***/ "(app-pages-browser)/./app/components/dailyRevenue.jsx":
/*!*****************************************!*\
  !*** ./app/components/dailyRevenue.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Calendar_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DailyRevenue = ()=>{\n    _s();\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"25-10-2024\");\n    const [showDebitAlert, setShowDebitAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Hardcoded values\n    const totalRevenue = 150000;\n    const withdrawnAmount = 45000;\n    const currentDayRevenue = 5500;\n    const formatIndianNumber = (num)=>{\n        const string = num.toString();\n        let result = \"\";\n        let count = 0;\n        for(let i = string.length - 1; i >= 0; i--){\n            if (count === 3 && result.length === 3) {\n                result = \",\" + result;\n            } else if (count === 5 && result.length >= 6) {\n                result = \",\" + result;\n            } else if (count > 5 && (count - 5) % 2 === 0 && result.length > 6) {\n                result = \",\" + result;\n            }\n            result = string[i] + result;\n            count++;\n        }\n        return result;\n    };\n    const handleDebit = ()=>{\n        setShowDebitAlert(true);\n        setTimeout(()=>setShowDebitAlert(false), 3000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-medium text-gray-800\",\n                    children: \"Daily Revenue Tracker\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"text-gray-400\",\n                                        size: 20\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-600\",\n                                        children: selectedDate\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 md:grid-cols-2 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white p-6 rounded-xl border border-gray-100\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-y-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500\",\n                                                    children: \"Current Revenue\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-baseline\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-2xl font-medium text-blue-600\",\n                                                        children: [\n                                                            \"₹\",\n                                                            formatIndianNumber(currentDayRevenue)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white p-6 rounded-xl border border-gray-100\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-y-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500\",\n                                                    children: \"Total Revenue\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-baseline\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-2xl font-medium text-green-600\",\n                                                        children: [\n                                                            \"₹\",\n                                                            formatIndianNumber(totalRevenue)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white p-6 rounded-xl border border-gray-100 space-y-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-500 mb-2\",\n                                        children: \"Available Balance\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-3xl font-medium text-indigo-600\",\n                                        children: [\n                                            \"₹\",\n                                            formatIndianNumber(totalRevenue - withdrawnAmount)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDebit,\n                                className: \"w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200\",\n                                children: \"Debit Amount\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-500 mb-2\",\n                                        children: \"Withdrawn till date\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-medium text-orange-600\",\n                                        children: [\n                                            \"₹\",\n                                            formatIndianNumber(withdrawnAmount)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            showDebitAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-4 right-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center shadow-lg animate-fade-in\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-2 w-2 bg-green-500 rounded-full mr-2\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-green-700\",\n                        children: \"Debit request has been initiated successfully!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n                lineNumber: 103,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Urja\\\\website\\\\app\\\\components\\\\dailyRevenue.jsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DailyRevenue, \"b7SKtJU6ct1o5fOPI7JRUUus8ho=\");\n_c = DailyRevenue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DailyRevenue);\nvar _c;\n$RefreshReg$(_c, \"DailyRevenue\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2RhaWx5UmV2ZW51ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNBO0FBRXhDLE1BQU1HLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7SUFFckQsbUJBQW1CO0lBQ25CLE1BQU1PLGVBQWU7SUFDckIsTUFBTUMsa0JBQWtCO0lBQ3hCLE1BQU1DLG9CQUFvQjtJQUUxQixNQUFNQyxxQkFBcUIsQ0FBQ0M7UUFDeEIsTUFBTUMsU0FBU0QsSUFBSUUsUUFBUTtRQUMzQixJQUFJQyxTQUFTO1FBQ2IsSUFBSUMsUUFBUTtRQUVaLElBQUssSUFBSUMsSUFBSUosT0FBT0ssTUFBTSxHQUFHLEdBQUdELEtBQUssR0FBR0EsSUFBSztZQUN6QyxJQUFJRCxVQUFVLEtBQUtELE9BQU9HLE1BQU0sS0FBSyxHQUFHO2dCQUNwQ0gsU0FBUyxNQUFNQTtZQUNuQixPQUFPLElBQUlDLFVBQVUsS0FBS0QsT0FBT0csTUFBTSxJQUFJLEdBQUc7Z0JBQzFDSCxTQUFTLE1BQU1BO1lBQ25CLE9BQU8sSUFBSUMsUUFBUSxLQUFLLENBQUNBLFFBQVEsS0FBSyxNQUFNLEtBQUtELE9BQU9HLE1BQU0sR0FBRyxHQUFHO2dCQUNoRUgsU0FBUyxNQUFNQTtZQUNuQjtZQUNBQSxTQUFTRixNQUFNLENBQUNJLEVBQUUsR0FBR0Y7WUFDckJDO1FBQ0o7UUFDQSxPQUFPRDtJQUNYO0lBRUEsTUFBTUksY0FBYztRQUNoQlosa0JBQWtCO1FBQ2xCYSxXQUFXLElBQU1iLGtCQUFrQixRQUFRO0lBQy9DO0lBRUEscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQW9DOzs7Ozs7Ozs7OzswQkFHdEQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNwQixvRkFBUUE7d0NBQUNvQixXQUFVO3dDQUFnQkUsTUFBTTs7Ozs7O2tEQUMxQyw4REFBQ0M7d0NBQUtILFdBQVU7a0RBQWlCbEI7Ozs7Ozs7Ozs7OzswQ0FJckMsOERBQUNpQjtnQ0FBSUMsV0FBVTs7a0RBRVgsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNJO29EQUFFSixXQUFVOzhEQUF3Qjs7Ozs7OzhEQUNyQyw4REFBQ0Q7b0RBQUlDLFdBQVU7OERBQ1gsNEVBQUNHO3dEQUFLSCxXQUFVOzs0REFBcUM7NERBQUVYLG1CQUFtQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU10Riw4REFBQ1c7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNEOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ0k7b0RBQUVKLFdBQVU7OERBQXdCOzs7Ozs7OERBQ3JDLDhEQUFDRDtvREFBSUMsV0FBVTs4REFDWCw0RUFBQ0c7d0RBQUtILFdBQVU7OzREQUFzQzs0REFBRVgsbUJBQW1CSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUS9GLDhEQUFDYTt3QkFBSUMsV0FBVTs7MENBRVgsOERBQUNEOztrREFDRyw4REFBQ0s7d0NBQUVKLFdBQVU7a0RBQTZCOzs7Ozs7a0RBQzFDLDhEQUFDSTt3Q0FBRUosV0FBVTs7NENBQXVDOzRDQUFFWCxtQkFBbUJILGVBQWVDOzs7Ozs7Ozs7Ozs7OzBDQUk1Riw4REFBQ2tCO2dDQUNHQyxTQUFTVDtnQ0FDVEcsV0FBVTswQ0FDYjs7Ozs7OzBDQUtELDhEQUFDRDs7a0RBQ0csOERBQUNLO3dDQUFFSixXQUFVO2tEQUE2Qjs7Ozs7O2tEQUMxQyw4REFBQ0k7d0NBQUVKLFdBQVU7OzRDQUFzQzs0Q0FBRVgsbUJBQW1CRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1uRkgsZ0NBQ0csOERBQUNlO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0k7d0JBQUVKLFdBQVU7a0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQ7R0ExR01uQjtLQUFBQTtBQTRHTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9kYWlseVJldmVudWUuanN4PzM2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcblxyXG5jb25zdCBEYWlseVJldmVudWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGUoJzI1LTEwLTIwMjQnKTtcclxuICAgIGNvbnN0IFtzaG93RGViaXRBbGVydCwgc2V0U2hvd0RlYml0QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIEhhcmRjb2RlZCB2YWx1ZXNcclxuICAgIGNvbnN0IHRvdGFsUmV2ZW51ZSA9IDE1MDAwMDtcclxuICAgIGNvbnN0IHdpdGhkcmF3bkFtb3VudCA9IDQ1MDAwO1xyXG4gICAgY29uc3QgY3VycmVudERheVJldmVudWUgPSA1NTAwO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdEluZGlhbk51bWJlciA9IChudW0pID0+IHtcclxuICAgICAgICBjb25zdCBzdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0cmluZy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDMgJiYgcmVzdWx0Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJywnICsgcmVzdWx0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID09PSA1ICYmIHJlc3VsdC5sZW5ndGggPj0gNikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJywnICsgcmVzdWx0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID4gNSAmJiAoY291bnQgLSA1KSAlIDIgPT09IDAgJiYgcmVzdWx0Lmxlbmd0aCA+IDYpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcsJyArIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgPSBzdHJpbmdbaV0gKyByZXN1bHQ7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlYml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dEZWJpdEFsZXJ0KHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd0RlYml0QWxlcnQoZmFsc2UpLCAzMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cclxuICAgICAgICAgICAgey8qIFRpdGxlIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMFwiPkRhaWx5IFJldmVudWUgVHJhY2tlcjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy1bMmZyLDFmcl0gZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNYWluIENvbnRlbnQgU2VjdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIERhdGUgUGlja2VyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3NlbGVjdGVkRGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBSZXZlbnVlIENhcmRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQ3VycmVudCBSZXZlbnVlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+Q3VycmVudCBSZXZlbnVlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwXCI+4oK5e2Zvcm1hdEluZGlhbk51bWJlcihjdXJyZW50RGF5UmV2ZW51ZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRvdGFsIFJldmVudWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Ub3RhbCBSZXZlbnVlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyZWVuLTYwMFwiPuKCuXtmb3JtYXRJbmRpYW5OdW1iZXIodG90YWxSZXZlbnVlKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUmlnaHQgU2VjdGlvbiAtIEJhbGFuY2UgYW5kIEFjdGlvbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZ3JheS0xMDAgc3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEF2YWlsYWJsZSBCYWxhbmNlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0yXCI+QXZhaWxhYmxlIEJhbGFuY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMFwiPuKCuXtmb3JtYXRJbmRpYW5OdW1iZXIodG90YWxSZXZlbnVlIC0gd2l0aGRyYXduQW1vdW50KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBEZWJpdCBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWJpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBweS0yLjUgcHgtNCByb3VuZGVkLWxnIGhvdmVyOmJnLWluZGlnby03MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlYml0IEFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXduIEFtb3VudCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMlwiPldpdGhkcmF3biB0aWxsIGRhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1vcmFuZ2UtNjAwXCI+4oK5e2Zvcm1hdEluZGlhbk51bWJlcih3aXRoZHJhd25BbW91bnQpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdWNjZXNzIEFsZXJ0ICovfVxyXG4gICAgICAgICAgICB7c2hvd0RlYml0QWxlcnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGJnLWdyZWVuLTUwIGJvcmRlciBib3JkZXItZ3JlZW4tMjAwIHJvdW5kZWQtbGcgcC00IGZsZXggaXRlbXMtY2VudGVyIHNoYWRvdy1sZyBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMiB3LTIgYmctZ3JlZW4tNTAwIHJvdW5kZWQtZnVsbCBtci0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDBcIj5EZWJpdCByZXF1ZXN0IGhhcyBiZWVuIGluaXRpYXRlZCBzdWNjZXNzZnVsbHkhPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFpbHlSZXZlbnVlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FsZW5kYXIiLCJEYWlseVJldmVudWUiLCJzZWxlY3RlZERhdGUiLCJzZXRTZWxlY3RlZERhdGUiLCJzaG93RGViaXRBbGVydCIsInNldFNob3dEZWJpdEFsZXJ0IiwidG90YWxSZXZlbnVlIiwid2l0aGRyYXduQW1vdW50IiwiY3VycmVudERheVJldmVudWUiLCJmb3JtYXRJbmRpYW5OdW1iZXIiLCJudW0iLCJzdHJpbmciLCJ0b1N0cmluZyIsInJlc3VsdCIsImNvdW50IiwiaSIsImxlbmd0aCIsImhhbmRsZURlYml0Iiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic2l6ZSIsInNwYW4iLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dailyRevenue.jsx\n"));

/***/ })

});
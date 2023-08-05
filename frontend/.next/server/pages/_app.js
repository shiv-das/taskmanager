/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./AppContext.js":
/*!***********************!*\
  !*** ./AppContext.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppContextProvider\": () => (/* binding */ AppContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst initialState = {\n    tasks: {},\n    task: {},\n    auth: {\n        isSignedIn: false,\n        user: null\n    }\n};\nconst reducer = (state, action)=>{\n    console.log(action.type);\n    switch(action.type){\n        case \"isAuth\":\n            return {\n                ...state,\n                auth: {\n                    isSignedIn: action.payload.flag,\n                    user: action.payload.user\n                }\n            };\n        case \"createTask\":\n            console.log(action.payload);\n            return {\n                ...state,\n                tasks: {\n                    [action.payload._id]: action.payload,\n                    ...state.tasks\n                }\n            };\n        case \"editTask\":\n            console.log(\"abcd\", action.payload);\n            return {\n                ...state,\n                tasks: {\n                    ...state.tasks,\n                    [action.payload._id]: action.payload\n                }\n            };\n        case \"deleteTask\":\n            return {\n                ...state,\n                tasks: lodash__WEBPACK_IMPORTED_MODULE_2___default().omit(state.tasks, action.payload)\n            };\n        case \"fetchTasks\":\n            return {\n                ...state,\n                tasks: lodash__WEBPACK_IMPORTED_MODULE_2___default().mapKeys(action.payload, \"_id\")\n            };\n        case \"fetchTask\":\n            console.log(action.payload);\n            return {\n                ...state,\n                task: action.payload\n            };\n        case \"searchTasks\":\n            return {\n                ...state,\n                tasks: lodash__WEBPACK_IMPORTED_MODULE_2___default().mapKeys(action.payload, \"_id\")\n            };\n        default:\n            return {\n                ...state\n            };\n    }\n};\nconst AppContextProvider = (props)=>{\n    const appState = {\n        ...initialState\n    };\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, appState);\n    let value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: value,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/rishabhramola/Desktop/taskmanager/frontend/AppContext.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHBDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNsQztBQUV2QixNQUFNSSwyQkFBYUgsb0RBQWFBLENBQUMsQ0FBQztBQUVsQyxNQUFNSSxlQUFlO0lBQ25CQyxPQUFPLENBQUM7SUFDUkMsTUFBTSxDQUFDO0lBQ1BDLE1BQU07UUFDSkMsWUFBWSxLQUFLO1FBQ2pCQyxNQUFNLElBQUk7SUFDWjtBQUNGO0FBRUEsTUFBTUMsVUFBVSxDQUFDQyxPQUFPQyxTQUFXO0lBQ2pDQyxRQUFRQyxHQUFHLENBQUNGLE9BQU9HLElBQUk7SUFDdkIsT0FBUUgsT0FBT0csSUFBSTtRQUNqQixLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHSixLQUFLO2dCQUNSSixNQUFNO29CQUFFQyxZQUFZSSxPQUFPSSxPQUFPLENBQUNDLElBQUk7b0JBQUVSLE1BQU1HLE9BQU9JLE9BQU8sQ0FBQ1AsSUFBSTtnQkFBQztZQUNyRTtRQUNGLEtBQUs7WUFDSEksUUFBUUMsR0FBRyxDQUFDRixPQUFPSSxPQUFPO1lBQzFCLE9BQU87Z0JBQ0wsR0FBR0wsS0FBSztnQkFDUk4sT0FBTztvQkFBRSxDQUFDTyxPQUFPSSxPQUFPLENBQUNFLEdBQUcsQ0FBQyxFQUFFTixPQUFPSSxPQUFPO29CQUFFLEdBQUdMLE1BQU1OLEtBQUs7Z0JBQUM7WUFDaEU7UUFDRixLQUFLO1lBQ0hRLFFBQVFDLEdBQUcsQ0FBQyxRQUFRRixPQUFPSSxPQUFPO1lBQ2xDLE9BQU87Z0JBQ0wsR0FBR0wsS0FBSztnQkFDUk4sT0FBTztvQkFBRSxHQUFHTSxNQUFNTixLQUFLO29CQUFFLENBQUNPLE9BQU9JLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLEVBQUVOLE9BQU9JLE9BQU87Z0JBQUM7WUFDaEU7UUFFRixLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHTCxLQUFLO2dCQUNSTixPQUFPSCxrREFBTSxDQUFDUyxNQUFNTixLQUFLLEVBQUVPLE9BQU9JLE9BQU87WUFDM0M7UUFDRixLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHTCxLQUFLO2dCQUFFTixPQUFPSCxxREFBUyxDQUFDVSxPQUFPSSxPQUFPLEVBQUU7WUFBTztRQUU3RCxLQUFLO1lBQ0hILFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0ksT0FBTztZQUMxQixPQUFPO2dCQUFFLEdBQUdMLEtBQUs7Z0JBQUVMLE1BQU1NLE9BQU9JLE9BQU87WUFBQztRQUUxQyxLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHTCxLQUFLO2dCQUFFTixPQUFPSCxxREFBUyxDQUFDVSxPQUFPSSxPQUFPLEVBQUU7WUFBTztRQUM3RDtZQUNFLE9BQU87Z0JBQUUsR0FBR0wsS0FBSztZQUFDO0lBQ3RCO0FBQ0Y7QUFFQSxNQUFNVSxxQkFBcUIsQ0FBQ0MsUUFBVTtJQUNwQyxNQUFNQyxXQUFXO1FBQUUsR0FBR25CLFlBQVk7SUFBQztJQUVuQyxNQUFNLENBQUNPLE9BQU9hLFNBQVMsR0FBR3ZCLGlEQUFVQSxDQUFDUyxTQUFTYTtJQUU5QyxJQUFJRSxRQUFRO1FBQUVkO1FBQU9hO0lBQVM7SUFFOUIscUJBQ0UsOERBQUNyQixXQUFXdUIsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUUgsTUFBTUssUUFBUTs7Ozs7O0FBRXREO0FBRTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZXhwZW5zZS1tYW5hZ2VyLWZyb250ZW5kLy4vQXBwQ29udGV4dC5qcz8xZDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0YXNrczoge30sXG4gIHRhc2s6IHt9LFxuICBhdXRoOiB7XG4gICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgdXNlcjogbnVsbCxcbiAgfSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiaXNBdXRoXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXV0aDogeyBpc1NpZ25lZEluOiBhY3Rpb24ucGF5bG9hZC5mbGFnLCB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyIH0sXG4gICAgICB9O1xuICAgIGNhc2UgXCJjcmVhdGVUYXNrXCI6XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGFza3M6IHsgW2FjdGlvbi5wYXlsb2FkLl9pZF06IGFjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS50YXNrcyB9LFxuICAgICAgfTtcbiAgICBjYXNlIFwiZWRpdFRhc2tcIjpcbiAgICAgIGNvbnNvbGUubG9nKFwiYWJjZFwiLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGFza3M6IHsgLi4uc3RhdGUudGFza3MsIFthY3Rpb24ucGF5bG9hZC5faWRdOiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgfTtcblxuICAgIGNhc2UgXCJkZWxldGVUYXNrXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGFza3M6IF8ub21pdChzdGF0ZS50YXNrcywgYWN0aW9uLnBheWxvYWQpLFxuICAgICAgfTtcbiAgICBjYXNlIFwiZmV0Y2hUYXNrc1wiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRhc2tzOiBfLm1hcEtleXMoYWN0aW9uLnBheWxvYWQsIFwiX2lkXCIpIH07XG5cbiAgICBjYXNlIFwiZmV0Y2hUYXNrXCI6XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFzazogYWN0aW9uLnBheWxvYWQgfTtcblxuICAgIGNhc2UgXCJzZWFyY2hUYXNrc1wiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRhc2tzOiBfLm1hcEtleXMoYWN0aW9uLnBheWxvYWQsIFwiX2lkXCIpIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gIH1cbn07XG5cbmNvbnN0IEFwcENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhcHBTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlIH07XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGFwcFN0YXRlKTtcblxuICBsZXQgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57cHJvcHMuY2hpbGRyZW59PC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQXBwQ29udGV4dCwgQXBwQ29udGV4dFByb3ZpZGVyIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIl8iLCJBcHBDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwidGFza3MiLCJ0YXNrIiwiYXV0aCIsImlzU2lnbmVkSW4iLCJ1c2VyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiZmxhZyIsIl9pZCIsIm9taXQiLCJtYXBLZXlzIiwiQXBwQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJhcHBTdGF0ZSIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./AppContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppContext */ \"./AppContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst ConnectComponent = ({ Component , pageProps  })=>{\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        router: router\n    }, void 0, false, {\n        fileName: \"/Users/rishabhramola/Desktop/taskmanager/frontend/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, undefined);\n};\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectComponent, {\n            Component: Component,\n            pageProps: pageProps\n        }, void 0, false, {\n            fileName: \"/Users/rishabhramola/Desktop/taskmanager/frontend/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rishabhramola/Desktop/taskmanager/frontend/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3FCO0FBQ1c7QUFDdkI7QUFFeEMsTUFBTU0sbUJBQW1CLENBQUMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBSztJQUNyRCxNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdULGlEQUFVQSxDQUFDRyxtREFBVUE7SUFDakQsTUFBTU8sU0FBU04sc0RBQVNBO0lBRXhCLHFCQUFPLDhEQUFDRTtRQUFXLEdBQUdDLFNBQVM7UUFBRUcsUUFBUUE7Ozs7OztBQUMzQztBQUVBLFNBQVNDLE1BQU0sRUFBRUwsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0wsMkRBQWtCQTtrQkFDakIsNEVBQUNHO1lBQWlCQyxXQUFXQTtZQUFXQyxXQUFXQTs7Ozs7Ozs7Ozs7QUFHekQ7QUFFQSxpRUFBZUksS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWV4cGVuc2UtbWFuYWdlci1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dFByb3ZpZGVyLCBBcHBDb250ZXh0IH0gZnJvbSBcIi4uL0FwcENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBDb25uZWN0Q29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gcm91dGVyPXtyb3V0ZXJ9IC8+O1xufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHRQcm92aWRlcj5cbiAgICAgIDxDb25uZWN0Q29tcG9uZW50IENvbXBvbmVudD17Q29tcG9uZW50fSBwYWdlUHJvcHM9e3BhZ2VQcm9wc30gLz5cbiAgICA8L0FwcENvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0UHJvdmlkZXIiLCJBcHBDb250ZXh0IiwidXNlUm91dGVyIiwiQ29ubmVjdENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
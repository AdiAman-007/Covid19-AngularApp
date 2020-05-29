(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_india2019High__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/india2019High */ "./node_modules/@amcharts/amcharts4-geodata/india2019High.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");












function AppComponent_p_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Recovered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deaths ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_h4_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INDIA MAP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_h4_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r5.stateSelected));
} }
function AppComponent_p_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Recovered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deaths ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_95_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.accordianHeaderMobile.col1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.accordianHeaderMobile.col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.accordianHeaderMobile.col3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.accordianHeaderMobile.col4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.accordianHeaderMobile.col5);
} }
function AppComponent_div_95_div_5_ngb_accordion_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_95_div_5_ngb_accordion_1_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.zoomState(data_r15.statecode, data_r15.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.confirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.recovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.deaths);
} }
function AppComponent_div_95_div_5_ngb_accordion_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-accordion", null, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_95_div_5_ngb_accordion_1_ng_template_3_Template, 11, 5, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_95_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_95_div_5_ngb_accordion_1_Template, 4, 0, "ngb-accordion", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r15.state != "State Unassigned" && data_r15.state != "Total");
} }
function AppComponent_div_95_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_95_div_9_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const page_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.setTablePage(page_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("page-nmbr-active", ctx_r23.pageNmbr == page_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r24 + 1);
} }
function AppComponent_div_95_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_95_div_9_div_1_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.pageList);
} }
function AppComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_95_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-panel", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_95_ng_template_4_Template, 11, 5, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_95_div_5_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_95_div_9_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, ctx_r10.stateData, ctx_r10.searchText), ctx_r10.pageNmbr));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.searchText);
} }
function AppComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 66);
} }
_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
class AppComponent {
    constructor(appService, zone) {
        this.appService = appService;
        this.zone = zone;
        this.title = 'covid19';
        this.weeklyData = [];
        this.chartTotalConfirmedWeekly = [];
        this.chartTotalActiveWeekly = [];
        this.chartTotalRecoveredWeekly = [];
        this.chartTotalDeathsWeekly = [];
        this.chartDailyConfirmed = [];
        this.chartDailyActive = [];
        this.chartDailyRecovered = [];
        this.chartDailyDeaths = [];
        this.mapDataConfirmed = [];
        this.mapDataActive = [];
        this.mapDataRecovered = [];
        this.mapDataDeaths = [];
        this.monthlyData = [];
        this.searchText = "";
        this.stateCode = "";
        this.stateSelected = "";
        this.black = false;
        this.green = false;
        this.red = false;
        this.blue = false;
        this.pageList = [0, 1, 2, 3];
        this.pageNmbr = 0;
        this.accordianHeaderMobile = {
            'col1': 'State',
            'col2': 'Cnf',
            'col3': 'Actv',
            'col4': 'Rcvd',
            'col5': 'Dcsd',
        };
        this.blue = true;
        this.cumulative = true;
        this.showTable = true;
    }
    ngOnInit() {
        try {
            if (window.innerWidth > 500) {
                this.accordianHeaderMobile.col2 = 'Confirmed';
                this.accordianHeaderMobile.col3 = 'Active';
                this.accordianHeaderMobile.col4 = 'Recovered';
                this.accordianHeaderMobile.col5 = 'Deaths';
            }
            this.fetchData();
            this.fetchDistrictData();
            this.trendChart1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("trendchart1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
            this.categoryAxis = this.trendChart1.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
            this.valueAxis = this.trendChart1.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
            this.chartMap = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("mapdiv", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__["MapChart"]);
            this.chartMap.geodata = _amcharts_amcharts4_geodata_india2019High__WEBPACK_IMPORTED_MODULE_5__["default"];
            this.chartMap.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__["projections"].Miller();
            this.polygonSeries = this.chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__["MapPolygonSeries"]());
            this.chartMap.tapToActivate = true;
            this.trendChart1.tapToActivate = true;
            this.chartMap.tapTimeout = 5000;
            this.trendChart1.tapTimeout = 5000;
            this.chartMap.homeZoomLevel = 0;
            this.chartMap.homeGeoPoint =
                {
                    longitude: 82.80069999999999,
                    latitude: 22.41940558442722
                };
        }
        catch (err) {
            console.log(err);
        }
    }
    ngAfterViewInit() {
        this.composeChartData();
        this.drawMap();
        if (this.blue && this.cumulative) {
            this.drawTrendChart1(this.chartTotalConfirmedWeekly);
        }
        else if (this.red && this.cumulative) {
            this.drawTrendChart1(this.chartTotalActiveWeekly);
        }
        else if (this.green && this.cumulative) {
            this.drawTrendChart1(this.chartTotalRecoveredWeekly);
        }
        else if (this.black && this.cumulative) {
            this.drawTrendChart1(this.chartTotalDeathsWeekly);
        }
        else if (this.blue && !this.cumulative) {
            this.drawTrendChart1(this.chartDailyConfirmed);
        }
        else if (this.red && !this.cumulative) {
            this.drawTrendChart1(this.chartDailyActive);
        }
        else if (this.green && !this.cumulative) {
            this.drawTrendChart1(this.chartDailyRecovered);
        }
        else if (this.black && !this.cumulative) {
            this.drawTrendChart1(this.chartDailyDeaths);
        }
    }
    fetchData() {
        this.appService.getSummary()
            .subscribe((res) => {
            this.prevDayData = JSON.parse(JSON.stringify(res.cases_time_series[res.cases_time_series.length - 1]));
            this.summaryData = JSON.parse(JSON.stringify(res.statewise[0]));
            this.prevDayData.totalActive = (Number(this.summaryData.confirmed) - (Number(this.summaryData.recovered) + Number(this.summaryData.deaths))).toString();
            this.prevDayData.dailyActive = (Number(this.prevDayData.dailyconfirmed) - (Number(this.prevDayData.dailyrecovered) + Number(this.prevDayData.dailydeceased))).toString();
            this.stateData = JSON.parse(JSON.stringify(res.statewise));
            this.timeSeriesData = JSON.parse(JSON.stringify(res.cases_time_series));
            this.testedSummary = res.tested[res.tested.length - 1];
        });
    }
    composeChartData() {
        this.chartTotalConfirmedWeekly = [];
        this.chartDailyConfirmed = [];
        this.chartTotalActiveWeekly = [];
        this.chartDailyActive = [];
        this.chartTotalRecoveredWeekly = [];
        this.chartDailyRecovered = [];
        this.chartTotalDeathsWeekly = [];
        this.chartDailyDeaths = [];
        this.mapDataConfirmed = [];
        this.mapDataActive = [];
        this.mapDataRecovered = [];
        this.mapDataDeaths = [];
        if (this.blue) {
            for (let weekCount = this.timeSeriesData.length; weekCount >= 1; weekCount--) {
                this.chartTotalConfirmedWeekly.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].totalconfirmed),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
                this.chartDailyConfirmed.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].dailyconfirmed),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
            }
            for (let i = 0; i < this.stateData.length; i++) {
                if (this.stateData[i]['statecode'] != "LA") {
                    this.mapDataConfirmed.push({ id: "IN-" + this.stateData[i]['statecode'], value: Number(this.stateData[i]['confirmed']) });
                }
                else {
                    this.mapDataConfirmed.push({ id: "IN-LK", value: Number(this.stateData[i]['confirmed']) });
                }
            }
        }
        else if (this.red) {
            for (let weekCount = this.timeSeriesData.length; weekCount >= 1; weekCount--) {
                this.chartTotalActiveWeekly.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].totalconfirmed - (Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].totalrecovered) + Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].totaldeceased))),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
                this.chartDailyActive.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].dailyconfirmed - (Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].dailyrecovered) + Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].dailydeceased))),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
            }
            for (let i = 0; i < this.stateData.length; i++) {
                if (this.stateData[i]['statecode'] != "LA") {
                    this.mapDataActive.push({ id: "IN-" + this.stateData[i]['statecode'], value: Number(this.stateData[i]['active']) });
                }
                else {
                    this.mapDataActive.push({ id: "IN-LK", value: Number(this.stateData[i]['active']) });
                }
            }
        }
        else if (this.green) {
            for (let weekCount = this.timeSeriesData.length; weekCount >= 1; weekCount--) {
                this.chartTotalRecoveredWeekly.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].totalrecovered),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
                this.chartDailyRecovered.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].dailyrecovered),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
            }
            for (let i = 0; i < this.stateData.length; i++) {
                if (this.stateData[i]['statecode'] != "LA") {
                    this.mapDataRecovered.push({ id: "IN-" + this.stateData[i]['statecode'], value: Number(this.stateData[i]['recovered']) });
                }
                else {
                    this.mapDataRecovered.push({ id: "IN-LK", value: Number(this.stateData[i]['recovered']) });
                }
            }
        }
        else if (this.black) {
            for (let weekCount = this.timeSeriesData.length; weekCount >= 1; weekCount--) {
                this.chartTotalDeathsWeekly.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].totaldeceased),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
                this.chartDailyDeaths.push({
                    "value": Number(this.timeSeriesData[this.timeSeriesData.length - weekCount].dailydeceased),
                    "date": this.timeSeriesData[this.timeSeriesData.length - weekCount]['date'].slice(0, 6),
                });
            }
            for (let i = 0; i < this.stateData.length; i++) {
                if (this.stateData[i]['statecode'] != "LA") {
                    this.mapDataDeaths.push({ id: "IN-" + this.stateData[i]['statecode'], value: Number(this.stateData[i]['deaths']) });
                }
                else {
                    this.mapDataDeaths.push({ id: "IN-LK", value: Number(this.stateData[i]['deaths']) });
                }
            }
        }
    }
    fetchDistrictData() {
        this.appService.getDistrictData().subscribe((res) => {
            console.log(res);
        });
    }
    drawTrendChart1(data) {
        this.trendChart1.data = data;
        if (this.blue) {
            this.trendChart1.colors.list = [
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#5B86E5"),
            ];
        }
        else if (this.red) {
            this.trendChart1.colors.list = [
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#dc3545"),
            ];
        }
        else if (this.green) {
            this.trendChart1.colors.list = [
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#1D976C"),
            ];
        }
        else if (this.black) {
            this.trendChart1.colors.list = [
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#757575"),
            ];
        }
        this.trendChart1.numberFormatter.numberFormat = "# a";
        this.categoryAxis.renderer.grid.template.location = 0;
        this.categoryAxis.dataFields.category = "date";
        this.categoryAxis.renderer.minGridDistance = 15;
        this.categoryAxis.renderer.grid.template.location = 0.5;
        this.categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
        this.categoryAxis.renderer.labels.template.rotation = -90;
        this.categoryAxis.renderer.labels.template.horizontalCenter = "left";
        this.categoryAxis.renderer.labels.template.location = 0.5;
        this.categoryAxis.renderer.labels.template.adapter.add("dx", function (dx, target) {
            return -target.maxRight / 2;
        });
        this.valueAxis.tooltip.disabled = true;
        this.valueAxis.renderer.ticks.template.disabled = true;
        this.valueAxis.renderer.axisFills.template.disabled = true;
        let series = this.trendChart1.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
        series.dataFields.categoryX = "date";
        series.dataFields.valueY = "value";
        series.tooltipText = "{valueY.value}";
        series.sequencedInterpolation = true;
        series.fillOpacity = 0;
        series.strokeOpacity = 1;
        series.strokeDashArray = "1,3";
        series.columns.template.width = 0.01;
        series.tooltip.pointerOrientation = "horizontal";
        let bullet = series.bullets.create(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CircleBullet"]);
        this.trendChart1.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
        this.trendChart1.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]();
        this.trendChart1.scrollbarX.minHeight = 10;
        this.trendChart1.scrollbarY = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]();
        this.trendChart1.scrollbarY.minWidth = 10;
    }
    drawMap() {
        // Create map polygon series
        let lastSelected;
        let eventData;
        if (this.blue) {
            this.polygonSeries.heatRules.push({
                property: "fill",
                target: this.polygonSeries.mapPolygons.template,
                "min": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#ffffff"),
                "max": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#5B86E5"),
                "maxValue": 20000
            });
            this.polygonSeries.data = this.mapDataConfirmed;
            this.polygonSeries.mapPolygons.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#5B86E5");
        }
        else if (this.green) {
            this.polygonSeries.heatRules.push({
                property: "fill",
                target: this.polygonSeries.mapPolygons.template,
                "min": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#ffffff"),
                "max": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#1D976C"),
                "maxValue": 20000
            });
            this.polygonSeries.data = this.mapDataRecovered;
            this.polygonSeries.mapPolygons.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#1D976C");
        }
        else if (this.red) {
            this.polygonSeries.heatRules.push({
                property: "fill",
                target: this.polygonSeries.mapPolygons.template,
                "min": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#ffffff"),
                "max": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#dc3545"),
                "maxValue": 20000
            });
            this.polygonSeries.data = this.mapDataActive;
            this.polygonSeries.mapPolygons.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#dc3545");
        }
        else if (this.black) {
            this.polygonSeries.heatRules.push({
                property: "fill",
                target: this.polygonSeries.mapPolygons.template,
                "min": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#FFFFFF"),
                "max": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#757575"),
                "maxValue": 1000
            });
            this.polygonSeries.data = this.mapDataDeaths;
            this.polygonSeries.mapPolygons.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#757575");
        }
        // Make map load polygon (like country names) data from GeoJSON
        this.polygonSeries.useGeodata = true;
        // Configure series tooltip
        let polygonTemplate = this.polygonSeries.mapPolygons.template;
        polygonTemplate.togglable = true;
        polygonTemplate.clickable = true;
        polygonTemplate.tooltipText = "{name}: {value}";
        polygonTemplate.nonScalingStroke = true;
        polygonTemplate.strokeWidth = 0.5;
        this.chartMap.seriesContainer.draggable = false;
        polygonTemplate.events.on("hit", (ev) => {
            // this.showTable = false;
            eventData = ev.target;
            if (this.statePolygon) {
                this.statePolygon.isActive = false;
            }
            ev.target.series.chart.zoomToMapObject(ev.target);
            if (this.statePolygon !== ev.target) {
                this.statePolygon = ev.target;
            }
            let stateSelected = ev.target.dataItem.dataContext.name.toString();
            this.stateSelected = stateSelected;
            this.searchText = this.stateSelected;
        });
        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        if (this.blue) {
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#427cff");
        }
        else if (this.red) {
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#d6636e");
        }
        else if (this.green) {
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#34bf85");
        }
        else if (this.black) {
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#b5b5b5");
        }
        let as = polygonTemplate.states.create("active");
        if (this.blue) {
            as.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#3f5da1");
        }
        else if (this.red) {
            as.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#94232e");
        }
        else if (this.green) {
            as.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#14694b");
        }
        else if (this.black) {
            as.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#4d4d4d");
        }
        // this.chartMap.zoomControl = new am4maps.ZoomControl();
        let homeButton = this.chartMap.chartContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Button"]);
        homeButton.events.on("hit", () => {
            this.stateSelected = "";
            this.searchText = "";
            this.chartMap.goHome();
            if (this.statePolygon) {
                this.statePolygon.isActive = false;
            }
            this.showTable = true;
            this.chartMap.homeZoomLevel = 0;
            this.chartMap.homeGeoPoint =
                {
                    longitude: 82.80069999999999,
                    latitude: 22.41940558442722
                };
        });
        homeButton.icon = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Sprite"]();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 35;
        homeButton.icon.path = "M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z";
        homeButton.align = "right";
    }
    ngOnDestroy() {
        this.summaryData = undefined;
        this.stateData = undefined;
        this.prevDayData = undefined;
        this.black = undefined;
        this.green = undefined;
        this.red = undefined;
        this.blue = undefined;
        this.chartMap.dispose();
        this.trendChart1.dispose();
    }
    selectMap(color) {
        this.trendChart1.series.removeIndex(0);
        if (color == 'blue') {
            this.blue = true;
            this.black = false;
            this.green = false;
            this.red = false;
            this.ngAfterViewInit();
        }
        else if (color == 'red') {
            this.blue = false;
            this.black = false;
            this.green = false;
            this.red = true;
            this.ngAfterViewInit();
            console.log("HERE12" + new Date());
        }
        else if (color == 'green') {
            this.blue = false;
            this.black = false;
            this.green = true;
            this.red = false;
            this.ngAfterViewInit();
        }
        else if (color == 'black') {
            this.blue = false;
            this.black = true;
            this.green = false;
            this.red = false;
            this.ngAfterViewInit();
        }
        else {
            this.blue = true;
            this.black = false;
            this.green = false;
            this.red = false;
        }
    }
    setCumulative() {
        this.cumulative = true;
        this.trendChart1.series.removeIndex(0);
        this.ngAfterViewInit();
    }
    setDaily() {
        this.cumulative = false;
        this.trendChart1.series.removeIndex(0);
        this.ngAfterViewInit();
    }
    zoomState(statecode, stateName) {
        if (stateName != "Total" && stateName != "State Unassigned") {
            this.stateCode = "IN-" + statecode;
            this.stateSelected = stateName;
            this.searchText = stateName;
            this.statePolygon = this.polygonSeries.getPolygonById(this.stateCode);
            this.chartMap.zoomToMapObject(this.polygonSeries.getPolygonById(this.stateCode));
            this.statePolygon.isActive = true;
            // this.showTable = false;
        }
    }
    setTablePage(page) {
        this.pageNmbr = page;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 113, vars: 46, consts: [[1, "navbar-expand-lg"], [1, "navbar-brand"], [1, "fas", "fa-virus"], [1, "nv-text"], [1, "container", "col-sm", "col-md-11", "col-lg-8"], ["id", "hero-top", 1, "row", "hero-top"], [1, "confirmed", "col-lg-3", "col-md-3", "col-sm-1", "card-sm"], [2, "text-align", "left", "text-align", "center", "margin-left", "40px"], [1, "fas", "fa-check-circle"], [2, "text-align", "left", "text-align", "center"], [1, "active", "col-lg-3", "col-md-3", "col-sm-1", "card-sm"], [1, "fas", "fa-chart-line"], [1, "recovered", "col-lg-3", "col-md-3", "col-sm-1", "card-sm"], [1, "fas", "fa-heartbeat"], [1, "death", "col-lg-3", "col-md-3", "col-sm-1", "card-sm"], [1, "fas", "fa-exclamation-circle"], [1, "row", "hero-bottom"], [2, "margin-left", "20px", "margin-right", "20px"], [1, "trend", "row"], [1, "col-lg", "col-md"], [1, "text-dark"], [1, "col-lg", "col-md", 2, "display", "flex", "justify-content", "center"], [1, "btn", "btn-dark", "btn-sm", 3, "click"], [1, "map-header", "trend-header"], [1, "row", "mapselector"], [4, "ngIf"], [1, "blue", 3, "click"], [1, "red", 3, "click"], [1, "green", 3, "click"], [1, "black", 3, "click"], ["id", "trendchart1"], [1, "row"], [1, "content-left", "col-lg"], [1, "map"], ["class", "text-dark", 4, "ngIf"], [1, "text-light", "text-small"], [1, "map-header"], ["id", "mapdiv"], ["class", "content-right col-lg show-table", 4, "ngIf"], ["class", "content-right col-lg show-state", 4, "ngIf"], [1, "footer-image"], ["src", "/assets/covid19.jpg", 2, "width", "100%", "height", "auto"], [1, "row", 2, "margin-top", "50px", "border-top", "1px solid #b3b3b3", "display", "flex", "justify-content", "space-between", "min-height", "10vh"], [1, "text-small", "text-light", 2, "text-align", "left", "margin-top", "20px", "margin-left", "4vw"], [1, "text-small", "text-light", 2, "text-align", "center", "margin-top", "20px", "margin-right", "4vw"], [1, "text-small", "text-light", 2, "text-align", "right", "margin-top", "20px", "margin-right", "4vw"], [1, "content-right", "col-lg", "show-table"], ["placeholder", "Search with state name", 1, "row", "search-box", 3, "ngModel", "ngModelChange"], ["id", "custom-panel-1"], ["ngbPanelHeader", ""], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "btn", "p-0", 2, "text-align", "left", "font-size", "1em !important", "font-weight", "bolder", "color", "#6200ea"], [1, "m-0", 2, "text-align", "right", "font-size", "1em !important", "font-weight", "bolder", "color", "#5B86E5"], [1, "m-0", 2, "text-align", "right", "font-size", "1em !important", "font-weight", "bolder", "color", "#dc3545"], [1, "m-0", 2, "text-align", "right", "font-size", "1em !important", "font-weight", "bolder", "color", "#1D976C"], [1, "m-0", 2, "text-align", "right", "font-size", "1em !important", "font-weight", "bolder", "color", "#757575"], ["acc", "ngbAccordion"], [1, "btn", "btn-link", "p-0", 2, "text-align", "left", "font-size", "0.8em", "color", "#6200ea", 3, "click"], [1, "m-0", 2, "text-align", "right", "font-size", "0.8em", "color", "#5B86E5"], [1, "m-0", 2, "text-align", "right", "font-size", "0.8em", "color", "#dc3545"], [1, "m-0", 2, "text-align", "right", "font-size", "0.8em", "color", "#1D976C"], [1, "m-0", 2, "text-align", "right", "font-size", "0.8em", "color", "#757575"], [1, "pagination"], [1, "page-nmbr", 3, "click"], [1, "content-right", "col-lg", "show-state"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Covid-19 Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "COUNTRY TREND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_59_listener() { return ctx.setCumulative(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cumulative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_61_listener() { return ctx.setDaily(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AppComponent_p_66_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_67_listener() { return ctx.selectMap("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AppComponent_p_68_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_69_listener() { return ctx.selectMap("red"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AppComponent_p_70_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_71_listener() { return ctx.selectMap("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AppComponent_p_72_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_73_listener() { return ctx.selectMap("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AppComponent_h4_80_Template, 2, 0, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AppComponent_h4_81_Template, 3, 3, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Hover/select a state/UT for more details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AppComponent_p_86_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_87_listener() { return ctx.selectMap("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AppComponent_p_88_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_89_listener() { return ctx.selectMap("red"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AppComponent_p_90_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_91_listener() { return ctx.selectMap("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AppComponent_p_92_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_93_listener() { return ctx.selectMap("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, AppComponent_div_95_Template, 10, 9, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AppComponent_div_96_Template, 1, 0, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "footer", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Stay home! Stay safe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Ver. 3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Changelog !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Added pagination to state table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Fixed issue with scrolling over maps and chart on mobile devices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Fixed issue of being able to select multiple states together. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.summaryData.confirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Confirmed [+", ctx.prevDayData.dailyconfirmed, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prevDayData.totalActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Active [+", ctx.prevDayData.dailyActive, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.summaryData.recovered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Recovered [+", ctx.prevDayData.dailyrecovered, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.summaryData.deaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Deaths [+", ctx.prevDayData.dailydeceased, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total samples tested: ", ctx.testedSummary.totalsamplestested, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Samples reported today: ", ctx.testedSummary.samplereportedtoday, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-dark", ctx.cumulative)("btn-secondary", !ctx.cumulative);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-dark", !ctx.cumulative)("btn-secondary", ctx.cumulative);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blueactive", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.red);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("redactive", ctx.red);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("greenactive", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.black);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blackactive", ctx.black);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stateSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stateSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blueactive", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.red);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("redactive", ctx.red);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("greenactive", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.black);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blackactive", ctx.black);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"],
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AppService {
    constructor(http) {
        this.http = http;
    }
    getSummary() {
        return this.http.get("https://api.covid19india.org/data.json");
    }
    getDistrictData() {
        return this.http.get("https://api.covid19india.org/state_district_wise.json");
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(items, searchText) {
        let filterList = [];
        if (!searchText) {
            return items;
        }
        else {
            for (let it in items) {
                if (items[it]['state'].toLowerCase().startsWith(searchText.toLowerCase())) {
                    filterList.push(items[it]);
                }
            }
            return filterList;
        }
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();
class PaginatePipe {
    transform(items, page) {
        let data = items;
        let filterList = [];
        if (page == 0 && data) {
            for (let i = page; i < page + 13; i++) {
                filterList.push(data[i]);
            }
            return filterList;
        }
        else if (data) {
            for (let i = (page * 10 + 2); i < page * 10 + 13; i++) {
                if (data[i]) {
                    filterList.push(data[i]);
                }
            }
            return filterList;
        }
    }
}
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(); };
PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginate", type: PaginatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paginate'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adiam\Documents\GitHub\Covid19-AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
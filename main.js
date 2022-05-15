"use strict";
(self["webpackChunksmash_library"] = self["webpackChunksmash_library"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _livestreams_page_livestreams_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./livestreams-page/livestreams-page.component */ 89);
/* harmony import */ var _players_page_players_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players-page/players-page.component */ 4293);
/* harmony import */ var _search_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search-results-page/search-results-page.component */ 6682);
/* harmony import */ var _tournaments_page_tournaments_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tournaments-page/tournaments-page.component */ 2312);
/* harmony import */ var _vods_vod_detail_page_vod_detail_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vods/vod-detail-page/vod-detail-page.component */ 66);
/* harmony import */ var _vods_vods_page_vods_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vods/vods-page/vods-page.component */ 5988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent },
    { path: 'tournaments', component: _tournaments_page_tournaments_page_component__WEBPACK_IMPORTED_MODULE_4__.TournamentsPageComponent },
    { path: 'players', component: _players_page_players_page_component__WEBPACK_IMPORTED_MODULE_2__.PlayersPageComponent },
    { path: 'livestreams', component: _livestreams_page_livestreams_page_component__WEBPACK_IMPORTED_MODULE_1__.LivestreamsPageComponent },
    { path: 'search', component: _search_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPageComponent },
    { path: 'vod/:id', component: _vods_vod_detail_page_vod_detail_page_component__WEBPACK_IMPORTED_MODULE_5__.VodDetailPageComponent },
    { path: 'vods', component: _vods_vods_page_vods_page_component__WEBPACK_IMPORTED_MODULE_6__.VodsPageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/search-bar/search-bar.component */ 2593);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar/side-bar.component */ 9134);





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "container-fluid"], [1, "row", "justify-content-start", "align-items-center"], [1, "col-3"], ["routerLink", "/", "role", "button"], ["mode", "side", "opened", "true"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Smash Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-drawer-container")(8, "mat-drawer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_0__.SearchBarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawer, _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__.SideBarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawerContent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["mat-drawer-content[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search-bar/search-bar.component */ 2593);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _search_search_result_card_search_result_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search-result-card/search-result-card.component */ 2195);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-bar/side-bar.component */ 9134);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _tournaments_page_tournaments_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tournaments-page/tournaments-page.component */ 2312);
/* harmony import */ var _players_page_players_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./players-page/players-page.component */ 4293);
/* harmony import */ var _livestreams_page_livestreams_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./livestreams-page/livestreams-page.component */ 89);
/* harmony import */ var _vods_vods_page_vods_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vods/vods-page/vods-page.component */ 5988);
/* harmony import */ var _search_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search-results-page/search-results-page.component */ 6682);
/* harmony import */ var _vods_vod_detail_page_vod_detail_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vods/vod-detail-page/vod-detail-page.component */ 66);
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/search/search.service */ 8294);
/* harmony import */ var src_environments_service_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/service.environment */ 2658);
/* harmony import */ var _services_vod_vod_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/vod/vod.service */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _services_search_search_service__WEBPACK_IMPORTED_MODULE_13__.SearchService,
            useClass: src_environments_service_environment__WEBPACK_IMPORTED_MODULE_14__.serviceEnvironment.searchService,
        },
        {
            provide: _services_vod_vod_service__WEBPACK_IMPORTED_MODULE_15__.VodService,
            useClass: src_environments_service_environment__WEBPACK_IMPORTED_MODULE_14__.serviceEnvironment.vodService,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__.SearchBarComponent,
        _search_search_result_card_search_result_card_component__WEBPACK_IMPORTED_MODULE_4__.SearchResultCardComponent,
        _search_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_11__.SearchResultsPageComponent,
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__.SideBarComponent,
        _vods_vod_detail_page_vod_detail_page_component__WEBPACK_IMPORTED_MODULE_12__.VodDetailPageComponent,
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__.HomePageComponent,
        _tournaments_page_tournaments_page_component__WEBPACK_IMPORTED_MODULE_7__.TournamentsPageComponent,
        _players_page_players_page_component__WEBPACK_IMPORTED_MODULE_8__.PlayersPageComponent,
        _livestreams_page_livestreams_page_component__WEBPACK_IMPORTED_MODULE_9__.LivestreamsPageComponent,
        _vods_vods_page_vods_page_component__WEBPACK_IMPORTED_MODULE_10__.VodsPageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule] }); })();


/***/ }),

/***/ 5079:
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HomePageComponent {
    constructor() { }
    ngOnInit() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89:
/*!****************************************************************!*\
  !*** ./src/app/livestreams-page/livestreams-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LivestreamsPageComponent": () => (/* binding */ LivestreamsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LivestreamsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LivestreamsPageComponent.ɵfac = function LivestreamsPageComponent_Factory(t) { return new (t || LivestreamsPageComponent)(); };
LivestreamsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LivestreamsPageComponent, selectors: [["app-livestreams-page"]], decls: 2, vars: 0, template: function LivestreamsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "livestreams-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZlc3RyZWFtcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);






class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule] }); })();


/***/ }),

/***/ 4293:
/*!********************************************************!*\
  !*** ./src/app/players-page/players-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayersPageComponent": () => (/* binding */ PlayersPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PlayersPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayersPageComponent.ɵfac = function PlayersPageComponent_Factory(t) { return new (t || PlayersPageComponent)(); };
PlayersPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayersPageComponent, selectors: [["app-players-page"]], decls: 2, vars: 0, template: function PlayersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "players-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2593:
/*!***********************************************************!*\
  !*** ./src/app/search/search-bar/search-bar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarComponent": () => (/* binding */ SearchBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search/search.service */ 8294);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);








class SearchBarComponent {
    constructor(router, route, searchService) {
        this.router = router;
        this.route = route;
        this.searchService = searchService;
        this.searchQuery = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.searchQuery = params['query'];
            this.performSearch();
        });
    }
    performSearch() {
        if (!this.searchQuery || this.searchQuery === '') {
            return;
        }
        this.router.navigate(['/search'], {
            queryParams: { query: this.searchQuery },
        });
        this.searchService
            .getSearchResults(this.searchQuery)
            .subscribe((searchResults) => {
            console.log('got the search results' + searchResults[0].vodId);
        });
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService)); };
SearchBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 7, vars: 1, consts: [["appearance", "outline"], ["matInput", "", "type", "search", "placeholder", "Ex. Mang0 vs Zain at Big House", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup.enter"], ["matSuffix", "", "mat-button", ""], [3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchQuery = $event; })("keyup.enter", function SearchBarComponent_Template_input_keyup_enter_3_listener() { return ctx.performSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchBarComponent_Template_mat_icon_click_5_listener() { return ctx.performSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2195:
/*!***************************************************************************!*\
  !*** ./src/app/search/search-result-card/search-result-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultCardComponent": () => (/* binding */ SearchResultCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class SearchResultCardComponent {
    constructor() { }
    ngOnInit() { }
    getSearchResultTitle() {
        return 'Search Result Title';
    }
}
SearchResultCardComponent.ɵfac = function SearchResultCardComponent_Factory(t) { return new (t || SearchResultCardComponent)(); };
SearchResultCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultCardComponent, selectors: [["app-search-result-card"]], inputs: { searchResult: "searchResult" }, decls: 9, vars: 3, consts: [["mat-button", "", 1, "search-result-card", "my-1", 3, "routerLink"], [1, "row"], [1, "col-sm-4"], [1, "w-100", 3, "src"], [1, "col-sm-8"]], template: function SearchResultCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This is a description of a video.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/vod/", ctx.searchResult == null ? null : ctx.searchResult.vodId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.searchResult == null ? null : ctx.searchResult.thumbnailLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSearchResultTitle());
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: [".search-result-card[_ngcontent-%COMP%] {\n  background-color: aqua;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn0iXX0= */"] });


/***/ }),

/***/ 6682:
/*!*****************************************************************************!*\
  !*** ./src/app/search/search-results-page/search-results-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsPageComponent": () => (/* binding */ SearchResultsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search/search.service */ 8294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_result_card_search_result_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-result-card/search-result-card.component */ 2195);




function SearchResultsPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-search-result-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchResult_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchResult", searchResult_r1);
} }
class SearchResultsPageComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() { }
}
SearchResultsPageComponent.ɵfac = function SearchResultsPageComponent_Factory(t) { return new (t || SearchResultsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService)); };
SearchResultsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchResultsPageComponent, selectors: [["app-search-results-page"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "searchResult"]], template: function SearchResultsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SearchResultsPageComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.searchService.searchResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _search_result_card_search_result_card_component__WEBPACK_IMPORTED_MODULE_1__.SearchResultCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1360:
/*!********************************************************!*\
  !*** ./src/app/services/search/mock-search.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockSearchService": () => (/* binding */ MockSearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var src_mock_data_mock_search_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/mock-data/mock-search-results */ 7010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



class MockSearchService {
    constructor() {
        this.searchResults = [];
    }
    getSearchResults(query) {
        console.log('yoyoyo');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(query)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(500))
            .subscribe(() => {
            console.log("it's set");
            this.searchResults = src_mock_data_mock_search_results__WEBPACK_IMPORTED_MODULE_0__.MOCK_SEARCH_RESULTS; // UI doesn't delay cuz this is set immediately... hmmm i should delay this in a cleaner way i think
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(src_mock_data_mock_search_results__WEBPACK_IMPORTED_MODULE_0__.MOCK_SEARCH_RESULTS).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(500));
    }
}
MockSearchService.ɵfac = function MockSearchService_Factory(t) { return new (t || MockSearchService)(); };
MockSearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MockSearchService, factory: MockSearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8294:
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SearchService {
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 135:
/*!**************************************************!*\
  !*** ./src/app/services/vod/mock-vod.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockVodService": () => (/* binding */ MockVodService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var src_mock_data_mock_vod_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/mock-data/mock-vod-data */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



class MockVodService {
    getVod(query) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(src_mock_data_mock_vod_data__WEBPACK_IMPORTED_MODULE_0__.MOCK_VOD_DATA).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(500));
    }
}
MockVodService.ɵfac = function MockVodService_Factory(t) { return new (t || MockVodService)(); };
MockVodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MockVodService, factory: MockVodService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3529:
/*!*********************************************!*\
  !*** ./src/app/services/vod/vod.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VodService": () => (/* binding */ VodService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class VodService {
}
VodService.ɵfac = function VodService_Factory(t) { return new (t || VodService)(); };
VodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VodService, factory: VodService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9134:
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBarComponent": () => (/* binding */ SideBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);





function SideBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 1)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sideBarOption_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r0.router.url === sideBarOption_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", sideBarOption_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sideBarOption_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sideBarOption_r1.title, " ");
} }
class SideBarComponent {
    constructor(router) {
        this.router = router;
        this.sideBarOptions = [
            { title: 'Home', route: '/home', icon: 'home' },
            { title: 'Tournaments', route: '/tournaments', icon: 'assessment' },
            { title: 'VODs', route: '/vods', icon: 'video_library' },
            { title: 'Livestreams', route: '/livestreams', icon: 'live_tv' },
            { title: 'Players', route: '/players', icon: 'person' },
        ];
    }
    ngOnInit() { }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SideBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["mat-button", "", 1, "w-100", "d-flex", 3, "routerLink"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideBarComponent_div_0_Template, 5, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sideBarOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".highlight[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksNEJBQUE7QUFFWiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHR7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gfSJdfQ== */"] });


/***/ }),

/***/ 2312:
/*!****************************************************************!*\
  !*** ./src/app/tournaments-page/tournaments-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TournamentsPageComponent": () => (/* binding */ TournamentsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TournamentsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TournamentsPageComponent.ɵfac = function TournamentsPageComponent_Factory(t) { return new (t || TournamentsPageComponent)(); };
TournamentsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TournamentsPageComponent, selectors: [["app-tournaments-page"]], decls: 2, vars: 0, template: function TournamentsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tournaments-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3VybmFtZW50cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 66:
/*!*******************************************************************!*\
  !*** ./src/app/vods/vod-detail-page/vod-detail-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VodDetailPageComponent": () => (/* binding */ VodDetailPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var src_app_services_vod_vod_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/vod/vod.service */ 3529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function VodDetailPageComponent_iframe_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.safeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
class VodDetailPageComponent {
    constructor(route, domSanitizer, vodService) {
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.vodService = vodService;
    }
    ngOnInit() {
        const vodId = this.route.snapshot.paramMap.get('id');
        if (vodId) {
            this.vodService.getVod(vodId).subscribe((vodData) => {
                var _a;
                this.vodData = vodData;
                const embedUrl = `https://www.youtube.com/embed/${(_a = this.vodData) === null || _a === void 0 ? void 0 : _a.youtubeId}`;
                this.safeUrl =
                    this.domSanitizer.bypassSecurityTrustResourceUrl(embedUrl);
            });
        }
    }
    getVodTitle() {
        var _a;
        if (!this.vodData) {
            return undefined;
        }
        const playerString = (_a = this.vodData.players) === null || _a === void 0 ? void 0 : _a.join(' vs. ');
        return `${playerString} at ${this.vodData.tournamentName}`;
    }
}
VodDetailPageComponent.ɵfac = function VodDetailPageComponent_Factory(t) { return new (t || VodDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_vod_vod_service__WEBPACK_IMPORTED_MODULE_0__.VodService)); };
VodDetailPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VodDetailPageComponent, selectors: [["app-vod-detail-page"]], decls: 3, vars: 2, consts: [["width", "560", "height", "315", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["width", "560", "height", "315", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function VodDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VodDetailPageComponent_iframe_0_Template, 1, 1, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.safeUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getVodTitle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5988:
/*!*******************************************************!*\
  !*** ./src/app/vods/vods-page/vods-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VodsPageComponent": () => (/* binding */ VodsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class VodsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
VodsPageComponent.ɵfac = function VodsPageComponent_Factory(t) { return new (t || VodsPageComponent)(); };
VodsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VodsPageComponent, selectors: [["app-vods-page"]], decls: 2, vars: 0, template: function VodsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vods-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2RzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 2658:
/*!*************************************************!*\
  !*** ./src/environments/service.environment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serviceEnvironment": () => (/* binding */ serviceEnvironment)
/* harmony export */ });
/* harmony import */ var src_app_services_search_mock_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search/mock-search.service */ 1360);
/* harmony import */ var src_app_services_vod_mock_vod_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vod/mock-vod.service */ 135);


const serviceEnvironment = {
    searchService: src_app_services_search_mock_search_service__WEBPACK_IMPORTED_MODULE_0__.MockSearchService,
    vodService: src_app_services_vod_mock_vod_service__WEBPACK_IMPORTED_MODULE_1__.MockVodService,
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 7010:
/*!**********************************************!*\
  !*** ./src/mock-data/mock-search-results.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOCK_SEARCH_RESULTS": () => (/* binding */ MOCK_SEARCH_RESULTS)
/* harmony export */ });
const MOCK_SEARCH_RESULTS = [
    {
        isTeams: false,
        players: ['Mang0', 'Zain'],
        tournamentName: 'Big House 8',
        thumbnailLink: 'https://i.ytimg.com/vi/cqM92Lf0IJc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKSnt0uPb-PNomIeFJ08cWr5qkZQ',
        vodId: 'mock-vod-id',
    },
    {
        isTeams: false,
        players: ['Axe', 'Wizzrobe'],
        tournamentName: 'Smash Summit 8',
        thumbnailLink: 'https://i.ytimg.com/vi/I_ftEbCQ6Ec/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6ZKffkzhEv4aGqnS0TyeAuTAnlw',
        vodId: 'mock-vod-id',
    },
];


/***/ }),

/***/ 4962:
/*!****************************************!*\
  !*** ./src/mock-data/mock-vod-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOCK_VOD_DATA": () => (/* binding */ MOCK_VOD_DATA)
/* harmony export */ });
const MOCK_VOD_DATA = {
    isTeams: false,
    players: ['Mang0', 'Zain'],
    tournamentName: 'Big House 8',
    youtubeId: 'cqM92Lf0IJc',
    vodId: 'mock-vod-id',
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
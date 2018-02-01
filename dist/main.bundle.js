webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Login/Login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/']);
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/Login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n  <div class=\"alert alert-info\">\r\n      Username: test<br />\r\n      Password: test\r\n  </div>\r\n  <h2>Login</h2>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n      </div>\r\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wew-bill',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_management_customer_management_module__ = __webpack_require__("../../../../../src/app/customer-management/customer-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_user_management_module__ = __webpack_require__("../../../../../src/app/user-management/user-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tenant_management_tenant_management_module__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Login_Login_component__ = __webpack_require__("../../../../../src/app/Login/Login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__position_management_position_management_module__ = __webpack_require__("../../../../../src/app/position-management/position-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_management_invoice_management_module__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-management.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Login_Login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__tenant_management_tenant_management_module__["a" /* TenantManagementModule */],
                __WEBPACK_IMPORTED_MODULE_2__user_management_user_management_module__["a" /* UserManagementModule */],
                __WEBPACK_IMPORTED_MODULE_0__customer_management_customer_management_module__["a" /* CustomerManagementModule */],
                __WEBPACK_IMPORTED_MODULE_16__invoice_management_invoice_management_module__["a" /* InvoiceManagementModule */],
                __WEBPACK_IMPORTED_MODULE_15__position_management_position_management_module__["a" /* PositionManagementModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* APP_ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_management_customer_search_customer_search_component__ = __webpack_require__("../../../../../src/app/customer-management/customer-search/customer-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tenant_management_tenant_search_tenant_search_component__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-search/tenant-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_Login_component__ = __webpack_require__("../../../../../src/app/Login/Login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_management_user_search_user_search_component__ = __webpack_require__("../../../../../src/app/user-management/user-search/user-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_management_position_search_position_search_component__ = __webpack_require__("../../../../../src/app/position-management/position-search/position-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_management_invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-search/invoice-search.component.ts");







var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'invoices',
        component: __WEBPACK_IMPORTED_MODULE_6__invoice_management_invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */]
    },
    {
        path: 'tenants',
        component: __WEBPACK_IMPORTED_MODULE_1__tenant_management_tenant_search_tenant_search_component__["a" /* TenantSearchComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__Login_Login_component__["a" /* LoginComponent */]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_4__user_management_user_search_user_search_component__["a" /* UserSearchComponent */]
    },
    {
        path: 'customers',
        component: __WEBPACK_IMPORTED_MODULE_0__customer_management_customer_search_customer_search_component__["a" /* CustomerSearchComponent */]
    },
    {
        path: 'positions',
        component: __WEBPACK_IMPORTED_MODULE_5__position_management_position_search_position_search_component__["a" /* PositionSearchComponent */]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


/***/ }),

/***/ "../../../../../src/app/customer-management/customer-card/customer-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-card/customer-card.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card>\r\n  <div card-header>Customer: {{item.Name}}</div>\r\n  <div card-content>\r\n    <dl>\r\n      <dt>Name</dt>\r\n      <dd>{{item.Name}}</dd>\r\n      <dt>Zipcode</dt>\r\n      <dd>{{item.Zipcode}}</dd>\r\n      <dt>City</dt>\r\n      <dd>{{item.City}}</dd>\r\n    </dl>\r\n  </div>\r\n  <div card-footer>\r\n    <button [routerLink]=\"['/customers/' + item._id]\">Edit</button>\r\n    <button (click)=\"deleteMe()\">Delete</button>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-card/customer-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerCardComponent = (function () {
    function CustomerCardComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CustomerCardComponent.prototype.ngOnInit = function () {
    };
    CustomerCardComponent.prototype.deleteMe = function () {
        this.delete.emit(this.item._id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomerCardComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CustomerCardComponent.prototype, "delete", void 0);
    CustomerCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-card',
            template: __webpack_require__("../../../../../src/app/customer-management/customer-card/customer-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer-management/customer-card/customer-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerCardComponent);
    return CustomerCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer-management/customer-edit/customer-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-edit/customer-edit.component.html":
/***/ (function(module, exports) {

module.exports = "  <header>\r\n    <h1>Customers</h1>\r\n    <h2>Edit customer {{customer.Name}}</h2>\r\n  </header>\r\n  <main>\r\n    <form #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input [(ngModel)]=\"customer.Name\" name=\"name\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['name']?.hasError('required')\">Name is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Address</label>\r\n        <input [(ngModel)]=\"customer.Address1\" name=\"address1\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['address1']?.hasError('required')\">Address is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input [(ngModel)]=\"customer.Address2\" name=\"address2\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input [(ngModel)]=\"customer.Address3\" name=\"address3\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Zip code</label>\r\n        <input [(ngModel)]=\"customer.Zipcode\" name=\"zipcode\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['zipcode']?.hasError('required')\">Zipcode is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>City</label>\r\n        <input [(ngModel)]=\"customer.City\" name=\"city\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['city']?.hasError('required')\">City is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Phone number</label>\r\n        <input [(ngModel)]=\"customer.Phonenumber\" name=\"phonenumber\" class=\"form-control\">\r\n      </div>\r\n      <button class=\"btn btn-default\" (click)=\"save()\">Save</button>\r\n    </form>\r\n  </main>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-edit/customer-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__("../../../../../src/app/customer-management/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerEditComponent = (function () {
    function CustomerEditComponent(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.customer = {
            _id: '',
            Name: '',
            Address1: '',
            Address2: '',
            Address3: '',
            City: '',
            Zipcode: '',
            Phonenumber: '',
            CreatedAtUtc: null,
            ModifiedAtUtc: null,
            Tenant: null
        };
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id === '') {
                return;
            }
            else if (_this.id === 'new') {
            }
            else {
                _this.customerService.findById(_this.id).subscribe(function (customer) { _this.customer = customer; _this.errors = ''; }, function (error) { _this.errors = 'Error loading customer'; });
            }
        });
    };
    CustomerEditComponent.prototype.save = function () {
        if (this.id === 'new') {
            this.createNew();
        }
        else {
            this.update();
        }
    };
    CustomerEditComponent.prototype.createNew = function () {
        var _this = this;
        this.customerService.create(this.customer).subscribe(function (customer) {
            _this.customer = customer;
            _this.errors = 'Creating was successful!';
            _this.router.navigate(['/customers']);
        }, function (err) {
            _this.errors = 'Error saving customer';
        });
    };
    CustomerEditComponent.prototype.update = function () {
        var _this = this;
        this.customerService.update(this.customer).subscribe(function (customer) {
            _this.customer = customer;
            _this.errors = 'Updating was successful!';
            _this.router.navigate(['/customers']);
        }, function (err) {
            _this.errors = 'Error saving customer';
        });
    };
    CustomerEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-edit',
            template: __webpack_require__("../../../../../src/app/customer-management/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer-management/customer-edit/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer-management/customer-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  customer-management works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerManagementComponent = (function () {
    function CustomerManagementComponent() {
    }
    CustomerManagementComponent.prototype.ngOnInit = function () {
    };
    CustomerManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-management',
            template: __webpack_require__("../../../../../src/app/customer-management/customer-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer-management/customer-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerManagementComponent);
    return CustomerManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer-management/customer-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_management_routes__ = __webpack_require__("../../../../../src/app/customer-management/customer-management.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_card_customer_card_component__ = __webpack_require__("../../../../../src/app/customer-management/customer-card/customer-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_edit_customer_edit_component__ = __webpack_require__("../../../../../src/app/customer-management/customer-edit/customer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_search_customer_search_component__ = __webpack_require__("../../../../../src/app/customer-management/customer-search/customer-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_management_component__ = __webpack_require__("../../../../../src/app/customer-management/customer-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_service__ = __webpack_require__("../../../../../src/app/customer-management/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CustomerManagementModule = (function () {
    function CustomerManagementModule() {
    }
    CustomerManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__customer_management_routes__["a" /* CUSTOMER_MANAGEMENT_ROUTES */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__customer_management_component__["a" /* CustomerManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_6__customer_card_customer_card_component__["a" /* CustomerCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__customer_edit_customer_edit_component__["a" /* CustomerEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__customer_search_customer_search_component__["a" /* CustomerSearchComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__customer_service__["a" /* CustomerService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__customer_search_customer_search_component__["a" /* CustomerSearchComponent */]
            ]
        })
    ], CustomerManagementModule);
    return CustomerManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer-management/customer-management.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CUSTOMER_MANAGEMENT_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_edit_customer_edit_component__ = __webpack_require__("../../../../../src/app/customer-management/customer-edit/customer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_search_customer_search_component__ = __webpack_require__("../../../../../src/app/customer-management/customer-search/customer-search.component.ts");


var CUSTOMER_MANAGEMENT_ROUTES = [
    {
        path: 'customers',
        component: __WEBPACK_IMPORTED_MODULE_1__customer_search_customer_search_component__["a" /* CustomerSearchComponent */]
    },
    {
        path: 'customers/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__customer_edit_customer_edit_component__["a" /* CustomerEditComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/customer-management/customer-search/customer-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-search/customer-search.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h1>Customers</h1>\r\n</header>\r\n<main>\r\n  <div>\r\n    <h2>Search</h2>\r\n    <form>\r\n      <div class=\"form-row\">\r\n        <label>Name</label>\r\n        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <button (click)=\"search()\" class=\"btn btn-default\">Search</button>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <button (click)=\"new()\" class=\"btn btn-default\">New</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div *ngFor=\"let c of customers\">\r\n    <app-customer-card [item]=\"c\" (delete)=\"delete($event)\">\r\n    </app-customer-card>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-management/customer-search/customer-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__("../../../../../src/app/customer-management/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerSearchComponent = (function () {
    function CustomerSearchComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.name = '';
        this.customers = [];
    }
    CustomerSearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    CustomerSearchComponent.prototype.search = function () {
        var _this = this;
        this.customerService
            .find(this.name)
            .subscribe(function (customers) {
            _this.customers = customers;
        }, function (errResp) {
            console.error('Error loading customers', errResp);
        });
    };
    CustomerSearchComponent.prototype.select = function (c) {
        this.selectedCustomer = c;
    };
    CustomerSearchComponent.prototype.new = function () {
        this.router.navigate(['/customers/new']);
    };
    CustomerSearchComponent.prototype.deleteCustomer = function (customer_id) {
        var _this = this;
        this.customerService
            .delete(customer_id)
            .subscribe(function (success) {
            for (var i = 0; i < _this.customers.length; i++) {
                if (_this.customers[i]._id === customer_id) {
                    _this.customers.splice(i, 1);
                    break;
                }
            }
        }, function (errResp) {
            console.error('Error deleting customer', errResp);
        });
    };
    CustomerSearchComponent.prototype.delete = function (event) {
        this.deleteCustomer(event);
    };
    CustomerSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-customer-search',
            template: __webpack_require__("../../../../../src/app/customer-management/customer-search/customer-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer-management/customer-search/customer-search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], CustomerSearchComponent);
    return CustomerSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer-management/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    /* GET all (filtered) customers */
    CustomerService.prototype.find = function (name) {
        var url = '/customer';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('name', name);
        return this
            .http
            .get(url, { headers: headers, params: params });
    };
    CustomerService.prototype.findById = function (id) {
        var url = '/customer/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this
            .http
            .get(url, { headers: headers });
    };
    CustomerService.prototype.create = function (customerToSave) {
        var url = '/customer';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this
            .http
            .post(url, customerToSave, { headers: headers });
    };
    CustomerService.prototype.update = function (customerToSave) {
        var id = customerToSave._id;
        var url = '/customer/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this
            .http
            .put(url, customerToSave, { headers: headers });
    };
    CustomerService.prototype.delete = function (id) {
        var url = '/customer/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this
            .http
            .delete(url, { headers: headers });
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to WEW Invoice!</h1>\r\n<p>This is your starting page, please choose a way to go.</p>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-card/invoice-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-card/invoice-card.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card>\n  <div card-header>Invoice: {{item.InvoiceNumber}}</div>\n  <div card-content>\n    <dl>\n      <dt>Invoice number</dt>\n      <dd>{{item.InvoiceNumber}}</dd>\n      <dt>Date</dt>\n      <dd>{{item.CreatedAtUtc | date: 'dd.MM.yyyy'}}</dd>\n      <dt>Amount</dt>\n      <dd>{{sum()}}</dd>\n    </dl>\n  </div>\n  <div card-footer>\n    <button [routerLink]=\"['/invoices/' + item._id]\">Edit</button>\n    <button (click)=\"deleteMe()\">Delete</button>\n  </div>\n</app-card>"

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-card/invoice-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoiceCardComponent = (function () {
    function InvoiceCardComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.sum = function () {
            console.log('sum called');
            if (this.item === null || this.item.LineItems === null) {
                console.log('sum returning null 0');
                return 0;
            }
            console.log(this.item);
            if (this.item === undefined || this.item.LineItems === undefined) {
                console.log('sum returning undefined 0');
                return 0;
            }
            var sum = 0;
            for (var i = 0; i < this.item.LineItems.length; i++) {
                var curItem = this.item.LineItems[i];
                sum += (curItem.NetPrice * (100 + curItem.TaxPercentage) * curItem.Count);
            }
            console.log('sum returning ' + sum);
            return sum;
        };
    }
    InvoiceCardComponent.prototype.deleteMe = function () {
        this.delete.emit(this.item._id);
    };
    InvoiceCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InvoiceCardComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], InvoiceCardComponent.prototype, "delete", void 0);
    InvoiceCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-card',
            template: __webpack_require__("../../../../../src/app/invoice-management/invoice-card/invoice-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice-management/invoice-card/invoice-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceCardComponent);
    return InvoiceCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-edit/invoice-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-edit/invoice-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Invoices</h1>\n  <h2>Edit invoice {{invoice.InvoiceNumber}}</h2>\n</header>\n<main>\n  <form>\n    <div class=\"form-group\">\n      <label>Invoice number</label>\n      <input [ngModel]=\"invoice.InvoiceNumber\" name=\"invoicenumber\" class=\"form-control\" disabled=\"disabled\">\n    </div>\n    <div class=\"form-group\">\n      <label>Date</label>\n      <input [ngModel]=\"invoice.CreatedAtUtc | date: 'dd.MM.yyyy'\" name=\"createdatutc\" class=\"form-control\" disabled=\"disabled\">\n    </div>\n    <div class=\"form-group\">\n      <label>Customer</label>\n      <select [(ngModel)]=\"invoice.Customer_id\" class=\"form-control\">\n        <option *ngFor=\"let customer of customers\" [value]=\"customer._id\">{{customer.Name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Customer reference</label>\n      <input [(ngModel)]=\"invoice.CustomerReference\" name=\"customerReference\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Comment</label>\n      <input [(ngModel)]=\"invoice.Comment\" name=\"comment\" class=\"form-control\">\n    </div>\n    <div>\n      <p>Items</p>\n      <div class=\"form-group\">\n        <label>Add item</label>\n        <select [(ngModel)]=\"currentAddPosition\" class=\"form-control\" [ngModelOptions]=\"{standalone:true}\">\n          <option *ngFor=\"let position of positions\" [value]=\"position._id\">{{position.Name}}</option>\n        </select>\n        <button class=\"btn btn-default\" (click)=\"addItem()\">+</button>\n      </div>\n      <table>\n        <thead>\n          <th>Short</th>\n          <th>Name</th>\n          <th>Comment</th>\n          <th>Amount</th>\n          <th>NetPrice</th>\n          <th>Sum</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let lineitem of invoice.LineItems\">\n            <td>{{lineitem.Position.Short}}</td>\n            <td>{{lineitem.Position.Name}}</td>\n            <td><input [(ngModel)]=\"lineitem.Comment\" class=\"form-control\"></td>\n            <td><input [(ngModel)]=\"lineitem.Count\" class=\"form-control\"></td>\n            <td><input [(ngModel)]=\"lineitem.NetPrice\" class=\"form-control\"></td>\n            <td>{{getItemSum(lineitem)}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <button class=\"btn btn-default\" (click)=\"save()\">Save</button>\n  </form>\n</main>"

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-edit/invoice-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("../../../../../src/app/invoice-management/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_management_customer_service__ = __webpack_require__("../../../../../src/app/customer-management/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_management_position_service__ = __webpack_require__("../../../../../src/app/position-management/position.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoiceEditComponent = (function () {
    function InvoiceEditComponent(invoiceService, positionService, customerService, router, route) {
        this.invoiceService = invoiceService;
        this.positionService = positionService;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.positions = [];
        this.customers = [];
    }
    InvoiceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('1');
            _this.id = params['id'];
            console.log('2');
            _this.customerService
                .find('')
                .subscribe(function (customers) {
                console.log('got customers');
                console.log(customers);
                _this.customers = customers;
            }, function (errResp) {
                console.error('Error loading customers', errResp);
            });
            _this.positionService
                .find('')
                .subscribe(function (positions) {
                _this.positions = positions;
            }, function (errResp) {
                console.error('Error loading positions', errResp);
            });
            if (_this.id === '') {
                console.log('3');
                return;
            }
            else if (_this.id === 'new') {
                console.log('4');
                _this.invoice = {
                    _id: '',
                    InvoiceNumber: '',
                    Customer_id: '',
                    CustomerReference: '',
                    Comment: '',
                    CreatedAtUtc: null,
                    ModifiedAtUtc: null,
                    LineItems: [],
                    PaidAtUtc: null,
                    CancelledAtUtc: null,
                    Discount: 0
                };
                console.log('5');
            }
            else {
                console.log('6');
                _this.invoiceService.findById(_this.id).subscribe(function (invoice) { console.log('7'); _this.invoice = invoice; _this.errors = ''; }, function (error) { console.log('8'); _this.errors = 'Error loading invoice'; });
            }
        });
    };
    InvoiceEditComponent.prototype.getItemSum = function (lineItem) {
        if (lineItem === null) {
            return 0;
        }
        var tax = 1;
        for (var i = 0; i < this.positions.length; i++) {
            if (this.positions[i]._id === lineItem.Position_id) {
                tax = this.positions[i].TaxPercentage + 1;
                break;
            }
        }
        return lineItem.NetPrice * tax * lineItem.Count;
    };
    InvoiceEditComponent.prototype.addItem = function () {
        if (this.invoice !== null && this.currentAddPosition !== null) {
            for (var i = 0; i < this.invoice.LineItems.length; i++) {
                if (this.invoice.LineItems[i].Position_id === this.currentAddPosition._id) {
                    this.invoice.LineItems[i].Count += 1;
                    return;
                }
            }
            console.log(this.currentAddPosition);
            this.invoice.LineItems.push({
                _id: '',
                Comment: '',
                NetPrice: this.currentAddPosition.NetDefaultPrice,
                TaxPercentage: this.currentAddPosition.TaxPercentage,
                Count: this.currentAddPosition.DefaultCount,
                Position: this.currentAddPosition,
                Invoice_id: this.invoice._id,
                Position_id: this.currentAddPosition._id,
                CreatedAtUtc: null,
                ModifiedAtUtc: null
            });
            console.log(this.invoice);
        }
    };
    InvoiceEditComponent.prototype.save = function () {
        if (this.id === 'new') {
            this.createNew();
        }
        else {
            this.update();
        }
    };
    InvoiceEditComponent.prototype.createNew = function () {
        var _this = this;
        this.invoiceService.create(this.invoice).subscribe(function (invoice) {
            _this.invoice = invoice;
            _this.errors = 'Creating was successful!';
        }, function (err) {
            _this.errors = 'Error saving invoice';
        });
    };
    InvoiceEditComponent.prototype.update = function () {
        var _this = this;
        this.invoiceService.update(this.invoice).subscribe(function (invoice) {
            _this.invoice = invoice;
            _this.errors = 'Updating was successful!';
        }, function (err) {
            _this.errors = 'Error saving invoice';
        });
    };
    InvoiceEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-edit',
            template: __webpack_require__("../../../../../src/app/invoice-management/invoice-edit/invoice-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice-management/invoice-edit/invoice-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */],
            __WEBPACK_IMPORTED_MODULE_4__position_management_position_service__["a" /* PositionService */],
            __WEBPACK_IMPORTED_MODULE_3__customer_management_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], InvoiceEditComponent);
    return InvoiceEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  invoice-management works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoiceManagementComponent = (function () {
    function InvoiceManagementComponent() {
    }
    InvoiceManagementComponent.prototype.ngOnInit = function () {
    };
    InvoiceManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-management',
            template: __webpack_require__("../../../../../src/app/invoice-management/invoice-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice-management/invoice-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceManagementComponent);
    return InvoiceManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_management_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_management_routes__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-management.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-search/invoice-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invoice_card_invoice_card_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-card/invoice-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invoice_service__ = __webpack_require__("../../../../../src/app/invoice-management/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoice_edit_invoice_edit_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-edit/invoice-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var InvoiceManagementModule = (function () {
    function InvoiceManagementModule() {
    }
    InvoiceManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__invoice_management_routes__["a" /* INVOICE_MANAGEMENT_ROUTES */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invoice_management_component__["a" /* InvoiceManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_7__invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__invoice_card_invoice_card_component__["a" /* InvoiceCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__invoice_card_invoice_card_component__["a" /* InvoiceCardComponent */]
                // TenantSearchComponent,
                // TenantCardComponent,
                // TenantEditComponent,
            ],
            providers: [
                // TenantService
                __WEBPACK_IMPORTED_MODULE_9__invoice_service__["a" /* InvoiceService */]
            ],
            exports: [
                // TenantSearchComponent
                __WEBPACK_IMPORTED_MODULE_7__invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */]
            ]
        })
    ], InvoiceManagementModule);
    return InvoiceManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-management.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INVOICE_MANAGEMENT_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoice_edit_invoice_edit_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/invoice-management/invoice-search/invoice-search.component.ts");


var INVOICE_MANAGEMENT_ROUTES = [
    {
        path: 'invoices',
        component: __WEBPACK_IMPORTED_MODULE_1__invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */]
    },
    {
        path: 'invoices/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-search/invoice-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-search/invoice-search.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Invoices</h1>\n</header>\n<main>\n  <div>\n    <h2>Search</h2>\n    <form>\n      <div class=\"form-row\">\n        <label>Search</label>\n        <input [(ngModel)]=\"searchText\" name=\"searchText\" class=\"form-control\" class=\"form-control\">\n        <button (click)=\"search()\" class=\"btn btn-default\">Search</button>\n      </div>\n      <div class=\"form-row\">\n          <button (click)=\"new()\" class=\"btn btn-default\">New</button>\n        </div>\n    </form>\n  </div>\n  <div *ngFor=\"let t of invoices\">\n    <app-invoice-card [item]=\"t\" (delete)=\"delete($event)\">\n\n    </app-invoice-card>\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice-search/invoice-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("../../../../../src/app/invoice-management/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceSearchComponent = (function () {
    function InvoiceSearchComponent(invoiceService, router) {
        this.invoiceService = invoiceService;
        this.router = router;
        this.searchText = '';
        this.invoices = [];
    }
    InvoiceSearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    InvoiceSearchComponent.prototype.search = function () {
        var _this = this;
        this.invoiceService
            .find(this.searchText)
            .subscribe(function (invoices) {
            _this.invoices = invoices;
        }, function (errResp) {
            console.error('Error loading invoices', errResp);
        });
    };
    InvoiceSearchComponent.prototype.select = function (t) {
        this.selectedInvoice = t;
    };
    InvoiceSearchComponent.prototype.deleteInvoice = function (invoice_id) {
        var _this = this;
        this.invoiceService
            .delete(invoice_id)
            .subscribe(function (success) {
            for (var i = 0; i < _this.invoices.length; i++) {
                if (_this.invoices[i]._id === invoice_id) {
                    _this.invoices.splice(i, 1);
                    break;
                }
            }
        }, function (errResp) {
            console.error('Error deleting invoice', errResp);
        });
    };
    InvoiceSearchComponent.prototype.delete = function (event) {
        this.deleteInvoice(event);
    };
    InvoiceSearchComponent.prototype.new = function () {
        this.router.navigate(['/invoices/new']);
    };
    InvoiceSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-search',
            template: __webpack_require__("../../../../../src/app/invoice-management/invoice-search/invoice-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice-management/invoice-search/invoice-search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], InvoiceSearchComponent);
    return InvoiceSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice-management/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceService = (function () {
    function InvoiceService(http) {
        this.http = http;
    }
    /* GET all (filtered) invoices */
    InvoiceService.prototype.find = function (name) {
        var url = '/invoice';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('name', name);
        return this
            .http
            .get(url, { headers: headers, params: params });
    };
    InvoiceService.prototype.findById = function (id) {
        var url = '/invoice/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                                .set('id', id);*/
        return this
            .http
            .get(url, { headers: headers });
    };
    InvoiceService.prototype.create = function (invoiceToSave) {
        var url = '/invoice';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this
            .http
            .post(url, invoiceToSave, { headers: headers });
    };
    InvoiceService.prototype.update = function (invoiceToSave) {
        var id = invoiceToSave._id;
        var url = '/invoice/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                            .set('id', invoiceToSave.Id);*/
        return this
            .http
            .put(url, invoiceToSave, { headers: headers });
    };
    InvoiceService.prototype.delete = function (id) {
        var url = '/invoice/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                            .set('id', id);*/
        return this
            .http
            .delete(url, { headers: headers });
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" routerLink=\"/home\">WEW Invoice</a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarMenuMain\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/invoices\">Invoices</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/customers\">Customers</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/positions\">Positions</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/tenants\">Tenants</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/position-management/position-card/position-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/position-management/position-card/position-card.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card>\r\n  <div card-header>Position: {{item.Name}}</div>\r\n  <div card-content>\r\n    <dl>\r\n      <dt>Short</dt>\r\n      <dd>{{item.Short}}</dd>\r\n      <dt>Name</dt>\r\n      <dd>{{item.Name}}</dd>\r\n      <dt>NetDefaultPrice</dt>\r\n      <dd>{{item.NetDefaultPrice | currency:'EUR' }}</dd>\r\n      <dt>TaxPercentage</dt>\r\n      <dd>{{item.TaxPercentage}}%</dd>\r\n      <dt>Unit</dt>\r\n      <dd>{{item.Unit}}</dd>\r\n    </dl>\r\n  </div>\r\n  <div card-footer>\r\n    <button [routerLink]=\"['/positions/' + item._id]\">Edit</button>\r\n    <button (click)=\"deleteMe()\">Delete</button>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/position-management/position-card/position-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PositionCardComponent = (function () {
    function PositionCardComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PositionCardComponent.prototype.ngOnInit = function () {
    };
    PositionCardComponent.prototype.deleteMe = function () {
        this.delete.emit(this.item._id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PositionCardComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PositionCardComponent.prototype, "delete", void 0);
    PositionCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position-card',
            template: __webpack_require__("../../../../../src/app/position-management/position-card/position-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/position-management/position-card/position-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PositionCardComponent);
    return PositionCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/position-management/position-edit/position-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/position-management/position-edit/position-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1>Positions</h1>\r\n    <h2>Edit position {{position.Name}}</h2>\r\n  </header>\r\n  <main>\r\n    <form #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label>Short</label>\r\n        <input [(ngModel)]=\"position.Short\" name=\"short\" class=\"form-control\" required minlength=\"2\" maxlength=\"4\">\r\n        <div class=\"alert\" *ngIf=\"f?.controls['short']?.hasError('required')\">Short is required.</div>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['short']?.hasError('minlength')\">Short must be at least 2 chars.</div>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['short']?.hasError('maxlength')\">Short must be max 4 chars.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input [(ngModel)]=\"position.Name\" name=\"name\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['short']?.hasError('required')\">Name is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Net default price</label>\r\n        <input [(ngModel)]=\"position.NetDefaultPrice\" name=\"netdefaultprice\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['netdefaultprice']?.hasError('required')\">A default price is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>TaxPercentage</label>\r\n        <input [(ngModel)]=\"position.TaxPercentage\" name=\"taxpercentage\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['taxpercentage']?.hasError('required')\">A tax percentage is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Default count</label>\r\n        <input [(ngModel)]=\"position.DefaultCount\" name=\"defaultcount\" class=\"form-control\" required>\r\n        <div class=\"alert\" *ngIf=\"f?.controls['short']?.hasError('required')\">A default count is required.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Unit</label>\r\n        <input [(ngModel)]=\"position.Unit\" name=\"unit\" class=\"form-control\">\r\n      </div>\r\n      <button class=\"btn btn-default\" (click)=\"save()\">Save</button>\r\n    </form>\r\n  </main>\r\n"

/***/ }),

/***/ "../../../../../src/app/position-management/position-edit/position-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_service__ = __webpack_require__("../../../../../src/app/position-management/position.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionEditComponent = (function () {
    function PositionEditComponent(positionService, router, route) {
        this.positionService = positionService;
        this.router = router;
        this.route = route;
        this.position = {
            _id: '',
            Short: '',
            Name: '',
            NetDefaultPrice: 0,
            TaxPercentage: 0,
            DefaultCount: 0,
            Unit: '',
            Tenant: null,
            CreatedAtUtc: null,
            ModifiedAtUtc: null
        };
    }
    PositionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id === '') {
                return;
            }
            else if (_this.id === 'new') {
            }
            else {
                _this.positionService.findById(_this.id).subscribe(function (position) { _this.position = position; _this.errors = ''; }, function (error) { _this.errors = 'Error loading position'; });
            }
        });
    };
    PositionEditComponent.prototype.save = function () {
        if (this.id === 'new') {
            this.createNew();
        }
        else {
            this.update();
        }
    };
    PositionEditComponent.prototype.createNew = function () {
        var _this = this;
        this.positionService.create(this.position).subscribe(function (position) {
            _this.position = position;
            _this.errors = 'Creating was successful!';
            _this.router.navigate(['/positions']);
        }, function (err) {
            _this.errors = 'Error saving position';
        });
    };
    PositionEditComponent.prototype.update = function () {
        var _this = this;
        this.positionService.update(this.position).subscribe(function (position) {
            _this.position = position;
            _this.errors = 'Updating was successful!';
            _this.router.navigate(['/positions']);
        }, function (err) {
            _this.errors = 'Error saving position';
        });
    };
    PositionEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position-edit',
            template: __webpack_require__("../../../../../src/app/position-management/position-edit/position-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/position-management/position-edit/position-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PositionEditComponent);
    return PositionEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/position-management/position-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/position-management/position-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  position-management works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/position-management/position-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PositionManagementComponent = (function () {
    function PositionManagementComponent() {
    }
    PositionManagementComponent.prototype.ngOnInit = function () {
    };
    PositionManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position-management',
            template: __webpack_require__("../../../../../src/app/position-management/position-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/position-management/position-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PositionManagementComponent);
    return PositionManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/position-management/position-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_management_component__ = __webpack_require__("../../../../../src/app/position-management/position-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__position_card_position_card_component__ = __webpack_require__("../../../../../src/app/position-management/position-card/position-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_edit_position_edit_component__ = __webpack_require__("../../../../../src/app/position-management/position-edit/position-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__position_search_position_search_component__ = __webpack_require__("../../../../../src/app/position-management/position-search/position-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__position_service__ = __webpack_require__("../../../../../src/app/position-management/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__position_management_routes__ = __webpack_require__("../../../../../src/app/position-management/position-management.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PositionManagementModule = (function () {
    function PositionManagementModule() {
    }
    PositionManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_10__position_management_routes__["a" /* POSITION_MANAGEMENT_ROUTES */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__position_management_component__["a" /* PositionManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_6__position_card_position_card_component__["a" /* PositionCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__position_edit_position_edit_component__["a" /* PositionEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__position_search_position_search_component__["a" /* PositionSearchComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__position_service__["a" /* PositionService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__position_search_position_search_component__["a" /* PositionSearchComponent */]
            ]
        })
    ], PositionManagementModule);
    return PositionManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/position-management/position-management.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POSITION_MANAGEMENT_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position_edit_position_edit_component__ = __webpack_require__("../../../../../src/app/position-management/position-edit/position-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_search_position_search_component__ = __webpack_require__("../../../../../src/app/position-management/position-search/position-search.component.ts");


var POSITION_MANAGEMENT_ROUTES = [
    {
        path: 'positions',
        component: __WEBPACK_IMPORTED_MODULE_1__position_search_position_search_component__["a" /* PositionSearchComponent */]
    },
    {
        path: 'positions/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__position_edit_position_edit_component__["a" /* PositionEditComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/position-management/position-search/position-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/position-management/position-search/position-search.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h1>Position</h1>\r\n</header>\r\n<main>\r\n  <div>\r\n    <h2>Search</h2>\r\n    <form>\r\n      <div class=\"form-row\">\r\n        <label>Name</label>\r\n        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <button (click)=\"search()\" class=\"btn btn-default\">Search</button>\r\n      </div>\r\n      <div class=\"form-row\">\r\n          <button (click)=\"new()\" class=\"btn btn-default\">New</button>\r\n        </div>\r\n    </form>\r\n  </div>\r\n  <div *ngFor=\"let p of positions\">\r\n    <app-position-card [item]=\"p\" (delete)=\"delete($event)\">\r\n\r\n    </app-position-card>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/position-management/position-search/position-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_service__ = __webpack_require__("../../../../../src/app/position-management/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionSearchComponent = (function () {
    function PositionSearchComponent(positionService, router) {
        this.positionService = positionService;
        this.router = router;
        this.name = '';
        this.positions = [];
    }
    PositionSearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    PositionSearchComponent.prototype.search = function () {
        var _this = this;
        this.positionService
            .find(this.name)
            .subscribe(function (positions) {
            _this.positions = positions;
        }, function (errResp) {
            console.error('Error loading positions', errResp);
        });
    };
    PositionSearchComponent.prototype.select = function (p) {
        this.selectedPosition = p;
    };
    PositionSearchComponent.prototype.new = function () {
        this.router.navigate(['/positions/new']);
    };
    PositionSearchComponent.prototype.deletePosition = function (position_id) {
        var _this = this;
        this.positionService
            .delete(position_id)
            .subscribe(function (success) {
            for (var i = 0; i < _this.positions.length; i++) {
                if (_this.positions[i]._id === position_id) {
                    _this.positions.splice(i, 1);
                    break;
                }
            }
        }, function (errResp) {
            console.error('Error deleting position', errResp);
        });
    };
    PositionSearchComponent.prototype.delete = function (event) {
        this.deletePosition(event);
    };
    PositionSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position-search',
            template: __webpack_require__("../../../../../src/app/position-management/position-search/position-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/position-management/position-search/position-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PositionSearchComponent);
    return PositionSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/position-management/position.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionService = (function () {
    function PositionService(http) {
        this.http = http;
    }
    /* GET all (filtered) position */
    PositionService.prototype.find = function (name) {
        var url = '/position';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('name', name);
        return this
            .http
            .get(url, { headers: headers, params: params });
    };
    PositionService.prototype.findById = function (id) {
        var url = '/position/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                                .set('id', id);*/
        return this
            .http
            .get(url, { headers: headers });
    };
    PositionService.prototype.create = function (positionToSave) {
        var url = '/position';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this
            .http
            .post(url, positionToSave, { headers: headers });
    };
    PositionService.prototype.update = function (positionToSave) {
        var id = positionToSave._id;
        var url = '/position/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                            .set('id', positionToSave.Id);*/
        return this
            .http
            .put(url, positionToSave, { headers: headers });
    };
    PositionService.prototype.delete = function (id) {
        var url = '/position/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                            .set('id', id);*/
        return this
            .http
            .delete(url, { headers: headers });
    };
    PositionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var url = '/auth/login';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        var loginData = {
            UserName: username,
            Password: password
        };
        return this.http.post(url, loginData, { headers: headers })
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currenUser', JSON.stringify({ username: username, token: token }));
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card col-xs-12 col-sm-6 col-md-4\">\r\n  <header class=\"card-header\">\r\n    <ng-content select=\"[card-header]\"></ng-content>\r\n  </header>\r\n  <main class=\"card-main\">\r\n    <ng-content select=\"[card-content]\"></ng-content>\r\n  </main>\r\n  <footer class=\"card-footer\">\r\n    <ng-content select=\"[card-footer]\"></ng-content>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/shared/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_component__ = __webpack_require__("../../../../../src/app/shared/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card_card_component__["a" /* CardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card_card_component__["a" /* CardComponent */]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-card/tenant-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-card/tenant-card.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card>\r\n  <div card-header>Tenant: {{item.Name}}</div>\r\n  <div card-content>\r\n    <dl>\r\n      <dt>Name</dt>\r\n      <dd>{{item.Name}}</dd>\r\n      <dt>Zipcode</dt>\r\n      <dd>{{item.Zipcode}}</dd>\r\n      <dt>City</dt>\r\n      <dd>{{item.City}}</dd>\r\n    </dl>\r\n  </div>\r\n  <div card-footer>\r\n    <button [routerLink]=\"['/tenants/' + item._id]\">Edit</button>\r\n    <button (click)=\"deleteMe()\">Delete</button>\r\n  </div>\r\n</app-card>"

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-card/tenant-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TenantCardComponent = (function () {
    function TenantCardComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TenantCardComponent.prototype.deleteMe = function () {
        this.delete.emit(this.item._id);
    };
    TenantCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TenantCardComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TenantCardComponent.prototype, "delete", void 0);
    TenantCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tenant-card',
            template: __webpack_require__("../../../../../src/app/tenant-management/tenant-card/tenant-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tenant-management/tenant-card/tenant-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TenantCardComponent);
    return TenantCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-edit/tenant-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-edit/tenant-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h1>Tenants</h1>\r\n  <h2>Edit tenant {{tenant.Name}}</h2>\r\n</header>\r\n<main>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input [(ngModel)]=\"tenant.Name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Address</label>\r\n      <input [(ngModel)]=\"tenant.Address1\" name=\"address1\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label></label>\r\n      <input [(ngModel)]=\"tenant.Address2\" name=\"address2\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label></label>\r\n      <input [(ngModel)]=\"tenant.Address3\" name=\"address3\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Zip code</label>\r\n      <input [(ngModel)]=\"tenant.Zipcode\" name=\"zipcode\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>City</label>\r\n      <input [(ngModel)]=\"tenant.City\" name=\"city\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Phone number</label>\r\n      <input [(ngModel)]=\"tenant.Phonenumber\" name=\"phonenumber\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>IBAN</label>\r\n      <input [(ngModel)]=\"tenant.IBAN\" name=\"iban\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>BIC</label>\r\n      <input [(ngModel)]=\"tenant.BIC\" name=\"bic\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Invoice number scheme</label>\r\n      <input [(ngModel)]=\"tenant.InvoiceNumberScheme\" name=\"invoiceNumberScheme\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Tax ID</label>\r\n      <input [(ngModel)]=\"tenant.TaxIdentificationNumber\" name=\"taxIdentificationNumber\" class=\"form-control\">\r\n    </div>\r\n    <button class=\"btn btn-default\" (click)=\"save()\">Save</button>\r\n  </form>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-edit/tenant-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tenant_service__ = __webpack_require__("../../../../../src/app/tenant-management/tenant.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenantEditComponent = (function () {
    function TenantEditComponent(tenantService, router, route) {
        this.tenantService = tenantService;
        this.router = router;
        this.route = route;
        this.tenant = {
            _id: '',
            Name: '',
            Address1: '',
            Address2: '',
            Address3: '',
            Zipcode: '',
            City: '',
            Phonenumber: '',
            TaxIdentificationNumber: '',
            InvoiceNumberScheme: '',
            LogoUrl: '',
            IBAN: '',
            BIC: '',
            CreatedAtUtc: null,
            ModifiedAtUtc: null
        };
    }
    TenantEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id === '') {
                return;
            }
            else if (_this.id === 'new') {
            }
            else {
                _this.tenantService.findById(_this.id).subscribe(function (tenant) { _this.tenant = tenant; _this.errors = ''; }, function (error) { _this.errors = 'Error loading tenant'; });
            }
        });
    };
    TenantEditComponent.prototype.save = function () {
        if (this.id === 'new') {
            this.createNew();
        }
        else {
            this.update();
        }
    };
    TenantEditComponent.prototype.createNew = function () {
        var _this = this;
        this.tenantService.create(this.tenant).subscribe(function (tenant) {
            _this.tenant = tenant;
            _this.errors = 'Creating was successful!';
            _this.router.navigate(['/tenants']);
        }, function (err) {
            _this.errors = 'Error saving tenant';
        });
    };
    TenantEditComponent.prototype.update = function () {
        var _this = this;
        this.tenantService.update(this.tenant).subscribe(function (tenant) {
            _this.tenant = tenant;
            _this.errors = 'Updating was successful!';
            _this.router.navigate(['/tenants']);
        }, function (err) {
            _this.errors = 'Error saving tenant';
        });
    };
    TenantEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tenant-edit',
            template: __webpack_require__("../../../../../src/app/tenant-management/tenant-edit/tenant-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tenant-management/tenant-edit/tenant-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__tenant_service__["a" /* TenantService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TenantEditComponent);
    return TenantEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tenant-management works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TenantManagementComponent = (function () {
    function TenantManagementComponent() {
    }
    TenantManagementComponent.prototype.ngOnInit = function () {
    };
    TenantManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tenant-management',
            template: __webpack_require__("../../../../../src/app/tenant-management/tenant-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tenant-management/tenant-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TenantManagementComponent);
    return TenantManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tenant_management_component__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenant_search_tenant_search_component__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-search/tenant-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tenant_card_tenant_card_component__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-card/tenant-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tenant_edit_tenant_edit_component__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-edit/tenant-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tenant_management_routes__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-management.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tenant_service__ = __webpack_require__("../../../../../src/app/tenant-management/tenant.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TenantManagementModule = (function () {
    function TenantManagementModule() {
    }
    TenantManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__tenant_management_routes__["a" /* TENANT_MANAGEMENT_ROUTES */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tenant_management_component__["a" /* TenantManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tenant_search_tenant_search_component__["a" /* TenantSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tenant_card_tenant_card_component__["a" /* TenantCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tenant_edit_tenant_edit_component__["a" /* TenantEditComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__tenant_service__["a" /* TenantService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__tenant_search_tenant_search_component__["a" /* TenantSearchComponent */]
            ]
        })
    ], TenantManagementModule);
    return TenantManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-management.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TENANT_MANAGEMENT_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tenant_edit_tenant_edit_component__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-edit/tenant-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tenant_search_tenant_search_component__ = __webpack_require__("../../../../../src/app/tenant-management/tenant-search/tenant-search.component.ts");


var TENANT_MANAGEMENT_ROUTES = [
    {
        path: 'tenants',
        component: __WEBPACK_IMPORTED_MODULE_1__tenant_search_tenant_search_component__["a" /* TenantSearchComponent */]
    },
    {
        path: 'tenants/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__tenant_edit_tenant_edit_component__["a" /* TenantEditComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-search/tenant-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-search/tenant-search.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h1>Tenants</h1>\r\n</header>\r\n<main>\r\n  <div>\r\n    <h2>Search</h2>\r\n    <form>\r\n      <div class=\"form-row\">\r\n        <label>Name</label>\r\n        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <button (click)=\"search()\" class=\"btn btn-default\">Search</button>\r\n      </div>\r\n      <div class=\"form-row\">\r\n          <button (click)=\"new()\" class=\"btn btn-default\">New</button>\r\n        </div>\r\n    </form>\r\n  </div>\r\n  <div *ngFor=\"let t of tenants\">\r\n    <app-tenant-card [item]=\"t\" (delete)=\"delete($event)\">\r\n\r\n    </app-tenant-card>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant-search/tenant-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tenant_service__ = __webpack_require__("../../../../../src/app/tenant-management/tenant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenantSearchComponent = (function () {
    function TenantSearchComponent(tenantService, router) {
        this.tenantService = tenantService;
        this.router = router;
        this.name = '';
        this.tenants = [];
    }
    TenantSearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    TenantSearchComponent.prototype.search = function () {
        var _this = this;
        this.tenantService
            .find(this.name)
            .subscribe(function (tenants) {
            _this.tenants = tenants;
        }, function (errResp) {
            console.error('Error loading tenants', errResp);
        });
    };
    TenantSearchComponent.prototype.select = function (t) {
        this.selectedTenant = t;
    };
    TenantSearchComponent.prototype.new = function () {
        this.router.navigate(['/tenants/new']);
    };
    TenantSearchComponent.prototype.deleteTenant = function (tenant_id) {
        var _this = this;
        this.tenantService
            .delete(tenant_id)
            .subscribe(function (success) {
            for (var i = 0; i < _this.tenants.length; i++) {
                if (_this.tenants[i]._id === tenant_id) {
                    _this.tenants.splice(i, 1);
                    break;
                }
            }
        }, function (errResp) {
            console.error('Error deleting invoice', errResp);
        });
    };
    TenantSearchComponent.prototype.delete = function (event) {
        this.deleteTenant(event);
    };
    TenantSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tenant-search',
            template: __webpack_require__("../../../../../src/app/tenant-management/tenant-search/tenant-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tenant-management/tenant-search/tenant-search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__tenant_service__["a" /* TenantService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tenant_service__["a" /* TenantService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TenantSearchComponent);
    return TenantSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tenant-management/tenant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TenantService = (function () {
    function TenantService(http) {
        this.http = http;
    }
    /* GET all (filtered) tenants */
    TenantService.prototype.find = function (name) {
        var url = '/tenant';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('name', name);
        return this
            .http
            .get(url, { headers: headers, params: params });
    };
    TenantService.prototype.findById = function (id) {
        var url = '/tenant/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                                .set('id', id);*/
        return this
            .http
            .get(url, { headers: headers });
    };
    TenantService.prototype.create = function (tenantToSave) {
        var url = '/tenant';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this
            .http
            .post(url, tenantToSave, { headers: headers });
    };
    TenantService.prototype.update = function (tenantToSave) {
        var id = tenantToSave._id;
        var url = '/tenant/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                            .set('id', tenantToSave.Id);*/
        return this
            .http
            .put(url, tenantToSave, { headers: headers });
    };
    TenantService.prototype.delete = function (id) {
        var url = '/tenant/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        /*const params = new HttpParams()
                            .set('id', id);*/
        return this
            .http
            .delete(url, { headers: headers });
    };
    TenantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TenantService);
    return TenantService;
}());



/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-management works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserManagementComponent = (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-management',
            template: __webpack_require__("../../../../../src/app/user-management/user-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-management/user-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-management/user-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_component__ = __webpack_require__("../../../../../src/app/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_search_user_search_component__ = __webpack_require__("../../../../../src/app/user-management/user-search/user-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserManagementModule = (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_management_component__["a" /* UserManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_3__user_search_user_search_component__["a" /* UserSearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__user_search_user_search_component__["a" /* UserSearchComponent */]
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/user-management/user-search/user-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/user-search/user-search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-search works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/user-management/user-search/user-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSearchComponent = (function () {
    function UserSearchComponent() {
    }
    UserSearchComponent.prototype.ngOnInit = function () {
    };
    UserSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-search',
            template: __webpack_require__("../../../../../src/app/user-management/user-search/user-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-management/user-search/user-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function UserProfileComponent_div_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "There are no records");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_1_table_2_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileComponent_div_1_table_2_tr_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const a_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.delete(a_r5.objectId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", a_r5.ownerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/edit/", a_r5.objectId, "");
} }
function UserProfileComponent_div_1_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "UserId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Article Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserProfileComponent_div_1_table_2_tr_10_Template, 10, 3, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.articles);
} }
function UserProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserProfileComponent_div_1_h2_1_Template, 2, 0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserProfileComponent_div_1_table_2_Template, 11, 1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.articles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.articles.length !== 0);
} }
function UserProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserProfileComponent {
    constructor(media, service) {
        this.media = media;
        this.service = service;
        this.articles = [];
        this.isLoaded = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.userId = localStorage.getItem('userId');
                this.articles = yield this.media.userRecords(`${this.userId}`, 'posts');
                this.isLoaded = true;
            }
            catch (_a) {
                console.log("Error during loading!");
            }
        });
    }
    delete(f) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.media.deleteRecord('posts', f);
                this.articles = yield this.media.userRecords(`${this.userId}`, 'posts');
            }
            catch (_a) {
                console.log("Error during deleting!");
            }
        });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 3, vars: 2, consts: [["class", "admin-panel", 4, "ngIf"], [1, "admin-panel"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttons", 3, "routerLink"], [1, "buttons", 3, "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserProfileComponent_div_1_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserProfileComponent_div_2_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["table[_ngcontent-%COMP%] {\n    width: 80vw;\n    border: 2px solid green;\n    border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    padding: 0.5rem;\n}\n\ntd[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1.1rem;\n}\n\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    background-color: rgba(73, 73,73,0.5);\n    text-align: center;\n}\n\ntr[_ngcontent-%COMP%] {\n    border: 2px solid green;\n}\n\n.admin-panel[_ngcontent-%COMP%] {\n    min-height: 83.9vh;\n    padding: 5rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.record-line[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: nowrap;\n    background-color: hotpink;\n    width: 70%;\n    margin: 1rem 0;\n    height: 3rem;\n    border: 2px solid black;\n    border-radius: 1rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    padding: 0.3em 0.2em;\n    background-color: gold;\n    border-radius: 0.5em;\n    margin: 0.3em;\n    color: green;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRyIHRoIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbnRkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbnRkIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGJvZHkgdHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLDczLDAuNSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG59XG5cbi5hZG1pbi1wYW5lbCB7XG4gICAgbWluLWhlaWdodDogODMuOXZoO1xuICAgIHBhZGRpbmc6IDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZWNvcmQtbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgcGFkZGluZzogMC4zZW0gMC4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICBtYXJnaW46IDAuM2VtO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css']
            }]
    }], function () { return [{ type: _services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stoyan/Desktop/gitKraken-test/Angular-course-project/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RegisterComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The email you entered is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The password must be minimum 3 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passwords don't match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(fb, router, service) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.form = this.createFormGroup();
    }
    ngOnInit() {
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            rePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    get email() {
        return this.form.get('email');
    }
    get password() {
        return this.form.get('password');
    }
    get rePassword() {
        return this.form.get('rePassword');
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.form.valid) {
                    let { email, password, rePassword } = this.form.value;
                    yield this.service.registerUser(email, password);
                    yield this.service.loginUser(email, password);
                    yield this.router.navigate(['/about']);
                }
            }
            catch (_a) {
                console.log('Registration error!');
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 28, vars: 5, consts: [[1, "register-container"], [1, "site-register"], [3, "formGroup", "ngSubmit"], [1, "email"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Example: ryan@abc.bg"], ["class", "error", 4, "ngIf"], [1, "password"], ["for", "u-password"], ["type", "password", "id", "u-password", "formControlName", "password"], ["for", "rep-u-password"], ["type", "password", "id", "rep-u-password", "formControlName", "rePassword"], [1, "submit", "field"], [1, "btn-submit", 3, "disabled"], [1, "error"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterComponent_div_24_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.email == null ? null : ctx.email.touched) && (ctx.email == null ? null : ctx.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.touched) && (ctx.password == null ? null : ctx.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.rePassword == null ? null : ctx.rePassword.touched) && (ctx.rePassword == null ? null : ctx.rePassword.value) !== (ctx.password == null ? null : ctx.password.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid || (ctx.rePassword == null ? null : ctx.rePassword.value) !== (ctx.password == null ? null : ctx.password.value));
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["form[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.error[_ngcontent-%COMP%] {\n    border: 2.5px solid red;\n    border-radius: 10px;\n    background-color: rgba(255,0,0,0.3);\n    width: 20vw;\n    margin: 0 auto;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n}\n\n.register-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1QyIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG59XG5cbmZvcm0gaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmVycm9yIHtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjMpO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uc2l0ZS1sb2dpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbi5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxLjJlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AboutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rec_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vertical", rec_r1.isVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", rec_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rec_r1.description, " ");
} }
class AboutComponent {
    constructor(route) {
        this.route = route;
        this.records = [
            {
                isVertical: true,
                imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851732/sleeping-min_bfibdi.jpg',
                description: 'This is me only 30 days old sleeping on my humans bed. This was one of my favourite activities to do and guess what...it is still a favourite thing to do.'
            },
            {
                isVertical: true,
                imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851730/baby-min_rxbwjg.jpg',
                description: 'On this picture I am a little older than the first one. As you see I learned fast how to pose infront of the camera. I look so fluffy &hearts; .'
            },
            {
                isVertical: true,
                imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851731/playing-min_bjhm0a.jpg',
                description: 'Here we are me and my best friend - The Angry Chicken. We used to love playing together. Every time when he was trying to run away from me I was there to catch him. Unfortunately one day The Angry Chicken went to visit a human friend and never came back.'
            },
            {
                isVertical: false,
                imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851733/christmas-min_qlne5q.jpg',
                description: 'My humans realised that I look so handsome infront of the camera... so they took me to some guy with very big photo camera. He was taking picture of us for an hour... it was very exhausting.'
            },
            {
                isVertical: true,
                imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851729/1st-of-march-min_kc6aow.jpg',
                description: "This picture is taken at 1<sup>st</sup> of March. I didn't know it is a traditional bulgarian holiday. My humans gave me this thing Martenichka. It is made of white and red wool and you have to wear it until you see a stork. It is a little strange but as long as we do this for good health I am in."
            },
            {
                isVertical: true,
                imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851731/caffee-on-the-beach-min_t4l8sq.jpg',
                description: 'Oooh this is a favourite memory of mine. As I said at first &hearts; I LOVE THE BEACH &hearts; !!! I love when my humans take me there. While they are drinking this strange soup called coffe I am digging and searching for treasures.'
            },
            {
                isVertical: true,
                imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851733/watching-the-see-min_ugr6td.jpg',
                description: "On this picture you can see the long road in the sea. I don't like going on this road because it looks so scary but it is nice to stand on the beach looking at it... dreaming about good food and cold beer!"
            }
        ];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 7, vars: 1, consts: [[1, "about-container"], [1, "about-title"], [1, "gallery"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "media"], ["alt", "", 3, "src"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Story of my life ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutComponent_div_6_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".about-container[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    min-height: 79.5vh;\n}\n\n.about-title[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: 0 auto;\n    text-align: center;\n    background-color: rgba(101, 217, 247, 0.5);\n    border-radius: 0.3em;\n}\n\n.gallery[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    min-height: 20em;\n}\n\n.item[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 40%;\n    width: 30%;\n    height: 30em;\n    margin: 1em;\n    background-color: rgba(0, 0, 0, 0.4);\n    border-radius: 0.5em;\n}\n\n.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    border-radius: 0.3em;\n    padding: 1em;\n    color: gold;\n    text-align: center;\n}\n\n.media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 70%;\n    overflow: hidden;\n}\n\nimg[_ngcontent-%COMP%] {\n    border-radius: 0.3em;\n    box-shadow: 0 0 1em 0 rgba(101, 217, 247, 0.3);\n}\n\n.media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n}\n\n.media.vertical[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 90%;\n    width: auto;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUEsZUFBZTs7QUFHZjtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDc5LjV2aDtcbn1cblxuLmFib3V0LXRpdGxlIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMjE3LCAyNDcsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbi5nYWxsZXJ5IHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDIwZW07XG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMCAwIDQwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzBlbTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG5cbi5pdGVtIHAge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBjb2xvcjogZ29sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMTAxLCAyMTcsIDI0NywgMC4zKTtcbn1cblxuLm1lZGlhIGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tZWRpYS52ZXJ0aWNhbCBpbWcge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4vKiByZXNwb25zaXZlICovXG5cblxuQG1lZGlhICggbWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMixcbiAgICAuYXJ0aWNsZS1pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5hcnRpY2xlLWluZm8ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgICAvKiAuYXJ0aWNsZS1tZWRpYSBpbWcgICovXG4gICAgLlBvcnRyYWl0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5MYW5kc2NhcGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5idXR0b25zIHtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5saWtlLWJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAuaGVhZGVyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaGFtYnVyZ2VyIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpbnB1dDpjaGVja2VkK2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA5MCU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMzV2dztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYgdWwgbGkrbGksXG4gICAgdWwgbGkrbGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLyogLmFydGljbGUtbWVkaWEgaW1nICAqL1xuICAgIC5Qb3J0cmFpdCB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgIH1cbiAgICAuTGFuZHNjYXBlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogNDMlO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgfVxuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgfVxuICAgIC5tYWluLWludHJvZHVjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuc3Rvcnkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmhlYWRlci1uYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuc2l0ZS1hcnRpY2xlcyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "8rb8":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome ", ctx_r0.userName, "!");
} }
function HeaderComponent_ul_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin Panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_ul_11_li_1_Template, 3, 0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My moments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Your Stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Share a memory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ul_11_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin);
} }
function HeaderComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.isAdmin = false;
    }
    ngOnInit() {
        this.userName = localStorage.getItem('email');
        this.userCheck();
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.service.logoutUser();
                this.router.navigate(['home']);
            }
            catch (_a) {
                console.log("Logout error!");
            }
        });
    }
    userCheck() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = Object.assign(yield this.service.getUser());
                if (this.user && (this.user.role === "admin")) {
                    this.isAdmin = true;
                }
                else {
                    this.isAdmin = false;
                }
            }
            catch (_a) {
                console.log("Admin localisation error!");
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 3, consts: [[1, "site-header"], [1, "header-nav"], [1, "header-logo"], ["routerLink", "/home"], ["routerLink", "/user-profile", 4, "ngIf"], [1, "hamburger"], ["for", "ham-check", "hidden", ""], [1, "fas", "fa-bars"], ["type", "checkbox", "id", "ham-check", "hidden", ""], [1, "header-menu"], [4, "ngIf"], ["routerLink", "/user-profile"], ["routerLink", "/about"], ["routerLink", "/articles"], ["routerLink", "/create"], ["id", "logout", 3, "click"], ["routerLink", "/admin"], ["routerLink", "/login"], ["routerLink", "/register"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ryan's life");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_a_5_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_ul_11_Template, 14, 1, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_ul_12_Template, 7, 0, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#logout[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.profile-link[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n.site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBQ0EsaURBQWlEOztBQUVqRDtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ291dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZS1saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zaXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC41KTtcbn1cblxuXG4uaGVhZGVyLW5hdiBwIHtcbiAgICBjb2xvcjogZ29sZDtcbn1cblxuLmhlYWRlci1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oZWFkZXItbmF2IHVsLFxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyLW5hdiB1bCBsaStsaSxcbnVsIGxpK2xpIHtcbiAgICBtYXJnaW4tbGVmdDogMS4yZW07XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcbn1cblxuLmhlYWRlci1tZW51IHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWltYWdlIGgyIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uaGVhZGVyLWltYWdlIHAge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA2LjVlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDAgMC4xZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKCBtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5oZWFkZXItbmF2LFxuICAgIC5mb290ZXItbmF2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIGgyLFxuICAgIC5hcnRpY2xlLWluZm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG4gICAgLmFydGljbGUtaW5mbyB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICAgIC8qIC5hcnRpY2xlLW1lZGlhIGltZyAgKi9cbiAgICAuUG9ydHJhaXQge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLkxhbmRzY2FwZSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ1dHRvbnMge1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB9XG4gICAgLmxpa2UtYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKCBtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmFib3V0LXRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC5oZWFkZXItbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oYW1idXJnZXIgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlucHV0OmNoZWNrZWQrZGl2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5pdGVtIHtcbiAgICAgICAgZmxleDogMCAwIDkwJTtcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG4gICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5oZWFkZXItbmF2LFxuICAgIC5mb290ZXItbmF2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIGZvcm0gaW5wdXQge1xuICAgICAgICB3aWR0aDogMzV2dztcbiAgICB9XG4gICAgdWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiAzNXZ3O1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdiB1bCBsaStsaSxcbiAgICB1bCBsaStsaSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAvKiAuYXJ0aWNsZS1tZWRpYSBpbWcgICovXG4gICAgLlBvcnRyYWl0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgfVxuICAgIC5MYW5kc2NhcGUge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MyU7XG4gICAgfVxufVxuXG5AbWVkaWEgKCBtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5pdGVtIHtcbiAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICB9XG4gICAgLmFib3V0LXRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB9XG4gICAgLm1haW4taW50cm9kdWNlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5zdG9yeSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmltZyB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5zaXRlLWFydGljbGVzIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDQ1JTtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    backendless: {
        APP_ID: 'A2EE51E2-94DD-0CD0-FFA8-C98E74943B00',
        API_KEY: '61EF6831-9872-4168-8377-45EDA2927462'
    }
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

/***/ "DLXL":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function ArticleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticleComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "View story");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("picture-", record_r3.orientation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", record_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", record_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", record_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", record_r3.objectId);
} }
function ArticleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleComponent_div_2_div_1_Template, 7, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.userRecords);
} }
class ArticleComponent {
    constructor(service, media) {
        this.service = service;
        this.media = media;
        this.userRecords = [];
        this.isLoaded = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoaded = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.media.getAllRecords("posts")).subscribe(result => this.userRecords = result);
        });
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 3, vars: 2, consts: [["class", "loader site-articles", 4, "ngIf"], ["class", "site-articles", 4, "ngIf"], [1, "loader", "site-articles"], [1, "site-articles"], ["class", "single-article", 4, "ngFor", "ngForOf"], [1, "single-article"], [3, "src", "alt"], [3, "routerLink"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticleComponent_div_2_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userRecords);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".site-articles[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: calc(95.3vh - 60px - 59px);\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n}\n\n.single-article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    max-width: 30%;\n    height: 60vh;\n    text-align: center;\n    margin: 1em;\n}\n\n.single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n}\n\n.single-article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    background-color: indigo;\n    margin: 1em;\n    padding: 0.3em 1.5em;\n    border-radius: 0.35em;\n}\n\n.picture[_ngcontent-%COMP%] {\n    width: 50%;\n    max-height: 70%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.picture-Landscape[_ngcontent-%COMP%] {\n    width: 90%;\n    max-height: 100%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n\n\n.picture-Landscape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n\n.picture-Portrait[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.picture-Portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-width: 60%;\n}\n\n.article-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 80%;\n    min-height: 83.9vh;\n    margin: 0 auto;\n}\n\n.article-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.Landscape[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.article-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    border: 2px solid black;\n    margin: 1em;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.Portrait[_ngcontent-%COMP%] {\n    max-width: 60%;\n}\n\n.article-info[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 60%;\n    background-color: rgba(75, 75, 75, 0.5);\n    margin: 1em;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n}\n\n.article-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.like-btn[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 0.3em 1.2em;\n    background-color: green;\n    border-radius: 0.5em;\n    margin: 1em;\n    cursor: pointer;\n}\n\n.loader[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzIiwiYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUdBLGNBQWM7O0FBRWQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FDcElBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWFydGljbGVzIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTUuM3ZoIC0gNjBweCAtIDU5cHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4My45dmg7XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMC4zZW0gMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNWVtO1xufVxuXG4ucGljdHVyZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnBpY3R1cmUtTGFuZHNjYXBlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuXG4vKiAucGljdHVyZSAgKi9cblxuLnBpY3R1cmUtTGFuZHNjYXBlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnBpY3R1cmUtUG9ydHJhaXQge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4ucGljdHVyZS1Qb3J0cmFpdCBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuLmFydGljbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFydGljbGUtbWVkaWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4uTGFuZHNjYXBlIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLmFydGljbGUtbWVkaWEgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLlBvcnRyYWl0IHtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuLmFydGljbGUtaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjUpO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcnRpY2xlLWluZm8gaDIge1xuICAgIGZvbnQtc2l6ZTogMi4zZW07XG59XG5cbi5hcnRpY2xlLWluZm8gcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpa2UtYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHBhZGRpbmc6IDAuM2VtIDEuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgdXJsKCcuLi8uLi9hc3NldHMvY3NzL2FydGljbGVzLmNzcycpO1xuXG5cbi5sb2FkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"] }]; }, null); })();


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "site-footer"], [1, "footer-nav"], [1, "footer-icons"], ["href", "https://www.facebook.com ", 1, "f-book"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com ", 1, "instagram"], [1, "fab", "fa-instagram"], ["href", "https://twitter.com ", 1, "twitter"], [1, "fab", "fa-twitter-square"], [1, "footer-more"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All rights reserved \u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%], .site-footer[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.site-footer[_ngcontent-%COMP%] {\n    \n    display: flex;\n    align-items: center;\n    min-height: 3em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.3em 0;\n}\n\n.f-book[_ngcontent-%COMP%]:hover {\n    color: blue;\n}\n\n.instagram[_ngcontent-%COMP%]:hover {\n    color: orange;\n}\n\n.twitter[_ngcontent-%COMP%]:hover {\n    color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTs7O2tCQUdjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuNSk7XG59XG5cbi5oZWFkZXItbmF2IHAge1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG4uaGVhZGVyLW5hdixcbi5mb290ZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyLW5hdiB1bCxcbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1uYXYgdWwgbGkrbGksXG51bCBsaStsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG59XG5cbi5oZWFkZXItbWVudSxcbi5zaXRlLWZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBoMiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMCAwLjFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBwIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNi41ZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uc2l0ZS1mb290ZXIge1xuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zaXRlLWZvb3RlciBhIHtcbiAgICBwYWRkaW5nOiAwLjNlbSAwO1xufVxuXG4uZi1ib29rOmhvdmVyIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLmluc3RhZ3JhbTpob3ZlciB7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnR3aXR0ZXI6aG92ZXIge1xuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");



class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 14, vars: 0, consts: [[1, "site-main"], [1, "main-introduce"], [1, "img"], ["src", "https://res.cloudinary.com/dronicn8f/image/upload/v1607851733/header-background-min_v3psnp.jpg", "alt", ""], [1, "story"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "So...this is me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Just a golden retriever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hi, guys! My name is Ryan and as you see I am a doggy. Recently found out that we the dogs have a types and more specific - breeds. So my breed is a Golden Retriever. I have an amazing life. With my humans... oh yeah that's right I have my own humans! So as I was saying me and my humans love going out for a walks in the Sea garden. There are so many awesome trees and lawns, but my favourite is the beach... ooooh I love the beach! When I hear the sound of taking the shackles down I start running wherever I see. And one day just when I was thinking that there is nothing to surprise me about the beach my humans showed me the sea. But you can't walk in the sea you have to swim. I didn't know what is like to swimming but fortunately somehow I knew how to do it. So that's how swimming became my new favourite exercise. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " If you want to know each other better just log in or make a registration. It is so nice to meet new people! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: [".site-main[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: 75.7vh;\n    margin: 2em auto;\n    border-radius: 1em;\n}\n\n.img[_ngcontent-%COMP%] {\n    float: left;\n    width: 40vw;\n    border-radius: 1em;\n    overflow: hidden;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 1);\n    margin-right: 3em;\n    margin-bottom: 1em;\n}\n\n.img[_ngcontent-%COMP%]::after {\n    clear: both;\n}\n\n.story[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0.5em auto;\n}\n\n.story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFHZjtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1tYWluIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDc1Ljd2aDtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxuLmltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uaW1nOjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5zdG9yeSBoMiB7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xufVxuXG4uc3RvcnkgcCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLyogcmVzcG9uc2l2ZSAqL1xuXG5cbkBtZWRpYSAoIG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYsXG4gICAgLmZvb3Rlci1uYXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUgaDIsXG4gICAgLmFydGljbGUtaW5mbyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICAuYXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG4gICAgLyogLmFydGljbGUtbWVkaWEgaW1nICAqL1xuICAgIC5Qb3J0cmFpdCB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbiAgICAuTGFuZHNjYXBlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYnV0dG9ucyB7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIH1cbiAgICAubGlrZS1idG4ge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuYWJvdXQtdGl0bGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgLmhlYWRlci1tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhhbWJ1cmdlciBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW5wdXQ6Y2hlY2tlZCtkaXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgICBmbGV4OiAwIDAgOTAlO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYsXG4gICAgLmZvb3Rlci1uYXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgZm9ybSBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzNXZ3O1xuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgfVxuICAgIC5oZWFkZXItbmF2IHVsIGxpK2xpLFxuICAgIHVsIGxpK2xpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIC8qIC5hcnRpY2xlLW1lZGlhIGltZyAgKi9cbiAgICAuUG9ydHJhaXQge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICB9XG4gICAgLkxhbmRzY2FwZSB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDQzJTtcbiAgICB9XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLml0ZW0ge1xuICAgICAgICBmbGV4OiAwIDAgNDAlO1xuICAgIH1cbiAgICAuYWJvdXQtdGl0bGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIH1cbiAgICAubWFpbi1pbnRyb2R1Y2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnN0b3J5IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5oZWFkZXItbmF2IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLnNpdGUtYXJ0aWNsZXMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogNDUlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SPTk":
/*!*******************************************!*\
  !*** ./src/app/services/media.service.ts ***!
  \*******************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MediaService {
    constructor() { }
    uploadImage(imgFile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formData = new FormData();
                formData.append("file", imgFile);
                formData.append("upload_preset", "jvmpdbhl");
                const { secure_url } = yield fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
                    method: "POST",
                    body: formData
                }).then(response => response.json());
                return secure_url;
            }
            catch (_a) {
                console.log("There was an error!");
            }
        });
    }
    deleteRecord(collection, recordId) {
        return Backendless.Data.of(collection).remove({ objectId: `${recordId}` });
    }
    saveRecord(data) {
        return Backendless.Data.of("posts").save(data);
    }
    userRecords(userId, collection) {
        const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(`ownerId = '${userId}'`);
        return Backendless.Data.of(collection).find(queryBuilder);
    }
    getAllRecords(collection) {
        return Backendless.Data.of(collection).find();
    }
    getSingleRecord(objectId, collection) {
        return Backendless.Data.of(collection).findById(objectId);
    }
}
MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(); };
MediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MediaService, factory: MediaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Svia":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function AdminPanelComponent_div_1_table_1_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminPanelComponent_div_1_table_1_tr_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const a_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.delete(a_r5.objectId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", a_r5.ownerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/edit/", a_r5.objectId, "");
} }
function AdminPanelComponent_div_1_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "UserId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Article Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminPanelComponent_div_1_table_1_tr_10_Template, 10, 3, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.articles);
} }
function AdminPanelComponent_div_1_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "There are no records");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminPanelComponent_div_1_table_1_Template, 11, 1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminPanelComponent_div_1_h2_2_Template, 2, 0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.articles.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.articles.length === 0);
} }
function AdminPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdminPanelComponent {
    constructor(media, service) {
        this.media = media;
        this.service = service;
        this.articles = [];
        this.isLoaded = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.articles = yield this.media.getAllRecords('posts');
                this.isLoaded = true;
            }
            catch (_a) {
                console.log("Error during loading!");
            }
        });
    }
    delete(f) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.media.deleteRecord('posts', f);
                this.articles = yield this.media.getAllRecords('posts');
            }
            catch (_a) {
                console.log("Error during deleting!");
            }
        });
    }
}
AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) { return new (t || AdminPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AdminPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminPanelComponent, selectors: [["app-admin-panel"]], decls: 3, vars: 2, consts: [["class", "admin-panel", 4, "ngIf"], [1, "admin-panel"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttons", 3, "routerLink"], [1, "buttons", 3, "click"]], template: function AdminPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminPanelComponent_div_1_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminPanelComponent_div_2_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["table[_ngcontent-%COMP%] {\n    width: 80vw;\n    border: 2px solid green;\n    border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    padding: 0.5rem;\n}\n\ntd[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1.1rem;\n}\n\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    background-color: rgba(73, 73,73,0.5);\n    text-align: center;\n}\n\ntr[_ngcontent-%COMP%] {\n    border: 2px solid green;\n}\n\n.admin-panel[_ngcontent-%COMP%] {\n    min-height: 83.9vh;\n    padding: 5rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.record-line[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: nowrap;\n    background-color: hotpink;\n    width: 70%;\n    margin: 1rem 0;\n    height: 3rem;\n    border: 2px solid black;\n    border-radius: 1rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    padding: 0.3em 0.2em;\n    background-color: gold;\n    border-radius: 0.5em;\n    margin: 0.3em;\n    color: green;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoiYWRtaW4tcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ciB0aCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG50ZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG50ZCBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRib2R5IHRyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3Myw3MywwLjUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudHIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuXG4uYWRtaW4tcGFuZWwge1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbiAgICBwYWRkaW5nOiA1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucmVjb3JkLWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmJ1dHRvbnMge1xuICAgIHBhZGRpbmc6IDAuM2VtIDAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgbWFyZ2luOiAwLjNlbTtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-panel',
                templateUrl: './admin-panel.component.html',
                styleUrls: ['./admin-panel.component.css']
            }]
    }], function () { return [{ type: _services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "root"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".test[_ngcontent-%COMP%] {\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");




class AdminGuard {
    constructor(service) {
        this.service = service;
    }
    canActivate(route, state) {
        return this.isAdmin();
    }
    isAdmin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = Object.assign(yield this.service.getUser());
                if (this.user && (this.user.role === "admin")) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (_a) {
                console.log("Admin localisation error!");
                return false;
            }
        });
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuard {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    canActivate(route, state) {
        return this.isAuth();
    }
    isAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let isAuth = yield this.service.getUser();
            if (!isAuth) {
                this.router.navigate(['login']);
            }
            return isAuth ? true : false;
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/header/header.component */ "8rb8");
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-article/create-article.component */ "mDne");
/* harmony import */ var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-article/edit-article.component */ "pVMK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var backendless__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! backendless */ "uLaL");
/* harmony import */ var backendless__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(backendless__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./article-details/article-details.component */ "zDJw");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "Svia");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");






















backendless__WEBPACK_IMPORTED_MODULE_14___default.a.initApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].backendless.APP_ID, src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].backendless.API_KEY);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_8__["CreateArticleComponent"],
        _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_9__["EditArticleComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_16__["ArticleDetailsComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_18__["ArticleComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
        _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_19__["AdminPanelComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__["UserProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
                    _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_8__["CreateArticleComponent"],
                    _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_9__["EditArticleComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                    _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_16__["ArticleDetailsComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_18__["ArticleComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
                    _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_19__["AdminPanelComponent"],
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__["UserProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mDne":
/*!************************************************************!*\
  !*** ./src/app/create-article/create-article.component.ts ***!
  \************************************************************/
/*! exports provided: CreateArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleComponent", function() { return CreateArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CreateArticleComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill all required data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateArticleComponent {
    constructor(service, media, router) {
        this.service = service;
        this.media = media;
        this.router = router;
        this.imgFile = '';
        this.isInvalid = false;
    }
    ngOnInit() {
    }
    registerPhoto(event) {
        this.imgFile = event.target.files[0];
    }
    createStory(f) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (f.valid) {
                try {
                    const imageData = yield this.media.uploadImage(this.imgFile);
                    let { orientation, title, description } = f.value;
                    yield this.media.saveRecord({
                        imageUrl: imageData,
                        orientation: orientation,
                        title: title,
                        description: description,
                        likesList: JSON.stringify([])
                    });
                    this.isInvalid = false;
                    this.router.navigate(['articles']);
                }
                catch (_a) {
                    alert("Something went wrong with creating the story!");
                    console.log("Something went wrong with creating the story!");
                }
            }
            else {
                this.isInvalid = true;
            }
        });
    }
}
CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) { return new (t || CreateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CreateArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateArticleComponent, selectors: [["app-create-article"]], decls: 29, vars: 2, consts: [[1, "create-article"], [3, "ngSubmit"], ["f", "ngForm"], ["class", "error-message", 4, "ngIf"], ["for", "upld"], ["required", "", "ngModel", "", "name", "imageFile", "id", "upld", "type", "file", 3, "change"], ["for", "pic-direction"], ["required", "", "ngModel", "", "name", "orientation", "id", "pic-direction"], ["required", "", "ngModel", "", "type", "text", "name", "title", "placeholder", "Your story title"], ["maxlength", "500", "required", "", "ngModel", "", "name", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "error-message"]], template: function CreateArticleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateArticleComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return ctx.createStory(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Share your story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CreateArticleComponent_div_7_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Upload image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateArticleComponent_Template_input_change_12_listener($event) { return ctx.registerPhoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select picture orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Landscape");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"]], styles: [".error-message[_ngcontent-%COMP%] {\n    border: 2px solid red;\n    color: green;\n    border-radius: 10px;\n    padding: 0 50px;\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.create-article[_ngcontent-%COMP%] {\n    min-height: 83.9vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvbWVzc2FnZXMuY3NzIiwiY3JlYXRlLWFydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQ0xBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjcmVhdGUtYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iLCJAaW1wb3J0IHVybCgnLi4vLi4vYXNzZXRzL2Nzcy9tZXNzYWdlcy5jc3MnKTtcblxuLmNyZWF0ZS1hcnRpY2xlIHtcbiAgICBtaW4taGVpZ2h0OiA4My45dmg7XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBmaWVsZHNldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdG9yeS1kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiAyMHZoO1xufVxuXG4uY3JlYXRlLWFydGljbGUgZmllbGRzZXQgcDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlYXRlLWFydGljbGUgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIHNlbGVjdCB7XG4gICAgLyogd2lkdGg6IDI1dnc7ICovXG4gICAgLyogd2lkdGg6IDIwdnc7ICovXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-article',
                templateUrl: './create-article.component.html',
                styleUrls: ['./create-article.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "not-found"], ["src", "../../assets/images/pngfind.com-omg-png-1501765.png", "alt", "page-not-found"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["img[_ngcontent-%COMP%] {\n    width: 50%;\n    height: auto;\n}\n\n.not-found[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 60vw;\n    height: 83.9vh;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztBQUNsQiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ub3QtZm91bmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgaGVpZ2h0OiA4My45dmg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pVMK":
/*!********************************************************!*\
  !*** ./src/app/edit-article/edit-article.component.ts ***!
  \********************************************************/
/*! exports provided: EditArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function() { return EditArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function EditArticleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditArticleComponent_div_2_form_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill all required data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditArticleComponent_div_2_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditArticleComponent_div_2_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.editStory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Share your story");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditArticleComponent_div_2_form_1_div_4_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditArticleComponent_div_2_form_1_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.registerPhoto($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select picture orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Landscape");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.editFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isInvalid);
} }
function EditArticleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditArticleComponent_div_2_form_1_Template, 26, 2, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.editFormGroup);
} }
class EditArticleComponent {
    constructor(fb, route, media, router) {
        this.fb = fb;
        this.route = route;
        this.media = media;
        this.router = router;
        this.imgFile = '';
        this.isInvalid = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.recId = this.route.snapshot.params.id;
                this.recordTest = Object.assign(yield this.media.getSingleRecord(`${this.recId}`, 'posts'));
                this.editFormGroup = this.fb.group(this.recordTest);
            }
            catch (_a) {
                console.log("Problem getting record!");
            }
        });
    }
    registerPhoto(event) {
        this.imgFile = event.target.files[0];
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            objectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            orientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    editStory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let shallowCopy = Object.assign({}, this.editFormGroup.value);
                if (this.imgFile) {
                    const imageData = yield this.media.uploadImage(this.imgFile);
                    shallowCopy.imageUrl = imageData;
                }
                yield this.media.saveRecord(shallowCopy);
                this.router.navigate(['articles', this.recId]);
            }
            catch (_a) {
                console.log("Record updating error!");
            }
        });
    }
}
EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) { return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EditArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditArticleComponent, selectors: [["app-edit-article"]], decls: 3, vars: 2, consts: [["style", "text-align: center;", 4, "ngIf"], ["class", "create-article", 4, "ngIf"], [2, "text-align", "center"], [1, "create-article"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["class", "error-message", 4, "ngIf"], ["for", "upld"], ["name", "imageFile", "id", "upld", "type", "file", 3, "change"], ["for", "pic-direction"], ["formControlName", "orientation", "id", "pic-direction"], ["type", "text", "formControlName", "title", "placeholder", "Your story title"], ["formControlName", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit"], [1, "error-message"]], template: function EditArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditArticleComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditArticleComponent_div_2_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.recordTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recordTest);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: [".create-article[_ngcontent-%COMP%] {\n    min-height: 83.9vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiZWRpdC1hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWFydGljbGUge1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0b3J5LWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBkaXYrZGl2IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGZpZWxkc2V0IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlYXRlLWFydGljbGUgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIHNlbGVjdCB7XG4gICAgLyogd2lkdGg6IDI1dnc7ICovXG4gICAgLyogd2lkdGg6IDIwdnc7ICovXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-article',
                templateUrl: './edit-article.component.html',
                styleUrls: ['./edit-article.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserService {
    constructor() { }
    updateUserData(data) {
        return Backendless.Data.of("Users").save(data);
    }
    getUser() {
        return Backendless.UserService.getCurrentUser();
    }
    logoutUser() {
        localStorage.clear();
        return Backendless.UserService.logout();
    }
    loginUser(email, password) {
        return Backendless.UserService.login(email, password, true)
            .then(x => {
            localStorage.setItem('userId', `${x.objectId}`);
            localStorage.setItem('email', `${x.email}`);
            return x;
        })
            .catch((err) => {
            alert(err.message);
            throw new Error(err.message);
        });
    }
    registerUser(email, password) {
        let user = new Backendless.User();
        user.email = email;
        user.password = password;
        return Backendless.UserService.register(user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-article/create-article.component */ "mDne");
/* harmony import */ var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-article/edit-article.component */ "pVMK");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-details/article-details.component */ "zDJw");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "Svia");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/admin.guard */ "Tk1w");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");

















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'create', component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__["CreateArticleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'edit-article', component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__["EditArticleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'articles', component: _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'articles/:id', component: _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_9__["ArticleDetailsComponent"], canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'edit/:id', component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__["EditArticleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'admin', component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_12__["AdminPanelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
    { path: '**', redirectTo: 'not-found' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    login(f) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let { email, password } = f.value;
                if (email && password) {
                    this.user = Object.assign(yield this.service.loginUser(email, password));
                    if (this.user.role === 'admin') {
                        this.router.navigate(['admin']);
                    }
                    else {
                        this.router.navigate(['about']);
                    }
                }
            }
            catch (_a) {
                f.resetForm();
                console.log("Login failed!");
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 1, consts: [[1, "login-container"], [1, "site-login"], [3, "ngSubmit"], ["f", "ngForm"], [1, "email"], ["for", "email"], ["ngModel", "", "required", "", "type", "email", "id", "email", "name", "email", "placeholder", "Example: ryan@abc.bg"], [1, "password"], ["for", "u-password"], ["ngModel", "", "required", "", "type", "password", "name", "password", "id", "u-password"], [1, "submit"], [1, "btn-submit", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.login(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: ["form[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.login-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1QyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG5mb3JtIGlucHV0LFxudGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4My45dmg7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnNpdGUtbG9naW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM2VtO1xufVxuXG4uc3VibWl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC4zZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMS4yZW0gMCByZ2JhKDAsIDAsIDAsIDEpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zDJw":
/*!**************************************************************!*\
  !*** ./src/app/article-details/article-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailsComponent", function() { return ArticleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ArticleDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleDetailsComponent_div_2_div_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.deleteRec(ctx_r5.recId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/edit/", ctx_r2.recId, "");
} }
function ArticleDetailsComponent_div_2_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleDetailsComponent_div_2_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.likesUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_div_2_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleDetailsComponent_div_2_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.disslikeUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Dislike");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticleDetailsComponent_div_2_div_4_Template, 5, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ArticleDetailsComponent_div_2_a_8_Template, 3, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticleDetailsComponent_div_2_a_9_Template, 3, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.recData.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.recData.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isAuthor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Likes: ", ctx_r1.likes.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isAuthor && !ctx_r1.isLiked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isAuthor && ctx_r1.isLiked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.recData.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.recData.description, " ");
} }
class ArticleDetailsComponent {
    constructor(service, route, media, router) {
        this.service = service;
        this.route = route;
        this.media = media;
        this.router = router;
        this.isLiked = false;
        this.likes = [];
        this.postsEventHandler = Backendless.Data.of('posts').rt();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.userId = localStorage.getItem('userId');
                this.recId = this.route.snapshot.params.id;
                this.recData = Object.assign(yield this.media.getSingleRecord(this.recId, 'posts'));
                this.isAuthor = this.userId === this.recData.ownerId;
                this.likes = JSON.parse(this.recData.likesList);
                if (this.likes.indexOf(this.userId) !== -1) {
                    this.isLiked = true;
                }
                this.postsEventHandler.addUpdateListener((updatedValue) => {
                    this.recData = Object.assign({}, updatedValue);
                    this.likes = JSON.parse(this.recData.likesList);
                    if (this.likes.indexOf(this.userId) !== -1) {
                        this.isLiked = true;
                    }
                    else {
                        this.isLiked = false;
                    }
                }, function error(e) {
                    console.log(e.message);
                });
            }
            catch (_a) {
                this.router.navigate(['articles']);
                console.log("Error occured!");
            }
        });
    }
    ngOnDestroy() {
        this.postsEventHandler.removeUpdateListener((x) => console.log('listener was destroyed'));
    }
    deleteRec(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let isSure = window.confirm("Do you really want to delete this record?");
                if (isSure) {
                    yield this.media.deleteRecord('posts', value);
                    this.router.navigate(['articles']);
                }
            }
            catch (_a) {
                console.log("Record deleting error!");
            }
        });
    }
    likesUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let likesList = JSON.parse(this.recData.likesList);
                if (likesList.indexOf(this.userId) === -1) {
                    likesList.push(this.userId);
                    this.recData.likesList = JSON.stringify(likesList);
                    yield this.media.saveRecord(this.recData);
                }
                else {
                    console.log("this post is already liked");
                }
            }
            catch (_a) {
                console.log("Saving record error!");
            }
        });
    }
    disslikeUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let likesList = JSON.parse(this.recData.likesList);
                let elemIndex = likesList.indexOf(this.userId);
                if (elemIndex !== -1) {
                    likesList.splice(elemIndex, 1);
                    this.recData.likesList = JSON.stringify(likesList);
                    yield this.media.saveRecord(this.recData);
                }
                else {
                    console.log("this post is already disliked");
                }
            }
            catch (_a) {
                console.log("Saving record error!");
            }
        });
    }
}
ArticleDetailsComponent.ɵfac = function ArticleDetailsComponent_Factory(t) { return new (t || ArticleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ArticleDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticleDetailsComponent, selectors: [["app-article-details"]], decls: 3, vars: 2, consts: [["class", "article-container", 4, "ngIf"], [1, "article-container"], [1, "article-media"], ["alt", "", 3, "src"], [1, "buttons", "info-holder"], ["class", "buttons", 4, "ngIf"], [1, "likes"], ["class", "like-btn", 3, "click", 4, "ngIf"], [1, "article-info"], [1, "buttons"], [1, "like-btn", 3, "click"], [1, "like-btn", 3, "routerLink"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down"]], template: function ArticleDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleDetailsComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticleDetailsComponent_div_2_Template, 15, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.recData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recData);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".site-articles[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: calc(95.3vh - 60px - 59px);\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n}\n\n.single-article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    max-width: 30%;\n    height: 60vh;\n    text-align: center;\n    margin: 1em;\n}\n\n.single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n}\n\n.single-article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    background-color: indigo;\n    margin: 1em;\n    padding: 0.3em 1.5em;\n    border-radius: 0.35em;\n}\n\n.picture[_ngcontent-%COMP%] {\n    width: 50%;\n    max-height: 70%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.picture-Landscape[_ngcontent-%COMP%] {\n    width: 90%;\n    max-height: 100%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n\n\n.picture-Landscape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n\n.picture-Portrait[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.picture-Portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-width: 60%;\n}\n\n.article-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 80%;\n    min-height: 83.9vh;\n    margin: 0 auto;\n}\n\n.article-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.Landscape[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.article-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    border: 2px solid black;\n    margin: 1em;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.Portrait[_ngcontent-%COMP%] {\n    max-width: 60%;\n}\n\n.article-info[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 60%;\n    background-color: rgba(75, 75, 75, 0.5);\n    margin: 1em;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n}\n\n.article-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.like-btn[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 0.3em 1.2em;\n    background-color: green;\n    border-radius: 0.5em;\n    margin: 1em;\n    cursor: pointer;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    text-shadow: 0 0 0.2em black;\n    font-family: 'Dancing Script', cursive;\n    color: gold;\n}\n\n.likes[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.info-holder[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzIiwiYXJ0aWNsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBR0EsY0FBYzs7QUFFZDtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUN0SUE7SUFDSSxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLHNDQUFzQztJQUN0QyxXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFydGljbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtYXJ0aWNsZXMge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogY2FsYyg5NS4zdmggLSA2MHB4IC0gNTlweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbn1cblxuLnNpbmdsZS1hcnRpY2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnNpbmdsZS1hcnRpY2xlIGgyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLnNpbmdsZS1hcnRpY2xlIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAwLjNlbSAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1ZW07XG59XG5cbi5waWN0dXJlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4ucGljdHVyZS1MYW5kc2NhcGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG5cbi8qIC5waWN0dXJlICAqL1xuXG4ucGljdHVyZS1MYW5kc2NhcGUgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucGljdHVyZS1Qb3J0cmFpdCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5waWN0dXJlLVBvcnRyYWl0IGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogNjAlO1xufVxuXG4uYXJ0aWNsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogODMuOXZoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5MYW5kc2NhcGUge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uUG9ydHJhaXQge1xuICAgIG1heC13aWR0aDogNjAlO1xufVxuXG4uYXJ0aWNsZS1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuNSk7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFydGljbGUtaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAyLjNlbTtcbn1cblxuLmFydGljbGUtaW5mbyBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGlrZS1idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMC4zZW0gMS4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgbWFyZ2luOiAxZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCB1cmwoJy4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzJyk7XG5oMyB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAuMmVtIGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG5cbi5saWtlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbmZvLWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-article-details',
                templateUrl: './article-details.component.html',
                styleUrls: ['./article-details.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
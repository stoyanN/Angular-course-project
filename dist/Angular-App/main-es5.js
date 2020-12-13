(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/stoyan/Desktop/gitKraken-test/Angular-course-project/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The email you entered is invalid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The password must be minimum 3 characters!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passwords don't match!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(fb, router, service) {
          _classCallCheck(this, RegisterComponent);

          this.fb = fb;
          this.router = router;
          this.service = service;
          this.form = this.createFormGroup();
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createFormGroup",
          value: function createFormGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
              rePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this$form$value, email, password, rePassword;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;

                      if (!this.form.valid) {
                        _context.next = 9;
                        break;
                      }

                      _this$form$value = this.form.value, email = _this$form$value.email, password = _this$form$value.password, rePassword = _this$form$value.rePassword;
                      _context.next = 5;
                      return this.service.registerUser(email, password);

                    case 5:
                      _context.next = 7;
                      return this.service.loginUser(email, password);

                    case 7:
                      _context.next = 9;
                      return this.router.navigate(['/about']);

                    case 9:
                      _context.next = 14;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](0);
                      console.log('Registration error!');

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 11]]);
            }));
          }
        }, {
          key: "email",
          get: function get() {
            return this.form.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            return this.form.get('password');
          }
        }, {
          key: "rePassword",
          get: function get() {
            return this.form.get('rePassword');
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 28,
        vars: 5,
        consts: [[1, "register-container"], [1, "site-register"], [3, "formGroup", "ngSubmit"], [1, "email"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Example: ryan@abc.bg"], ["class", "error", 4, "ngIf"], [1, "password"], ["for", "u-password"], ["type", "password", "id", "u-password", "formControlName", "password"], ["for", "rep-u-password"], ["type", "password", "id", "rep-u-password", "formControlName", "rePassword"], [1, "submit", "field"], [1, "btn-submit", 3, "disabled"], [1, "error"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
              return ctx.register();
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["form[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.error[_ngcontent-%COMP%] {\n    border: 2.5px solid red;\n    border-radius: 10px;\n    background-color: rgba(255,0,0,0.3);\n    width: 20vw;\n    margin: 0 auto;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n}\n\n.register-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1QyIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG59XG5cbmZvcm0gaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmVycm9yIHtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjMpO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uc2l0ZS1sb2dpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbi5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxLjJlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AboutComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rec_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vertical", rec_r1.isVertical);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", rec_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rec_r1.description, " ");
        }
      }

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(route) {
          _classCallCheck(this, AboutComponent);

          this.route = route;
          this.records = [{
            isVertical: true,
            imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851732/sleeping-min_bfibdi.jpg',
            description: 'This is me only 30 days old sleeping on my humans bed. This was one of my favourite activities to do and guess what...it is still a favourite thing to do.'
          }, {
            isVertical: true,
            imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851730/baby-min_rxbwjg.jpg',
            description: 'On this picture I am a little older than the first one. As you see I learned fast how to pose infront of the camera. I look so fluffy &hearts; .'
          }, {
            isVertical: true,
            imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851731/playing-min_bjhm0a.jpg',
            description: 'Here we are me and my best friend - The Angry Chicken. We used to love playing together. Every time when he was trying to run away from me I was there to catch him. Unfortunately one day The Angry Chicken went to visit a human friend and never came back.'
          }, {
            isVertical: false,
            imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851733/christmas-min_qlne5q.jpg',
            description: 'My humans realised that I look so handsome infront of the camera... so they took me to some guy with very big photo camera. He was taking picture of us for an hour... it was very exhausting.'
          }, {
            isVertical: true,
            imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851729/1st-of-march-min_kc6aow.jpg',
            description: "This picture is taken at 1<sup>st</sup> of March. I didn't know it is a traditional bulgarian holiday. My humans gave me this thing Martenichka. It is made of white and red wool and you have to wear it until you see a stork. It is a little strange but as long as we do this for good health I am in."
          }, {
            isVertical: true,
            imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851731/caffee-on-the-beach-min_t4l8sq.jpg',
            description: 'Oooh this is a favourite memory of mine. As I said at first &hearts; I LOVE THE BEACH &hearts; !!! I love when my humans take me there. While they are drinking this strange soup called coffe I am digging and searching for treasures.'
          }, {
            isVertical: true,
            imgSrc: 'https://res.cloudinary.com/dronicn8f/image/upload/v1607851733/watching-the-see-min_ugr6td.jpg',
            description: "On this picture you can see the long road in the sea. I don't like going on this road because it looks so scary but it is nice to stand on the beach looking at it... dreaming about good food and cold beer!"
          }];
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 7,
        vars: 1,
        consts: [[1, "about-container"], [1, "about-title"], [1, "gallery"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "media"], ["alt", "", 3, "src"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".about-container[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    min-height: 79.5vh;\n}\n\n.about-title[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: 0 auto;\n    text-align: center;\n    background-color: rgba(101, 217, 247, 0.5);\n    border-radius: 0.3em;\n}\n\n.gallery[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    min-height: 20em;\n}\n\n.item[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 40%;\n    width: 30%;\n    height: 30em;\n    margin: 1em;\n    background-color: rgba(0, 0, 0, 0.4);\n    border-radius: 0.5em;\n}\n\n.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    border-radius: 0.3em;\n    padding: 1em;\n    color: gold;\n    text-align: center;\n}\n\n.media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 70%;\n    overflow: hidden;\n}\n\nimg[_ngcontent-%COMP%] {\n    border-radius: 0.3em;\n    box-shadow: 0 0 1em 0 rgba(101, 217, 247, 0.3);\n}\n\n.media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n}\n\n.media.vertical[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 90%;\n    width: auto;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUEsZUFBZTs7QUFHZjtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDc5LjV2aDtcbn1cblxuLmFib3V0LXRpdGxlIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMjE3LCAyNDcsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbi5nYWxsZXJ5IHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDIwZW07XG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMCAwIDQwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzBlbTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG5cbi5pdGVtIHAge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBjb2xvcjogZ29sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMTAxLCAyMTcsIDI0NywgMC4zKTtcbn1cblxuLm1lZGlhIGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tZWRpYS52ZXJ0aWNhbCBpbWcge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4vKiByZXNwb25zaXZlICovXG5cblxuQG1lZGlhICggbWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMixcbiAgICAuYXJ0aWNsZS1pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5hcnRpY2xlLWluZm8ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgICAvKiAuYXJ0aWNsZS1tZWRpYSBpbWcgICovXG4gICAgLlBvcnRyYWl0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5MYW5kc2NhcGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5idXR0b25zIHtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5saWtlLWJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAuaGVhZGVyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaGFtYnVyZ2VyIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpbnB1dDpjaGVja2VkK2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA5MCU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMzV2dztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYgdWwgbGkrbGksXG4gICAgdWwgbGkrbGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLyogLmFydGljbGUtbWVkaWEgaW1nICAqL1xuICAgIC5Qb3J0cmFpdCB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgIH1cbiAgICAuTGFuZHNjYXBlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogNDMlO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgfVxuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgfVxuICAgIC5tYWluLWludHJvZHVjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuc3Rvcnkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmhlYWRlci1uYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuc2l0ZS1hcnRpY2xlcyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8rb8":
    /*!*************************************************!*\
      !*** ./src/app/core/header/header.component.ts ***!
      \*************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function rb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r0.userName, "!");
        }
      }

      function HeaderComponent_ul_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My moments");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your Stories");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Share a memory");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ul_11_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_ul_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(service, router, route) {
          _classCallCheck(this, HeaderComponent);

          this.service = service;
          this.router = router;
          this.route = route;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userName = localStorage.getItem('email');
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.service.logoutUser();

                    case 3:
                      this.router.navigate(['login']);
                      _context2.next = 9;
                      break;

                    case 6:
                      _context2.prev = 6;
                      _context2.t0 = _context2["catch"](0);
                      console.log("Logout error!");

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 6]]);
            }));
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 13,
        vars: 3,
        consts: [[1, "site-header"], [1, "header-nav"], [1, "header-logo"], ["routerLink", "/home"], [4, "ngIf"], [1, "hamburger"], ["for", "ham-check", "hidden", ""], [1, "fas", "fa-bars"], ["type", "checkbox", "id", "ham-check", "hidden", ""], [1, "header-menu"], ["routerLink", "/about"], ["routerLink", "/articles"], ["routerLink", "/create"], ["id", "logout", 3, "click"], ["routerLink", "/login"], ["routerLink", "/register"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ryan's life");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_p_5_Template, 2, 1, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_ul_11_Template, 13, 0, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_ul_12_Template, 7, 0, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userName);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n#logout[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFDQSxpREFBaUQ7O0FBRWpEO0lBQ0k7UUFDSSxzQ0FBc0M7UUFDdEMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0Esd0JBQXdCO0lBQ3hCO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxzQ0FBc0M7UUFDdEMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxjQUFjO0lBQ2xCO0lBQ0Esd0JBQXdCO0lBQ3hCO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuNSk7XG59XG5cbiNsb2dvdXQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlci1uYXYgcCB7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbi5oZWFkZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyLW5hdiB1bCxcbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1uYXYgdWwgbGkrbGksXG51bCBsaStsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG59XG5cbi5oZWFkZXItbWVudSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBoMiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMCAwLjFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBwIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNi41ZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQG1lZGlhICggbWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMixcbiAgICAuYXJ0aWNsZS1pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5hcnRpY2xlLWluZm8ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgICAvKiAuYXJ0aWNsZS1tZWRpYSBpbWcgICovXG4gICAgLlBvcnRyYWl0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5MYW5kc2NhcGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5idXR0b25zIHtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5saWtlLWJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAuaGVhZGVyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaGFtYnVyZ2VyIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpbnB1dDpjaGVja2VkK2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA5MCU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMzV2dztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYgdWwgbGkrbGksXG4gICAgdWwgbGkrbGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLyogLmFydGljbGUtbWVkaWEgaW1nICAqL1xuICAgIC5Qb3J0cmFpdCB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgIH1cbiAgICAuTGFuZHNjYXBlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogNDMlO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgfVxuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgfVxuICAgIC5tYWluLWludHJvZHVjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuc3Rvcnkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmhlYWRlci1uYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuc2l0ZS1hcnRpY2xlcyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        backendless: {
          APP_ID: '99D0443C-0C96-0827-FFA4-82CA89294E00',
          API_KEY: 'A876CDFE-6301-49CF-A4F3-EBE66959D2C0'
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

      /***/
    },

    /***/
    "DLXL":
    /*!**********************************************!*\
      !*** ./src/app/article/article.component.ts ***!
      \**********************************************/

    /*! exports provided: ArticleComponent */

    /***/
    function DLXL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
        return ArticleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/media.service */
      "SPTk");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ArticleComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ArticleComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var record_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("picture-", record_r3.orientation, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", record_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", record_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", record_r3.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", record_r3.objectId);
        }
      }

      function ArticleComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleComponent_div_2_div_1_Template, 7, 7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.userRecords);
        }
      }

      var ArticleComponent = /*#__PURE__*/function () {
        function ArticleComponent(service, media) {
          _classCallCheck(this, ArticleComponent);

          this.service = service;
          this.media = media;
          this.userRecords = [];
          this.isLoaded = false;
        }

        _createClass(ArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isLoaded = true;
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.media.getAllRecords("posts")).subscribe(function (result) {
                        return _this.userRecords = result;
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ArticleComponent;
      }();

      ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
        return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]));
      };

      ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ArticleComponent,
        selectors: [["app-article"]],
        decls: 3,
        vars: 2,
        consts: [["class", "loader site-articles", 4, "ngIf"], ["class", "site-articles", 4, "ngIf"], [1, "loader", "site-articles"], [1, "site-articles"], ["class", "single-article", 4, "ngFor", "ngForOf"], [1, "single-article"], [3, "src", "alt"], [3, "routerLink"]],
        template: function ArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleComponent_div_1_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticleComponent_div_2_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userRecords);
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        styles: [".site-articles[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: calc(95.3vh - 60px - 59px);\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n}\n\n.single-article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    max-width: 30%;\n    height: 60vh;\n    text-align: center;\n    margin: 1em;\n}\n\n.single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n}\n\n.single-article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    background-color: indigo;\n    margin: 1em;\n    padding: 0.3em 1.5em;\n    border-radius: 0.35em;\n}\n\n.picture[_ngcontent-%COMP%] {\n    width: 50%;\n    max-height: 70%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.picture-Landscape[_ngcontent-%COMP%] {\n    width: 90%;\n    max-height: 100%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n\n\n.picture-Landscape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n\n.picture-Portrait[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.picture-Portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-width: 60%;\n}\n\n.article-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 80%;\n    min-height: 83.9vh;\n    margin: 0 auto;\n}\n\n.article-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.Landscape[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.article-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    border: 2px solid black;\n    margin: 1em;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.Portrait[_ngcontent-%COMP%] {\n    max-width: 60%;\n}\n\n.article-info[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 60%;\n    background-color: rgba(75, 75, 75, 0.5);\n    margin: 1em;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n}\n\n.article-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.like-btn[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 0.3em 1.2em;\n    background-color: green;\n    border-radius: 0.5em;\n    margin: 1em;\n    cursor: pointer;\n}\n\n.loader[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzIiwiYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUdBLGNBQWM7O0FBRWQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FDcElBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWFydGljbGVzIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTUuM3ZoIC0gNjBweCAtIDU5cHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4My45dmg7XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMC4zZW0gMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNWVtO1xufVxuXG4ucGljdHVyZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnBpY3R1cmUtTGFuZHNjYXBlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuXG4vKiAucGljdHVyZSAgKi9cblxuLnBpY3R1cmUtTGFuZHNjYXBlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnBpY3R1cmUtUG9ydHJhaXQge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4ucGljdHVyZS1Qb3J0cmFpdCBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuLmFydGljbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFydGljbGUtbWVkaWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4uTGFuZHNjYXBlIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLmFydGljbGUtbWVkaWEgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLlBvcnRyYWl0IHtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuLmFydGljbGUtaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjUpO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcnRpY2xlLWluZm8gaDIge1xuICAgIGZvbnQtc2l6ZTogMi4zZW07XG59XG5cbi5hcnRpY2xlLWluZm8gcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpa2UtYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHBhZGRpbmc6IDAuM2VtIDEuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgdXJsKCcuLi8uLi9hc3NldHMvY3NzL2FydGljbGVzLmNzcycpO1xuXG5cbi5sb2FkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-article',
            templateUrl: './article.component.html',
            styleUrls: ['./article.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FxTl":
    /*!*************************************************!*\
      !*** ./src/app/core/footer/footer.component.ts ***!
      \*************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function FxTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 16,
        vars: 0,
        consts: [[1, "site-footer"], [1, "footer-nav"], [1, "footer-icons"], ["href", "https://www.facebook.com ", 1, "f-book"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com ", 1, "instagram"], [1, "fab", "fa-instagram"], ["href", "https://twitter.com ", 1, "twitter"], [1, "fab", "fa-twitter-square"], [1, "footer-more"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All rights reserved \xA9 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%], .site-footer[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.site-footer[_ngcontent-%COMP%] {\n    \n    display: flex;\n    align-items: center;\n    min-height: 3em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.3em 0;\n}\n\n.f-book[_ngcontent-%COMP%]:hover {\n    color: blue;\n}\n\n.instagram[_ngcontent-%COMP%]:hover {\n    color: orange;\n}\n\n.twitter[_ngcontent-%COMP%]:hover {\n    color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTs7O2tCQUdjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuNSk7XG59XG5cbi5oZWFkZXItbmF2IHAge1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG4uaGVhZGVyLW5hdixcbi5mb290ZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyLW5hdiB1bCxcbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1uYXYgdWwgbGkrbGksXG51bCBsaStsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG59XG5cbi5oZWFkZXItbWVudSxcbi5zaXRlLWZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBoMiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMCAwLjFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBwIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNi41ZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uc2l0ZS1mb290ZXIge1xuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zaXRlLWZvb3RlciBhIHtcbiAgICBwYWRkaW5nOiAwLjNlbSAwO1xufVxuXG4uZi1ib29rOmhvdmVyIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLmluc3RhZ3JhbTpob3ZlciB7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnR3aXR0ZXI6aG92ZXIge1xuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Oh3b":
    /*!************************************************!*\
      !*** ./src/app/homepage/homepage.component.ts ***!
      \************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function Oh3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent() {
          _classCallCheck(this, HomepageComponent);
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)();
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 14,
        vars: 0,
        consts: [[1, "site-main"], [1, "main-introduce"], [1, "img"], ["src", "https://res.cloudinary.com/dronicn8f/image/upload/v1607851733/header-background-min_v3psnp.jpg", "alt", ""], [1, "story"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
        styles: [".site-main[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: 75.7vh;\n    margin: 2em auto;\n    border-radius: 1em;\n}\n\n.img[_ngcontent-%COMP%] {\n    float: left;\n    width: 40vw;\n    border-radius: 1em;\n    overflow: hidden;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 1);\n    margin-right: 3em;\n    margin-bottom: 1em;\n}\n\n.img[_ngcontent-%COMP%]::after {\n    clear: both;\n}\n\n.story[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0.5em auto;\n}\n\n.story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFHZjtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1tYWluIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDc1Ljd2aDtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxuLmltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uaW1nOjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5zdG9yeSBoMiB7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xufVxuXG4uc3RvcnkgcCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLyogcmVzcG9uc2l2ZSAqL1xuXG5cbkBtZWRpYSAoIG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYsXG4gICAgLmZvb3Rlci1uYXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUgaDIsXG4gICAgLmFydGljbGUtaW5mbyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICAuYXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG4gICAgLyogLmFydGljbGUtbWVkaWEgaW1nICAqL1xuICAgIC5Qb3J0cmFpdCB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbiAgICAuTGFuZHNjYXBlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYnV0dG9ucyB7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIH1cbiAgICAubGlrZS1idG4ge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuYWJvdXQtdGl0bGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgLmhlYWRlci1tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhhbWJ1cmdlciBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW5wdXQ6Y2hlY2tlZCtkaXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgICBmbGV4OiAwIDAgOTAlO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYsXG4gICAgLmZvb3Rlci1uYXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgZm9ybSBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzNXZ3O1xuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgfVxuICAgIC5oZWFkZXItbmF2IHVsIGxpK2xpLFxuICAgIHVsIGxpK2xpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIC8qIC5hcnRpY2xlLW1lZGlhIGltZyAgKi9cbiAgICAuUG9ydHJhaXQge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICB9XG4gICAgLkxhbmRzY2FwZSB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDQzJTtcbiAgICB9XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLml0ZW0ge1xuICAgICAgICBmbGV4OiAwIDAgNDAlO1xuICAgIH1cbiAgICAuYWJvdXQtdGl0bGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIH1cbiAgICAubWFpbi1pbnRyb2R1Y2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnN0b3J5IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5oZWFkZXItbmF2IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLnNpdGUtYXJ0aWNsZXMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogNDUlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "SPTk":
    /*!*******************************************!*\
      !*** ./src/app/services/media.service.ts ***!
      \*******************************************/

    /*! exports provided: MediaService */

    /***/
    function SPTk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaService", function () {
        return MediaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MediaService = /*#__PURE__*/function () {
        function MediaService() {
          _classCallCheck(this, MediaService);
        }

        _createClass(MediaService, [{
          key: "uploadImage",
          value: function uploadImage(imgFile) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var formData, uploadedData;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      formData = new FormData();
                      formData.append("file", imgFile);
                      formData.append("upload_preset", "jvmpdbhl");
                      _context4.next = 6;
                      return fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
                        method: "POST",
                        body: formData
                      }).then(function (response) {
                        return response.json();
                      });

                    case 6:
                      uploadedData = _context4.sent;
                      return _context4.abrupt("return", uploadedData);

                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](0);
                      console.log("There was an error!");

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, null, [[0, 10]]);
            }));
          }
        }, {
          key: "deleteRecord",
          value: function deleteRecord(collection, recordId) {
            return Backendless.Data.of(collection).remove({
              objectId: "".concat(recordId)
            });
          }
        }, {
          key: "saveRecord",
          value: function saveRecord(data) {
            return Backendless.Data.of("posts").save(data);
          }
        }, {
          key: "userRecords",
          value: function userRecords(userId, collection) {
            var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause("ownerId = '".concat(userId, "'"));
            return Backendless.Data.of(collection).find(queryBuilder);
          }
        }, {
          key: "getAllRecords",
          value: function getAllRecords(collection) {
            return Backendless.Data.of(collection).find();
          }
        }, {
          key: "getSingleRecord",
          value: function getSingleRecord(objectId, collection) {
            return Backendless.Data.of(collection).findById(objectId);
          }
        }]);

        return MediaService;
      }();

      MediaService.ɵfac = function MediaService_Factory(t) {
        return new (t || MediaService)();
      };

      MediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: MediaService,
        factory: MediaService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/footer/footer.component */
      "FxTl");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [["id", "root"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: [".test[_ngcontent-%COMP%] {\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(service, router) {
          _classCallCheck(this, AuthGuard);

          this.service = service;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.isAuth();
          }
        }, {
          key: "isAuth",
          value: function isAuth() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var isAuth;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.service.getUser();

                    case 2:
                      isAuth = _context5.sent;

                      if (!isAuth) {
                        this.router.navigate(['login']);
                      }

                      return _context5.abrupt("return", isAuth ? true : false);

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "Oh3b");
      /* harmony import */


      var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/footer/footer.component */
      "FxTl");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./core/header/header.component */
      "8rb8");
      /* harmony import */


      var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./create-article/create-article.component */
      "mDne");
      /* harmony import */


      var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./edit-article/edit-article.component */
      "pVMK");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var backendless__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! backendless */
      "uLaL");
      /* harmony import */


      var backendless__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(backendless__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./article-details/article-details.component */
      "zDJw");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "nod/");
      /* harmony import */


      var _article_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./article/article.component */
      "DLXL");

      backendless__WEBPACK_IMPORTED_MODULE_14___default.a.initApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].backendless.APP_ID, src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].backendless.API_KEY);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_8__["CreateArticleComponent"], _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_9__["EditArticleComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_16__["ArticleDetailsComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_18__["ArticleComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_8__["CreateArticleComponent"], _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_9__["EditArticleComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_16__["ArticleDetailsComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_18__["ArticleComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mDne":
    /*!************************************************************!*\
      !*** ./src/app/create-article/create-article.component.ts ***!
      \************************************************************/

    /*! exports provided: CreateArticleComponent */

    /***/
    function mDne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateArticleComponent", function () {
        return CreateArticleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/media.service */
      "SPTk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CreateArticleComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill all required data!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var CreateArticleComponent = /*#__PURE__*/function () {
        function CreateArticleComponent(service, media, router) {
          _classCallCheck(this, CreateArticleComponent);

          this.service = service;
          this.media = media;
          this.router = router;
          this.imgFile = '';
          this.isInvalid = false;
        }

        _createClass(CreateArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registerPhoto",
          value: function registerPhoto(event) {
            this.imgFile = event.target.files[0];
          }
        }, {
          key: "createStory",
          value: function createStory(f) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var imageData, _f$value, orientation, title, description;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!f.valid) {
                        _context6.next = 18;
                        break;
                      }

                      _context6.prev = 1;
                      _context6.next = 4;
                      return this.media.uploadImage(this.imgFile);

                    case 4:
                      imageData = _context6.sent;
                      _f$value = f.value, orientation = _f$value.orientation, title = _f$value.title, description = _f$value.description;
                      _context6.next = 8;
                      return this.media.saveRecord({
                        imageUrl: imageData.url,
                        orientation: orientation,
                        title: title,
                        description: description,
                        likesList: JSON.stringify([]) // DO NOT FORGET TO FIX THIS ISSUE

                      });

                    case 8:
                      this.isInvalid = false;
                      this.router.navigate(['articles']);
                      _context6.next = 16;
                      break;

                    case 12:
                      _context6.prev = 12;
                      _context6.t0 = _context6["catch"](1);
                      alert("Something went wrong with creating the story!");
                      console.log("Something went wrong with creating the story!");

                    case 16:
                      _context6.next = 19;
                      break;

                    case 18:
                      this.isInvalid = true;

                    case 19:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[1, 12]]);
            }));
          }
        }]);

        return CreateArticleComponent;
      }();

      CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) {
        return new (t || CreateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      CreateArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CreateArticleComponent,
        selectors: [["app-create-article"]],
        decls: 29,
        vars: 2,
        consts: [[1, "create-article"], [3, "ngSubmit"], ["f", "ngForm"], ["class", "error-message", 4, "ngIf"], ["for", "upld"], ["required", "", "ngModel", "", "name", "imageFile", "id", "upld", "type", "file", 3, "change"], ["for", "pic-direction"], ["required", "", "ngModel", "", "name", "orientation", "id", "pic-direction"], ["required", "", "ngModel", "", "type", "text", "name", "title", "placeholder", "Your story title"], ["required", "", "ngModel", "", "name", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "error-message"]],
        template: function CreateArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateArticleComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

              return ctx.createStory(_r0);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateArticleComponent_Template_input_change_12_listener($event) {
              return ctx.registerPhoto($event);
            });

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
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
        styles: [".error-message[_ngcontent-%COMP%] {\n    border: 2px solid red;\n    color: green;\n    border-radius: 10px;\n    padding: 0 50px;\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.create-article[_ngcontent-%COMP%] {\n    min-height: 79.5vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvbWVzc2FnZXMuY3NzIiwiY3JlYXRlLWFydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQ0xBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjcmVhdGUtYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iLCJAaW1wb3J0IHVybCgnLi4vLi4vYXNzZXRzL2Nzcy9tZXNzYWdlcy5jc3MnKTtcblxuLmNyZWF0ZS1hcnRpY2xlIHtcbiAgICBtaW4taGVpZ2h0OiA3OS41dmg7XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBmaWVsZHNldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdG9yeS1kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiAyMHZoO1xufVxuXG4uY3JlYXRlLWFydGljbGUgZmllbGRzZXQgcDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlYXRlLWFydGljbGUgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIHNlbGVjdCB7XG4gICAgLyogd2lkdGg6IDI1dnc7ICovXG4gICAgLyogd2lkdGg6IDIwdnc7ICovXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateArticleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-create-article',
            templateUrl: './create-article.component.html',
            styleUrls: ['./create-article.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nod/":
    /*!**************************************************!*\
      !*** ./src/app/not-found/not-found.component.ts ***!
      \**************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function nod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 5,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error: 404!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pVMK":
    /*!********************************************************!*\
      !*** ./src/app/edit-article/edit-article.component.ts ***!
      \********************************************************/

    /*! exports provided: EditArticleComponent */

    /***/
    function pVMK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function () {
        return EditArticleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/media.service */
      "SPTk");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EditArticleComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EditArticleComponent_div_2_form_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill all required data!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EditArticleComponent_div_2_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditArticleComponent_div_2_form_1_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r4.editStory();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditArticleComponent_div_2_form_1_Template_input_change_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.registerPhoto($event);
          });

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
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.editFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isInvalid);
        }
      }

      function EditArticleComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditArticleComponent_div_2_form_1_Template, 26, 2, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.editFormGroup);
        }
      }

      var EditArticleComponent = /*#__PURE__*/function () {
        function EditArticleComponent(fb, route, media, router) {
          _classCallCheck(this, EditArticleComponent);

          this.fb = fb;
          this.route = route;
          this.media = media;
          this.router = router;
          this.imgFile = '';
          this.isInvalid = false;
        }

        _createClass(EditArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      this.recId = this.route.snapshot.params.id;
                      _context7.t0 = Object;
                      _context7.next = 5;
                      return this.media.getSingleRecord("".concat(this.recId), 'posts');

                    case 5:
                      _context7.t1 = _context7.sent;
                      this.recordTest = _context7.t0.assign.call(_context7.t0, _context7.t1);
                      this.editFormGroup = this.fb.group(this.recordTest);
                      _context7.next = 13;
                      break;

                    case 10:
                      _context7.prev = 10;
                      _context7.t2 = _context7["catch"](0);
                      console.log("Problem getting record!");

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 10]]);
            }));
          }
        }, {
          key: "registerPhoto",
          value: function registerPhoto(event) {
            this.imgFile = event.target.files[0];
          }
        }, {
          key: "createFormGroup",
          value: function createFormGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
              imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
              objectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
              orientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
            });
          }
        }, {
          key: "editStory",
          value: function editStory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var shallowCopy, imageData;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      shallowCopy = Object.assign({}, this.editFormGroup.value);

                      if (!this.imgFile) {
                        _context8.next = 7;
                        break;
                      }

                      _context8.next = 5;
                      return this.media.uploadImage(this.imgFile);

                    case 5:
                      imageData = _context8.sent;
                      shallowCopy.imageUrl = imageData.url;

                    case 7:
                      _context8.next = 9;
                      return this.media.saveRecord(shallowCopy);

                    case 9:
                      this.router.navigate(['articles', this.recId]);
                      _context8.next = 15;
                      break;

                    case 12:
                      _context8.prev = 12;
                      _context8.t0 = _context8["catch"](0);
                      console.log("Record updating error!");

                    case 15:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[0, 12]]);
            }));
          }
        }]);

        return EditArticleComponent;
      }();

      EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) {
        return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      EditArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditArticleComponent,
        selectors: [["app-edit-article"]],
        decls: 3,
        vars: 2,
        consts: [["style", "text-align: center;", 4, "ngIf"], ["class", "create-article", 4, "ngIf"], [2, "text-align", "center"], [1, "create-article"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["class", "error-message", 4, "ngIf"], ["for", "upld"], ["name", "imageFile", "id", "upld", "type", "file", 3, "change"], ["for", "pic-direction"], ["formControlName", "orientation", "id", "pic-direction"], ["type", "text", "formControlName", "title", "placeholder", "Your story title"], ["formControlName", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit"], [1, "error-message"]],
        template: function EditArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditArticleComponent_div_1_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditArticleComponent_div_2_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.recordTest);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recordTest);
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]],
        styles: [".create-article[_ngcontent-%COMP%] {\n    min-height: 79.5vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJlZGl0LWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtYXJ0aWNsZSB7XG4gICAgbWluLWhlaWdodDogNzkuNXZoO1xufVxuXG4uY3JlYXRlLWFydGljbGUgZmllbGRzZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3RvcnktZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogMjB2aDtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGZpZWxkc2V0IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlYXRlLWFydGljbGUgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIHNlbGVjdCB7XG4gICAgLyogd2lkdGg6IDI1dnc7ICovXG4gICAgLyogd2lkdGg6IDIwdnc7ICovXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditArticleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-edit-article',
            templateUrl: './edit-article.component.html',
            styleUrls: ['./edit-article.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService() {
          _classCallCheck(this, UserService);
        }

        _createClass(UserService, [{
          key: "updateUserData",
          value: function updateUserData(data) {
            return Backendless.Data.of("Users").save(data);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return Backendless.UserService.getCurrentUser();
          }
        }, {
          key: "logoutUser",
          value: function logoutUser() {
            localStorage.clear();
            return Backendless.UserService.logout();
          }
        }, {
          key: "loginUser",
          value: function loginUser(email, password) {
            return Backendless.UserService.login(email, password, true).then(function (x) {
              localStorage.setItem('userId', "".concat(x.objectId));
              localStorage.setItem('email', "".concat(x.email));
            })["catch"](function (err) {
              alert(err.message);
              throw new Error(err.message);
            });
          }
        }, {
          key: "registerUser",
          value: function registerUser(email, password) {
            var user = new Backendless.User();
            user.email = email;
            user.password = password;
            return Backendless.UserService.register(user);
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)();
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-article/create-article.component */
      "mDne");
      /* harmony import */


      var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-article/edit-article.component */
      "pVMK");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "Oh3b");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./article-details/article-details.component */
      "zDJw");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "nod/");
      /* harmony import */


      var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./article/article.component */
      "DLXL");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }, {
        path: 'home',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
      }, {
        path: 'not-found',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'create',
        component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__["CreateArticleComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'edit-article',
        component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__["EditArticleComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'articles',
        component: _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'articles/:id',
        component: _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_9__["ArticleDetailsComponent"],
        canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'edit/:id',
        component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__["EditArticleComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: '**',
        redirectTo: 'not-found'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(service, router) {
          _classCallCheck(this, LoginComponent);

          this.service = service;
          this.router = router;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(f) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _f$value2, email, password;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _f$value2 = f.value, email = _f$value2.email, password = _f$value2.password;

                      if (!(email && password)) {
                        _context9.next = 6;
                        break;
                      }

                      _context9.next = 5;
                      return this.service.loginUser(email, password);

                    case 5:
                      this.router.navigate(['about']);

                    case 6:
                      _context9.next = 12;
                      break;

                    case 8:
                      _context9.prev = 8;
                      _context9.t0 = _context9["catch"](0);
                      f.resetForm();
                      console.log("Login failed!");

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 8]]);
            }));
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 21,
        vars: 1,
        consts: [[1, "login-container"], [1, "site-login"], [3, "ngSubmit"], ["f", "ngForm"], [1, "email"], ["for", "email"], ["ngModel", "", "required", "", "type", "email", "id", "email", "name", "email", "placeholder", "Example: ryan@abc.bg"], [1, "password"], ["for", "u-password"], ["ngModel", "", "required", "", "type", "password", "name", "password", "id", "u-password"], [1, "submit"], [1, "btn-submit", 3, "disabled"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

              return ctx.login(_r0);
            });

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
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]],
        styles: ["form[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.login-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1QyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG5mb3JtIGlucHV0LFxudGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4My45dmg7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnNpdGUtbG9naW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM2VtO1xufVxuXG4uc3VibWl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC4zZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMS4yZW0gMCByZ2JhKDAsIDAsIDAsIDEpO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zDJw":
    /*!**************************************************************!*\
      !*** ./src/app/article-details/article-details.component.ts ***!
      \**************************************************************/

    /*! exports provided: ArticleDetailsComponent */

    /***/
    function zDJw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleDetailsComponent", function () {
        return ArticleDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/media.service */
      "SPTk");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ArticleDetailsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ArticleDetailsComponent_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleDetailsComponent_div_2_div_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.deleteRec(ctx_r5.recId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/edit/", ctx_r2.recId, "");
        }
      }

      function ArticleDetailsComponent_div_2_a_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleDetailsComponent_div_2_a_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.likesUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Like");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ArticleDetailsComponent_div_2_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleDetailsComponent_div_2_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.disslikeUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Dislike");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ArticleDetailsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
        }
      }

      var ArticleDetailsComponent = /*#__PURE__*/function () {
        function ArticleDetailsComponent(service, route, media, router) {
          _classCallCheck(this, ArticleDetailsComponent);

          this.service = service;
          this.route = route;
          this.media = media;
          this.router = router;
          this.isLiked = false;
          this.likes = [];
          this.postsEventHandler = Backendless.Data.of('posts').rt();
        }

        _createClass(ArticleDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      this.userId = localStorage.getItem('userId');
                      this.recId = this.route.snapshot.params.id;
                      _context10.t0 = Object;
                      _context10.next = 6;
                      return this.media.getSingleRecord(this.recId, 'posts');

                    case 6:
                      _context10.t1 = _context10.sent;
                      this.recData = _context10.t0.assign.call(_context10.t0, _context10.t1);
                      this.isAuthor = this.userId === this.recData.ownerId;
                      this.likes = JSON.parse(this.recData.likesList);

                      if (this.likes.indexOf(this.userId) !== -1) {
                        this.isLiked = true;
                      }

                      this.postsEventHandler.addUpdateListener(function (updatedValue) {
                        _this2.recData = Object.assign({}, updatedValue);
                        _this2.likes = JSON.parse(_this2.recData.likesList);

                        if (_this2.likes.indexOf(_this2.userId) !== -1) {
                          _this2.isLiked = true;
                        } else {
                          _this2.isLiked = false;
                        }
                      }, function error(e) {
                        console.log(e.message);
                      });
                      _context10.next = 18;
                      break;

                    case 14:
                      _context10.prev = 14;
                      _context10.t2 = _context10["catch"](0);
                      this.router.navigate(['articles']);
                      console.log("Error occured!");

                    case 18:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[0, 14]]);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.postsEventHandler.removeUpdateListener(function (x) {
              return console.log('listener was destroyed');
            });
          }
        }, {
          key: "deleteRec",
          value: function deleteRec(value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var isSure;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      isSure = window.confirm("Do you really want to delete this record?");

                      if (!isSure) {
                        _context11.next = 6;
                        break;
                      }

                      _context11.next = 5;
                      return this.media.deleteRecord('posts', value);

                    case 5:
                      this.router.navigate(['articles']);

                    case 6:
                      _context11.next = 11;
                      break;

                    case 8:
                      _context11.prev = 8;
                      _context11.t0 = _context11["catch"](0);
                      console.log("Record deleting error!");

                    case 11:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[0, 8]]);
            }));
          }
        }, {
          key: "likesUpdate",
          value: function likesUpdate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var likesList;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      likesList = JSON.parse(this.recData.likesList);

                      if (!(likesList.indexOf(this.userId) === -1)) {
                        _context12.next = 9;
                        break;
                      }

                      likesList.push(this.userId);
                      this.recData.likesList = JSON.stringify(likesList);
                      _context12.next = 7;
                      return this.media.saveRecord(this.recData);

                    case 7:
                      _context12.next = 10;
                      break;

                    case 9:
                      console.log("this post is already liked");

                    case 10:
                      _context12.next = 15;
                      break;

                    case 12:
                      _context12.prev = 12;
                      _context12.t0 = _context12["catch"](0);
                      console.log("Saving record error!");

                    case 15:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 12]]);
            }));
          }
        }, {
          key: "disslikeUpdate",
          value: function disslikeUpdate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var likesList, elemIndex;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      likesList = JSON.parse(this.recData.likesList);
                      elemIndex = likesList.indexOf(this.userId);

                      if (!(elemIndex !== -1)) {
                        _context13.next = 10;
                        break;
                      }

                      likesList.splice(elemIndex, 1);
                      this.recData.likesList = JSON.stringify(likesList);
                      _context13.next = 8;
                      return this.media.saveRecord(this.recData);

                    case 8:
                      _context13.next = 11;
                      break;

                    case 10:
                      console.log("this post is already disliked");

                    case 11:
                      _context13.next = 16;
                      break;

                    case 13:
                      _context13.prev = 13;
                      _context13.t0 = _context13["catch"](0);
                      console.log("Saving record error!");

                    case 16:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[0, 13]]);
            }));
          }
        }]);

        return ArticleDetailsComponent;
      }();

      ArticleDetailsComponent.ɵfac = function ArticleDetailsComponent_Factory(t) {
        return new (t || ArticleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ArticleDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ArticleDetailsComponent,
        selectors: [["app-article-details"]],
        decls: 3,
        vars: 2,
        consts: [["class", "article-container", 4, "ngIf"], [1, "article-container"], [1, "article-media"], ["alt", "", 3, "src"], [1, "buttons", "info-holder"], ["class", "buttons", 4, "ngIf"], [1, "likes"], ["class", "like-btn", 3, "click", 4, "ngIf"], [1, "article-info"], [1, "buttons"], [1, "like-btn", 3, "click"], [1, "like-btn", 3, "routerLink"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down"]],
        template: function ArticleDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleDetailsComponent_div_1_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticleDetailsComponent_div_2_Template, 15, 10, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.recData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recData);
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".site-articles[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: calc(95.3vh - 60px - 59px);\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 83.9vh;\n}\n\n.single-article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    max-width: 30%;\n    height: 60vh;\n    text-align: center;\n    margin: 1em;\n}\n\n.single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n}\n\n.single-article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    background-color: indigo;\n    margin: 1em;\n    padding: 0.3em 1.5em;\n    border-radius: 0.35em;\n}\n\n.picture[_ngcontent-%COMP%] {\n    width: 50%;\n    max-height: 70%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.picture-Landscape[_ngcontent-%COMP%] {\n    width: 90%;\n    max-height: 100%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n\n\n.picture-Landscape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n\n.picture-Portrait[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.picture-Portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-width: 60%;\n}\n\n.article-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 80%;\n    min-height: 83.9vh;\n    margin: 0 auto;\n}\n\n.article-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.Landscape[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.article-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    border: 2px solid black;\n    margin: 1em;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.Portrait[_ngcontent-%COMP%] {\n    max-width: 60%;\n}\n\n.article-info[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 60%;\n    background-color: rgba(75, 75, 75, 0.5);\n    margin: 1em;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n}\n\n.article-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.like-btn[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 0.3em 1.2em;\n    background-color: green;\n    border-radius: 0.5em;\n    margin: 1em;\n    cursor: pointer;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    text-shadow: 0 0 0.2em black;\n    font-family: 'Dancing Script', cursive;\n    color: gold;\n}\n\n.likes[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.info-holder[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzIiwiYXJ0aWNsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBR0EsY0FBYzs7QUFFZDtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUN0SUE7SUFDSSxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLHNDQUFzQztJQUN0QyxXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFydGljbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtYXJ0aWNsZXMge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogY2FsYyg5NS4zdmggLSA2MHB4IC0gNTlweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDgzLjl2aDtcbn1cblxuLnNpbmdsZS1hcnRpY2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnNpbmdsZS1hcnRpY2xlIGgyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLnNpbmdsZS1hcnRpY2xlIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAwLjNlbSAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1ZW07XG59XG5cbi5waWN0dXJlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4ucGljdHVyZS1MYW5kc2NhcGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG5cbi8qIC5waWN0dXJlICAqL1xuXG4ucGljdHVyZS1MYW5kc2NhcGUgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucGljdHVyZS1Qb3J0cmFpdCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5waWN0dXJlLVBvcnRyYWl0IGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogNjAlO1xufVxuXG4uYXJ0aWNsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogODMuOXZoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5MYW5kc2NhcGUge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uUG9ydHJhaXQge1xuICAgIG1heC13aWR0aDogNjAlO1xufVxuXG4uYXJ0aWNsZS1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuNSk7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFydGljbGUtaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAyLjNlbTtcbn1cblxuLmFydGljbGUtaW5mbyBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGlrZS1idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMC4zZW0gMS4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgbWFyZ2luOiAxZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCB1cmwoJy4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzJyk7XG5oMyB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAuMmVtIGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG5cbi5saWtlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbmZvLWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-article-details',
            templateUrl: './article-details.component.html',
            styleUrls: ['./article-details.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
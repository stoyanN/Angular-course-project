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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(router, service) {
          _classCallCheck(this, RegisterComponent);

          this.router = router;
          this.service = service;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register(f) {
            var _f$value = f.value,
                email = _f$value.email,
                password = _f$value.password,
                rePassword = _f$value.rePassword;

            if (email && password === rePassword) {
              this.service.registerUser(email, password);
              this.service.loginUser(email, password);
              this.router.navigate(['/about']); // let user = new Backendless.User();
              // user.email = email;
              // user.password = password;
              // Backendless.UserService.register(user)
              //   .then(x => {
              //     console.log(x);
              //     console.log("Successful registration!");
              //     this.router.navigate(['/about'])
              //   })
              //   .catch((err: Error) => {
              //     console.log(`Something went wrong: ${err.message}`);
              //   });
            }
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 25,
        vars: 0,
        consts: [[1, "register-container"], [1, "site-register"], [3, "ngSubmit"], ["f", "ngForm"], [1, "email"], ["for", "email"], ["required", "", "ngModel", "", "type", "email", "id", "email", "name", "email", "placeholder", "Example: ryan@abc.bg"], [1, "password"], ["for", "u-password"], ["required", "", "ngModel", "", "type", "password", "id", "u-password", "name", "password"], ["for", "rep-u-password"], ["required", "", "ngModel", "", "type", "password", "id", "rep-u-password", "name", "rePassword"], [1, "submit", "field"], [1, "btn-submit"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.register(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Repeat Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: [".register-container[_ngcontent-%COMP%] {\n    \n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\nform[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUMiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIC8qIG1pbi1oZWlnaHQ6IDc5LjV2aDsgKi9cbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uc2l0ZS1sb2dpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG5mb3JtIGlucHV0LFxudGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxLjJlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AboutComponent_div_5_Template(rf, ctx) {
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
            imgSrc: '../assets/images/pictures/sleeping.jpg',
            description: 'This is me only 30 days old sleeping on my humans bed. This was one of my favourite activities to do and guess what...it is still a favourite thing to do.'
          }, {
            isVertical: true,
            imgSrc: '../assets/images/pictures/baby.jpg',
            description: 'On this picture I am a little older than the first one. As you see I learned fast how to pose infront of the camera. I look so fluffy &hearts; .'
          }, {
            isVertical: true,
            imgSrc: '../assets/images/pictures/playing.jpg',
            description: 'Here we are me and my best friend - The Angry Chicken. We used to love playing together. Every time when he was trying to run away from me I was there to catch him. Unfortunately one day The Angry Chicken went to visit a human friend and never came back.'
          }, {
            isVertical: false,
            imgSrc: '../assets/images/pictures/christmas.JPG',
            description: 'My humans realised that I look so handsome infront of the camera... so they took me to some guy with very big photo camera. He was taking picture of us for an hour... it was very exhausting.'
          }, {
            isVertical: true,
            imgSrc: '../assets/images/pictures/1st-of-march.jpg',
            description: "This picture is taken at 1<sup>st</sup> of March. I didn't know it is a traditional bulgarian holiday. My humans gave me this thing Martenichka. It is made of white and red wool and you have to wear it until you see a stork. It is a little strange but as long as we do this for good health I am in."
          }, {
            isVertical: true,
            imgSrc: '../assets/images/pictures/caffee-on-the-beach.jpg',
            description: 'Oooh this is a favourite memory of mine. As I said at first &hearts; I LOVE THE BEACH &hearts; !!! I love when my humans take me there. While they are drinking this strange soup called coffe I am digging and searching for treasures.'
          }, {
            isVertical: true,
            imgSrc: '../assets/images/pictures/watching-the-see.JPG',
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
        decls: 6,
        vars: 1,
        consts: [[1, "about-container"], [1, "about-title"], [1, "gallery"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "media"], ["alt", "", 3, "src"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Story of my life ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AboutComponent_div_5_Template, 5, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.name = 'name';
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            Backendless.UserService.logout().then(function (x) {
              return console.log(x);
            })["catch"](function (err) {
              return console.log(err.message);
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 28,
        vars: 1,
        consts: [[1, "site-header"], [1, "header-nav"], [1, "header-logo"], ["routerLink", "/home"], [1, "hamburger"], ["for", "ham-check", "hidden", ""], [1, "fas", "fa-bars"], ["type", "checkbox", "id", "ham-check", "hidden", ""], [1, "header-menu"], ["routerLink", "/about"], ["routerLink", "/articles"], ["routerLink", "/home", 3, "click"], ["routerLink", "/login"], ["routerLink", "/register"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ryan's life");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Your Stories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.name, "!");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUNBLGlEQUFpRDs7QUFFakQ7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQSx3QkFBd0I7SUFDeEI7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLHNDQUFzQztRQUN0QyxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQSx3QkFBd0I7SUFDeEI7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC41KTtcbn1cblxuLmhlYWRlci1uYXYgcCB7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbi5oZWFkZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyLW5hdiB1bCxcbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1uYXYgdWwgbGkrbGksXG51bCBsaStsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG59XG5cbi5oZWFkZXItbWVudSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBoMiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMCAwLjFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBwIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNi41ZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQG1lZGlhICggbWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMixcbiAgICAuYXJ0aWNsZS1pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5hcnRpY2xlLWluZm8ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgICAvKiAuYXJ0aWNsZS1tZWRpYSBpbWcgICovXG4gICAgLlBvcnRyYWl0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5MYW5kc2NhcGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5idXR0b25zIHtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5saWtlLWJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAuaGVhZGVyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaGFtYnVyZ2VyIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpbnB1dDpjaGVja2VkK2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA5MCU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMzV2dztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYgdWwgbGkrbGksXG4gICAgdWwgbGkrbGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLyogLmFydGljbGUtbWVkaWEgaW1nICAqL1xuICAgIC5Qb3J0cmFpdCB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgIH1cbiAgICAuTGFuZHNjYXBlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogNDMlO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgfVxuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgfVxuICAgIC5tYWluLWludHJvZHVjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuc3Rvcnkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmhlYWRlci1uYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuc2l0ZS1hcnRpY2xlcyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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
        decls: 21,
        vars: 0,
        consts: [[1, "site-footer"], [1, "footer-nav"], [1, "footer-content"], ["routerLink", "/create"], [1, "footer-icons"], ["href", "https://www.facebook.com ", 1, "f-book"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com ", 1, "instagram"], [1, "fab", "fa-instagram"], ["href", "https://twitter.com ", 1, "twitter"], [1, "fab", "fa-twitter-square"], [1, "footer-more"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Share A Story");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All rights reserved \xA9 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%], .site-footer[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.site-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    min-height: 3em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.3em 0;\n}\n\n.f-book[_ngcontent-%COMP%]:hover {\n    color: blue;\n}\n\n.instagram[_ngcontent-%COMP%]:hover {\n    color: orange;\n}\n\n.twitter[_ngcontent-%COMP%]:hover {\n    color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC41KTtcbn1cblxuLmhlYWRlci1uYXYgcCB7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbi5oZWFkZXItbmF2LFxuLmZvb3Rlci1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oZWFkZXItbmF2IHVsLFxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyLW5hdiB1bCBsaStsaSxcbnVsIGxpK2xpIHtcbiAgICBtYXJnaW4tbGVmdDogMS4yZW07XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcbn1cblxuLmhlYWRlci1tZW51LFxuLnNpdGUtZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWltYWdlIGgyIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uaGVhZGVyLWltYWdlIHAge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA2LjVlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDAgMC4xZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbi5zaXRlLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2l0ZS1mb290ZXIgYSB7XG4gICAgcGFkZGluZzogMC4zZW0gMDtcbn1cblxuLmYtYm9vazpob3ZlciB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi5pbnN0YWdyYW06aG92ZXIge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi50d2l0dGVyOmhvdmVyIHtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xufSJdfQ== */"]
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


      var _services_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/courses.service */
      "y9Uy");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent(service) {
          _classCallCheck(this, HomepageComponent);

          this.service = service;
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"]));
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 13,
        vars: 0,
        consts: [[1, "site-main"], [1, "main-introduce"], [1, "img"], ["src", "./assets/images/header-background.JPG", "alt", ""], [1, "story"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "So...this is me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Just a golden retriever");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hi, guys! My name is Ryan and as you see I am a doggy. Recently found out that we the dogs have a types and more specific - breeds. So my breed is a Golden Retriever. I have an amazing life. With my humans... oh yeah that's right I have my own humans! So as I was saying me and my humans love going out for a walks in the Sea garden. There are so many awesome trees and lawns, but my favourite is the beach... ooooh I love the beach! When I hear the sound of taking the shackles down I start running wherever I see. And one day just when I was thinking that there is nothing to surprise me about the beach my humans showed me the sea. But you can't walk in the sea you have to swim. I didn't know what is like to swimming but fortunately somehow I knew how to do it. So that's how swimming became my new favourite exercise. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " If you want to know each other better just log in or make a registration. It is so nice to meet new people! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
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
          return [{
            type: _services_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"]
          }];
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


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/header/header.component */
      "8rb8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/footer/footer.component */
      "FxTl");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Angular-App';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [["id", "root"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".login-container[_ngcontent-%COMP%], .register-container[_ngcontent-%COMP%] {\n    \n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\nform[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1QyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIsXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICAvKiBtaW4taGVpZ2h0OiA3OS41dmg7ICovXG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnNpdGUtbG9naW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM2VtO1xufVxuXG5mb3JtIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyZW07XG59XG5cbmZvcm0gZmllbGRzZXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuZm9ybSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cblxuZm9ybSBpbnB1dCxcbnRleHRhcmVhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMjB2dztcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc3VibWl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC4zZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMS4yZW0gMCByZ2JhKDAsIDAsIDAsIDEpO1xufSJdfQ== */"]
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var isAuth;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.service.getUser();

                    case 2:
                      isAuth = _context.sent;

                      if (!isAuth) {
                        this.router.navigate(['login']);
                      }

                      return _context.abrupt("return", isAuth ? true : false);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
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


      var _single_article_single_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./single-article/single-article.component */
      "y66v");
      /* harmony import */


      var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./create-article/create-article.component */
      "mDne");
      /* harmony import */


      var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./edit-article/edit-article.component */
      "pVMK");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var backendless__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! backendless */
      "uLaL");
      /* harmony import */


      var backendless__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(backendless__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      backendless__WEBPACK_IMPORTED_MODULE_15___default.a.initApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].backendless.APP_ID, src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].backendless.API_KEY);

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
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _single_article_single_article_component__WEBPACK_IMPORTED_MODULE_8__["SingleArticleComponent"], _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_9__["CreateArticleComponent"], _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_10__["EditArticleComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _single_article_single_article_component__WEBPACK_IMPORTED_MODULE_8__["SingleArticleComponent"], _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_9__["CreateArticleComponent"], _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_10__["EditArticleComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CreateArticleComponent = /*#__PURE__*/function () {
        function CreateArticleComponent() {
          _classCallCheck(this, CreateArticleComponent);
        }

        _createClass(CreateArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreateArticleComponent;
      }();

      CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) {
        return new (t || CreateArticleComponent)();
      };

      CreateArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateArticleComponent,
        selectors: [["app-create-article"]],
        decls: 23,
        vars: 0,
        consts: [[1, "create-article"], ["action", "#/create", "method", "POST"], ["type", "text", "name", "imageURL", "placeholder", "Image URL"], ["for", "pic-direction"], ["name", "orientation", "id", "pic-direction"], ["type", "text", "name", "title", "placeholder", "Your story title"], ["name", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit"]],
        template: function CreateArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Share your story");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select picture orientation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Landscape");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Portrait");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".create-article[_ngcontent-%COMP%] {\n    min-height: 79.5vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNyZWF0ZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWFydGljbGUge1xuICAgIG1pbi1oZWlnaHQ6IDc5LjV2aDtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0b3J5LWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBmaWVsZHNldCBwOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNWVtO1xufVxuXG4uY3JlYXRlLWFydGljbGUgc2VsZWN0IHtcbiAgICAvKiB3aWR0aDogMjV2dzsgKi9cbiAgICAvKiB3aWR0aDogMjB2dzsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-article',
            templateUrl: './create-article.component.html',
            styleUrls: ['./create-article.component.css']
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var EditArticleComponent = /*#__PURE__*/function () {
        function EditArticleComponent() {
          _classCallCheck(this, EditArticleComponent);

          this.description = 'smtg';
          this.orientation = 'landscape';
          this.title = 'i am a title';
          this.imageURL = 'https://www.google.com';
          this._id = 'user_id';
        }

        _createClass(EditArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditArticleComponent;
      }();

      EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) {
        return new (t || EditArticleComponent)();
      };

      EditArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditArticleComponent,
        selectors: [["app-edit-article"]],
        decls: 26,
        vars: 5,
        consts: [[1, "create-article"], ["method", "POST", 3, "action"], ["type", "text", "name", "imageURL", "placeholder", "Image URL", 3, "value"], ["for", "pic-direction"], ["name", "orientation", "id", "pic-direction"], ["selected", ""], ["type", "text", "name", "title", "placeholder", "Your story title", 3, "value"], ["name", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit"]],
        template: function EditArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Share your story");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select picture orientation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Landscape");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Portrait");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("action", "#/edit/", ctx._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.imageURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".create-article[_ngcontent-%COMP%] {\n    min-height: 79.5vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJlZGl0LWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtYXJ0aWNsZSB7XG4gICAgbWluLWhlaWdodDogNzkuNXZoO1xufVxuXG4uY3JlYXRlLWFydGljbGUgZmllbGRzZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3RvcnktZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogMjB2aDtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGZpZWxkc2V0IHA6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41ZW07XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBzZWxlY3Qge1xuICAgIC8qIHdpZHRoOiAyNXZ3OyAqL1xuICAgIC8qIHdpZHRoOiAyMHZ3OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICAgIGhlaWdodDogMTV2aDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditArticleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-article',
            templateUrl: './edit-article.component.html',
            styleUrls: ['./edit-article.component.css']
          }]
        }], function () {
          return [];
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
          key: "getUser",
          value: function getUser() {
            return Backendless.UserService.getCurrentUser();
          }
        }, {
          key: "loginUser",
          value: function loginUser(email, password) {
            Backendless.UserService.login(email, password, true).then(function (x) {
              return console.log(x);
            })["catch"](function (err) {
              return console.log(err.message);
            });
          }
        }, {
          key: "registerUser",
          value: function registerUser(email, password) {
            var user = new Backendless.User();
            user.email = email;
            user.password = password;
            Backendless.UserService.register(user).then(function (x) {
              console.log(x);
              console.log("Successful registration!");
            })["catch"](function (err) {
              console.log("Something went wrong: ".concat(err.message));
            });
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

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }, {
        path: 'home',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
      }, {
        path: 'create',
        component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__["CreateArticleComponent"]
      }, {
        path: 'edit',
        component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__["EditArticleComponent"]
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(service) {
          _classCallCheck(this, LoginComponent);

          this.service = service;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(f) {
            var _f$value2 = f.value,
                email = _f$value2.email,
                password = _f$value2.password;

            if (email && password) {
              this.service.loginUser(email, password);
            }
          }
        }, {
          key: "isValid",
          value: function isValid() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.service.getUser();

                    case 3:
                      user = _context2.sent;
                      console.log(user);
                      _context2.next = 10;
                      break;

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](0);
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Couldn get user properly!');

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 7]]);
            }));
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 22,
        vars: 0,
        consts: [[1, "login-container"], [1, "site-login"], [3, "ngSubmit"], ["f", "ngForm"], [1, "email"], ["for", "email"], ["ngModel", "", "required", "", "type", "email", "id", "email", "name", "email", "placeholder", "Example: ryan@abc.bg"], [1, "password"], ["for", "u-password"], ["ngModel", "", "required", "", "type", "password", "name", "password", "id", "u-password"], [1, "submit"], [1, "btn-submit"], [3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

              return ctx.login(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
              return ctx.isValid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Tell me is valid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n    \n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\nform[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUMiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xuICAgIC8qIG1pbi1oZWlnaHQ6IDc5LjV2aDsgKi9cbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uc2l0ZS1sb2dpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG5mb3JtIGlucHV0LFxudGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxLjJlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG59Il19 */"]
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
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "y66v":
    /*!************************************************************!*\
      !*** ./src/app/single-article/single-article.component.ts ***!
      \************************************************************/

    /*! exports provided: SingleArticleComponent */

    /***/
    function y66v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleArticleComponent", function () {
        return SingleArticleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SingleArticleComponent = /*#__PURE__*/function () {
        function SingleArticleComponent() {
          _classCallCheck(this, SingleArticleComponent);

          this.orientation = 'Vertical';
          this.imageURL = 'https://smtg';
          this.title = 'i am a title';
          this.objectId = 'radnom id';
        }

        _createClass(SingleArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SingleArticleComponent;
      }();

      SingleArticleComponent.ɵfac = function SingleArticleComponent_Factory(t) {
        return new (t || SingleArticleComponent)();
      };

      SingleArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SingleArticleComponent,
        selectors: [["app-single-article"]],
        decls: 8,
        vars: 7,
        consts: [[1, "site-articles"], [1, "single-article"], [3, "src", "alt"], [3, "href"]],
        template: function SingleArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View story");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("picture-", ctx.orientation, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#/article/", ctx.objectId, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: [".article-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 80%;\n    min-height: 100%;\n    margin: 0 auto;\n}\n\n.article-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.Landscape[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.article-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    \n    height: auto;\n    border: 2px solid black;\n    margin: 1em;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.Portrait[_ngcontent-%COMP%] {\n    max-width: 60%;\n}\n\n.article-info[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 60%;\n    background-color: rgba(75, 75, 75, 0.5);\n    margin: 1em;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n}\n\n.article-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.like-btn[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 0.3em 1.2em;\n    background-color: green;\n    border-radius: 0.5em;\n    margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2YiLCJmaWxlIjoic2luZ2xlLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5MYW5kc2NhcGUge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSBpbWcge1xuICAgIC8qIG1heC13aWR0aDogNDAlOyAqL1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uUG9ydHJhaXQge1xuICAgIG1heC13aWR0aDogNjAlO1xufVxuXG4uYXJ0aWNsZS1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuNSk7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFydGljbGUtaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAyLjNlbTtcbn1cblxuLmFydGljbGUtaW5mbyBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGlrZS1idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMC4zZW0gMS4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgbWFyZ2luOiAxZW07XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleArticleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-single-article',
            templateUrl: './single-article.component.html',
            styleUrls: ['./single-article.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "y9Uy":
    /*!*********************************************!*\
      !*** ./src/app/services/courses.service.ts ***!
      \*********************************************/

    /*! exports provided: CoursesService */

    /***/
    function y9Uy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoursesService", function () {
        return CoursesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CoursesService = function CoursesService(http) {
        _classCallCheck(this, CoursesService);

        this.http = http;
      };

      CoursesService.ɵfac = function CoursesService_Factory(t) {
        return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CoursesService,
        factory: CoursesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
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
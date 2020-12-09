(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class RegisterComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
    }
    register(f) {
        let { email, password, rePassword } = f.value;
        if (email && (password === rePassword)) {
            this.service.registerUser(email, password);
            this.service.loginUser(email, password);
            this.router.navigate(['/about']);
            // let user = new Backendless.User();
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
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 0, consts: [[1, "register-container"], [1, "site-register"], [3, "ngSubmit"], ["f", "ngForm"], [1, "email"], ["for", "email"], ["required", "", "ngModel", "", "type", "email", "id", "email", "name", "email", "placeholder", "Example: ryan@abc.bg"], [1, "password"], ["for", "u-password"], ["required", "", "ngModel", "", "type", "password", "id", "u-password", "name", "password"], ["for", "rep-u-password"], ["required", "", "ngModel", "", "type", "password", "id", "rep-u-password", "name", "rePassword"], [1, "submit", "field"], [1, "btn-submit"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.register(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".register-container[_ngcontent-%COMP%] {\n    \n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\nform[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUMiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIC8qIG1pbi1oZWlnaHQ6IDc5LjV2aDsgKi9cbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uc2l0ZS1sb2dpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG5mb3JtIGlucHV0LFxudGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxLjJlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


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
                imgSrc: '../assets/images/pictures/sleeping.jpg',
                description: 'This is me only 30 days old sleeping on my humans bed. This was one of my favourite activities to do and guess what...it is still a favourite thing to do.'
            },
            {
                isVertical: true,
                imgSrc: '../assets/images/pictures/baby.jpg',
                description: 'On this picture I am a little older than the first one. As you see I learned fast how to pose infront of the camera. I look so fluffy &hearts; .'
            },
            {
                isVertical: true,
                imgSrc: '../assets/images/pictures/playing.jpg',
                description: 'Here we are me and my best friend - The Angry Chicken. We used to love playing together. Every time when he was trying to run away from me I was there to catch him. Unfortunately one day The Angry Chicken went to visit a human friend and never came back.'
            },
            {
                isVertical: false,
                imgSrc: '../assets/images/pictures/christmas.JPG',
                description: 'My humans realised that I look so handsome infront of the camera... so they took me to some guy with very big photo camera. He was taking picture of us for an hour... it was very exhausting.'
            },
            {
                isVertical: true,
                imgSrc: '../assets/images/pictures/1st-of-march.jpg',
                description: "This picture is taken at 1<sup>st</sup> of March. I didn't know it is a traditional bulgarian holiday. My humans gave me this thing Martenichka. It is made of white and red wool and you have to wear it until you see a stork. It is a little strange but as long as we do this for good health I am in."
            },
            {
                isVertical: true,
                imgSrc: '../assets/images/pictures/caffee-on-the-beach.jpg',
                description: 'Oooh this is a favourite memory of mine. As I said at first &hearts; I LOVE THE BEACH &hearts; !!! I love when my humans take me there. While they are drinking this strange soup called coffe I am digging and searching for treasures.'
            },
            {
                isVertical: true,
                imgSrc: '../assets/images/pictures/watching-the-see.JPG',
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






function HeaderComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r0.userName, "!");
} }
function HeaderComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "About me");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your Stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ul_11_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 14);
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
    }
    ngOnInit() {
        this.userName = localStorage.getItem('email');
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.service.logoutUser();
                this.router.navigate(['login']);
            }
            catch (_a) {
                console.log("Logout error!");
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 3, consts: [[1, "site-header"], [1, "header-nav"], [1, "header-logo"], ["routerLink", "/home"], [4, "ngIf"], [1, "hamburger"], ["for", "ham-check", "hidden", ""], [1, "fas", "fa-bars"], ["type", "checkbox", "id", "ham-check", "hidden", ""], [1, "header-menu"], ["routerLink", "/about"], ["routerLink", "/articles"], ["id", "logout", 3, "click"], ["routerLink", "/login"], ["routerLink", "/register"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_ul_11_Template, 10, 0, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_ul_12_Template, 7, 0, "ul", 4);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n#logout[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n\n\n@media ( max-width: 600px) {\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .about-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .article-info[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n    .buttons[_ngcontent-%COMP%] {\n        flex-wrap: nowrap;\n    }\n    .like-btn[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n\n@media ( max-width: 800px) {\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 1em;\n    }\n    .header-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        font-size: 1.5em;\n        color: white;\n    }\n    input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 90%;\n    }\n    h2[_ngcontent-%COMP%] {\n        font-size: 2em;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        font-family: 'Dancing Script', cursive;\n        font-size: 2.5em;\n        text-align: center;\n        display: block;\n    }\n    .header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n    textarea[_ngcontent-%COMP%] {\n        width: 35vw;\n    }\n    .header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    \n    .Portrait[_ngcontent-%COMP%] {\n        max-width: 60%;\n    }\n    .Landscape[_ngcontent-%COMP%] {\n        max-width: 80%;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 43%;\n    }\n}\n\n@media ( max-width: 1200px) {\n    .item[_ngcontent-%COMP%] {\n        flex: 0 0 40%;\n    }\n    .about-title[_ngcontent-%COMP%] {\n        width: 60%;\n        font-size: 0.7em;\n    }\n    .main-introduce[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .story[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .img[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 0;\n    }\n    .header-logo[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .header-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .site-articles[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n    .single-article[_ngcontent-%COMP%] {\n        max-width: 45%;\n    }\n    .single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFDQSxpREFBaUQ7O0FBRWpEO0lBQ0k7UUFDSSxzQ0FBc0M7UUFDdEMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0Esd0JBQXdCO0lBQ3hCO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxzQ0FBc0M7UUFDdEMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxjQUFjO0lBQ2xCO0lBQ0Esd0JBQXdCO0lBQ3hCO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuNSk7XG59XG5cbiNsb2dvdXQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlci1uYXYgcCB7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbi5oZWFkZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyLW5hdiB1bCxcbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1uYXYgdWwgbGkrbGksXG51bCBsaStsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG59XG5cbi5oZWFkZXItbWVudSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBoMiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMCAwLjFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmhlYWRlci1pbWFnZSBwIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNi41ZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQG1lZGlhICggbWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLWFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMixcbiAgICAuYXJ0aWNsZS1pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5hcnRpY2xlLWluZm8ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgICAvKiAuYXJ0aWNsZS1tZWRpYSBpbWcgICovXG4gICAgLlBvcnRyYWl0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5MYW5kc2NhcGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5idXR0b25zIHtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5saWtlLWJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAuaGVhZGVyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaGFtYnVyZ2VyIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpbnB1dDpjaGVja2VkK2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA5MCU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdixcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMzV2dztcbiAgICB9XG4gICAgLmhlYWRlci1uYXYgdWwgbGkrbGksXG4gICAgdWwgbGkrbGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLyogLmFydGljbGUtbWVkaWEgaW1nICAqL1xuICAgIC5Qb3J0cmFpdCB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgIH1cbiAgICAuTGFuZHNjYXBlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgICAgIG1heC13aWR0aDogNDMlO1xuICAgIH1cbn1cblxuQG1lZGlhICggbWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaXRlbSB7XG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgfVxuICAgIC5hYm91dC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgfVxuICAgIC5tYWluLWludHJvZHVjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuc3Rvcnkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmhlYWRlci1uYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuc2l0ZS1hcnRpY2xlcyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnNpbmdsZS1hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XG4gICAgfVxuICAgIC5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufSJdfQ== */"] });
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function ArticleComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "View story");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("picture-", record_r2.orientation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", record_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", record_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", record_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", record_r2.objectId);
} }
function ArticleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleComponent_div_1_div_1_Template, 7, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.userRecords);
} }
class ArticleComponent {
    constructor(service, media) {
        this.service = service;
        this.media = media;
        // userId: string | null = '';
        this.userRecords = [];
    }
    ngOnInit() {
        // this.userId = localStorage.getItem('userId');
        // this.media.getAllRecords("posts").then(x => {
        //   this.userRecords = x;
        //   console.log(this.userRecords);
        // })
        //   .catch((err: Error) => console.log(err.message));
        this.records();
    }
    records() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userRecords = yield this.media.getAllRecords("posts");
            console.log(this.userRecords);
        });
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 2, vars: 1, consts: [["class", "site-articles", 4, "ngIf"], [1, "site-articles"], ["class", "single-article", 4, "ngFor", "ngForOf"], [1, "single-article"], [3, "src", "alt"], [3, "routerLink"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userRecords);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".site-articles[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: calc(95.3vh - 60px - 59px);\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.single-article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    max-width: 30%;\n    height: 60vh;\n    text-align: center;\n    margin: 1em;\n}\n\n.single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n}\n\n.single-article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    background-color: indigo;\n    margin: 1em;\n    padding: 0.3em 1.5em;\n    border-radius: 0.35em;\n}\n\n.picture[_ngcontent-%COMP%] {\n    width: 50%;\n    max-height: 70%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.picture-Landscape[_ngcontent-%COMP%] {\n    width: 90%;\n    max-height: 100%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n\n\n.picture-Landscape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n\n.picture-Portrait[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.picture-Portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-width: 60%;\n}\n\n.article-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 80%;\n    min-height: 100%;\n    margin: 0 auto;\n}\n\n.article-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.Landscape[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.article-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    border: 2px solid black;\n    margin: 1em;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.Portrait[_ngcontent-%COMP%] {\n    max-width: 60%;\n}\n\n.article-info[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 60%;\n    background-color: rgba(75, 75, 75, 0.5);\n    margin: 1em;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n}\n\n.article-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.like-btn[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 0.3em 1.2em;\n    background-color: green;\n    border-radius: 0.5em;\n    margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBR0EsY0FBYzs7QUFFZDtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2YiLCJmaWxlIjoiYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtYXJ0aWNsZXMge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogY2FsYyg5NS4zdmggLSA2MHB4IC0gNTlweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2luZ2xlLWFydGljbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4uc2luZ2xlLWFydGljbGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uc2luZ2xlLWFydGljbGUgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDAuM2VtIDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVlbTtcbn1cblxuLnBpY3R1cmUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LWhlaWdodDogNzAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5waWN0dXJlLUxhbmRzY2FwZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cblxuLyogLnBpY3R1cmUgICovXG5cbi5waWN0dXJlLUxhbmRzY2FwZSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5waWN0dXJlLVBvcnRyYWl0IHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLnBpY3R1cmUtUG9ydHJhaXQgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MCU7XG59XG5cbi5hcnRpY2xlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5MYW5kc2NhcGUge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4uYXJ0aWNsZS1tZWRpYSBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uUG9ydHJhaXQge1xuICAgIG1heC13aWR0aDogNjAlO1xufVxuXG4uYXJ0aWNsZS1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuNSk7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFydGljbGUtaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAyLjNlbTtcbn1cblxuLmFydGljbGUtaW5mbyBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGlrZS1idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMC4zZW0gMS4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgbWFyZ2luOiAxZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "site-footer"], [1, "footer-nav"], [1, "footer-content"], ["routerLink", "/create"], [1, "footer-icons"], ["href", "https://www.facebook.com ", 1, "f-book"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com ", 1, "instagram"], [1, "fab", "fa-instagram"], ["href", "https://twitter.com ", 1, "twitter"], [1, "fab", "fa-twitter-square"], [1, "footer-more"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All rights reserved \u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".site-header[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n    background-color: rgba(73, 73, 73, 0.5);\n}\n\n.header-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: gold;\n}\n\n.header-nav[_ngcontent-%COMP%], .footer-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.header-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-left: 1.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2.5em;\n    margin-right: 3em;\n}\n\n.header-menu[_ngcontent-%COMP%], .site-footer[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n}\n\n.header-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 4em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.header-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    align-self: flex-end;\n    margin-right: 6.5em;\n    margin-top: 2em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 0 0.1em;\n    border-radius: 0.3em;\n}\n\n.site-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    min-height: 3em;\n    margin-top: 1em;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.3em 0;\n}\n\n.f-book[_ngcontent-%COMP%]:hover {\n    color: blue;\n}\n\n.instagram[_ngcontent-%COMP%]:hover {\n    color: orange;\n}\n\n.twitter[_ngcontent-%COMP%]:hover {\n    color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC41KTtcbn1cblxuLmhlYWRlci1uYXYgcCB7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbi5oZWFkZXItbmF2LFxuLmZvb3Rlci1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oZWFkZXItbmF2IHVsLFxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyLW5hdiB1bCBsaStsaSxcbnVsIGxpK2xpIHtcbiAgICBtYXJnaW4tbGVmdDogMS4yZW07XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcbn1cblxuLmhlYWRlci1tZW51LFxuLnNpdGUtZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaGVhZGVyLWltYWdlIGgyIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uaGVhZGVyLWltYWdlIHAge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA2LjVlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDAgMC4xZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbi5zaXRlLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2l0ZS1mb290ZXIgYSB7XG4gICAgcGFkZGluZzogMC4zZW0gMDtcbn1cblxuLmYtYm9vazpob3ZlciB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi5pbnN0YWdyYW06aG92ZXIge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi50d2l0dGVyOmhvdmVyIHtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xufSJdfQ== */"] });
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
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 14, vars: 0, consts: [[1, "site-main"], [1, "main-introduce"], [1, "img"], ["src", "./assets/images/header-background.JPG", "alt", ""], [1, "story"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
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
                const uploadedData = yield fetch('https://api.cloudinary.com/v1_1/dronicn8f/image/upload', {
                    method: "POST",
                    body: formData
                }).then(response => response.json());
                return uploadedData;
            }
            catch (_a) {
                console.log("There was an error!");
            }
        });
    }
    saveRecord(data) {
        Backendless.Data.of("posts").save(data);
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

/***/ "StNR":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class UploadComponent {
    constructor() { }
    ngOnInit() {
    }
    submitForm(f) { }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], decls: 11, vars: 0, consts: [[3, "ngSubmit"], ["f", "ngForm"], ["for", "firstName"], ["type", "text", "name", "firstName", "ngModel", "", "id", "firstName"], ["for", "lastName"], ["type", "text", "name", "lastName", "ngModel", "", "id", "lastName"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UploadComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.submitForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload',
                templateUrl: './upload.component.html',
                styleUrls: ['./upload.component.css']
            }]
    }], function () { return []; }, null); })();


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".login-container[_ngcontent-%COMP%], .register-container[_ngcontent-%COMP%] {\n    \n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\nform[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1QyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIsXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICAvKiBtaW4taGVpZ2h0OiA3OS41dmg7ICovXG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnNpdGUtbG9naW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM2VtO1xufVxuXG5mb3JtIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyZW07XG59XG5cbmZvcm0gZmllbGRzZXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuZm9ybSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cblxuZm9ybSBpbnB1dCxcbnRleHRhcmVhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMjB2dztcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc3VibWl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC4zZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMS4yZW0gMCByZ2JhKDAsIDAsIDAsIDEpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./article-details/article-details.component */ "zDJw");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./article/article.component */ "DLXL");





















backendless__WEBPACK_IMPORTED_MODULE_14___default.a.initApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].backendless.APP_ID, src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].backendless.API_KEY);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
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
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_16__["UploadComponent"],
        _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_17__["ArticleDetailsComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_19__["ArticleComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]] }); })();
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
                    _upload_upload_component__WEBPACK_IMPORTED_MODULE_16__["UploadComponent"],
                    _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_17__["ArticleDetailsComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_19__["ArticleComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
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
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CreateArticleComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill all required data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateArticleComponent {
    constructor(service, media) {
        this.service = service;
        this.media = media;
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
                    // const userId = await (await this.service.getUser()).objectId;
                    const imageData = yield this.media.uploadImage(this.imgFile);
                    let { orientation, title, description } = f.value;
                    this.media.saveRecord({
                        imageUrl: imageData.url,
                        orientation: orientation,
                        title: title,
                        description: description
                    });
                    this.isInvalid = false;
                }
                catch (_a) {
                    console.log("Something went wrong with creating the story!");
                }
            }
            else {
                this.isInvalid = true;
            }
        });
    }
}
CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) { return new (t || CreateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"])); };
CreateArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateArticleComponent, selectors: [["app-create-article"]], decls: 29, vars: 1, consts: [[1, "create-article"], [3, "ngSubmit"], ["f", "ngForm"], ["class", "error-message", 4, "ngIf"], ["for", "upld"], ["required", "", "ngModel", "", "name", "imageFile", "id", "upld", "type", "file", 3, "change"], ["for", "pic-direction"], ["required", "", "ngModel", "", "name", "orientation", "id", "pic-direction"], ["required", "", "ngModel", "", "type", "text", "name", "title", "placeholder", "Your story title"], ["required", "", "ngModel", "", "name", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit"], [1, "error-message"]], template: function CreateArticleComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".error-message[_ngcontent-%COMP%] {\n    border: 2px solid red;\n    color: green;\n    border-radius: 10px;\n    padding: 0 50px;\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.create-article[_ngcontent-%COMP%] {\n    min-height: 79.5vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvbWVzc2FnZXMuY3NzIiwiY3JlYXRlLWFydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQ0xBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjcmVhdGUtYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iLCJAaW1wb3J0IHVybCgnLi4vLi4vYXNzZXRzL2Nzcy9tZXNzYWdlcy5jc3MnKTtcblxuLmNyZWF0ZS1hcnRpY2xlIHtcbiAgICBtaW4taGVpZ2h0OiA3OS41dmg7XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBmaWVsZHNldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdG9yeS1kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiAyMHZoO1xufVxuXG4uY3JlYXRlLWFydGljbGUgZmllbGRzZXQgcDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlYXRlLWFydGljbGUgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIHNlbGVjdCB7XG4gICAgLyogd2lkdGg6IDI1dnc7ICovXG4gICAgLyogd2lkdGg6IDIwdnc7ICovXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-article',
                templateUrl: './create-article.component.html',
                styleUrls: ['./create-article.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"] }]; }, null); })();


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
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 5, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error: 404!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class EditArticleComponent {
    constructor() {
        this.description = 'smtg';
        this.orientation = 'landscape';
        this.title = 'i am a title';
        this.imageURL = 'https://www.google.com';
        this._id = 'user_id';
    }
    ngOnInit() {
    }
}
EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) { return new (t || EditArticleComponent)(); };
EditArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditArticleComponent, selectors: [["app-edit-article"]], decls: 27, vars: 5, consts: [[1, "create-article"], ["method", "POST", 3, "action"], ["type", "text", "name", "imageURL", "placeholder", "Image URL", 3, "value"], ["for", "pic-direction"], ["name", "orientation", "id", "pic-direction"], ["selected", ""], ["type", "text", "name", "title", "placeholder", "Your story title", 3, "value"], ["name", "description", "cols", "30", "rows", "10", "placeholder", "Tell us your story"], ["type", "submit", 1, "btn-submit"]], template: function EditArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Share your story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select picture orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Landscape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("action", "#/edit/", ctx._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.imageURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".create-article[_ngcontent-%COMP%] {\n    min-height: 79.5vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.story-description[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.create-article[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    justify-content: center;\n}\n\n.create-article[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: -0.5em;\n}\n\n.create-article[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    \n    border: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJlZGl0LWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtYXJ0aWNsZSB7XG4gICAgbWluLWhlaWdodDogNzkuNXZoO1xufVxuXG4uY3JlYXRlLWFydGljbGUgZmllbGRzZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3RvcnktZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogMjB2aDtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGZpZWxkc2V0IHA6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1hcnRpY2xlIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41ZW07XG59XG5cbi5jcmVhdGUtYXJ0aWNsZSBzZWxlY3Qge1xuICAgIC8qIHdpZHRoOiAyNXZ3OyAqL1xuICAgIC8qIHdpZHRoOiAyMHZ3OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICAgIGhlaWdodDogMTV2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-article',
                templateUrl: './edit-article.component.html',
                styleUrls: ['./edit-article.component.css']
            }]
    }], function () { return []; }, null); })();


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
            console.log(x);
        })
            .catch((err) => console.log(err.message));
    }
    registerUser(email, password) {
        let user = new Backendless.User();
        user.email = email;
        user.password = password;
        Backendless.UserService.register(user)
            .then(x => {
            console.log(x);
            console.log("Successful registration!");
        })
            .catch((err) => {
            console.log(`Something went wrong: ${err.message}`);
        });
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
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-details/article-details.component */ "zDJw");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'create', component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__["CreateArticleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'edit-article', component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__["EditArticleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'articles', component: _article_article_component__WEBPACK_IMPORTED_MODULE_9__["ArticleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'articles/:id', component: _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDetailsComponent"], canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_10__["UploadComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








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
                    yield this.service.loginUser(email, password);
                    this.router.navigate(['about']);
                }
            }
            catch (_a) {
                console.log("Login failed!");
            }
        });
    }
    isValid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let user = yield this.service.getUser();
                console.log(user);
            }
            catch (_a) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Couldn get user properly!');
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 0, consts: [[1, "login-container"], [1, "site-login"], [3, "ngSubmit"], ["f", "ngForm"], [1, "email"], ["for", "email"], ["ngModel", "", "required", "", "type", "email", "id", "email", "name", "email", "placeholder", "Example: ryan@abc.bg"], [1, "password"], ["for", "u-password"], ["ngModel", "", "required", "", "type", "password", "name", "password", "id", "u-password"], [1, "submit"], [1, "btn-submit"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.isValid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tell me is valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]], styles: [".login-container[_ngcontent-%COMP%] {\n    \n    width: 65%;\n    margin: 0 auto;\n    text-align: start;\n}\n\n.site-login[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 3em;\n}\n\nform[_ngcontent-%COMP%] {\n    margin: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 2em;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    border-radius: 1em;\n    min-height: 50vh;\n    width: 60%;\n    border: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\nfieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 70%;\n    font-size: 1.5em;\n    margin: 1em auto;\n    border-bottom: 2px solid white;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.5em;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0.3em;\n    height: 1.5em;\n    width: 20vw;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.submit[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.3em 1em;\n    border-radius: 0.3em;\n    border: 1px solid black;\n    background-color: gold;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    transition: box-shadow 0.3s ease-out;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 1.2em 0 rgba(0, 0, 0, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUMiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xuICAgIC8qIG1pbi1oZWlnaHQ6IDc5LjV2aDsgKi9cbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uc2l0ZS1sb2dpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG5mb3JtIGlucHV0LFxudGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxLjJlbSAwIHJnYmEoMCwgMCwgMCwgMSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article/article.component */ "DLXL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/media.service */ "SPTk");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function ArticleDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Likes: 11");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ArticleDetailsComponent {
    constructor(art, service, route, media) {
        this.art = art;
        this.service = service;
        this.route = route;
        this.media = media;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = localStorage.getItem('userId');
            this.recData = Object.assign(yield this.media.getSingleRecord(this.route.snapshot.params.id, 'posts'));
            this.isAuthor = this.userId === this.recData.ownerId;
        });
    }
}
ArticleDetailsComponent.ɵfac = function ArticleDetailsComponent_Factory(t) { return new (t || ArticleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_article_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"])); };
ArticleDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticleDetailsComponent, selectors: [["app-article-details"]], decls: 19, vars: 2, consts: [[1, "article-container"], [1, "article-media"], [1, "buttons"], [4, "ngIf"], ["for", "comment"], ["name", "comment", "id", "comment", "cols", "30", "rows", "10"], [1, "article-info"], ["href", "#/delete/", 1, "like-btn"], ["href", "#/edit/", 1, "like-btn"], [1, "like-btn"]], template: function ArticleDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " -------------------------------------------- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ArticleDetailsComponent_div_5_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticleDetailsComponent_div_6_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " ----------------------------------- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthor);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"]], styles: [".site-articles[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: calc(95.3vh - 60px - 59px);\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.single-article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    max-width: 30%;\n    height: 60vh;\n    text-align: center;\n    margin: 1em;\n}\n\n.single-article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n}\n\n.single-article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    background-color: indigo;\n    margin: 1em;\n    padding: 0.3em 1.5em;\n    border-radius: 0.35em;\n}\n\n.picture[_ngcontent-%COMP%] {\n    width: 50%;\n    max-height: 70%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.picture-Landscape[_ngcontent-%COMP%] {\n    width: 90%;\n    max-height: 100%;\n    overflow: hidden;\n    margin: 1em;\n}\n\n\n\n.picture-Landscape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n\n.picture-Portrait[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.picture-Portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-width: 60%;\n}\n\n.article-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 80%;\n    min-height: 100%;\n    margin: 0 auto;\n}\n\n.article-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: hidden;\n    margin: 1em;\n}\n\n.Landscape[_ngcontent-%COMP%] {\n    max-width: 80%;\n}\n\n.article-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    border: 2px solid black;\n    margin: 1em;\n    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);\n}\n\n.Portrait[_ngcontent-%COMP%] {\n    max-width: 60%;\n}\n\n.article-info[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 60%;\n    background-color: rgba(75, 75, 75, 0.5);\n    margin: 1em;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.article-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n}\n\n.article-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.like-btn[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 0.3em 1.2em;\n    background-color: green;\n    border-radius: 0.5em;\n    margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MvYXJ0aWNsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBR0EsY0FBYzs7QUFFZDtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2YiLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1hcnRpY2xlcyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDk1LjN2aCAtIDYwcHggLSA1OXB4KTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSBoMiB7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5zaW5nbGUtYXJ0aWNsZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMC4zZW0gMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNWVtO1xufVxuXG4ucGljdHVyZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnBpY3R1cmUtTGFuZHNjYXBlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuXG4vKiAucGljdHVyZSAgKi9cblxuLnBpY3R1cmUtTGFuZHNjYXBlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnBpY3R1cmUtUG9ydHJhaXQge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4ucGljdHVyZS1Qb3J0cmFpdCBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuLmFydGljbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hcnRpY2xlLW1lZGlhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLkxhbmRzY2FwZSB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5hcnRpY2xlLW1lZGlhIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5Qb3J0cmFpdCB7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG59XG5cbi5hcnRpY2xlLWluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC41KTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXJ0aWNsZS1pbmZvIGgyIHtcbiAgICBmb250LXNpemU6IDIuM2VtO1xufVxuXG4uYXJ0aWNsZS1pbmZvIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbnMge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5saWtlLWJ0biB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwYWRkaW5nOiAwLjNlbSAxLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICBtYXJnaW46IDFlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-article-details',
                templateUrl: './article-details.component.html',
                styleUrls: ['./article-details.component.css']
            }]
    }], function () { return [{ type: _article_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"] }]; }, null); })();


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
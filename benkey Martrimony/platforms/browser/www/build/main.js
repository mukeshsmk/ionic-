webpackJsonp([1],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, nav, http, fb) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.fb = fb;
        this.authForm = fb.group({
            'Name': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(20)])],
            'Profile_Created_For': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'Password': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)])],
            'Email': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
            'Religion': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'PIN': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'City': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'State': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'Gender': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'Eating_Habits': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'Drinking_Habits': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'Smoking_Habits': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'Mobile': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)])],
            'Language': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
        });
    }
    SignupPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var DDlist = 'http://68.66.207.110:8020/GetDDList';
        console.log(DDlist);
        this.http.get(DDlist)
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            _this.city = result.user[0].City;
            _this.state = result.user[0].State;
            _this.country = result.user[0].Country;
            _this.religion = result.user[0].Religion;
            _this.cast = result.user[0].Cast;
            _this.language = result.user[0].Language;
        });
    };
    SignupPage.prototype.gotologin = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
        }, 1000);
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var myData = {
            Email: this.authForm.value.Email,
            Password: this.authForm.value.Password,
            Mobile: this.authForm.value.Mobile,
            Name: this.authForm.value.Name,
            Religion: this.authForm.value.Religion,
            Profile_Created_For: this.authForm.value.Profile_Created_For,
            Eating_Habits: this.authForm.value.Eating_Habits,
            Drinking_Habits: this.authForm.value.Drinking_Habits,
            Smoking_Habits: this.authForm.value.Smoking_Habits,
            City: this.authForm.value.City,
            State: this.authForm.value.State,
            PIN: this.authForm.value.PIN,
            Language: this.authForm.value.Language,
            Gender: this.authForm.value.Gender,
        };
        console.log(myData);
        this.http.post('http://68.66.207.110:8020/createNewUser', myData)
            .subscribe(function (data) {
            var resp = JSON.parse(data["_body"]);
            console.log(resp);
            if (resp.status == "Success") {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    \n\n    <ion-title class="login">SIGN UP</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n\n\n  <img class="banner-img" src="assets/imgs/banner.jpg">\n\n\n\n  <form (ngSubmit)="signup()" [formGroup]="authForm">\n\n    <ion-list>\n\n\n\n      <h6 class="find">Find the perfect match-register free!</h6>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>NAME</ion-label>\n\n        <ion-input type="text" formControlName="Name" required></ion-input>\n\n      </ion-item>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Name\'].hasError(\'required\') && authForm.controls[\'Name\'].touched">* Username is required!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Name\'].hasError(\'minlength\') && authForm.controls[\'Name\'].touched">* Minimum username length is 5!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Name\'].hasError(\'maxlength\') && authForm.controls[\'Name\'].touched">* Maximum username length is 10!</div>\n\n      \n\n      <ion-item>\n\n        <ion-label color="primary" floating>PROFILE CREATED FOR</ion-label>\n\n        <ion-select formControlName="Profile_Created_For" required okText="Done" cancelText="Cancel">\n\n          <ion-option>My self</ion-option>\n\n          <ion-option>Son</ion-option>\n\n          <ion-option>Daughter</ion-option>\n\n          <ion-option>Brother</ion-option>\n\n          <ion-option>Sister</ion-option>\n\n          <ion-option>Relative</ion-option>\n\n          <ion-option>Freind</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label color="primary" floating>GENDER</ion-label>\n\n        <ion-select formControlName="Gender" okText="Done" cancelText="Cancel">\n\n          <ion-option>Male</ion-option>\n\n          <ion-option>Female</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n  \n\n      <ion-item>\n\n\n\n        <ion-label color="primary" floating>RELIGION</ion-label>\n\n        <ion-select formControlName="Religion" okText="Done" cancelText="Cancel">\n\n          <ion-option *ngFor="let r of religion">{{r}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>MOTHER TONGUE</ion-label>\n\n        <ion-select formControlName="Language" okText="Done" cancelText="Cancel">\n\n          <ion-option *ngFor="let l of language">{{l}}</ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>DRINKING HABITS</ion-label>\n\n        <ion-select formControlName="Drinking_Habits" okText="Done" cancelText="Cancel">\n\n          <ion-option>Yes</ion-option>\n\n          <ion-option>No</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>SMOKING HABITS</ion-label>\n\n        <ion-select formControlName="Smoking_Habits" okText="Done" cancelText="Cancel">\n\n          <ion-option>Yes</ion-option>\n\n          <ion-option>No</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>EATING HABITS</ion-label>\n\n        <ion-select formControlName="Eating_Habits" okText="Done" cancelText="Cancel">\n\n          <ion-option>Vegitarian</ion-option>\n\n          <ion-option>Non-Vegiterian</ion-option>\n\n          <ion-option>Eggetarian</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>CITY</ion-label>\n\n        <ion-select formControlName="City" okText="Done" cancelText="Cancel">\n\n          <ion-option *ngFor="let ci of city">{{ci}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>STATE</ion-label>\n\n        <ion-select formControlName="State" okText="Done" cancelText="Cancel">\n\n          <ion-option *ngFor="let st of state">{{st}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>PINCODE</ion-label>\n\n        <ion-input type="text" formControlName="PIN"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>MOBILE NUMBER</ion-label>\n\n        <ion-input type="number" max="10" formControlName="Mobile" required></ion-input>\n\n      </ion-item>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Mobile\'].hasError(\'required\') && authForm.controls[\'Mobile\'].touched">Sorry, field mobile number is required!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Mobile\'].hasError(\'minlength\') && authForm.controls[\'Mobile\'].touched">Sorry, minimum  length is 10!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Mobile\'].hasError(\'maxlength\') && authForm.controls[\'Mobile\'].touched">Sorry, maximum  length is 10!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Mobile\'].hasError(\'pattern\') && authForm.controls[\'Mobile\'].touched">Sorry, only numbers allowed!</div>   \n\n      <ion-item>\n\n        <ion-label color="primary" floating>EMAIL</ion-label>\n\n        <ion-input type="email" formControlName="Email" required></ion-input>\n\n      </ion-item>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Email\'].hasError(\'required\') && authForm.controls[\'Email\'].touched">Sorry, email is required!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Email\'].hasError(\'required\') && authForm.controls[\'Email\'].touched">Sorry, Please enter valid email!</div>     \n\n      <ion-item>\n\n        <ion-label color="primary" floating>PASSWORD</ion-label>\n\n        <ion-input type="password" formControlName="Password" required></ion-input>\n\n      </ion-item>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Password\'].hasError(\'required\') && authForm.controls[\'Password\'].touched">* Password is required!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Password\'].hasError(\'minlength\') && authForm.controls[\'Password\'].touched">* Minimum Password length is 8!</div>\n\n      <div class="error-box" *ngIf="authForm.controls[\'Password\'].hasError(\'checkFirstCharacterValidatorOutput\') && authForm.controls[\'Password\'].touched">* Password cant\'t start with number!</div><br/>\n\n      \n\n\n\n      <p class="terms">By Clicking Continue button, you accept\n\n        <br> our\n\n        <span class="conditions">Terms and Conditions </span>\n\n      </p>\n\n      <button type="submit" [disabled]="!authForm.valid" (click)="signup()" ion-button round>SIGNUP</button>\n\n      <p class="login">Have an Account?\n\n        <span class="login-span" (click)="gotologin()"> Login</span>\n\n      </p>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MembershipPage = /** @class */ (function () {
    function MembershipPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 50;
        this.tabs = [];
        this.hide1 = false;
        this.hide2 = false;
        this.hide3 = false;
        this.toggleButton = function (id) {
            if (id == 1) {
                this.hide1 = false;
                this.hide2 = false;
                this.hide3 = false;
                this.buttonActive = 1;
            }
            if (id == 2) {
                this.hide1 = true;
                this.hide2 = true;
                this.hide3 = false;
                this.buttonActive = 2;
            }
            if (id == 3) {
                this.hide1 = true;
                this.hide2 = false;
                this.hide3 = true;
                this.buttonActive = 3;
            }
        };
        this.tabs = ["3MONTHS", "6 MONTHS", "TILL U MARRY", "PERSONALIZED"];
        this.buttonActive = 1;
    }
    MembershipPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    MembershipPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.scroll.scrollTo(index * this.tabElementWidth_px, 0, 500);
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    MembershipPage.prototype.updateIndicatorPosition = function () {
        this.scroll.scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    MembershipPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], MembershipPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], MembershipPage.prototype, "scroll", void 0);
    MembershipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-membership',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\membership\membership.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">MEMBERSHIP</ion-title>\n\n    </ion-navbar>\n\n    <ion-content  #scroll scrollX="true" style="height: 42px;">\n\n        <ion-segment  class="SwipedTabs-tabs"  >\n\n          <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n\n          [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'  [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" >\n\n            {{tab}}\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      \n\n        <!-- here is our dynamic line  "indicator"-->\n\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" ></div>\n\n      </ion-content>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n\n\n    <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n\n                (ionSlideWillChange)="updateIndicatorPosition()"\n\n                (ionSlideDidChange)="updateIndicatorPosition()"\n\n                (pan)="updateIndicatorPosition()"\n\n                [pager]="false"\n\n          >\n\n      <ion-slide>\n\n        <ion-card>\n\n            <div *ngIf="!hide1" class="bg">\n\n            \n\n            <h5 class="membership-title">Classic</h5>\n\n                \n\n                <div class="classic-card1">\n\n                  <div class="classic-card2">\n\n                    <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                  </div>\n\n                  <div class="classic-card3">\n\n                    <p class="membership-content">Send unlimited messages & chat</p>\n\n                  </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Access 40 verified mobile numbers</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">veiw unlimited horoscopes</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Premium member tag for more response</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                            <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-view-icon" name="contacts"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Get 2 months FREE Profile Highlighter</s></p>\n\n                    </div>\n\n                </div>\n\n\n\n            </div>\n\n\n\n            <div *ngIf="hide2" class="bg">\n\n            \n\n                <h5 class="membership-title">Classic Advantages</h5>\n\n\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Get 2 months FREE Profile Highlighter</p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n                    <div class="classic-card1">\n\n                      <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                      </div>\n\n                      <div class="classic-card3">\n\n                        <p class="membership-content">Send unlimited messages & chat</p>\n\n                      </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Access 55 verified mobile numbers</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">veiw unlimited horoscopes</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Premium member tag for more response</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                                <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n    \n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n    \n\n                </div>\n\n\n\n                <div *ngIf="hide3" class="bg">\n\n            \n\n                    <h5 class="membership-title">Classic Premium</h5>\n\n                        \n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Get 3 months FREE Profile Highlighter</p>\n\n                            </div>\n\n                        </div>\n\n\n\n                        <div class="classic-card1">\n\n                          <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                          </div>\n\n                          <div class="classic-card3">\n\n                            <p class="membership-content">Send unlimited messages & chat</p>\n\n                          </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Access 60 verified mobile numbers</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="eye"></ion-icon>\n\n        \n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Enhanced profile vizibility</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">veiw unlimited horoscopes</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Premium member tag for more response</p>\n\n                            </div>\n\n                        </div>\n\n                        \n\n                    \n\n        \n\n                    </div>\n\n                    <div class="tabs">\n\n\n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==1}" (click)="toggleButton(1)">\n\n                            <h5>Rs.4500</h5>\n\n                            <span>Rs 50 / day</span>\n\n                            <p>Classic Package</p>\n\n                        </div> \n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==2}" (click)="toggleButton(2)">\n\n                                <h5>Rs.5200</h5>\n\n                                <span>Rs 57 / day</span>\n\n                                <p>Classic Advantage</p>\n\n                        </div>\n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==3}" (click)="toggleButton(3)">\n\n                                <h5>Rs.6500</h5>\n\n                                <span>Rs 72 / day</span>\n\n                                <p>Classic Premium</p>\n\n                \n\n                        </div>\n\n                    </div>\n\n                    <div class="paynow">\n\n                            <button class="pay" ion-button block>PAYNOW</button>\n\n                    </div>\n\n           \n\n        </ion-card>\n\n      \n\n        \n\n      </ion-slide>\n\n      <ion-slide>\n\n        <ion-card>\n\n            <div *ngIf="!hide1" class="bg">\n\n            \n\n            <h5 class="membership-title">Classic</h5>\n\n                \n\n                <div class="classic-card1">\n\n                  <div class="classic-card2">\n\n                    <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                  </div>\n\n                  <div class="classic-card3">\n\n                    <p class="membership-content">Send unlimited messages & chat</p>\n\n                  </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Access 80 verified mobile numbers</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">veiw unlimited horoscopes</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Premium member tag for more response</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                            <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-view-icon" name="contacts"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Get 2 months FREE Profile Highlighter</s></p>\n\n                    </div>\n\n                </div>\n\n\n\n            </div>\n\n\n\n            <div *ngIf="hide2" class="bg">\n\n            \n\n                <h5 class="membership-title">Classic Advantages</h5>\n\n\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Get 4 months FREE Profile Highlighter</p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n                    <div class="classic-card1">\n\n                      <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                      </div>\n\n                      <div class="classic-card3">\n\n                        <p class="membership-content">Send unlimited messages & chat</p>\n\n                      </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Access 55 verified mobile numbers</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">veiw unlimited horoscopes</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Premium member tag for more response</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                                <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n    \n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n    \n\n                </div>\n\n\n\n                <div *ngIf="hide3" class="bg">\n\n            \n\n                    <h5 class="membership-title">Classic Premium</h5>\n\n                        \n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Get 3 months FREE Profile Highlighter</p>\n\n                            </div>\n\n                        </div>\n\n\n\n                        <div class="classic-card1">\n\n                          <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                          </div>\n\n                          <div class="classic-card3">\n\n                            <p class="membership-content">Send unlimited messages & chat</p>\n\n                          </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Access 60 verified mobile numbers</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="eye"></ion-icon>\n\n        \n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Enhanced profile vizibility</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">veiw unlimited horoscopes</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Premium member tag for more response</p>\n\n                            </div>\n\n                        </div>\n\n                        \n\n                    \n\n        \n\n                    </div>\n\n           \n\n\n\n                    <div class="tabs" >\n\n\n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==1}" (click)="toggleButton(1)">\n\n                            <h5>Rs.7600</h5>\n\n                            <span>Rs 42 / day</span>\n\n                            <p>Classic Package</p>\n\n                        </div> \n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==2}" (click)="toggleButton(2)">\n\n                                <h5>Rs.8400</h5>\n\n                                <span>Rs 46 / day</span>\n\n                                <p>Classic Advantage</p>\n\n                        </div>\n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==3}" (click)="toggleButton(3)">\n\n                                <h5>Rs.9900</h5>\n\n                                <span>Rs 55 / day</span>\n\n                                <p>Classic Premium</p>\n\n                \n\n                        </div>\n\n                    </div>\n\n                    <div class="paynow">\n\n                            <button class="pay" ion-button block>PAYNOW</button>\n\n                    </div>\n\n\n\n        </ion-card>\n\n      \n\n        \n\n      </ion-slide>\n\n\n\n\n\n      <ion-slide>\n\n        <ion-card>\n\n            <div *ngIf="!hide1" class="bg">\n\n            \n\n            <h5 class="membership-title">TUM Regular-1 Year</h5>\n\n                \n\n                <div class="classic-card1">\n\n                  <div class="classic-card2">\n\n                    <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                  </div>\n\n                  <div class="classic-card3">\n\n                    <p class="membership-content">Send unlimited messages & chat</p>\n\n                  </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Access 80 verified mobile numbers</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">veiw unlimited horoscopes</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Premium member tag for more response</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                            <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-view-icon" name="contacts"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Get 4 months FREE Profile Highlighter</s></p>\n\n                    </div>\n\n                </div>\n\n\n\n            </div>\n\n\n\n            <div *ngIf="hide2" class="bg">\n\n            \n\n                <h5 class="membership-title">TUM Advantage-1 Year</h5>\n\n\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Get 2 months FREE Profile Highlighter</p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n                    <div class="classic-card1">\n\n                      <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                      </div>\n\n                      <div class="classic-card3">\n\n                        <p class="membership-content">Send unlimited messages & chat</p>\n\n                      </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Access 55 verified mobile numbers</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">veiw unlimited horoscopes</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Premium member tag for more response</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                                <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n    \n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n    \n\n                </div>\n\n\n\n                <div *ngIf="hide3" class="bg">\n\n            \n\n                    <h5 class="membership-title">Classic Premium</h5>\n\n                        \n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Get 3 months FREE Profile Highlighter</p>\n\n                            </div>\n\n                        </div>\n\n\n\n                        <div class="classic-card1">\n\n                          <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                          </div>\n\n                          <div class="classic-card3">\n\n                            <p class="membership-content">Send unlimited messages & chat</p>\n\n                          </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Access 60 verified mobile numbers</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="eye"></ion-icon>\n\n        \n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Enhanced profile vizibility</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">veiw unlimited horoscopes</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Premium member tag for more response</p>\n\n                            </div>\n\n                        </div>\n\n                        \n\n                    \n\n        \n\n                    </div>\n\n\n\n                    <div class="tabs">\n\n\n\n                        <div class="tab-item1" [ngClass]="{\'active\': buttonActive==1}" (click)="toggleButton(1)">\n\n                            <h5>Rs.10900</h5>\n\n                            <span>Rs 29 / day</span>\n\n                            <p>TUM Regular-1 Year</p>\n\n                        </div> \n\n                        <div class="tab-item1" [ngClass]="{\'active\': buttonActive==2}" (click)="toggleButton(2)">\n\n                                <h5>Rs.12900</h5>\n\n                                <span>Rs 35 / day</span>\n\n                                <p>TUM Advantage-1 Year</p>\n\n                        </div>\n\n\n\n                    </div>\n\n                    <div class="paynow">\n\n                            <button class="pay" ion-button block>PAYNOW</button>\n\n                    </div>\n\n           \n\n        </ion-card>\n\n      \n\n        \n\n      </ion-slide>\n\n\n\n       <ion-slide>\n\n        <ion-card>\n\n            <div *ngIf="!hide1">\n\n            \n\n            <h5 class="membership-title">Assisted -3months</h5>\n\n                \n\n                <div class="classic-card1">\n\n                  <div class="classic-card2">\n\n                    <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                  </div>\n\n                  <div class="classic-card3">\n\n                    <p class="membership-content">Send unlimited messages & chat</p>\n\n                  </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Access 40 verified mobile numbers</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">veiw unlimited horoscopes</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content">Premium member tag for more response</p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                            <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                    </div>\n\n                </div>\n\n                <div class="classic-card1">\n\n                    <div class="classic-card2">\n\n                        <ion-icon class="membership-view-icon" name="contacts"></ion-icon>\n\n                    </div>\n\n                    <div class="classic-card3">\n\n                        <p class="membership-content"><s>Get 2 months FREE Profile Highlighter</s></p>\n\n                    </div>\n\n                </div>\n\n\n\n            </div>\n\n\n\n            <div *ngIf="hide2">\n\n            \n\n                <h5 class="membership-title">Assisted -6months</h5>\n\n\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Get 2 months FREE Profile Highlighter</p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n                    <div class="classic-card1">\n\n                      <div class="classic-card2">\n\n                        <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                      </div>\n\n                      <div class="classic-card3">\n\n                        <p class="membership-content">Send unlimited messages & chat</p>\n\n                      </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Access 55 verified mobile numbers</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">veiw unlimited horoscopes</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content">Premium member tag for more response</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="classic-card1">\n\n                        <div class="classic-card2">\n\n                                <ion-icon class="membership-view-icon" name="eye"></ion-icon>\n\n    \n\n                        </div>\n\n                        <div class="classic-card3">\n\n                            <p class="membership-content"><s>Enhanced profile vizibility</s></p>\n\n                        </div>\n\n                    </div>\n\n                    \n\n    \n\n                </div>\n\n\n\n                <div *ngIf="hide3">\n\n            \n\n                    <h5 class="membership-title">EliteMatrimony</h5>\n\n                        \n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="contacts"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Get 3 months FREE Profile Highlighter</p>\n\n                            </div>\n\n                        </div>\n\n\n\n                        <div class="classic-card1">\n\n                          <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n                          </div>\n\n                          <div class="classic-card3">\n\n                            <p class="membership-content">Send unlimited messages & chat</p>\n\n                          </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-icon-phone" name="phone-portrait"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Access 60 verified mobile numbers</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                            <ion-icon class="membership-chat-icon" name="eye"></ion-icon>\n\n        \n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Enhanced profile vizibility</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="planet"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">veiw unlimited horoscopes</p>\n\n                            </div>\n\n                        </div>\n\n                        <div class="classic-card1">\n\n                            <div class="classic-card2">\n\n                                <ion-icon class="membership-chat-icon" name="pricetag"></ion-icon>\n\n                            </div>\n\n                            <div class="classic-card3">\n\n                                <p class="membership-content">Premium member tag for more response</p>\n\n                            </div>\n\n                        </div>\n\n                        \n\n                    \n\n        \n\n                    </div>\n\n\n\n                    <div class="tabs">\n\n\n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==1}" (click)="toggleButton(1)">\n\n                            <h5>Rs.17000</h5>\n\n                            <span>Rs 188 / day</span>\n\n                            <p>Assisted -3months</p>\n\n                        </div> \n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==2}" (click)="toggleButton(2)">\n\n                                <h5>Rs.32000</h5>\n\n                                <span>Rs 177 / day</span>\n\n                                <p>Assisted -6months</p>\n\n                        </div>\n\n                        <div class="tab-item" [ngClass]="{\'active\': buttonActive==3}" (click)="toggleButton(3)">\n\n                                <h5>Rs.45000</h5>\n\n                                <span>Rs 239 / day</span>\n\n                                <p>Assisted -9months</p>\n\n                \n\n                        </div>\n\n                    </div>\n\n                    <div class="paynow">\n\n                            <button class="pay" ion-button block>PAYNOW</button>\n\n                    </div>\n\n           \n\n        </ion-card>\n\n      \n\n        \n\n      </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n     <!-- <div class="tabs">\n\n\n\n        <div class="tab-item" [ngClass]="{\'active\': buttonActive==1}" (click)="toggleButton(1)">\n\n            <h5>Rs.4500</h5>\n\n            <span>Rs 50 / day</span>\n\n            <p>Classic Package</p>\n\n        </div> \n\n        <div class="tab-item" [ngClass]="{\'active\': buttonActive==2}" (click)="toggleButton(2)">\n\n                <h5>Rs.5200</h5>\n\n                <span>Rs 57 / day</span>\n\n                <p>Classic Advantage</p>\n\n        </div>\n\n        <div class="tab-item" [ngClass]="{\'active\': buttonActive==3}" (click)="toggleButton(3)">\n\n                <h5>Rs.6500</h5>\n\n                <span>Rs 72 / day</span>\n\n                <p>Classic Premium</p>\n\n\n\n        </div>\n\n    </div>\n\n    <div class="paynow">\n\n            <button class="pay" ion-button block>PAYNOW</button>\n\n    </div> -->\n\n   \n\n</ion-content>  \n\n<ion-footer>\n\n        \n\n        <div class="footer">\n\n            <div class="footer-help">\n\n                <p>Need Help with Payments</p>\n\n            </div>\n\n            <div class="footer-phone">\n\n                <div class="phone-icon">\n\n                        <ion-icon class="icon-property" name="call"></ion-icon>\n\n                </div>\n\n                <div class="phone-num">\n\n                        <P>1234 567 890</P>\n\n                </div>\n\n            </div>\n\n            <div class="footer-chat">\n\n                <div class="phone-icon">\n\n                        <ion-icon  class="icon-property" name="chatbubbles"></ion-icon>\n\n\n\n                </div>\n\n                <div class="chat">\n\n                      <p>Chat now</p>      \n\n                </div>\n\n            </div>\n\n        </div>\n\n      \n\n</ion-footer>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\membership\membership.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], MembershipPage);
    return MembershipPage;
}());

//# sourceMappingURL=membership.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inbox_inbox__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profiledetails_profiledetails__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_first_first__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    NotificationPage.prototype.gotoinbox = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_inbox_inbox__["a" /* InboxPage */]);
        });
    };
    NotificationPage.prototype.gotohome = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
        });
    };
    NotificationPage.prototype.gotoprofiledetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */]);
        }), 1000;
    };
    // gotonotification(){
    //   setTimeout(()=>{
    //       this.nav.setRoot(NotificationPage) ;
    //  }),1000;
    // }
    // gotoprofiledetails(){
    //   setTimeout(()=>{
    //       this.nav.push(ProfiledetailsPage) ;
    //  }),1000;
    // }
    NotificationPage.prototype.gotosearch = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */]);
        }), 1000;
    };
    NotificationPage.prototype.gotofirst = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_first_first__["a" /* FirstPage */]);
        }), 1000;
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\notification\notification.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      \n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-segment [(ngModel)]="page" color="dark">\n\n            <ion-segment-button value="Home" (click)="gotohome()">\n\n                <ion-icon class="header-icon" name="home"></ion-icon>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Notifications">\n\n                <ion-icon class="header-icon" name="notifications-outline"></ion-icon>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Mail" (click)="gotoinbox()">\n\n                <ion-icon class="header-icon" name="mail"></ion-icon>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Search" (click)="gotosearch()">\n\n               <ion-icon class="header-icon" name="search"></ion-icon>\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content >\n\n    \n\n    <ion-card>\n\n        <div class="notification" (click)="gotoprofiledetails()">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/11.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" ios="ios-eye" md="md-eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>1m</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n    <ion-card>\n\n        <div class="notification" (click)="gotoprofiledetails()">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/12.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" name="eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>1w</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n    <ion-card>\n\n        <div class="notification" (click)="gotoprofiledetails()">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/13.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" name="eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>1hr</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n  \n\n    <ion-card>\n\n        <div class="notification" (click)="gotoprofiledetails()">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/11.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" ios="ios-eye" md="md-eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>1m</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n    <ion-card>\n\n        <div class="notification" (click)="gotoprofiledetails()">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/12.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" name="eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>1d</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n    <ion-card>\n\n        <div class="notification">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/13.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" name="eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>16d</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n  \n\n    <ion-card>\n\n        <div class="notification">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/11.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" ios="ios-eye" md="md-eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>1s</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n    <ion-card>\n\n        <div class="notification">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/12.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" name="eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>19m</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n    <ion-card>\n\n        <div class="notification">\n\n            <div class="notification-img">\n\n                <img class="viewer-img" src="assets/imgs/13.png">\n\n            </div>\n\n            <div class="notification-content">\n\n                <p class="viewed">watson viewed your <br>profile...</p>\n\n                <ion-icon class="eye-icon" name="eye"></ion-icon>\n\n            </div>\n\n            <div class="notification-profile">\n\n                <span>1yr</span>\n\n                <p class="view-profile">VIEW PROFILE</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-card>\n\n  \n\n  \n\n  </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\notification\notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, loadingCtrl, nav) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
        }, 3000);
    }
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-first',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\first\first.html"*/'<ion-header>\n\n    \n\n  </ion-header>\n\n    \n\n    <ion-content padding>\n\n      \n\n        <div class="w3-container w3-center w3-animate-zoom">\n\n            <img class="logo-img" src="assets/imgs/logo.png">\n\n        </div>\n\n       \n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\first\first.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_inbox_inbox__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profiledetails_profiledetails__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notification_notification__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, nav, alertCtrl) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
    }
    SearchPage.prototype.gotoinbox = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_inbox_inbox__["a" /* InboxPage */]);
        });
    };
    SearchPage.prototype.gotohome = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        }), 1000;
    };
    SearchPage.prototype.gotoprofiledetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */]);
        }), 1000;
    };
    SearchPage.prototype.gotonotification = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_notification_notification__["a" /* NotificationPage */]);
        }), 1000;
    };
    SearchPage.prototype.doPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Save search',
            message: "Enter Search Name",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\search\search.html"*/'<ion-header>\n\n\n\n        <ion-navbar>\n\n          \n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-segment [(ngModel)]="page" color="dark">\n\n                <ion-segment-button value="Home" (click)="gotohome()">\n\n                    <ion-icon class="header-icon" name="home"></ion-icon>\n\n                </ion-segment-button>\n\n                <ion-segment-button value="Notifications" (click)="gotonotification()">\n\n                    <ion-icon class="header-icon" name="notifications-outline"></ion-icon>\n\n                </ion-segment-button>\n\n                <ion-segment-button value="Mail" (click)="gotoinbox()">\n\n                    <ion-icon class="header-icon" name="mail"></ion-icon>\n\n                </ion-segment-button>\n\n                <ion-segment-button value="Search">\n\n                   <ion-icon class="header-icon" name="search"></ion-icon>\n\n                </ion-segment-button>\n\n            </ion-segment>\n\n        </ion-navbar>\n\n      \n\n      </ion-header>\n\n      \n\n      <ion-content >\n\n        \n\n            <ion-searchbar></ion-searchbar>\n\n            <ion-list>\n\n              <ion-item *ngFor="let item of items">\n\n                {{ item }}\n\n              </ion-item>\n\n            </ion-list>\n\n            \n\n\n\n            <ion-item>\n\n                <ion-label>Age</ion-label>\n\n                <ion-select [(ngModel)]="month">\n\n                <ion-option value="01">18</ion-option>\n\n                <ion-option value="02">19</ion-option>\n\n                <ion-option value="03">20</ion-option>\n\n                <ion-option value="04">21</ion-option>\n\n                <ion-option value="05">22</ion-option>\n\n                <ion-option value="06">23</ion-option>\n\n                <ion-option value="07">24</ion-option>\n\n                <ion-option value="08">25</ion-option>\n\n                <ion-option value="09">26</ion-option>\n\n                <ion-option value="10">27</ion-option>\n\n                <ion-option value="11">28</ion-option>\n\n                <ion-option value="12">29</ion-option>\n\n                </ion-select>\n\n\n\n                <ion-select [(ngModel)]="year">\n\n                        <ion-option value="01">18</ion-option>\n\n                        <ion-option value="02">19</ion-option>\n\n                        <ion-option value="03">20</ion-option>\n\n                        <ion-option value="04">21</ion-option>\n\n                        <ion-option value="05">22</ion-option>\n\n                        <ion-option value="06">23</ion-option>\n\n                        <ion-option value="07">24</ion-option>\n\n                        <ion-option value="08">25</ion-option>\n\n                        <ion-option value="09">26</ion-option>\n\n                        <ion-option value="10">27</ion-option>\n\n                        <ion-option value="11">28</ion-option>\n\n                        <ion-option value="12">29</ion-option>\n\n                </ion-select>\n\n\n\n            </ion-item>\n\n\n\n\n\n\n\n            <ion-item>\n\n                    <ion-label>Height</ion-label>\n\n\n\n                    <ion-select [(ngModel)]="start">\n\n\n\n                    <ion-option value="01">4 ft 6 in</ion-option>\n\n                    <ion-option value="02">4 ft 7 in</ion-option>\n\n                    <ion-option value="03">4 ft 8 in</ion-option>\n\n                    <ion-option value="04">4 ft 9 in</ion-option>\n\n                    <ion-option value="05">4 ft 0 in</ion-option>\n\n                    <ion-option value="06">5 ft 1 in</ion-option>\n\n                    <ion-option value="07">5 ft 2 in</ion-option>\n\n                    <ion-option value="08">5 ft 3 in</ion-option>\n\n                    <ion-option value="09">5 ft 4 in</ion-option>\n\n                    <ion-option value="10">5 ft 5 in</ion-option>\n\n                    <ion-option value="11">5 ft 6 in</ion-option>\n\n                    <ion-option value="12">5 ft 7 in</ion-option>\n\n                    <ion-option value="13">5 ft 8 in</ion-option>\n\n                    <ion-option value="14">5 ft 9 in</ion-option>\n\n                    <ion-option value="15">6 ft 0 in</ion-option>\n\n                    <ion-option value="16">6 ft 1 in</ion-option>\n\n                    <ion-option value="17">6 ft 2 in</ion-option>\n\n                    <ion-option value="18">6 ft 3 in</ion-option>\n\n                    <ion-option value="19">6 ft 4 in</ion-option>\n\n                    <ion-option value="20">6 ft 5 in</ion-option>\n\n                    <ion-option value="21">6 ft 6 in</ion-option>\n\n                    <ion-option value="22">6 ft 7 in</ion-option>\n\n                    <ion-option value="23">6 ft 8 in</ion-option>\n\n                    <ion-option value="24">6 ft 9 in</ion-option>\n\n\n\n                    </ion-select>\n\n    \n\n                    <ion-select [(ngModel)]="end">\n\n\n\n                    <ion-option value="01">4 ft 6 in</ion-option>\n\n                    <ion-option value="02">4 ft 7 in</ion-option>\n\n                    <ion-option value="03">4 ft 8 in</ion-option>\n\n                    <ion-option value="04">4 ft 9 in</ion-option>\n\n                    <ion-option value="05">4 ft 0 in</ion-option>\n\n                    <ion-option value="06">5 ft 1 in</ion-option>\n\n                    <ion-option value="07">5 ft 2 in</ion-option>\n\n                    <ion-option value="08">5 ft 3 in</ion-option>\n\n                    <ion-option value="09">5 ft 4 in</ion-option>\n\n                    <ion-option value="10">5 ft 5 in</ion-option>\n\n                    <ion-option value="11">5 ft 6 in</ion-option>\n\n                    <ion-option value="12">5 ft 7 in</ion-option>\n\n                    <ion-option value="13">5 ft 8 in</ion-option>\n\n                    <ion-option value="14">5 ft 9 in</ion-option>\n\n                    <ion-option value="15">6 ft 0 in</ion-option>\n\n                    <ion-option value="16">6 ft 1 in</ion-option>\n\n                    <ion-option value="17">6 ft 2 in</ion-option>\n\n                    <ion-option value="18">6 ft 3 in</ion-option>\n\n                    <ion-option value="19">6 ft 4 in</ion-option>\n\n                    <ion-option value="20">6 ft 5 in</ion-option>\n\n                    <ion-option value="21">6 ft 6 in</ion-option>\n\n                    <ion-option value="22">6 ft 7 in</ion-option>\n\n                    <ion-option value="23">6 ft 8 in</ion-option>\n\n                    <ion-option value="24">6 ft 9 in</ion-option>\n\n                    \n\n                    </ion-select>\n\n                    \n\n                </ion-item>\n\n\n\n\n\n                <ion-item>\n\n                    <ion-label>Marital  Status</ion-label>\n\n\n\n                    <ion-select [(ngModel)]="Marital" >\n\n\n\n                            <ion-option>Any</ion-option>\n\n                            <ion-option>Never Married</ion-option>\n\n                            <ion-option>Windowed</ion-option>\n\n                            <ion-option>Divorced</ion-option>\n\n                            <ion-option>Awaiting divorce</ion-option>\n\n                            \n\n                    </ion-select>\n\n                </ion-item>\n\n\n\n\n\n                <ion-item>\n\n                        <ion-label>Religin</ion-label>\n\n    \n\n                        <ion-select [(ngModel)]="religion" >\n\n    \n\n                                <ion-option>Hindu</ion-option>\n\n                                <ion-option>Muslim-Shia</ion-option>\n\n                                <ion-option>Muslim-others</ion-option>\n\n                                <ion-option>Cristian</ion-option>\n\n                                <ion-option>Sikh</ion-option>\n\n                                <ion-option>Jain-Digamber</ion-option>\n\n                                <ion-option>Jain-Shwetambar</ion-option>\n\n                                <ion-option>Jain-Others</ion-option>\n\n                                <ion-option>Parsi</ion-option>\n\n                                <ion-option>Buddist</ion-option>\n\n                                <ion-option>Jewish</ion-option>\n\n                                <ion-option>Inter-Religion</ion-option>\n\n                                \n\n                        </ion-select>\n\n                </ion-item>\n\n      \n\n                <ion-item>\n\n                        <ion-label>Mother Tongue</ion-label>\n\n                        <ion-select [(ngModel)]="lang" >\n\n                          <ion-option>Angika</ion-option>\n\n                          <ion-option>Arunachali</ion-option>\n\n                          <ion-option>Assamise</ion-option>\n\n                          <ion-option>Awadhi</ion-option>\n\n                          <ion-option>Bengali</ion-option>\n\n                          <ion-option>Bhojpuri</ion-option>\n\n                          <ion-option>Brij</ion-option>\n\n                          <ion-option>Bihari</ion-option>\n\n                          <ion-option>Badaga</ion-option>\n\n                          <ion-option>Chatisgarhi</ion-option>\n\n                          <ion-option>Dogri</ion-option>\n\n                          <ion-option>English</ion-option>\n\n                          <ion-option>Frensh</ion-option>\n\n                          <ion-option>Garhwali</ion-option>\n\n                          <ion-option>Garo</ion-option>\n\n                          <ion-option>Gujarati</ion-option>\n\n                          <ion-option>Haryanvi</ion-option>\n\n                          <ion-option>Himachali/pahari</ion-option>\n\n                          <ion-option>Hindi</ion-option>\n\n                          <ion-option>Kanauji</ion-option>\n\n                          <ion-option>Kannada</ion-option>\n\n                          <ion-option>Kashmiri</ion-option>\n\n                          <ion-option>Khandesi</ion-option>\n\n                          <ion-option>Khasi</ion-option>\n\n                          <ion-option>Konkani</ion-option>\n\n                          <ion-option>Koshali</ion-option>\n\n                          <ion-option>Kumaoni</ion-option>\n\n                          <ion-option>Kutchi</ion-option>\n\n                          <ion-option>Lepcha</ion-option>\n\n                          <ion-option>Magahi</ion-option>\n\n                          <ion-option>Maithili</ion-option>\n\n                          <ion-option>Malayalam</ion-option>\n\n                          <ion-option>Manipuri</ion-option>\n\n                          <ion-option>Marathi</ion-option>\n\n                          <ion-option>Marwari</ion-option>\n\n                          <ion-option>Miji</ion-option>\n\n                          <ion-option>Mizo</ion-option>\n\n                          <ion-option>Monpa</ion-option>\n\n                          <ion-option>Nicobarese</ion-option>\n\n                          <ion-option>Nepali</ion-option>\n\n                          <ion-option>Oriya</ion-option>\n\n                          <ion-option>Rajasthani</ion-option>\n\n                          <ion-option>Sanskrit</ion-option>\n\n                          <ion-option>Santhali</ion-option>\n\n                          <ion-option>Sandhi</ion-option>\n\n                          <ion-option>Sourashtra</ion-option>\n\n                          <ion-option>Tamil</ion-option>\n\n                          <ion-option>Telungu</ion-option>\n\n                          <ion-option>Tripuri</ion-option>\n\n                          <ion-option>Tulu</ion-option>\n\n                          <ion-option>Urdu</ion-option>\n\n                        \n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n\n\n                    <ion-item>\n\n                        <ion-label>Country</ion-label>\n\n                        <ion-select [(ngModel)]="code">\n\n                            <ion-option >Algeria (+213)</ion-option>\n\n                            <ion-option>Andorra (+376)</ion-option>\n\n                            <ion-option>Angola (+244)</ion-option>\n\n                            <ion-option>Anguilla (+1264)</ion-option>\n\n                            <ion-option>Antigua &amp; Barbuda (+1268)</ion-option>\n\n                            <ion-option>Argentina (+54)</ion-option>\n\n                            <ion-option>Armenia (+374)</ion-option>\n\n                            <ion-option>Aruba (+297)</ion-option>\n\n                            <ion-option>Australia (+61)</ion-option>\n\n                            <ion-option>Austria (+43)</ion-option>\n\n                            <ion-option>Azerbaijan (+994)</ion-option>\n\n                            <ion-option>Bahamas (+1242)</ion-option>\n\n                            <ion-option>Bahrain (+973)</ion-option>\n\n                            <ion-option>Bangladesh (+880)</ion-option>\n\n                            <ion-option>Barbados (+1246)</ion-option>\n\n                            <ion-option>Belarus (+375)</ion-option>\n\n                            <ion-option>Belgium (+32)</ion-option>\n\n                            <ion-option>Belize (+501)</ion-option>\n\n                            <ion-option>Benin (+229)</ion-option>\n\n                            <ion-option>Bermuda (+1441)</ion-option>\n\n                            <ion-option>Bhutan (+975)</ion-option>\n\n                            <ion-option>Bolivia (+591)</ion-option>\n\n                            <ion-option>Bosnia Herzegovina (+387)</ion-option>\n\n                            <ion-option>Botswana (+267)</ion-option>\n\n                            <ion-option>Brazil (+55)</ion-option>\n\n                            <ion-option>Brunei (+673)</ion-option>\n\n                            <ion-option>Bulgaria (+359)</ion-option>\n\n                            <ion-option>Burkina Faso (+226)</ion-option>\n\n                            <ion-option>Burundi (+257)</ion-option>\n\n                            <ion-option>Cambodia (+855)</ion-option>\n\n                            <ion-option>Cameroon (+237)</ion-option>\n\n                            <ion-option>Canada (+1)</ion-option>\n\n                            <ion-option>Cape Verde Islands (+238)</ion-option>\n\n                            <ion-option>Cayman Islands (+1345)</ion-option>\n\n                            <ion-option>Central African Republic (+236)</ion-option>\n\n                            <ion-option>Chile (+56)</ion-option>\n\n                            <ion-option>China (+86)</ion-option>\n\n                            <ion-option>Colombia (+57)</ion-option>\n\n                            <ion-option>Comoros (+269)</ion-option>\n\n                            <ion-option>Congo (+242)</ion-option>\n\n                            <ion-option>Cook Islands (+682)</ion-option>\n\n                            <ion-option>Costa Rica (+506)</ion-option>\n\n                            <ion-option>Croatia (+385)</ion-option>\n\n                            <ion-option>Cuba (+53)</ion-option>\n\n                            <ion-option>Cyprus North (+90392)</ion-option>\n\n                            <ion-option>Cyprus South (+357)</ion-option>\n\n                            <ion-option>Czech Republic (+42)</ion-option>\n\n                            <ion-option>Denmark (+45)</ion-option>\n\n                            <ion-option>Djibouti (+253)</ion-option>\n\n                            <ion-option>Dominica (+1809)</ion-option>\n\n                            <ion-option>Dominican Republic (+1809)</ion-option>\n\n                            <ion-option>Ecuador (+593)</ion-option>\n\n                            <ion-option>Egypt (+20)</ion-option>\n\n                            <ion-option>El Salvador (+503)</ion-option>\n\n                            <ion-option>Equatorial Guinea (+240)</ion-option>\n\n                            <ion-option>Eritrea (+291)</ion-option>\n\n                            <ion-option>Estonia (+372)</ion-option>\n\n                            <ion-option>Ethiopia (+251)</ion-option>\n\n                            <ion-option>Falkland Islands (+500)</ion-option>\n\n                            <ion-option>Faroe Islands (+298)</ion-option>\n\n                            <ion-option>Fiji (+679)</ion-option>\n\n                            <ion-option>Finland (+358)</ion-option>\n\n                            <ion-option>France (+33)</ion-option>\n\n                            <ion-option>French Guiana (+594)</ion-option>\n\n                            <ion-option>French Polynesia (+689)</ion-option>\n\n                            <ion-option >Gabon (+241)</ion-option>\n\n                            <ion-option >Gambia (+220)</ion-option>\n\n                            <ion-option >Georgia (+7880)</ion-option>\n\n                            <ion-option >Germany (+49)</ion-option>\n\n                            <ion-option >Ghana (+233)</ion-option>\n\n                            <ion-option >Gibraltar (+350)</ion-option>\n\n                            <ion-option >Greece (+30)</ion-option>\n\n                            <ion-option >Greenland (+299)</ion-option>\n\n                            <ion-option >Grenada (+1473)</ion-option>\n\n                            <ion-option >Guadeloupe (+590)</ion-option>\n\n                            <ion-option >Guam (+671)</ion-option>\n\n                            <ion-option >Guatemala (+502)</ion-option>\n\n                            <ion-option >Guinea (+224)</ion-option>\n\n                            <ion-option >Guinea - Bissau (+245)</ion-option>\n\n                            <ion-option >Guyana (+592)</ion-option>\n\n                            <ion-option >Haiti (+509)</ion-option>\n\n                            <ion-option >Honduras (+504)</ion-option>\n\n                            <ion-option >Hong Kong (+852)</ion-option>\n\n                            <ion-option >Hungary (+36)</ion-option>\n\n                            <ion-option >Iceland (+354)</ion-option>\n\n                            <ion-option >India (+91)</ion-option>\n\n                            <ion-option >Indonesia (+62)</ion-option>\n\n                            <ion-option >Iran (+98)</ion-option>\n\n                            <ion-option >Iraq (+964)</ion-option>\n\n                            <ion-option >Ireland (+353)</ion-option>\n\n                            <ion-option >Israel (+972)</ion-option>\n\n                            <ion-option >Italy (+39)</ion-option>\n\n                            <ion-option >Jamaica (+1876)</ion-option>\n\n                            <ion-option >Japan (+81)</ion-option>\n\n                            <ion-option >Jordan (+962)</ion-option>\n\n                            <ion-option >Kazakhstan (+7)</ion-option>\n\n                            <ion-option >Kenya (+254)</ion-option>\n\n                            <ion-option >Kiribati (+686)</ion-option>\n\n                            <ion-option >Korea North (+850)</ion-option>\n\n                            <ion-option >Korea South (+82)</ion-option>\n\n                            <ion-option >Kuwait (+965)</ion-option>\n\n                            <ion-option >Kyrgyzstan (+996)</ion-option>\n\n                            <ion-option >Laos (+856)</ion-option>\n\n                            <ion-option >Latvia (+371)</ion-option>\n\n                            <ion-option >Lebanon (+961)</ion-option>\n\n                            <ion-option >Lesotho (+266)</ion-option>\n\n                            <ion-option >Liberia (+231)</ion-option>\n\n                            <ion-option >Libya (+218)</ion-option>\n\n                            <ion-option >Liechtenstein (+417)</ion-option>\n\n                            <ion-option >Lithuania (+370)</ion-option>\n\n                            <ion-option >Luxembourg (+352)</ion-option>\n\n                            <ion-option >Macao (+853)</ion-option>\n\n                            <ion-option >Macedonia (+389)</ion-option>\n\n                            <ion-option >Madagascar (+261)</ion-option>\n\n                            <ion-option >Malawi (+265)</ion-option>\n\n                            <ion-option >Malaysia (+60)</ion-option>\n\n                            <ion-option >Maldives (+960)</ion-option>\n\n                            <ion-option >Mali (+223)</ion-option>\n\n                            <ion-option >Malta (+356)</ion-option>\n\n                            <ion-option >Marshall Islands (+692)</ion-option>\n\n                            <ion-option >Martinique (+596)</ion-option>\n\n                            <ion-option >Mauritania (+222)</ion-option>\n\n                            <ion-option >Mayotte (+269)</ion-option>\n\n                            <ion-option >Mexico (+52)</ion-option>\n\n                            <ion-option >Micronesia (+691)</ion-option>\n\n                            <ion-option >Moldova (+373)</ion-option>\n\n                            <ion-option >Monaco (+377)</ion-option>\n\n                            <ion-option >Mongolia (+976)</ion-option>\n\n                            <ion-option >Montserrat (+1664)</ion-option>\n\n                            <ion-option >Morocco (+212)</ion-option>\n\n                            <ion-option >Mozambique (+258)</ion-option>\n\n                            <ion-option >Myanmar (+95)</ion-option>\n\n                            <ion-option >Namibia (+264)</ion-option>\n\n                            <ion-option >Nauru (+674)</ion-option>\n\n                            <ion-option >Nepal (+977)</ion-option>\n\n                            <ion-option >Netherlands (+31)</ion-option>\n\n                            <ion-option >New Caledonia (+687)</ion-option>\n\n                            <ion-option >New Zealand (+64)</ion-option>\n\n                            <ion-option >Nicaragua (+505)</ion-option>\n\n                            <ion-option >Niger (+227)</ion-option>\n\n                            <ion-option >Nigeria (+234)</ion-option>\n\n                            <ion-option >Niue (+683)</ion-option>\n\n                            <ion-option >Norfolk Islands (+672)</ion-option>\n\n                            <ion-option >Northern Marianas (+670)</ion-option>\n\n                            <ion-option >Norway (+47)</ion-option>\n\n                            <ion-option >Oman (+968)</ion-option>\n\n                            <ion-option >Palau (+680)</ion-option>\n\n                            <ion-option >Panama (+507)</ion-option>\n\n                            <ion-option >Papua New Guinea (+675)</ion-option>\n\n                            <ion-option >Paraguay (+595)</ion-option>\n\n                            <ion-option >Peru (+51)</ion-option>\n\n                            <ion-option >Philippines (+63)</ion-option>\n\n                            <ion-option >Poland (+48)</ion-option>\n\n                            <ion-option >Portugal (+351)</ion-option>\n\n                            <ion-option >Puerto Rico (+1787)</ion-option>\n\n                            <ion-option >Qatar (+974)</ion-option>\n\n                            <ion-option >Reunion (+262)</ion-option>\n\n                            <ion-option >Romania (+40)</ion-option>\n\n                            <ion-option >Russia (+7)</ion-option>\n\n                            <ion-option >Rwanda (+250)</ion-option>\n\n                            <ion-option >San Marino (+378)</ion-option>\n\n                            <ion-option >Sao Tome &amp; Principe (+239)</ion-option>\n\n                            <ion-option >Saudi Arabia (+966)</ion-option>\n\n                            <ion-option >Senegal (+221)</ion-option>\n\n                            <ion-option >Serbia (+381)</ion-option>\n\n                            <ion-option >Seychelles (+248)</ion-option>\n\n                            <ion-option >Sierra Leone (+232)</ion-option>\n\n                            <ion-option >Singapore (+65)</ion-option>\n\n                            <ion-option >Slovak Republic (+421)</ion-option>\n\n                            <ion-option >Slovenia (+386)</ion-option>\n\n                            <ion-option >Solomon Islands (+677)</ion-option>\n\n                            <ion-option >Somalia (+252)</ion-option>\n\n                            <ion-option >South Africa (+27)</ion-option>\n\n                            <ion-option >Spain (+34)</ion-option>\n\n                            <ion-option >Sri Lanka (+94)</ion-option>\n\n                            <ion-option >St. Helena (+290)</ion-option>\n\n                            <ion-option >St. Kitts (+1869)</ion-option>\n\n                            <ion-option >St. Lucia (+1758)</ion-option>\n\n                            <ion-option >Sudan (+249)</ion-option>\n\n                            <ion-option >Suriname (+597)</ion-option>\n\n                            <ion-option >Swaziland (+268)</ion-option>\n\n                            <ion-option >Sweden (+46)</ion-option>\n\n                            <ion-option >Switzerland (+41)</ion-option>\n\n                            <ion-option >Syria (+963)</ion-option>\n\n                            <ion-option >Taiwan (+886)</ion-option>\n\n                            <ion-option >Tajikstan (+7)</ion-option>\n\n                            <ion-option >Thailand (+66)</ion-option>\n\n                            <ion-option >Togo (+228)</ion-option>\n\n                            <ion-option >Tonga (+676)</ion-option>\n\n                            <ion-option >Trinidad &amp; Tobago (+1868)</ion-option>\n\n                            <ion-option >Tunisia (+216)</ion-option>\n\n                            <ion-option >Turkey (+90)</ion-option>\n\n                            <ion-option >Turkmenistan (+7)</ion-option>\n\n                            <ion-option >Turkmenistan (+993)</ion-option>\n\n                            <ion-option >Turks &amp; Caicos Islands (+1649)</ion-option>\n\n                            <ion-option >Tuvalu (+688)</ion-option>\n\n                            <ion-option >Uganda (+256)</ion-option>\n\n                            <ion-option >UK (+44)</ion-option>\n\n                            <ion-option >Ukraine (+380)</ion-option>\n\n                            <ion-option >United Arab Emirates (+971)</ion-option>\n\n                            <ion-option >Uruguay (+598)</ion-option>\n\n                            <ion-option >USA (+1)</ion-option>\n\n                            <ion-option >Uzbekistan (+7)</ion-option>\n\n                            <ion-option >Vanuatu (+678)</ion-option>\n\n                            <ion-option >Vatican City (+379)</ion-option>\n\n                            <ion-option >Venezuela (+58)</ion-option>\n\n                            <ion-option >Vietnam (+84)</ion-option>\n\n                            <ion-option >Virgin Islands - British (+1284)</ion-option>\n\n                            <ion-option >Virgin Islands - US (+1340)</ion-option>\n\n                            <ion-option >Wallis &amp; Futuna (+681)</ion-option>\n\n                            <ion-option >Yemen (North)(+969)</ion-option>\n\n                            <ion-option >Yemen (South)(+967)</ion-option>\n\n                            <ion-option >Zambia (+260)</ion-option>\n\n                            <ion-option >Zimbabwe (+263)</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n                    \n\n\n\n                    <ion-item>\n\n                        <ion-label>Caste</ion-label>\n\n    \n\n                        <ion-select [(ngModel)]="religion" >\n\n    \n\n                                <ion-option>Any</ion-option>\n\n                                <ion-option>Never Married</ion-option>\n\n                                <ion-option>Windowed</ion-option>\n\n                                <ion-option>Divorced</ion-option>\n\n                                <ion-option>Awaiting divorce</ion-option>\n\n                                \n\n                        </ion-select>\n\n                </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                <div class="w3-container">\n\n            \n\n                    <div id="id01" class="w3-modal">\n\n                      <div class="w3-modal-content w3-animate-top w3-card-4">\n\n                        <header class="w3-container w3-teal"> \n\n                          <span onclick="document.getElementById(\'id01\').style.display=\'none\'" class="w3-button w3-display-topright">&times;</span>\n\n                        </header>\n\n                        <div class="w3-container">\n\n                           <div class="popup-contact">\n\n                            <h5>My Saved Search</h5>\n\n                            <p> No Saved Searches Found</p>\n\n                           </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    </div>\n\n\n\n      </ion-content>\n\n\n\n      <ion-footer>\n\n        <div class="search">\n\n            <div class="save-search" (click)="doPrompt()">\n\n                <img src="assets/imgs/file.png" style="height: 24px;">\n\n                <p>Save Search</p>\n\n            </div>\n\n            <div class="my-save" onclick="document.getElementById(\'id01\').style.display=\'block\'">\n\n                <img src="assets/imgs/save.png" style="height: 24px;">\n\n                <p>My saved search</p>\n\n            </div>\n\n            <div class="search-now" (click)="gotohome()">\n\n                    <ion-icon ios="ios-search" md="md-search"></ion-icon> Search Now\n\n            </div>\n\n        </div>\n\n      </ion-footer>\n\n      '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 180:
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
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/filtersearch/filtersearch.module": [
		771,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_membership_membership__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_editprofileown_editprofileown__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_basicdetails_basicdetails__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_religious_religious__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_professional_professional__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_location_location__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_familydetails_familydetails__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_aboutmyfamily_aboutmyfamily__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_partnerbasicdetails_partnerbasicdetails__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_partnerreligious_partnerreligious__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_professionalpreferance_professionalpreferance__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_locationpreference_locationpreference__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_lookingfor_lookingfor__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_lookingfor_lookingfor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__pages_lookingfor_lookingfor__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, loadingCtrl, alertCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.http = http;
        this.user = {};
        this.LN = {};
        this.FD = {};
        this.RI = {};
        this.PI = {};
        this.P_BD = {};
        this.P_RI = {};
        this.P_LN = {};
        this.P_Desc = {};
    }
    EditPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        this.http.setCookie('http://68.66.207.110:8020/getMyProfile', cookie);
        var DDlist = 'http://68.66.207.110:8020/getMyProfile';
        console.log(DDlist);
        this.http.get(DDlist, {}, {})
            .then(function (data) {
            var result = JSON.parse(data.data);
            console.log(result);
            _this.user = result.user;
            _this.FD = result.user.Family_Details;
            _this.LN = result.user.Location;
            _this.RI = result.user.Religious_Information;
            _this.PI = result.user.Professional_Information;
            _this.P_BD = result.user.PARTNER_PREFERENCE.Basic_Details;
            _this.P_RI = result.user.PARTNER_PREFERENCE.Religious_Information;
            _this.P_LN = result.user.PARTNER_PREFERENCE.Location;
        });
    };
    EditPage.prototype.gotomember = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_membership_membership__["a" /* MembershipPage */]);
        }), 1000;
    };
    EditPage.prototype.gotoown = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_editprofileown_editprofileown__["a" /* EditprofileownPage */]);
        }), 1000;
    };
    EditPage.prototype.gotobasicdetail = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_basicdetails_basicdetails__["a" /* BasicdetailsPage */]);
        }), 1000;
    };
    EditPage.prototype.gotoreligious = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_religious_religious__["a" /* ReligiousPage */]);
        }), 1000;
    };
    EditPage.prototype.gotoprofessional = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_professional_professional__["a" /* ProfessionalPage */]);
        }), 1000;
    };
    EditPage.prototype.gotolocation = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_location_location__["a" /* LocationPage */]);
        }), 1000;
    };
    EditPage.prototype.gotofamilydetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_familydetails_familydetails__["a" /* FamilydetailsPage */]);
        }), 1000;
    };
    EditPage.prototype.gotoaboutmyfamily = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_aboutmyfamily_aboutmyfamily__["a" /* AboutmyfamilyPage */]);
        }), 1000;
    };
    EditPage.prototype.gotopartnerbasicdetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_partnerbasicdetails_partnerbasicdetails__["a" /* PartnerbasicdetailsPage */]);
        }), 1000;
    };
    EditPage.prototype.gotopartnerreligious = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_partnerreligious_partnerreligious__["a" /* partnerreligiousPage */]);
        }), 1000;
    };
    EditPage.prototype.gotoprofessionalpreferance = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_professionalpreferance_professionalpreferance__["a" /* ProfessionalpreferancePage */]);
        }), 1000;
    };
    EditPage.prototype.gotolocationpreference = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_locationpreference_locationpreference__["a" /* LocationpreferencePage */]);
        }), 1000;
    };
    EditPage.prototype.gotolookingfor = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_lookingfor_lookingfor__["LookingforPage"]);
        }), 1000;
    };
    EditPage.prototype.logout = function () {
        var _this = this;
        console.log(this.user);
        var data1 = this.user;
        console.log(data1);
        var string = this.http.getCookieString('http://68.66.207.110:8020/getMyProfile');
        console.log(string);
        this.http.setCookie('http://68.66.207.110:8020/getMyProfile', string);
        localStorage.removeItem('Usercookie');
        var loading = this.loadingCtrl.create({
            content: 'Logout...'
        });
        loading.present();
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            loading.dismiss();
        }, 1000);
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\edit\edit.html"*/'<ion-header>\n\n\n\n        <ion-navbar>\n\n    \n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title class="inbox-title">EDIT PROFILE</ion-title>\n\n        </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n    \n\n        <ion-card>\n\n            <div class="card">\n\n                <img src="assets/imgs/profile.jpg">\n\n                \n\n            </div>\n\n    \n\n            <!-- <div class="tabs">\n\n    \n\n                <a class="tab-item" (click)="toggleButton(1)"><ion-icon name="star-outline"></ion-icon>  Shortlist </a>\n\n        \n\n                <a class="tab-item" onclick="document.getElementById(\'id01\').style.display=\'block\'"> <ion-icon ios="ios-call" md="md-call"></ion-icon> Call Now </a>\n\n        \n\n                <a class="tab-item" onclick="document.getElementById(\'id02\').style.display=\'block\'">   <ion-icon name="chatbubbles"></ion-icon> Chat Now</a>\n\n        \n\n            </div> -->\n\n        \n\n            <ion-card-content>\n\n    \n\n                <h5 class="personal-details">Personal Details</h5>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                      <ion-col col-9>  \n\n                           <ion-card-title class="detail-header" (click)="gotoown()">\n\n                               <ion-icon class="edit-icon" ios="ios-create" md="md-create"></ion-icon> In My Own Words\n\n                          </ion-card-title>\n\n                      </ion-col>\n\n                      <ion-col col-3>\n\n                            <button class="editbutton" ion-button (click)="gotoown()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                      </ion-col>\n\n                    </ion-row>\n\n              </ion-grid>\n\n                <p class="detail-content">\n\n                    {{user.About_Me}}                </p>\n\n    \n\n            </ion-card-content>\n\n    \n\n            <ion-card-content>\n\n    \n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-9>  \n\n                                    <ion-card-title class="detail-header" (click)="gotobasicdetail()">\n\n                                            <ion-icon class="edit-icon" name="document"></ion-icon> Basic Details\n\n                                    </ion-card-title>\n\n                            </ion-col>\n\n                            <ion-col col-3>\n\n                                  <button class="editbutton" ion-button (click)="gotobasicdetail()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"> </ion-icon> Edit</button>\n\n                            </ion-col>\n\n                          </ion-row>\n\n                    </ion-grid>\n\n    \n\n                    <ion-row><ion-col col-5>Name</ion-col><ion-col col-7>: {{user.Name}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Gender</ion-col><ion-col col-7>: {{user.Gender}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Age</ion-col><ion-col col-7>: {{user.DOB}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Height</ion-col><ion-col col-7>: {{user.Height}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Weight</ion-col><ion-col col-7>: {{user.Weight}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Maritial Status</ion-col><ion-col col-7>: {{user.Marrial_Status}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Maritial Status</ion-col><ion-col col-7>: {{user.Marrial_Status}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Mother Tongue</ion-col><ion-col col-7>: {{user.Language}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Physical Status</ion-col><ion-col col-7>: {{user.Physical_Status}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Body Type</ion-col><ion-col col-7>: {{user.Body_Type}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Profile Created by</ion-col><ion-col col-7>: {{user.Profile_Created_For}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Eating Habits</ion-col><ion-col col-7>: {{user.Eating_Habits}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Drinking Habits</ion-col><ion-col col-7>: {{user.Drinking_Habits}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Smoking Habits</ion-col><ion-col col-7>: {{user.Smoking_Habits}}</ion-col></ion-row>\n\n            </ion-card-content>\n\n    \n\n    \n\n    \n\n            <!-- <ion-card-content>\n\n    \n\n                    <ion-card-title class="detail-header">\n\n                            <ion-icon class="edit-icon" ios="ios-person" md="md-person"></ion-icon> Basic Details\n\n                    </ion-card-title>\n\n                    \n\n                    <ion-row><ion-col>Contact Number</ion-col><ion-col>: <span class="blur">9878654564</span> |  <ion-icon ios="ios-lock" md="md-lock"></ion-icon></ion-col></ion-row>\n\n                    <ion-row><ion-col>Chat Status</ion-col><ion-col>: Offline </ion-col></ion-row>\n\n                    <ion-row><ion-col>Send Mail</ion-col><ion-col>: Locked | <ion-icon ios="ios-lock" md="md-lock"></ion-icon></ion-col></ion-row>\n\n                   \n\n                    <ion-grid class="upgrade">\n\n                            <ion-row><ion-col class="lock"><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></ion-col><ion-col class="unlock">To unlock the contact Details</ion-col><ion-col><button class="upgrade-now" (click)="tomember()" ion-button color="secondary">Upgrade now</button></ion-col></ion-row>    \n\n                    </ion-grid>\n\n            </ion-card-content>\n\n         -->\n\n    \n\n            <ion-card-content>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-9>\n\n                                    <ion-card-title class="detail-header" (click)="gotoreligious()">\n\n                                            <ion-icon class="edit-icon" name="document"></ion-icon> Religious Information\n\n                                    </ion-card-title>\n\n                            </ion-col>\n\n                            <ion-col col-3>\n\n                                  <button class="editbutton" ion-button (click)="gotoreligious()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                            </ion-col>\n\n                          </ion-row>\n\n                    </ion-grid>\n\n                    \n\n                    <ion-row><ion-col col-5>Religion</ion-col><ion-col col-7>: {{RI.Religion}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Caste</ion-col><ion-col col-7>: {{RI.Caste}}</ion-col></ion-row>\n\n                    <!-- <ion-row><ion-col>Sub Caste</ion-col><ion-col >: {{RI.Highest_Educational_Qualification}}</ion-col></ion-row> -->\n\n                    <ion-row><ion-col col-5>Gothram</ion-col><ion-col col-7>:  {{RI.Gothram}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Star</ion-col><ion-col col-7>: {{RI.Star}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Raasi</ion-col><ion-col col-7>: {{RI.Raasi}}</ion-col></ion-row>\n\n            </ion-card-content>\n\n    \n\n    \n\n            <ion-card-content>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-9>\n\n                                <ion-card-title class="detail-header"  (click)="gotoprofessional()">\n\n                                  <ion-icon class="edit-icon" name="document"></ion-icon> Professional Information\n\n                            </ion-card-title>\n\n                           </ion-col>\n\n                            <ion-col col-3>\n\n                            <button class="editbutton" ion-button (click)="gotoprofessional()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                    \n\n                    <ion-row><ion-col col-5>Educational Category</ion-col><ion-col col-7>:  {{PI.Highest_Educational_Qualification}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Educational in Detail</ion-col><ion-col col-7>:  {{PI.Educational_in_Detail}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Company Name</ion-col><ion-col col-7>:  {{PI.Company_Name}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Designation</ion-col><ion-col col-7> :  {{PI.Designation}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Annual Income </ion-col><ion-col col-7>:  {{PI.Salary_Per_Annum}}</ion-col></ion-row>\n\n            </ion-card-content>\n\n    \n\n    \n\n            <ion-card-content>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-9>\n\n                                    <ion-card-title class="detail-header" (click)="gotolocation()">\n\n                                            <ion-icon class="edit-icon" ios="ios-school" md="md-school"></ion-icon>Location\n\n                                            \n\n                                    </ion-card-title>\n\n                            </ion-col>\n\n                            <ion-col col-3>\n\n                                  <button class="editbutton" ion-button (click)="gotolocation()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                            </ion-col>\n\n                          </ion-row>\n\n                    </ion-grid>\n\n                    \n\n                    <ion-row><ion-col col-5>Street</ion-col><ion-col col-7>: {{LN.Street}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>City</ion-col><ion-col col-7>: {{LN.City}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>State</ion-col><ion-col col-7>: {{LN.State}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Country</ion-col><ion-col col-7>: India</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>PIN</ion-col><ion-col col-7>: {{LN.PIN}}</ion-col></ion-row>\n\n                   \n\n            </ion-card-content>\n\n    \n\n    \n\n            <ion-card-content>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-9>\n\n                                    <ion-card-title class="detail-header" (click)="gotofamilydetails()">\n\n                                            <ion-icon class="edit-icon" ios="ios-people" md="md-people"></ion-icon>Family Details\n\n                                            \n\n                                    </ion-card-title>\n\n                            </ion-col>\n\n                            <ion-col col-3>\n\n                                  <button class="editbutton" ion-button (click)="gotofamilydetails()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                            </ion-col>\n\n                          </ion-row>\n\n                    </ion-grid>\n\n                    <!-- <ion-row><ion-col>Family Values</ion-col><ion-col >:  {{user.Family_Details.Family_Values}} </ion-col></ion-row> -->\n\n                    <ion-row><ion-col col-5>Family Values</ion-col><ion-col col-7>: {{FD.Family_Values}} </ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Family Type</ion-col><ion-col col-7>:  {{FD.Family_Type}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Family Status</ion-col><ion-col col-7>:  {{FD.Family_Status}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Father\'s Occupation</ion-col><ion-col col-7>: {{FD.Father_s_Occupation}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>mother\'s Occupation</ion-col><ion-col col-7>: {{FD.Mother_s_Occupation}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Number of Brothers </ion-col><ion-col col-7>: {{FD.Num_of_Brothers}}</ion-col></ion-row>\n\n                    <ion-row><ion-col col-5>Number of Sisters</ion-col><ion-col col-7>: {{FD.Num_of_Sisters}}</ion-col></ion-row>                               \n\n            </ion-card-content>\n\n    \n\n    \n\n          </ion-card>\n\n    \n\n          <ion-card-content>\n\n                <h5 class="personal-details">PARTNER PREFERENCE</h5>\n\n    \n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-9>\n\n    \n\n                            <ion-card-title class="detail-header" (click)="gotopartnerbasicdetails()">\n\n                                    <ion-icon class="edit-icon" name="document"></ion-icon> Basic Details\n\n                            </ion-card-title>\n\n                       </ion-col>\n\n                            <ion-col col-3>\n\n                            <button class="editbutton" ion-button (click)="gotopartnerbasicdetails()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                            </ion-col>\n\n                   </ion-row>\n\n               </ion-grid>           \n\n                <ion-row><ion-col col-5>Age</ion-col><ion-col col-7>: {{P_BD.Age_From}}-{{P_BD.Age_To}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Height</ion-col><ion-col col-7>: {{P_BD.Height_From}}-{{P_BD.Height_To}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Weight</ion-col><ion-col col-7>: {{P_BD.Weight_From}}-{{P_BD.Weight_To}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Maritial Status</ion-col><ion-col col-7>: {{P_BD.Marrial_Status}} </ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Mother Tongue</ion-col><ion-col col-7>: {{P_BD.Language}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Physical Status</ion-col><ion-col col-7>: {{P_BD.Physical_Status}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Eating Habits</ion-col><ion-col col-7>: {{P_BD.Eating_Habits}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Drinking Habits</ion-col><ion-col col-7>: {{P_BD.Drinking_Habits}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Smoking Habits</ion-col><ion-col col-7>: {{P_BD.Smoking_Habits}}</ion-col></ion-row>\n\n        </ion-card-content>\n\n    \n\n        <ion-card-content>\n\n    \n\n            <ion-grid>\n\n                 <ion-row>\n\n                    <ion-col col-9>\n\n                            <ion-card-title class="detail-header" (click)="gotopartnerreligious()">\n\n                                    <ion-icon class="edit-icon" name="document"></ion-icon> Religious Information\n\n                            </ion-card-title>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                    <button class="editbutton" ion-button (click)="gotopartnerreligious()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                    </ion-col>\n\n                 </ion-row>\n\n            </ion-grid>       \n\n                <ion-row><ion-col col-5>Religion</ion-col><ion-col col-7>: {{P_RI.Religion}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Caste</ion-col><ion-col col-7>: {{P_RI.Caste}}</ion-col></ion-row>\n\n                <!-- <ion-row><ion-col>Sub Caste</ion-col><ion-col >: Any</ion-col></ion-row> -->\n\n                <ion-row><ion-col col-5>Gothram</ion-col><ion-col col-7>: {{P_RI.Gothram}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Star</ion-col><ion-col col-7>: {{P_RI.Star}} </ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Raasi</ion-col><ion-col col-7>: {{P_RI.Raasi}}</ion-col></ion-row>\n\n        </ion-card-content>\n\n    \n\n       \n\n    \n\n        <!-- <ion-card-content>\n\n            <ion-grid>\n\n                 <ion-row>\n\n                    <ion-col col-9>\n\n                            <ion-card-title class="detail-header" (click)="gotoprofessionalpreferance()">\n\n                                    <ion-icon class="edit-icon" name="document"></ion-icon> Professional Information\n\n                            </ion-card-title>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                    <button class="editbutton" ion-button (click)="gotoprofessionalpreferance()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                    </ion-col>\n\n                 </ion-row>\n\n            </ion-grid>       \n\n                <ion-row><ion-col>Educational </ion-col><ion-col>:  Any</ion-col></ion-row>\n\n                <ion-row><ion-col>Occupation</ion-col><ion-col>:  Any</ion-col></ion-row>\n\n                <ion-row><ion-col>Emplyed In </ion-col><ion-col>:  Any</ion-col></ion-row>\n\n        </ion-card-content> -->\n\n    \n\n    \n\n        <ion-card-content>\n\n            <ion-grid>\n\n                    <ion-row>\n\n                            <ion-col col-9>\n\n                            <ion-card-title class="detail-header" (click)="gotolocationpreference()">\n\n                                    <ion-icon class="edit-icon" ios="ios-school" md="md-school"></ion-icon>Location\n\n                                    \n\n                            </ion-card-title>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                    <button class="editbutton" ion-button (click)="gotolocationpreference()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                    </ion-col>\n\n                 </ion-row>\n\n            </ion-grid>        \n\n                <ion-row><ion-col col-5>Country</ion-col><ion-col col-7>: {{P_LN.Birth_Country}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Residing State</ion-col><ion-col col-7>: {{P_LN.State}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>Residing City</ion-col><ion-col col-7>: {{P_LN.City}}</ion-col></ion-row>\n\n                <ion-row><ion-col col-5>PIN</ion-col><ion-col col-7>: {{P_LN.PIN}}</ion-col></ion-row>\n\n               \n\n        </ion-card-content>\n\n    \n\n    \n\n     <ion-card-content>\n\n    \n\n            <ion-grid>\n\n                            <ion-row>\n\n                            <ion-col col-9>  \n\n                            <ion-card-title class="detail-header" (click)="gotoprofessionalpreferance()">\n\n                                    <ion-icon class="edit-icon" ios="ios-create" md="md-create"></ion-icon> Description\n\n                            </ion-card-title>\n\n                            </ion-col>\n\n                            <ion-col col-3>\n\n                                    <button class="editbutton" ion-button (click)="gotoown()"><ion-icon class="edit-icon1" ios="ios-create" md="md-create"></ion-icon> Edit</button>\n\n                            </ion-col>\n\n                            </ion-row>\n\n                    </ion-grid>\n\n                    <p class="detail-content">\n\n                            My sister has completed her Bachelor\'s degree. She is currently not working and she lives in Vadakkuvalliyur. We come from a middle class, joint family background with moderate values. she s very much interested in agriculture and dairy farming\n\n                    </p>\n\n            \n\n            </ion-card-content>\n\n    \n\n    \n\n    \n\n    \n\n        <!-- <div class="w3-container">\n\n                \n\n            <div id="id01" class="w3-modal">\n\n              <div class="w3-modal-content w3-animate-top w3-card-4">\n\n                <header class="w3-container w3-teal"> \n\n                  <span onclick="document.getElementById(\'id01\').style.display=\'none\'" class="w3-button w3-display-topright">&times;</span>\n\n                  <div class="popup-img">\n\n                    <img class="partner" src="assets/imgs/13.png" style="margin-top: 20px;">\n\n                    <p> Kavya</p>\n\n                  </div>\n\n                </header>\n\n                <div class="w3-container">\n\n                   <div class="popup-contact">\n\n                    <p>Contact kavya on</p>\n\n                    <p><ion-icon class="popup-icon" ios="ios-call" md="md-call"></ion-icon> +91 9510XXXXXX</p>\n\n                    <button (click)="tomember()" ion-button color="secondary" clear>UPGRADE NOW</button>\n\n                   </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n    \n\n            <div id="id02" class="w3-modal">\n\n                    <div class="w3-modal-content w3-animate-top w3-card-4">\n\n                      <header class="w3-container w3-teal"> \n\n                        <span onclick="document.getElementById(\'id02\').style.display=\'none\'" class="w3-button w3-display-topright">&times;</span>\n\n                        <div class="popup-img">\n\n                          <img class="partner" src="assets/imgs/13.png" style="margin-top: 20px;">\n\n                          <p> Kavya</p>\n\n                        </div>\n\n                      </header>\n\n                      <div class="w3-container">\n\n                         <div class="popup-contact">\n\n                          <p>Chat kavya on</p>\n\n                          <p>Comming Soon</p>\n\n                         </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n          </div> -->\n\n          <button (click)="logout()" class="logout" ion-button color="secondary" clear>Logout</button>\n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\edit\edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileownPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditprofileownPage = /** @class */ (function () {
    function EditprofileownPage(navCtrl, nav, http, storage) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.storage = storage;
        this.authForm = {};
    }
    EditprofileownPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    EditprofileownPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], EditprofileownPage.prototype, "myInput", void 0);
    EditprofileownPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-editprofileown',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\editprofileown\editprofileown.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="inbox-title">EDIT PROFILE</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <h4 class="top-title">FAMILY DETAILS</h4>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label floating>Enter Details</ion-label>\n\n            <ion-textarea #myInput id="myInput1" rows="1" (keyup)="resize()" [(ngModel)]="authForm.About_Me"></ion-textarea>\n\n        </ion-item>\n\n        \n\n        <button type="submit" (click)="save()"ion-button color="secondary" clear>SAVE</button>\n\n    \n\n\n\n</ion-content>    '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\editprofileown\editprofileown.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EditprofileownPage);
    return EditprofileownPage;
}());

//# sourceMappingURL=editprofileown.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicdetailsPage = /** @class */ (function () {
    function BasicdetailsPage(navCtrl, nav, http, fb) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.fb = fb;
        this.authForm = {};
    }
    BasicdetailsPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    BasicdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-basicdetails',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\basicdetails\basicdetails.html"*/'\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding class="card-background-page">\n\n    \n\n  \n\n    <ion-list>\n\n\n\n    <h4 class="top-title">BASIC DETAILS</h4>\n\n        \n\n\n\n            <ion-item>\n\n                <ion-label color="primary" floating>NAME</ion-label>\n\n                <ion-input type="text" [(ngModel)]="authForm.Name" required ></ion-input>\n\n            </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label color="primary" floating>GENDER</ion-label>\n\n                <ion-select [(ngModel)]="authForm.Gender" required okText="Done" cancelText="Cancel">\n\n                  <ion-option>Female</ion-option>\n\n                  <ion-option>Male</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n\n\n              <!-- <ion-item>\n\n                  <ion-label color="primary" floating>EMAIL</ion-label>\n\n                  <ion-input [(ngModel)]="authForm.Email" required type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label color="primary" floating>PASSWORD</ion-label>\n\n                  <ion-input  [(ngModel)]="authForm.Password" required type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label color="primary" floating>MOBILE</ion-label>\n\n                  <ion-input  [(ngModel)]="authForm.Mobile" required type="number"></ion-input>\n\n              </ion-item> -->\n\n\n\n              <!-- <ion-item>\n\n                <ion-label floating>DATE OF BIRTH</ion-label>\n\n                <ion-datetime [(ngModel)]="authForm.DOB" displayFormat="MM/DD/YYYY" min="1960" max="2000" ></ion-datetime>\n\n              </ion-item> -->\n\n\n\n\n\n             <ion-item>\n\n                  <ion-label color="primary" floating>HEIGHT</ion-label>\n\n                  <ion-select  [(ngModel)]="authForm.Height" okText="Done" cancelText="Cancel">\n\n                    <ion-option>5.1</ion-option>\n\n                    <ion-option>5.2</ion-option>\n\n                    <ion-option>5.3</ion-option>\n\n                    <ion-option>5.4</ion-option>\n\n                    <ion-option>5.5</ion-option>\n\n                    <ion-option>5.6</ion-option>\n\n                    <ion-option>5.7</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item> \n\n      \n\n               <ion-item>\n\n                  <ion-label color="primary" floating>WEIGHT</ion-label>\n\n                  <ion-select  [(ngModel)]="authForm.Weight" okText="Done" cancelText="Cancel">\n\n                    <ion-option>40</ion-option>\n\n                    <ion-option>45</ion-option>\n\n                    <ion-option>50</ion-option>\n\n                    <ion-option>55</ion-option>\n\n                    <ion-option>60</ion-option>\n\n                    <ion-option>65</ion-option>\n\n                    <ion-option>70</ion-option>\n\n                    <ion-option>75</ion-option>\n\n                    <ion-option>80</ion-option>\n\n                    <ion-option>85</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n       \n\n                <ion-item>\n\n                    <ion-label color="primary" floating>MARITIAL STATUS</ion-label>\n\n                    <ion-select  [(ngModel)]="authForm.Marrial_Status" okText="Done" cancelText="Cancel">\n\n                      <ion-option>Never Married</ion-option>\n\n                      <ion-option>Widower</ion-option>\n\n                      <ion-option>Divorced</ion-option>\n\n                      <ion-option>Awaiting Divorce</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n\n\n\n\n                <ion-item>\n\n                    <ion-label color="primary" floating>MOTHER TONGUE</ion-label>\n\n                    <ion-select  [(ngModel)]="authForm.Language" okText="Done" cancelText="Cancel">\n\n                      <ion-option>Tamil</ion-option>\n\n                      <ion-option>Telugu</ion-option>\n\n                      <ion-option>Malayalam</ion-option>\n\n                      <ion-option>Hindi</ion-option>\n\n            \n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n\n\n                  <ion-item>\n\n                      <ion-label color="primary" floating>PHYSICAL STATUS</ion-label>\n\n                      <ion-select  [(ngModel)]="authForm.Physical_Status" okText="Done" cancelText="Cancel">\n\n                        <ion-option>Normal</ion-option>\n\n                        <ion-option>Phisically Changed</ion-option>\n\n                      </ion-select>\n\n                  </ion-item>\n\n\n\n\n\n                  <ion-item>\n\n                      <ion-label color="primary" floating>BODY TYPE</ion-label>\n\n                      <ion-select  [(ngModel)]="authForm.Body_Type" okText="Done" cancelText="Cancel">\n\n                        <ion-option>Average</ion-option>\n\n                        <ion-option>Athletic</ion-option>\n\n                        <ion-option>Slim</ion-option>\n\n                        <ion-option>Heavy</ion-option>\n\n                      </ion-select>\n\n                  </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label color="primary" floating>PROFILE CREATED FOR</ion-label>\n\n                    <ion-select  [(ngModel)]="authForm.Profile_Created_For" required okText="Done" cancelText="Cancel">\n\n                      <ion-option>My self</ion-option>\n\n                      <ion-option>Son</ion-option>\n\n                      <ion-option>Daughter</ion-option>\n\n                      <ion-option>Brother</ion-option>\n\n                      <ion-option>Sister</ion-option>\n\n                      <ion-option>Relative</ion-option>\n\n                      <ion-option>Freind</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n\n\n                  <ion-item>\n\n                    <ion-label color="primary" floating>EATING HABITS</ion-label>\n\n                    <ion-select [(ngModel)]="authForm.Eating_Habits" okText="Done" cancelText="Cancel">\n\n                      <ion-option>Vegitarian</ion-option>\n\n                      <ion-option>Non-Vegiterian</ion-option>\n\n                      <ion-option>Eggetarian</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n      \n\n                <ion-item>\n\n                  <ion-label color="primary" floating>DRINKING HABITS</ion-label>\n\n                  <ion-select [(ngModel)]="authForm.Drinking_Habits" okText="Done" cancelText="Cancel">\n\n                      <ion-option>No</ion-option>\n\n                      <ion-option>Yes</ion-option>\n\n                      <ion-option>Occasionally</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n      \n\n                <ion-item>\n\n                  <ion-label color="primary" floating>SMOKING HABITS</ion-label>\n\n                  <ion-select [(ngModel)]="authForm.Smoking_Habits" okText="Done" cancelText="Cancel">\n\n                    <ion-option>No</ion-option>\n\n                    <ion-option>Yes</ion-option>\n\n                    <ion-option>Occasionally</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n\n\n                <!-- <ion-item>\n\n                    <ion-label color="primary" floating>ABOUT ME</ion-label>\n\n                    <ion-input [(ngModel)]="authForm.About_Me" required type="text"></ion-input>\n\n                </ion-item> -->\n\n                   \n\n\n\n                <button  type="submit" (click)="save()" ion-button round>SAVE</button>\n\n      \n\n                  </ion-list>\n\n           \n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\basicdetails\basicdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], BasicdetailsPage);
    return BasicdetailsPage;
}());

//# sourceMappingURL=basicdetails.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReligiousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReligiousPage = /** @class */ (function () {
    function ReligiousPage(navCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.authForm = {};
    }
    ReligiousPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    ReligiousPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-religious',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\religious\religious.html"*/'\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding class="card-background-page">\n\n    \n\n       \n\n    <ion-list>\n\n    <h4 class="top-title">RELIGIOUS INFORMATION</h4>\n\n        <ion-item>\n\n            <ion-label color="primary" floating>Religion</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Religion" okText="Done" cancelText="Cancel">\n\n                <ion-option>Hindu</ion-option>\n\n                <ion-option>Muslim</ion-option>\n\n                <ion-option>Cristian</ion-option>\n\n                <ion-option>Sikh</ion-option>\n\n                <ion-option>Jain</ion-option>\n\n                <ion-option>Parsi</ion-option>\n\n                <ion-option>Buddhist</ion-option>\n\n                <ion-option>Jewish</ion-option>\n\n                <ion-option>Inter-Religion</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label color="primary" floating>CASTE</ion-label>\n\n              <ion-select [(ngModel)]="authForm.Caste" okText="Done" cancelText="Cancel">\n\n                  <ion-option>Adi Dravider</ion-option>\n\n                  <ion-option>Boyer</ion-option>\n\n                  <ion-option>Brahmin</ion-option>\n\n                  <ion-option>Chettiar</ion-option>\n\n                  <ion-option>Gounder</ion-option>\n\n                  <ion-option>Inter Caste</ion-option>\n\n                  <ion-option>Karuneergar</ion-option>\n\n                  <ion-option>Kongu vellalar Gounder</ion-option>\n\n                  <ion-option>Mudaliyar</ion-option>\n\n                  <ion-option>Nadar</ion-option>\n\n                  <ion-option>Naidu</ion-option>\n\n                  <ion-option>Pillai</ion-option>\n\n                  <ion-option>Reddy</ion-option>\n\n                  <ion-option>Sc</ion-option>\n\n                  <ion-option>Vellalar</ion-option>\n\n                  <ion-option>Yadav</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n          <!-- <ion-item>\n\n            <ion-label color="primary" floating>SUB CASTE</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Sub_Caste" okText="Done" cancelText="Cancel">\n\n              <ion-option>xxxx</ion-option>\n\n              <ion-option>xxxx</ion-option>\n\n              <ion-option>xxx</ion-option>\n\n              <ion-option>xxxxx</ion-option>\n\n              <ion-option>xxxx</ion-option>\n\n              <ion-option>xx</ion-option>\n\n            </ion-select>\n\n          </ion-item> -->\n\n\n\n        <ion-item>\n\n            <ion-label color="primary" floating>ENTER YOUR GOTHRA</ion-label>\n\n            <ion-input  [(ngModel)]="authForm.Gothram" type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n    \n\n        <ion-item>\n\n            <ion-label color="primary" floating>STAR</ion-label>\n\n            <ion-select [(ngModel)]="authForm.star" okText="Done" cancelText="Cancel">\n\n              <ion-option>Ashvini</ion-option>\n\n              <ion-option>Bharani</ion-option>\n\n              <ion-option>Krittika</ion-option>\n\n              <ion-option>Rohini</ion-option>\n\n              <ion-option>Mrigashīrsha</ion-option>\n\n              <ion-option>Ardra</ion-option>\n\n              <ion-option>Punarvasu</ion-option>\n\n              <ion-option>Pushya</ion-option>\n\n              <ion-option>Āshleshā</ion-option>\n\n              <ion-option>Maghā</ion-option>\n\n              <ion-option>Pūrva Phalgunī</ion-option>\n\n              <ion-option>Hasta</ion-option>\n\n              <ion-option>Chitra</ion-option>\n\n              <ion-option>Swāti</ion-option>\n\n              <ion-option>Sravana</ion-option>\n\n              <ion-option>Abhijit</ion-option>\n\n              <ion-option>Dhanishta </ion-option>\n\n              <ion-option>Shatabhisha</ion-option>\n\n\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>RAASI / MOON SIGN</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Raasi" okText="Done" cancelText="Cancel">\n\n              <ion-option>Mesham</ion-option>\n\n              <ion-option>Makara</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n \n\n\n\n        <ion-item>\n\n            <ion-label color="primary" floating>ZODIC / STAR SIGN</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Star" okText="Done" cancelText="Cancel">\n\n              <ion-option>Aries</ion-option>\n\n              <ion-option>Taurus</ion-option>\n\n              <ion-option>Gemini</ion-option>\n\n              <ion-option>Cancer</ion-option>\n\n              <ion-option>Leo</ion-option>\n\n              <ion-option>Virgo</ion-option>\n\n              <ion-option>Libra</ion-option>\n\n              <ion-option>corpio</ion-option>\n\n              <ion-option>Sagitarius</ion-option>\n\n              <ion-option>Capricorn</ion-option>\n\n              <ion-option>Aquarius</ion-option>\n\n              <ion-option>Pisces</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>HAVING / DOSHAM</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Dosham" okText="Done" cancelText="Cancel">\n\n              <ion-option>Yes</ion-option>\n\n              <ion-option>No</ion-option>\n\n              <ion-option>Don\'t know</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <button (click)="save()" ion-button round>SAVE</button>\n\n\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n  '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\religious\religious.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], ReligiousPage);
    return ReligiousPage;
}());

//# sourceMappingURL=religious.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfessionalPage = /** @class */ (function () {
    function ProfessionalPage(navCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.authForm = {};
    }
    ProfessionalPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    ProfessionalPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfessionalPage.prototype, "myInput", void 0);
    ProfessionalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-professional',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\professional\professional.html"*/'\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding class="card-background-page">\n\n    \n\n       \n\n    <ion-list>\n\n    <h4 class="top-title">PROFESSIONAL INFORMATION</h4>\n\n        \n\n          <ion-item>\n\n            <ion-label color="primary" floating>HIGHEST EDUCATION</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Highest_Educational_Qualification" okText="Done" cancelText="Cancel">\n\n              <ion-option>BE</ion-option>\n\n              <ion-option>B.Arch</ion-option>\n\n              <ion-option>B.Tech</ion-option>\n\n              <ion-option>B.S</ion-option>\n\n              <ion-option>MCA</ion-option>\n\n              <ion-option>ME</ion-option>\n\n              <ion-option>BE</ion-option>\n\n              <ion-option>M.TECH</ion-option>\n\n              <ion-option>B.Com</ion-option>\n\n              <ion-option>M.Com</ion-option>\n\n              <ion-option>Diploma</ion-option>\n\n              <ion-option>Phd</ion-option>\n\n              <ion-option>Polytechnic</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>ENTER EDUCTION IN DETAIL</ion-label>\n\n            <ion-textarea #myInput id="myInput" rows="1" maxLength="500" (keyup)="resize()" [(ngModel)]="authForm.Educational_in_Detail"></ion-textarea>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label color="primary" floating>COMPANY NAME</ion-label>\n\n              <ion-input type="text" [(ngModel)]="authForm.Company_Name" required ></ion-input>\n\n          </ion-item>\n\n\n\n          <!-- <ion-item>\n\n            <ion-label floating>ENTER EDUCTION IN DETAIL</ion-label>\n\n            <ion-textarea #myInput id="myInput" rows="1" maxLength="500" (keyup)="resize()" [(ngModel)]="model"></ion-textarea>\n\n          </ion-item> -->\n\n\n\n          <ion-item>\n\n              <ion-label color="primary" floating>DESIGNATION</ion-label>\n\n              <ion-input type="text" [(ngModel)]="authForm.Designation" required ></ion-input>\n\n          </ion-item>\n\n\n\n        \n\n    \n\n          <ion-item>\n\n              <ion-label color="primary" floating>ANNUAL INCOME</ion-label>\n\n              <ion-input type="text" [(ngModel)]="authForm.Salary_Per_Annum" required ></ion-input>\n\n          </ion-item>\n\n\n\n         \n\n      \n\n        <button (click)="save()" ion-button round>SAVE</button>\n\n\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n  '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\professional\professional.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], ProfessionalPage);
    return ProfessionalPage;
}());

//# sourceMappingURL=professional.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationPage = /** @class */ (function () {
    function LocationPage(navCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.authForm = {};
    }
    LocationPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-location',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\location\location.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n  <!-- <form (ngSubmit)="save()" [formGroup]="authFormone">   -->\n\n  <ion-list>\n\n    <h4 class="top-title">LOCATION</h4>\n\n\n\n       <ion-item>\n\n      <ion-label color="primary" floating>STREET</ion-label>\n\n      <ion-input type="text" [(ngModel)]="authForm.Street" okText="Done" cancelText="Cancel"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>CITY</ion-label>\n\n      <ion-select [(ngModel)]="authForm.City" okText="Done" cancelText="Cancel">\n\n        <ion-option>Chennai</ion-option>\n\n        <ion-option>Coimbatore</ion-option>\n\n        <ion-option>Madurai</ion-option>\n\n        <ion-option>Trichy</ion-option>\n\n        <ion-option>Thirunelveli</ion-option>\n\n        <ion-option>Bangalore</ion-option>\n\n        <ion-option>Mumbai</ion-option>\n\n        <ion-option>Goa</ion-option>\n\n        <ion-option>Delhi</ion-option>\n\n        <ion-option>kolkata</ion-option>\n\n        <ion-option>Selam</ion-option>\n\n        <ion-option>Agra</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>STATE</ion-label>\n\n      <ion-select [(ngModel)]="authForm.State" okText="Done" cancelText="Cancel">\n\n        <ion-option>Tamilnadu</ion-option>\n\n        <ion-option>Karnatak</ion-option>\n\n        <ion-option>Mumbai</ion-option>\n\n        <ion-option>Kolkata</ion-option>\n\n        <ion-option>Delhi</ion-option>\n\n        <ion-option>Kerala</ion-option>\n\n        <ion-option>Andra</ion-option>\n\n        <ion-option>Pune</ion-option>\n\n\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>PIN</ion-label>\n\n      <ion-input type="number" [(ngModel)]="authForm.PIN" okText="Done" cancelText="Cancel"></ion-input>\n\n    </ion-item>\n\n\n\n    <button type="submit" (click)="save()" ion-button round>SAVE</button>\n\n\n\n  </ion-list>\n\n  <!-- </form> -->\n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilydetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_edit_edit__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FamilydetailsPage = /** @class */ (function () {
    function FamilydetailsPage(navCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.authForm = {};
    }
    FamilydetailsPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    FamilydetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-familydetails',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\familydetails\familydetails.html"*/'\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding class="card-background-page">\n\n    \n\n       \n\n    <ion-list>\n\n    <h4 class="top-title">FAMILY DETAILS</h4>\n\n\n\n        <ion-item>\n\n            <ion-label color="primary" floating>FAMILY VALUE</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Family_Values" okText="Done" cancelText="Cancel">\n\n              <ion-option>Orthodox</ion-option>\n\n              <ion-option>Traditional</ion-option>\n\n              <ion-option>Moderate</ion-option>\n\n              <ion-option>Liberal</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>FAMILY TYPE</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Family_Type" okText="Done" cancelText="Cancel">\n\n              <ion-option>Joint family</ion-option>\n\n              <ion-option>Nuclear Family</ion-option>\n\n              <ion-option>Others</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>FAMILY STATUS</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Family_Status" okText="Done" cancelText="Cancel">\n\n              <ion-option>Middle class</ion-option>\n\n              <ion-option>Upper-middle class</ion-option>\n\n              <ion-option>High class</ion-option>\n\n              <ion-option>Rich / Affluent</ion-option>\n\n              \n\n            </ion-select>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>FATHER\'S OCCUPATION</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Father_s_Occupation" okText="Done" cancelText="Cancel">\n\n              <ion-option>Employed</ion-option>\n\n              <ion-option>Business man</ion-option>\n\n              <ion-option>Professional</ion-option>\n\n              <ion-option>Retired</ion-option>\n\n              <ion-option>Not Employed</ion-option>\n\n              <ion-option>Passwed Away</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>MOTHER\'S OCCUPATION</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Mother_s_Occupation" okText="Done" cancelText="Cancel">\n\n              <ion-option>Homemaker</ion-option>\n\n              <ion-option>Employed</ion-option>\n\n              <ion-option>Business woman</ion-option>\n\n              <ion-option>Professional</ion-option>\n\n              <ion-option>Retired</ion-option>\n\n              <ion-option>Passwed Away</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>NO OF BROTHER\'S</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Num_of_Brothers" okText="Done" cancelText="Cancel">\n\n              <ion-option>None</ion-option>\n\n              <ion-option>1</ion-option>\n\n              <ion-option>2</ion-option>\n\n              <ion-option>3</ion-option>\n\n              <ion-option>4</ion-option>\n\n              <ion-option>5</ion-option>\n\n              <ion-option>5+</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>NO OF SISTER\'S</ion-label>\n\n            <ion-select [(ngModel)]="authForm.Num_of_Sisters" okText="Done" cancelText="Cancel">\n\n              <ion-option>None</ion-option>\n\n              <ion-option>1</ion-option>\n\n              <ion-option>2</ion-option>\n\n              <ion-option>3</ion-option>\n\n              <ion-option>4</ion-option>\n\n              <ion-option>5</ion-option>\n\n              <ion-option>5+</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n\n\n          <button (click)="save()" ion-button round>SAVE</button>\n\n\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n\n\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\familydetails\familydetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], FamilydetailsPage);
    return FamilydetailsPage;
}());

//# sourceMappingURL=familydetails.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmyfamilyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutmyfamilyPage = /** @class */ (function () {
    function AboutmyfamilyPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    AboutmyfamilyPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], AboutmyfamilyPage.prototype, "myInput", void 0);
    AboutmyfamilyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-aboutmyfamily',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\aboutmyfamily\aboutmyfamily.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="inbox-title">EDIT PROFILE</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h4 class="top-title">BASIC DETAILS</h4>\n\n    <ion-item>\n\n        <ion-label floating>Please enter your family decription</ion-label>\n\n        <ion-textarea #myInput id="myInput" rows="1" maxLength="500" (keyup)="resize()" [(ngModel)]="model"></ion-textarea>\n\n    </ion-item>\n\n    \n\n      <button ion-button color="secondary" clear>SAVE</button>\n\n\n\n</ion-content>    '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\aboutmyfamily\aboutmyfamily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"]])
    ], AboutmyfamilyPage);
    return AboutmyfamilyPage;
}());

//# sourceMappingURL=aboutmyfamily.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerbasicdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartnerbasicdetailsPage = /** @class */ (function () {
    function PartnerbasicdetailsPage(navCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.authForm = {};
    }
    PartnerbasicdetailsPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    PartnerbasicdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-partnerbasicdetails',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\partnerbasicdetails\partnerbasicdetails.html"*/'\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding class="card-background-page">\n\n    \n\n       \n\n    <ion-list>\n\n    <h4 class="top-title">BASIC PREFERENCE</h4>\n\n\n\n    \n\n      \n\n    <ion-item>\n\n        <ion-label color="primary" floating> AGE FROM</ion-label>\n\n        <ion-select  [(ngModel)]="authForm.PARTNER_Age_From" okText="Done" cancelText="Cancel">\n\n          <ion-option>18</ion-option>\n\n          <ion-option>19</ion-option>\n\n          <ion-option>20</ion-option>\n\n          <ion-option>21</ion-option>\n\n          <ion-option>22</ion-option>\n\n          <ion-option>23</ion-option>\n\n          <ion-option>24</ion-option>\n\n          <ion-option>25</ion-option>\n\n          <ion-option>26</ion-option>\n\n          <ion-option>27</ion-option>\n\n          <ion-option>28</ion-option>\n\n          <ion-option>29</ion-option>\n\n          <ion-option>30</ion-option>\n\n          <ion-option>31</ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item> \n\n\n\n\n\n          \n\n    <ion-item>\n\n      <ion-label color="primary" floating> AGE T0</ion-label>\n\n      <ion-select  [(ngModel)]="authForm.PARTNER_Age_To" okText="Done" cancelText="Cancel">\n\n        <ion-option>19</ion-option>\n\n        <ion-option>20</ion-option>\n\n        <ion-option>21</ion-option>\n\n        <ion-option>22</ion-option>\n\n        <ion-option>23</ion-option>\n\n        <ion-option>24</ion-option>\n\n        <ion-option>25</ion-option>\n\n        <ion-option>26</ion-option>\n\n        <ion-option>27</ion-option>\n\n        <ion-option>28</ion-option>\n\n        <ion-option>29</ion-option>\n\n        <ion-option>30</ion-option>\n\n        <ion-option>31</ion-option>\n\n\n\n      </ion-select>\n\n    </ion-item> \n\n\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>MARITIAL STATUS</ion-label>\n\n      <ion-select  [(ngModel)]="authForm.PARTNER_Marrial_Status" okText="Done" cancelText="Cancel">\n\n        <ion-option>Never Married</ion-option>\n\n        <ion-option>Widower</ion-option>\n\n        <ion-option>Divorced</ion-option>\n\n        <ion-option>Awaiting Divorce</ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n  \n\n\n\n\n\n     <ion-item>\n\n        <ion-label color="primary" floating>HEIGHT FROM</ion-label>\n\n        <ion-select  [(ngModel)]="authForm.PARTNER_Height_From" okText="Done" cancelText="Cancel">\n\n          <ion-option>5.1</ion-option>\n\n          <ion-option>5.2</ion-option>\n\n          <ion-option>5.3</ion-option>\n\n          <ion-option>5.4</ion-option>\n\n          <ion-option>5.5</ion-option>\n\n          <ion-option>5.6</ion-option>\n\n          <ion-option>5.7</ion-option>\n\n          <ion-option>5.8</ion-option>\n\n          <ion-option>5.9</ion-option>\n\n          <ion-option>6.0</ion-option>\n\n          <ion-option>6.1</ion-option>\n\n          <ion-option>6.2</ion-option>\n\n          <ion-option>6.3</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>HEIGHT TO</ion-label>\n\n        <ion-select  [(ngModel)]="authForm.PARTNER_Height_To" okText="Done" cancelText="Cancel">\n\n          <ion-option>5.1</ion-option>\n\n          <ion-option>5.2</ion-option>\n\n          <ion-option>5.3</ion-option>\n\n          <ion-option>5.4</ion-option>\n\n          <ion-option>5.5</ion-option>\n\n          <ion-option>5.6</ion-option>\n\n          <ion-option>5.7</ion-option>\n\n          <ion-option>5.8</ion-option>\n\n          <ion-option>5.9</ion-option>\n\n          <ion-option>6.0</ion-option>\n\n          <ion-option>6.1</ion-option>\n\n          <ion-option>6.2</ion-option>\n\n          <ion-option>6.3</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>WEIGHT FROM</ion-label>\n\n        <ion-select  [(ngModel)]="authForm.PARTNER_Weight_From" okText="Done" cancelText="Cancel">\n\n          <ion-option>40</ion-option>\n\n          <ion-option>45</ion-option>\n\n          <ion-option>50</ion-option>\n\n          <ion-option>55</ion-option>\n\n          <ion-option>60</ion-option>\n\n          <ion-option>65</ion-option>\n\n          <ion-option>70</ion-option>\n\n          <ion-option>75</ion-option>\n\n          <ion-option>80</ion-option>\n\n          <ion-option>85</ion-option>\n\n          <ion-option>90</ion-option>\n\n          <ion-option>95</ion-option>\n\n          <ion-option>100+</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>WEIGHT TO</ion-label>\n\n        <ion-select  [(ngModel)]="authForm.PARTNER_Weight_To" okText="Done" cancelText="Cancel">\n\n          <ion-option>40</ion-option>\n\n          <ion-option>45</ion-option>\n\n          <ion-option>50</ion-option>\n\n          <ion-option>55</ion-option>\n\n          <ion-option>60</ion-option>\n\n          <ion-option>65</ion-option>\n\n          <ion-option>70</ion-option>\n\n          <ion-option>75</ion-option>\n\n          <ion-option>80</ion-option>\n\n          <ion-option>85</ion-option>\n\n          <ion-option>90</ion-option>\n\n          <ion-option>95</ion-option>\n\n          <ion-option>100+</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n          <ion-label color="primary" floating>MOTHER TONGUE</ion-label>\n\n          <ion-select  [(ngModel)]="authForm.PARTNER_Language" okText="Done" cancelText="Cancel">\n\n            <ion-option>Tamil</ion-option>\n\n            <ion-option>Telugu</ion-option>\n\n            <ion-option>Malayalam</ion-option>\n\n            <ion-option>Hindi</ion-option>\n\n  \n\n          </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label color="primary" floating>PHYSICAL STATUS</ion-label>\n\n            <ion-select  [(ngModel)]="authForm.PARTNER_Physical_Status" okText="Done" cancelText="Cancel">\n\n              <ion-option>Normal</ion-option>\n\n              <ion-option>Phisically Changed</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>EATING HABITS</ion-label>\n\n          <ion-select [(ngModel)]="authForm.PARTNER_Eating_Habits" okText="Done" cancelText="Cancel">\n\n            <ion-option>Vegitarian</ion-option>\n\n            <ion-option>Non-Vegiterian</ion-option>\n\n            <ion-option>Eggetarian</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>DRINKING HABITS</ion-label>\n\n        <ion-select [(ngModel)]="authForm.PARTNER_Drinking_Habits" okText="Done" cancelText="Cancel">\n\n            <ion-option>No</ion-option>\n\n            <ion-option>Yes</ion-option>\n\n            <ion-option>Occasionally</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>SMOKING HABITS</ion-label>\n\n        <ion-select [(ngModel)]="authForm.Smoking_Habits" okText="Done" cancelText="Cancel">\n\n          <ion-option>No</ion-option>\n\n          <ion-option>Yes</ion-option>\n\n          <ion-option>Occasionally</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- <ion-item>\n\n          <ion-label color="primary" floating>ABOUT ME</ion-label>\n\n          <ion-input [(ngModel)]="authForm.About_Me" required type="text"></ion-input>\n\n      </ion-item> -->\n\n         \n\n\n\n      <button  type="submit" (click)="save()" ion-button round>SAVE</button>\n\n      \n\n\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\partnerbasicdetails\partnerbasicdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], PartnerbasicdetailsPage);
    return PartnerbasicdetailsPage;
}());

//# sourceMappingURL=partnerbasicdetails.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return partnerreligiousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var partnerreligiousPage = /** @class */ (function () {
    function partnerreligiousPage(navCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.authForm = {};
    }
    partnerreligiousPage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    partnerreligiousPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-partnerreligious',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\partnerreligious\partnerreligious.html"*/'\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding class="card-background-page">\n\n    \n\n    \n\n    <ion-list>\n\n    <h4 class="top-title">RELIGIOUS INFORMATION</h4>\n\n    <ion-item>\n\n        <ion-label color="primary" floating>Religion</ion-label>\n\n        <ion-select [(ngModel)]="authForm.PARTNER_Religion" okText="Done" cancelText="Cancel">\n\n            <ion-option>Hindu</ion-option>\n\n            <ion-option>Muslim</ion-option>\n\n            <ion-option>Cristian</ion-option>\n\n            <ion-option>Sikh</ion-option>\n\n            <ion-option>Jain</ion-option>\n\n            <ion-option>Parsi</ion-option>\n\n            <ion-option>Buddhist</ion-option>\n\n            <ion-option>Jewish</ion-option>\n\n            <ion-option>Inter-Religion</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label color="primary" floating>CASTE</ion-label>\n\n          <ion-select [(ngModel)]="authForm.PARTNER_Caste" okText="Done" cancelText="Cancel">\n\n              <ion-option>Adi Dravider</ion-option>\n\n              <ion-option>Boyer</ion-option>\n\n              <ion-option>Brahmin</ion-option>\n\n              <ion-option>Chettiar</ion-option>\n\n              <ion-option>Gounder</ion-option>\n\n              <ion-option>Inter Caste</ion-option>\n\n              <ion-option>Karuneergar</ion-option>\n\n              <ion-option>Kongu vellalar Gounder</ion-option>\n\n              <ion-option>Mudaliyar</ion-option>\n\n              <ion-option>Nadar</ion-option>\n\n              <ion-option>Naidu</ion-option>\n\n              <ion-option>Pillai</ion-option>\n\n              <ion-option>Reddy</ion-option>\n\n              <ion-option>Sc</ion-option>\n\n              <ion-option>Vellalar</ion-option>\n\n              <ion-option>Yadav</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      <!-- <ion-item>\n\n        <ion-label color="primary" floating>SUB CASTE</ion-label>\n\n        <ion-select [(ngModel)]="authForm.Sub_Caste" okText="Done" cancelText="Cancel">\n\n          <ion-option>xxxx</ion-option>\n\n          <ion-option>xxxx</ion-option>\n\n          <ion-option>xxx</ion-option>\n\n          <ion-option>xxxxx</ion-option>\n\n          <ion-option>xxxx</ion-option>\n\n          <ion-option>xx</ion-option>\n\n        </ion-select>\n\n      </ion-item> -->\n\n\n\n    <ion-item>\n\n        <ion-label color="primary" floating>ENTER YOUR GOTHRA</ion-label>\n\n        <ion-input  [(ngModel)]="authForm.PARTNER_Gothram" type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n\n\n    <ion-item>\n\n        <ion-label color="primary" floating>STAR</ion-label>\n\n        <ion-select [(ngModel)]="authForm.PARTNER_Star" okText="Done" cancelText="Cancel">\n\n          <ion-option>Ashvini</ion-option>\n\n          <ion-option>Bharani</ion-option>\n\n          <ion-option>Krittika</ion-option>\n\n          <ion-option>Rohini</ion-option>\n\n          <ion-option>Mrigashīrsha</ion-option>\n\n          <ion-option>Ardra</ion-option>\n\n          <ion-option>Punarvasu</ion-option>\n\n          <ion-option>Pushya</ion-option>\n\n          <ion-option>Āshleshā</ion-option>\n\n          <ion-option>Maghā</ion-option>\n\n          <ion-option>Pūrva Phalgunī</ion-option>\n\n          <ion-option>Hasta</ion-option>\n\n          <ion-option>Chitra</ion-option>\n\n          <ion-option>Swāti</ion-option>\n\n          <ion-option>Sravana</ion-option>\n\n          <ion-option>Abhijit</ion-option>\n\n          <ion-option>Dhanishta </ion-option>\n\n          <ion-option>Shatabhisha</ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>RAASI / MOON SIGN</ion-label>\n\n        <ion-select [(ngModel)]="authForm.PARTNER_Raasi" okText="Done" cancelText="Cancel">\n\n          <ion-option>Mesham</ion-option>\n\n          <ion-option>Makara</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n    <!-- <ion-item>\n\n        <ion-label color="primary" floating>ZODIC / STAR SIGN</ion-label>\n\n        <ion-select [(ngModel)]="authForm.Star" okText="Done" cancelText="Cancel">\n\n          <ion-option>Aries</ion-option>\n\n          <ion-option>Taurus</ion-option>\n\n          <ion-option>Gemini</ion-option>\n\n          <ion-option>Cancer</ion-option>\n\n          <ion-option>Leo</ion-option>\n\n          <ion-option>Virgo</ion-option>\n\n          <ion-option>Libra</ion-option>\n\n          <ion-option>corpio</ion-option>\n\n          <ion-option>Sagitarius</ion-option>\n\n          <ion-option>Capricorn</ion-option>\n\n          <ion-option>Aquarius</ion-option>\n\n          <ion-option>Pisces</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>HAVING / DOSHAM</ion-label>\n\n        <ion-select [(ngModel)]="authForm.Dosham" okText="Done" cancelText="Cancel">\n\n          <ion-option>Yes</ion-option>\n\n          <ion-option>No</ion-option>\n\n          <ion-option>Don\'t know</ion-option>\n\n        </ion-select>\n\n      </ion-item> -->\n\n\n\n      <button (click)="save()" ion-button round>SAVE</button>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\partnerreligious\partnerreligious.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], partnerreligiousPage);
    return partnerreligiousPage;
}());

//# sourceMappingURL=partnerreligious.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalpreferancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfessionalpreferancePage = /** @class */ (function () {
    function ProfessionalpreferancePage(navCtrl, nav, fb, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.fb = fb;
        this.http = http;
        this.authForm = {};
    }
    ProfessionalpreferancePage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    ProfessionalpreferancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-professionalpreferance',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\professionalpreferance\professionalpreferance.html"*/'\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding class="card-background-page">\n\n    \n\n     \n\n    <ion-list>\n\n    <h4 class="top-title">PROFESSIONAL PREFERENCE</h4>\n\n        \n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>WHAT I AM LOOKING FOR</ion-label>\n\n      <ion-input type="text" [(ngModel)]="authForm.Description" required ></ion-input>\n\n  </ion-item>\n\n\n\n          <button  type="submit"  (click)="save()" ion-button round>SAVE</button>\n\n </ion-list>\n\n\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\professionalpreferance\professionalpreferance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], ProfessionalpreferancePage);
    return ProfessionalpreferancePage;
}());

//# sourceMappingURL=professionalpreferance.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationpreferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationpreferencePage = /** @class */ (function () {
    // authFormone : FormGroup;
    function LocationpreferencePage(navCtrl, nav, fb, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.fb = fb;
        this.http = http;
        this.authForm = {};
        // this.authFormone = fb.group({
        //   'Street' : [null, Validators.compose([Validators.required])],
        //   'City': [null, Validators.compose([Validators.required])],
        //   'State': [null, Validators.compose([Validators.required])],
        //   'PIN': [null, Validators.compose([Validators.required])]
        // });
    }
    LocationpreferencePage.prototype.save = function () {
        var _this = this;
        var cookie = localStorage.getItem("Usercookie");
        var myDataone = this.authForm;
        console.log(myDataone);
        this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie);
        this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
            .then(function (data) {
            console.log(data.data);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    LocationpreferencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-locationpreference',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\locationpreference\locationpreference.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="login">EDIT PROFILE</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n  <!-- <form (ngSubmit)="save()" [formGroup]="authFormone">   -->\n\n  <ion-list>\n\n    <h4 class="top-title">LOCATION</h4>\n\n  \n\n    <ion-item>\n\n      <ion-label color="primary" floating>CITY</ion-label>\n\n      <ion-select [(ngModel)]="authForm.PARTNER_City" okText="Done" cancelText="Cancel">\n\n        <ion-option>Chennai</ion-option>\n\n        <ion-option>Coimbatore</ion-option>\n\n        <ion-option>Madurai</ion-option>\n\n        <ion-option>Trichy</ion-option>\n\n        <ion-option>Thirunelveli</ion-option>\n\n        <ion-option>Bangalore</ion-option>\n\n        <ion-option>Mumbai</ion-option>\n\n        <ion-option>Goa</ion-option>\n\n        <ion-option>Delhi</ion-option>\n\n        <ion-option>kolkata</ion-option>\n\n        <ion-option>Selam</ion-option>\n\n        <ion-option>Agra</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>STATE</ion-label>\n\n      <ion-select [(ngModel)]="authForm.PARTNER_State" okText="Done" cancelText="Cancel">\n\n        <ion-option>Tamilnadu</ion-option>\n\n        <ion-option>Karnatak</ion-option>\n\n        <ion-option>Mumbai</ion-option>\n\n        <ion-option>Kolkata</ion-option>\n\n        <ion-option>Delhi</ion-option>\n\n        <ion-option>Kerala</ion-option>\n\n        <ion-option>Andra</ion-option>\n\n        <ion-option>Pune</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>PIN</ion-label>\n\n      <ion-input type="number" [(ngModel)]="authForm.PARTNER_PIN" okText="Done" cancelText="Cancel"></ion-input>\n\n    </ion-item>\n\n\n\n    <button type="submit" (click)="save()" ion-button round>SAVE</button>\n\n\n\n  </ion-list>\n\n  <!-- </form> -->\n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\locationpreference\locationpreference.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], LocationpreferencePage);
    return LocationpreferencePage;
}());

//# sourceMappingURL=locationpreference.js.map

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'F:\\Mukesh smk\\Tasks\\matriapp\\src\\pages\\lookingfor\\lookingfor.ts'");

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsnotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsnotificationPage = /** @class */ (function () {
    function SettingsnotificationPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    SettingsnotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settingsnotification',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\settingsnotification\settingsnotification.html"*/'<ion-header>\n\n\n\n        <ion-navbar>\n\n          \n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title class="inbox-title">SETTINGS</ion-title>\n\n        </ion-navbar>\n\n      \n\n      </ion-header>\n\n      \n\n      <ion-content >\n\n            <ion-list>\n\n                                   \n\n                    <ion-item>\n\n                      <ion-label>Daily Recommendations</ion-label>\n\n                      <ion-toggle value="one" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Who Viewed My Profile</ion-label>\n\n                        <ion-toggle value="two" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                        <ion-item>\n\n                        <ion-label>New Matching Profile</ion-label>\n\n                        <ion-toggle value="three" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                \n\n                    <ion-item>\n\n                        <ion-label>Photo Match Watch</ion-label>\n\n                        <ion-toggle value="four" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Who Shorlisted Me</ion-label>\n\n                        <ion-toggle value="five" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>All Notifications</ion-label>\n\n                        <ion-toggle value="six" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>SMS Alert</ion-label>\n\n                        <ion-toggle value="seven" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                      \n\n                    \n\n            </ion-list>\n\n                \n\n        \n\n      </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\settingsnotification\settingsnotification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], SettingsnotificationPage);
    return SettingsnotificationPage;
}());

//# sourceMappingURL=settingsnotification.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\account\account.html"*/'<ion-header>\n\n\n\n        <ion-navbar>\n\n          \n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title class="inbox-title">ACCOUNT</ion-title>\n\n        </ion-navbar>\n\n      \n\n      </ion-header>\n\n      \n\n      <ion-content >\n\n            <div class="matches-view">\n\n                    <div class="match-icon"> <ion-icon name="log-out"></ion-icon></div>\n\n                    <div class="match-conetent">Logout</div>\n\n                </div>\n\n                <div class="matches-view">\n\n                    <div class="match-icon">  <ion-icon ios="ios-trash" md="md-trash"></ion-icon></div>\n\n                    <div class="match-conetent">Delete Account</div>\n\n                </div>\n\n                <div class="matches-view">\n\n                    <div class="match-icon"> <ion-icon name="ios-person"></ion-icon></div>\n\n                    <div class="match-conetent">Edit Profile</div>\n\n                </div>\n\n      \n\n      </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ignoredprofiles_ignoredprofiles__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_contactfilter_contactfilter__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_blockedprofiles_blockedprofiles__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_phoneprivacy_phoneprivacy__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    PrivacyPage.prototype.gotoignoredprofiles = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_ignoredprofiles_ignoredprofiles__["a" /* IgnoredprofilesPage */]);
        }), 1000;
    };
    PrivacyPage.prototype.gotocontactfilter = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_contactfilter_contactfilter__["a" /* ContactfilterPage */]);
        }), 1000;
    };
    PrivacyPage.prototype.gotoblockedprofiles = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_blockedprofiles_blockedprofiles__["a" /* BlockedprofilesPage */]);
        }), 1000;
    };
    PrivacyPage.prototype.gotophoneprivacy = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_phoneprivacy_phoneprivacy__["a" /* PhoneprivacyPage */]);
        }), 1000;
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\privacy\privacy.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">PRIVACY</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-grid>\n\n        <ion-row (click)="gotocontactfilter()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/privacy-1.png"></ion-col><ion-col class="privacy-content" col-10> Contact Filter</ion-col>\n\n        </ion-row>\n\n        <ion-row (click)="gotoblockedprofiles()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/privacy-2.png"></ion-col><ion-col class="privacy-content" col-10> Blocked Profiles</ion-col>\n\n        </ion-row>\n\n        <ion-row (click)="gotoignoredprofiles()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/privacy-3.png"></ion-col><ion-col class="privacy-content" col-10> Ignored Profiles</ion-col>\n\n        </ion-row>\n\n        <ion-row (click)="gotophoneprivacy()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/privacy-4.png"></ion-col><ion-col class="privacy-content" col-10> Phone Privacy</ion-col>\n\n        </ion-row>\n\n       \n\n      </ion-grid>\n\n   \n\n       \n\n \n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\privacy\privacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgnoredprofilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_profiledetails_profiledetails__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IgnoredprofilesPage = /** @class */ (function () {
    function IgnoredprofilesPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    IgnoredprofilesPage.prototype.gotoprofiledetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */]);
        }), 1000;
    };
    IgnoredprofilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ignoredprofiles',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\ignoredprofiles\ignoredprofiles.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">Ignored Profiles</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n    \n\n        <ion-card>\n\n            \n\n            <div class="card" (click)="gotoprofiledetails()">\n\n              <div class="card-1">\n\n                <img class="card-1-img" src="assets/imgs/1.png">\n\n              </div>\n\n              <div class="card-2">\n\n                <p>H12345678</p>\n\n                <h2>Rakesh</h2>\n\n                <p>20 yrs, 5.5ft / 165 cm </p>\n\n                <p>B.Sc IT/Computer Science , Hindu</p>\n\n                <p>Cast ,Hasta </p>\n\n                <p>Lucknow, Uttar pradhesh, india</p>  \n\n        \n\n              </div>\n\n            </div>\n\n           \n\n        </ion-card>\n\n           \n\n        <ion-card>\n\n                <div class="card" (click)="gotoprofiledetails()">\n\n                  <div class="card-1">\n\n                    <img class="card-1-img" src="assets/imgs/2.png">\n\n                  \n\n                  </div>\n\n                  <div class="card-2">\n\n                    <p>H12345678</p>\n\n                    <h2>Rakesh</h2>\n\n                    <p>20 yrs, 5.5ft / 165 cm </p>\n\n                    <p>B.Sc IT/Computer Science , Hindu</p>\n\n                    <p>Cast ,Hasta </p>\n\n                    <p>Lucknow, Uttar pradhesh, india</p>  \n\n                    \n\n                  </div>\n\n                </div>\n\n               \n\n              </ion-card>\n\n               \n\n     \n\n    </ion-content>\n\n    \n\n    '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\ignoredprofiles\ignoredprofiles.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], IgnoredprofilesPage);
    return IgnoredprofilesPage;
}());

//# sourceMappingURL=ignoredprofiles.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactfilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactfilterPage = /** @class */ (function () {
    function ContactfilterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactfilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contactfilter',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\contactfilter\contactfilter.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">CONTACT FILTER</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list radio-group>\n\n        <ion-list-header>\n\n          WHO CAN CONTACT ME\n\n        </ion-list-header>\n\n      \n\n        <ion-item>\n\n          <ion-label>Anyone</ion-label>\n\n          <ion-radio checked="true" value="go"></ion-radio>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>Only members who meet my criteria</ion-label>\n\n          <ion-radio value="rust"></ion-radio>\n\n        </ion-item>\n\n      \n\n      </ion-list>\n\n   \n\n       \n\n \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button color="secondary" clear>UPDATE FILTER</button>\n\n</ion-footer>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\contactfilter\contactfilter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ContactfilterPage);
    return ContactfilterPage;
}());

//# sourceMappingURL=contactfilter.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockedprofilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_profiledetails_profiledetails__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockedprofilesPage = /** @class */ (function () {
    function BlockedprofilesPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    BlockedprofilesPage.prototype.gotoprofiledetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */]);
        }), 1000;
    };
    BlockedprofilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blockedprofiles',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\blockedprofiles\blockedprofiles.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">BLOCKED PROFILES</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n\n\n        <div class="card" (click)="gotoprofiledetails()">\n\n          <div class="card-1">\n\n            <img class="card-1-img" src="assets/imgs/1.png">\n\n          </div>\n\n          <div class="card-2">\n\n            <p>H12345678</p>\n\n            <h2>Rakesh</h2>\n\n            <p>20 yrs, 5.5ft / 165 cm </p>\n\n            <p>B.Sc IT/Computer Science , Hindu</p>\n\n            <p>Cast ,Hasta </p>\n\n            <p>Lucknow, Uttar pradhesh, india</p>  \n\n    \n\n          </div>\n\n        </div>\n\n       \n\n    </ion-card>\n\n       \n\n \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\blockedprofiles\blockedprofiles.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], BlockedprofilesPage);
    return BlockedprofilesPage;
}());

//# sourceMappingURL=blockedprofiles.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneprivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneprivacyPage = /** @class */ (function () {
    function PhoneprivacyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhoneprivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phoneprivacy',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\phoneprivacy\phoneprivacy.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">CONTACT FILTER</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n    \n\n        <ion-list radio-group>\n\n            <ion-list-header>\n\n              Show phone number only to\n\n            </ion-list-header>\n\n          \n\n            <ion-item>\n\n              <ion-label>All Paid Members</ion-label>\n\n              <ion-radio checked="true" value="paid"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>Paid members from my community</ion-label>\n\n              <ion-radio value="community"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Paid members from whom i contacted/responded to</ion-label>\n\n                <ion-radio value="contacted"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Dont show phone number (Hide contact details)</ion-label>\n\n                <ion-radio value="hidenumber"></ion-radio>\n\n            </ion-item>\n\n          \n\n          </ion-list>\n\n       \n\n           \n\n     \n\n    </ion-content>\n\n    '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\phoneprivacy\phoneprivacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], PhoneprivacyPage);
    return PhoneprivacyPage;
}());

//# sourceMappingURL=phoneprivacy.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_profiledetails_profiledetails__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { OpenNativeSettings } from '@ionic-native/open-native-settings';

var NearyouPage = /** @class */ (function () {
    function NearyouPage(navCtrl, nav, alerCtrl) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.alerCtrl = alerCtrl;
    }
    // ngOnInit() {
    //   let confirm = this.alerCtrl.create({
    //     message: "For best results, turn on device location,which uses Google's location sevice.",
    //     buttons: [
    //       {
    //         text: 'CANCEL',
    //         handler: () => {
    //           console.log('Disagree clicked');
    //         }
    //       },
    //       {
    //         text: 'OK',
    //         handler: () => {
    //           this.openNativeSettings.open('location');
    //           console.log('Agree clicked');
    //         }
    //       }
    //     ]
    //   });
    //   confirm.present()
    // }
    NearyouPage.prototype.gotoprofiledetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */]);
        }), 1000;
    };
    NearyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nearyou',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\nearyou\nearyou.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">MEMBERSHIP</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <ion-card>\n\n    <div class="card" (click)="gotoprofiledetails()">\n\n      <div class="card-1">\n\n        <img class="card-1-img" src="assets/imgs/1.png">\n\n       <div class="icon-1">\n\n          <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n          <p>Shortlist</p>\n\n       </div>\n\n       <div class="icon-1">\n\n          <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n\n          <p>1w ago</p>\n\n        </div> \n\n      </div>\n\n      <div class="card-2">\n\n        <p>H12345678</p>\n\n        <h2>Rakesh</h2>\n\n        <p>20 yrs, 5.5ft / 165 cm </p>\n\n        <p>B.Sc IT/Computer Science , Hindu</p>\n\n        <p>Cast ,Hasta </p>\n\n        <p>Lucknow, Uttar pradhesh, india</p>  \n\n         <div class="icon-2">\n\n          <div class="like-her">\n\n              <p>Like Him?</p>\n\n            </div>\n\n            <div class="icon-cancel">\n\n                <ion-icon class="icon-close" name="close"></ion-icon>\n\n            </div>\n\n            <div class="icon-okey">\n\n                <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n\n            </div>\n\n       </div> \n\n      </div>\n\n    </div>\n\n   \n\n  </ion-card>\n\n  <ion-card>\n\n      <div class="card" (click)="gotoprofiledetails()">\n\n        <div class="card-1">\n\n          <img class="card-1-img" src="assets/imgs/2.png">\n\n         <div class="icon-1">\n\n            <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n            <p>Shortlist</p>\n\n         </div>\n\n         <div class="icon-1">\n\n            <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n\n            <p>1w ago</p>\n\n          </div> \n\n        </div>\n\n        <div class="card-2">\n\n          <p>H12345678</p>\n\n          <h2>Rakesh</h2>\n\n          <p>20 yrs, 5.5ft / 165 cm </p>\n\n          <p>B.Sc IT/Computer Science , Hindu</p>\n\n          <p>Cast ,Hasta </p>\n\n          <p>Lucknow, Uttar pradhesh, india</p>  \n\n           <div class="icon-2">\n\n            <div class="like-her">\n\n                <p>Like Him?</p>\n\n              </div>\n\n              <div class="icon-cancel">\n\n                  <ion-icon class="icon-close" name="close"></ion-icon>\n\n              </div>\n\n              <div class="icon-okey">\n\n                  <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n\n              </div>\n\n         </div> \n\n        </div>\n\n      </div>\n\n     \n\n    </ion-card>\n\n    <ion-card>\n\n        <div class="card" (click)="gotoprofiledetails()">\n\n          <div class="card-1">\n\n            <img class="card-1-img" src="assets/imgs/3.png">\n\n           <div class="icon-1">\n\n              <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n              <p>Shortlist</p>\n\n           </div>\n\n           <div class="icon-1">\n\n              <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n\n              <p>1w ago</p>\n\n            </div> \n\n          </div>\n\n          <div class="card-2">\n\n            <p>H12345678</p>\n\n            <h2>Rakesh</h2>\n\n            <p>20 yrs, 5.5ft / 165 cm </p>\n\n            <p>B.Sc IT/Computer Science , Hindu</p>\n\n            <p>Cast ,Hasta </p>\n\n            <p>Lucknow, Uttar pradhesh, india</p>  \n\n             <div class="icon-2">\n\n              <div class="like-her">\n\n                  <p>Like Him?</p>\n\n                </div>\n\n                <div class="icon-cancel">\n\n                    <ion-icon class="icon-close" name="close"></ion-icon>\n\n                </div>\n\n                <div class="icon-okey">\n\n                    <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n\n                </div>\n\n           </div> \n\n          </div>\n\n        </div>\n\n       \n\n      </ion-card>\n\n     \n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\nearyou\nearyou.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], NearyouPage);
    return NearyouPage;
}());

//# sourceMappingURL=nearyou.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedback',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\feedback\feedback.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">FEEDBACK</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n        <p class="feedback-content">How was your experience with our app?</p>\n\n\n\n        <textarea class="textarea" placeholder="Write your feedback here" \n\n            value="{{ about_me}}"> \n\n        </textarea>\n\n\n\n        <button ion-button color="secondary" clear>SUBMIT</button>\n\n       \n\n  \n\n        <ion-grid>\n\n            <p class="grid-p">for any ather help,feel free to contact us</p>\n\n                <ion-row>\n\n                  <ion-col col-6 class="call">\n\n                        <ion-icon class="call-icon" ios="ios-call" md="md-call"></ion-icon><br>\n\n                        <p class="call-content">Call us</p>\n\n                        <p class="call-number">+91 XXXXXXXXXX</p>\n\n                  </ion-col>\n\n                  <ion-col col-6 class="call">\n\n                        <ion-icon class="chat-icon" ios="ios-chatboxes" md="md-chatboxes"></ion-icon><br>\n\n                        <p class="call-content">Chat Now</p>\n\n                        <p class="call-number">27x7 customer care</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n        </ion-grid>\n\n       \n\n \n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchlocatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BranchlocatorPage = /** @class */ (function () {
    function BranchlocatorPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    BranchlocatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-branchlocator',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\branchlocator\branchlocator.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">BRANCH LOCATOR</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n    \n\n            <ion-grid>\n\n\n\n                    <ion-row class="location">\n\n                      <ion-col col-5>India</ion-col>\n\n                      <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                      <ion-col col-5>9878456343</ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row class="location">\n\n                        <ion-col col-5>USA</ion-col>\n\n                        <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                        <ion-col col-5>818-XXX-XXXX</ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row class="location">\n\n                        <ion-col col-5>UAE</ion-col>\n\n                        <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                        <ion-col col-5>8000-XXXX-XXXX</ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <ion-row class="location">\n\n                        <ion-col col-5>UK</ion-col>\n\n                        <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                        <ion-col col-5>0-XXX-XXX-XXXX</ion-col>\n\n                    </ion-row>\n\n      \n\n                    <ion-row class="location">\n\n                        <ion-col col-5>Malaysia</ion-col>\n\n                        <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                        <ion-col col-5>603-XXXXXXXXX</ion-col>\n\n                    </ion-row>\n\n      \n\n                    <ion-row class="location">\n\n                        <ion-col col-5>Singapore</ion-col>\n\n                        <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                        <ion-col col-5>XXXXXXXXXX</ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row class="location">\n\n                        <ion-col col-5>Australia</ion-col>\n\n                        <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                        <ion-col col-5>XXXXXXXXXX</ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row class="location">\n\n                        <ion-col col-5>Others</ion-col>\n\n                        <ion-col col-2> <ion-icon  ios="ios-call" md="md-call"></ion-icon></ion-col>\n\n                        <ion-col col-5>India<br>XXXXXXXXXX</ion-col>\n\n                    </ion-row>\n\n\n\n            </ion-grid>\n\n           \n\n     \n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\branchlocator\branchlocator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], BranchlocatorPage);
    return BranchlocatorPage;
}());

//# sourceMappingURL=branchlocator.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_faqprofile_faqprofile__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_faqmembership_faqmembership__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_faqcontact_faqcontact__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_faqsearch_faqsearch__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_faqprivacy_faqprivacy__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    FaqPage.prototype.gotofaqprofile = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_faqprofile_faqprofile__["a" /* FaqprofilePage */]);
        }), 1000;
    };
    FaqPage.prototype.gotofaqmembership = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_faqmembership_faqmembership__["a" /* FaqmembershipPage */]);
        }), 1000;
    };
    FaqPage.prototype.gotofaqcontact = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_faqcontact_faqcontact__["a" /* FaqcontactPage */]);
        }), 1000;
    };
    FaqPage.prototype.gotofaqsearch = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_faqsearch_faqsearch__["a" /* FaqsearchPage */]);
        }), 1000;
    };
    FaqPage.prototype.gotofaqprivacy = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_faqprivacy_faqprivacy__["a" /* FaqprivacyPage */]);
        }), 1000;
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\faq\faq.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">FAQs</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n    \n\n        <ion-grid>\n\n            <ion-row (click)="gotofaqprofile()">\n\n              <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/faq/1.png"></ion-col><ion-col class="privacy-content" col-10> Profile</ion-col>\n\n            </ion-row>\n\n            <ion-row (click)="gotofaqmembership()">\n\n              <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/faq/2.png"></ion-col><ion-col class="privacy-content" col-10> Membership</ion-col>\n\n            </ion-row>\n\n            <ion-row (click)="gotofaqcontact()">\n\n              <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/faq/3.png"></ion-col><ion-col class="privacy-content" col-10> Contact Matches</ion-col>\n\n            </ion-row>\n\n            <ion-row (click)="gotofaqsearch()">\n\n              <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/faq/4.png"></ion-col><ion-col class="privacy-content" col-10> Searches</ion-col>\n\n            </ion-row>\n\n            <ion-row (click)="gotofaqprivacy()">\n\n              <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/faq/5.png"></ion-col><ion-col class="privacy-content" col-10> Privacy Settings</ion-col>\n\n            </ion-row>           \n\n        </ion-grid>\n\n       \n\n           \n\n     \n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\faq\faq.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqprofilePage = /** @class */ (function () {
    function FaqprofilePage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    FaqprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faqprofile',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqprofile\faqprofile.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">Profile</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n          \n\n            <div class="accordion">\n\n              <ul>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is profile validation?</a>\n\n                  <div class="acc-panel">\n\n                    <p>All the profiles are validated before inclusion in the database. Express Validation of profile will take just 1 Hour Turn Around Time. Our support team meticulously validates each and every profile carefully on specific criterion before it is added to our database. E-mail will be sent to you once the profile is validated and added.</p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Can I use the same e-mail ID for multiple registrations?</a>\n\n                  <div class="acc-panel">\n\n                    <p>\n\n                      Yes. You can create a maximum of two profiles using the same e-mail ID.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I modify my profile?</a>\n\n                  <div class="acc-panel">\n\n                \n\n                    <p>\n\n                      Once you are logged in to your account, click on the Settings icon on the top-right of the screen. Select Edit Profile from the menu and make changes to your profile.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Are there any restrictions on modifications?</a>\n\n                  <div class="acc-panel">\n\n                   <p>Most of the contents of your profile can be modified as often as you wish to do so. However, the member\'s Age can be edited only once. Certain fields such as Marital Status, Mother Tongue, Religion, Caste and Sub Caste cannot be edited.</p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is \'Change Profile Status\'?</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                      Your profile status can either be set as \'Active\' or \'Deactivate\'. By default, the profile status is \'Active\'. Setting the profile status to \'Deactivate\' makes your profile invisible to others. But you will be able to login and contact other profiles. Any member can change the status of profile.\n\n                     </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Is it possible to restore the deleted profile?</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                      You cannot restore or reactivate your profile once it is deleted from our database.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is horoscope validation?</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                      Every horoscope posted on our website will go through 24 hours of validation that involves a manual screening.\n\n                      Only after the horoscope is validated will it be available for all members to see.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I modify my profile?How do I protect my horoscope?</a>\n\n                  <div class="acc-panel">\n\n                  \n\n                    <p>\n\n                      This is an exclusive feature available only to paid members.\n\nYou can protect only an uploaded horoscope with a Password and only those members with whom you share your Password can view your horoscope.\n\n\n\nNote: If you forget your Password, you can set a new Password but you cannot retrieve the old one.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How to delete horoscope?</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                      Login using your Matrimony ID/E-mail ID and Password.\n\nClick on the Edit Profile section.\n\nClick on the Edit horoscope link under Enhance My Profile heading.\n\nIn the Edit horoscope page, click on delete button.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is request horoscope?</a>\n\n                  <div class="acc-panel">\n\n                  \n\n                    <p>\n\n                      This feature helps you to send a request to a member to add his/her horoscope if he/she has not added one.\n\n\n\n                      close\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n    \n\n     \n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqprofile\faqprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FaqprofilePage);
    return FaqprofilePage;
}());

//# sourceMappingURL=faqprofile.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqmembershipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqmembershipPage = /** @class */ (function () {
    function FaqmembershipPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    FaqmembershipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faqmembership',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqmembership\faqmembership.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">MEMBERSHIP</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n      \n\n        <div class="accordion">\n\n          <ul>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">What is BenkeyMatrimony Personalised Matchmaking services?</a>\n\n              <div class="acc-panel">\n\n                <p>\n\n                    You are provided with a Personal Matchmaker, who will do an expert search, identify, short-list and contact prospective life partners on your behalf to help you find your life partner. Your Personal Matchmaker also tracks responses, monitors matching profiles and keeps you informed on developments related to matchmaking on a regular basis. Your Personal Matchmaker will understand all your needs in your life partner search. There are Personal Matchmakers based in India and their services are also extended to members across the globe.\n\n                </p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">What is the difference between free membership & paid (Classic/Classic Advantage/Classic Premium/Assisted) membership?</a>\n\n              <div class="acc-panel">\n\n                <p>\n\n                        Benefits of free member\n\n\n\n                        Send an automated message to another member with \'Express Interest\'.\n\n                        Respond to personalised messages and chat from paid members.\n\n                        \n\n                        Benefits of paid member\n\n                        \n\n                        You can send personalised e-mails to members you like instead of sending Express Interest.\n\n                        BharatMatrimony has an instant messenger where you can initiate chat with prospects you are interested in and have a conversation instantly.\n\n                        You can protect your photo, video and horoscope with a password.\n\n                        You can view the contact details of the referees.\n\n                        You can view the contact number of members you like.\n\n                        You can contact any one from millions of members across the 15 regional portals.\n\n                </p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">What are the different modes of payment?</a>\n\n              <div class="acc-panel">\n\n            \n\n                <p>\n\n                        You can make online payments through credit card/debit card/net banking, pay at banks, BharatMatrimony offices, Payment Associates and Easy Payment facilities.\n\n                        Online payment is the easiest, fastest and secured mode of payment. Our payment gateway provider adopts the SSL (Secure Socket Layer) technology, an internationally proven widely accepted technology that ensures highest level of security while transacting on the net, preventing unauthorised access.\n\n                        You can also send in the payment to any of our offices, located nearest to your place, through cash, cheque or DD/MO. Payments should be sent in the local currency only. We also have a payment collection at doorstep facility in select cities, at no extra charge.\n\n                </p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">Is online payment secure?</a>\n\n              <div class="acc-panel">\n\n               <p>\n\n                    Yes! It is secure to make online payments. Our payment gateway provider adopts the SSL (Secured Socket Layer) technology, an internationally proven widely accepted technology. Our payment gateway service providers ensure that your credit card details are kept secure while transacting on the net, preventing unauthorised access.\n\n               </p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">Pay at banks</a>\n\n              <div class="acc-panel">\n\n               \n\n                <p>\n\n                        Visit any of the State Bank of India or HDFC Bank or ICICI Bank branches across India to make Cash, Cheque / DD payments. After depositing the Cheque / DD, call 0-814-499-8877 with your Cheque / DD details.\n\n\n\n                        Electronic Fund Transfer facility is available through SBI Bank using RTGS/NEFT IFSC Code SBIN0009999, through ICICI BANK using RTGS/NEFT IFSC Code ICIC0000212 and through HDFC BANK using RTGS/NEFT IFSC Code HDFC0000386.\n\n                </p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">Payment Associates</a>\n\n              <div class="acc-panel">\n\n               \n\n                <p>\n\n                        We have hundreds of Associates across the country. You can upgrade / renew your membership by making the payment directly to the associates.\n\n                        The Cheque / DD should be drawn in favour of the Associate. Choose this option and click the "Continue" button to find an Associate nearest to you.\n\n                </p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">Payments sent to India</a>\n\n              <div class="acc-panel">\n\n               \n\n                <p>\n\n                        Cheque or DD to be taken in favour of \'Consim Info Pvt Ltd.\'\n\n                        Indian Offices\n\n                </p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <a href="#" class="acc-handle" tabindex="0">How long will it take to upgrade my profile if I have made the payment by Cheque/DD through post or courier?</a>\n\n              <div class="acc-panel">\n\n              \n\n                <p>\n\n                        We will upgrade your profile once we receive your payment. If you have made the payment and your profile is still not upgraded, kindly contact our branch office or send an e-mail to benkeymatrimony@gmail.com along with your payment details.\n\n                </p>\n\n              </div>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n\n\n \n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqmembership\faqmembership.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FaqmembershipPage);
    return FaqmembershipPage;
}());

//# sourceMappingURL=faqmembership.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqcontactPage = /** @class */ (function () {
    function FaqcontactPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    FaqcontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faqcontact',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqcontact\faqcontact.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">CONTACT MATCHES</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n          \n\n            <div class="accordion">\n\n              <ul>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is Express Interest?</a>\n\n                  <div class="acc-panel">\n\n                    <p>\n\n                            \'Express Interest\' is an exclusive feature that enables you to send automated messages to members absolutely FREE and let them know that you are interested in them.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is the difference between free membership & paid (Classic/Classic Advantage/Classic Premium/Assisted) membership?How will I know if a member has accepted/declined my interest?</a>\n\n                  <div class="acc-panel">\n\n                    <p>\n\n                            You will be notified via e-mail when a member accepts/declines your interest. You can also login to your account and select the \'Interests Sent\' option under Express Interest to know how many members have accepted/declined your interest.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Will my contact information be revealed to the member I have expressed my interest in?</a>\n\n                  <div class="acc-panel">\n\n                \n\n                    <p>\n\n                            No. Only an automated message expressing your interest will be sent to the member without revealing your contact information.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I chat?</a>\n\n                  <div class="acc-panel">\n\n                   <p>\n\n                        You can chat with other members online only if you are a paid member. Then after login, you can use the "Who\'s Online" search form to get the members online matching your search criteria. You can go to the member\'s profile and click on "Chat" link to start chatting.\n\n                   </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Can a free member initiate chat?</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                            No. Only a paid membership enables a member to initiate chat online.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I know who is online?</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                            Click on the Search link in the top navigation bar. Choose Members Online. You can search from the list of members online and chat with them if you are a paid member.\n\n                            Also while using other search tools, in the search results page, there will be an indication to CHAT with the member if the member is online. You can initiate chat if you are a paid member.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Call / Send SMS</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                            Only paid members can view the verified mobile number of other members and call them. Alternatively, they can also send an SMS. Only one SMS can be sent per member.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I send personalised messages to a member who has accepted my interest?</a>\n\n                  <div class="acc-panel">\n\n                  \n\n                    <p>\n\n                            You can send personalised messages to a member who has accepted your interest by upgrading your membership to a Classic/Classic Advantage/Classic Premium/Assisted membership.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n    \n\n     \n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqcontact\faqcontact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FaqcontactPage);
    return FaqcontactPage;
}());

//# sourceMappingURL=faqcontact.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqsearchPage = /** @class */ (function () {
    function FaqsearchPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    FaqsearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faqsearch',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqsearch\faqsearch.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">SEARCH</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n          \n\n            <div class="accordion">\n\n              <ul>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is Quick Search?</a>\n\n                  <div class="acc-panel">\n\n                    <p>\n\n                            Quick search enables search of profiles through gender, domain, caste, age, and profiles with photo.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">\n\n                        What is Regular Search?</a>\n\n                  <div class="acc-panel">\n\n                    <p>\n\n                            This is a detailed search and will give you better results. Options on mother tongue, physical status, location, horoscope and lifestyle besides age, height, marital status, regional sites, religion, caste/division, subcaste, citizenship, country living in, education and \'show results posted on\' will be displayed. You can save up to three saved searches that will be displayed on the right hand corner. Login using your Matrimony/e-mail ID and Password. Click on Advanced Search link.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">\n\n                        What is Advanced Search?</a>\n\n                  <div class="acc-panel">\n\n                \n\n                    <p>\n\n                            This is a detailed search and will give you better results. Options on mother tongue, physical status, location, horoscope and lifestyle besides age, height, marital status, regional sites, religion, caste/division, subcaste, citizenship, country living in, education and \'show results posted on\' will be displayed. You can save up to three saved searches that will be displayed on the right hand corner. Login using your Matrimony/e-mail ID and Password. Click on Advanced Search link.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Search by Member ID</a>\n\n                  <div class="acc-panel">\n\n                   <p>\n\n                        Enter the Matrimony ID of the member whose profile you would like to see. Click on View Profile link.\n\n                   </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Search by Members Online</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                            Search for members based on your preference and those who are currently online.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Keywords Search</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                            This search will get results based on keywords found in the profile description of members.\n\n                            Example: Software Engineer, Brahmin Iyer, Loves pets, Cricket...\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">Search results</a>\n\n                  <div class="acc-panel">\n\n                   \n\n                    <p>\n\n                            When your search options are not broad enough then your search results will say so. To get better search results reset the criteria in your profile by: Click on Search link. Reset the basic search criteria. Click on Save Search link.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">What is partner preference?</a>\n\n                  <div class="acc-panel">\n\n                  \n\n                    <p>\n\n                            Partner Preference is a feature that helps you define your ideal spouse and set your suitability criteria. You will be intimated by e-mail everyday about new profiles matching your criteria. With this feature you would receive information about members suiting your expectations regularly.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n    \n\n     \n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqsearch\faqsearch.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FaqsearchPage);
    return FaqsearchPage;
}());

//# sourceMappingURL=faqsearch.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqprivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqprivacyPage = /** @class */ (function () {
    function FaqprivacyPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    FaqprivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faqprivacy',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqprivacy\faqprivacy.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title class="inbox-title">PRIVACY SETTINGS</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content>\n\n          \n\n            <div class="accordion">\n\n              <ul>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I change my Password?</a>\n\n                  <div class="acc-panel">\n\n                    <p>\n\n                            You can change your Password. Go to Profile Settings < Change Password >.\n\n                            Enter Current Password, then New password and Confirm the New Password.\n\n                            Then Click on Change password button.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">I forgot my Matrimony ID/Password. What should I do?</a>\n\n                  <div class="acc-panel">\n\n                    <p>\n\n                            You can retrieve your Matrimony ID/Password by clicking on Forgot Password link in home page and enter your E-mail ID. We will send you an e-mail with your \'Matrimony ID\' and \'Password\' immediately. Your E-mail ID should be the one given in your profile.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I block profiles?</a>\n\n                  <div class="acc-panel">\n\n                \n\n                    <p>\n\n                            Login using your \'Matrimony/e-mail ID\' and \'Password.\'\n\nSelect "Search" option, enter the ID of the member in \'By Member Matrimony ID\' option.\n\n\n\nYou will find options to block profiles.\n\nThe profiles will be added to your \'Block List\'.\n\n\n\nThis means these members will not be able to contact you or express interest in you, likewise even you cannot contact them.\n\n\n\nThis feature is available to Paid Members only.\n\n                    </p>\n\n                  </div>\n\n                </li>\n\n                <li>\n\n                  <a href="#" class="acc-handle" tabindex="0">How do I view/edit Blocked profiles?</a>\n\n                  <div class="acc-panel">\n\n                   <p>\n\n                        Only paid members can use the Block Profile feature.\n\nTo view the profiles you have blocked, login to your account, in the My Home page, under Lists, click on the members I have blocked link.\n\nTo remove profiles from your block list, select the profile and click on the Unblock link.\n\n                   </p>\n\n                  </div>\n\n                </li>\n\n               \n\n              </ul>\n\n            </div>\n\n    \n\n     \n\n    </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\faqprivacy\faqprivacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], FaqprivacyPage);
    return FaqprivacyPage;
}());

//# sourceMappingURL=faqprivacy.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FiltersearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiltersearchPage = /** @class */ (function () {
    function FiltersearchPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.country = [];
        this.country1 = [];
    }
    FiltersearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        console.log();
        var link = "https://restcountries.eu/rest/v2/all";
        console.log(link);
        this.http.get(link)
            .subscribe(function (data) {
            var resp = JSON.parse(data["_body"]); //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            console.log(resp);
            _this.country1 = resp;
            _this.country = _this.country1;
            console.log(_this.country);
            loading.dismiss();
        });
    };
    FiltersearchPage.prototype.closesearch = function (text) {
        console.log(text.flag);
    };
    FiltersearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        this.country = this.country1;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.country = this.country.filter(function (item) {
                //console.log( item.name.common)
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    FiltersearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filtersearch',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\filtersearch\filtersearch.html"*/'<!--\n  Generated template for the FiltersearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-searchbar class="homeSearch" [showCancelButton]="shouldShowCancel" placeholder="selectcountry"(ionInput)="getItems($event)"></ion-searchbar>\n\n\n</ion-header>\n\n\n<ion-content>\n<!-- <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n  </div> -->\n<ion-list>\n<div  ion-item *ngFor="let item of country" (click)="closesearch(item)">\n      <img src="{{item.flag}}" width="5%">\n  {{ item.name}} \n  <span style="float:right">\n      \n      +{{item.callingCodes[0]}}\n  </span>\n  </div>\n</ion-list>\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\filtersearch\filtersearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], FiltersearchPage);
    return FiltersearchPage;
}());

//# sourceMappingURL=filtersearch.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(416);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_first_first__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_banner_banner__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_successstories_successstories__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_membership_membership__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profiledetails_profiledetails__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settingsnotification_settingsnotification__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_nearyou_nearyou__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_alert_alert__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_search__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_privacy_privacy__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contactfilter_contactfilter__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_blockedprofiles_blockedprofiles__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ignoredprofiles_ignoredprofiles__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_phoneprivacy_phoneprivacy__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_helpcenter_helpcenter__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_feedback_feedback__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_branchlocator_branchlocator__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_account_account__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_faq_faq__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_faqprofile_faqprofile__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_faqmembership_faqmembership__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_faqcontact_faqcontact__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_faqsearch_faqsearch__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_faqprivacy_faqprivacy__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_api_api__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_edit_edit__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_inbox_inbox__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_swipe_swipe__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_editprofileown_editprofileown__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_basicdetails_basicdetails__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_religious_religious__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_professional_professional__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_location_location__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_familydetails_familydetails__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_aboutmyfamily_aboutmyfamily__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_partnerbasicdetails_partnerbasicdetails__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_partnerreligious_partnerreligious__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_professionalpreferance_professionalpreferance__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_locationpreference_locationpreference__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_lookingfor_lookingfor__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_lookingfor_lookingfor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49__pages_lookingfor_lookingfor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_comingsoon_comingsoon__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ionic2_super_tabs__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ionic_img_viewer__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_open_native_settings__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_angular2_swing__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_58_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_ionic_select_searchable__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_59_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_filtersearch_filtersearch__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_uploadimg_uploadimg__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_auth_service__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_camera__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_file_transfer__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_file__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_storage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_image_picker__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_base64__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































// import { SentPage } from '../pages/sent/sent';
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_banner_banner__["a" /* BannerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_successstories_successstories__["a" /* SuccessstoriesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settingsnotification_settingsnotification__["a" /* SettingsnotificationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_nearyou_nearyou__["a" /* NearyouPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contactfilter_contactfilter__["a" /* ContactfilterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_blockedprofiles_blockedprofiles__["a" /* BlockedprofilesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ignoredprofiles_ignoredprofiles__["a" /* IgnoredprofilesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_phoneprivacy_phoneprivacy__["a" /* PhoneprivacyPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_helpcenter_helpcenter__["a" /* HelpcenterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_branchlocator_branchlocator__["a" /* BranchlocatorPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_faqprofile_faqprofile__["a" /* FaqprofilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_faqmembership_faqmembership__["a" /* FaqmembershipPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_faqcontact_faqcontact__["a" /* FaqcontactPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_faqsearch_faqsearch__["a" /* FaqsearchPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_faqprivacy_faqprivacy__["a" /* FaqprivacyPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_api_api__["a" /* ApiPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_editprofileown_editprofileown__["a" /* EditprofileownPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_basicdetails_basicdetails__["a" /* BasicdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_religious_religious__["a" /* ReligiousPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_professional_professional__["a" /* ProfessionalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_familydetails_familydetails__["a" /* FamilydetailsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_aboutmyfamily_aboutmyfamily__["a" /* AboutmyfamilyPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_partnerbasicdetails_partnerbasicdetails__["a" /* PartnerbasicdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_partnerreligious_partnerreligious__["a" /* partnerreligiousPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_professionalpreferance_professionalpreferance__["a" /* ProfessionalpreferancePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_filtersearch_filtersearch__["a" /* FiltersearchPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_locationpreference_locationpreference__["a" /* LocationpreferencePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lookingfor_lookingfor__["LookingforPage"],
                __WEBPACK_IMPORTED_MODULE_50__pages_comingsoon_comingsoon__["a" /* ComingsoonPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_uploadimg_uploadimg__["a" /* UploadimgPage */],
                // SentPage,
                __WEBPACK_IMPORTED_MODULE_37__pages_swipe_swipe__["a" /* SwipePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/filtersearch/filtersearch.module#FiltersearchPageModule', name: 'FiltersearchPage', segment: 'filtersearch', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_52_ionic2_super_tabs__["a" /* SuperTabsModule */],
                __WEBPACK_IMPORTED_MODULE_54__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_59_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_58_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_66__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_56_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_banner_banner__["a" /* BannerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_successstories_successstories__["a" /* SuccessstoriesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settingsnotification_settingsnotification__["a" /* SettingsnotificationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_nearyou_nearyou__["a" /* NearyouPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contactfilter_contactfilter__["a" /* ContactfilterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_blockedprofiles_blockedprofiles__["a" /* BlockedprofilesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ignoredprofiles_ignoredprofiles__["a" /* IgnoredprofilesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_phoneprivacy_phoneprivacy__["a" /* PhoneprivacyPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_helpcenter_helpcenter__["a" /* HelpcenterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_branchlocator_branchlocator__["a" /* BranchlocatorPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_faqprofile_faqprofile__["a" /* FaqprofilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_faqmembership_faqmembership__["a" /* FaqmembershipPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_faqcontact_faqcontact__["a" /* FaqcontactPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_faqsearch_faqsearch__["a" /* FaqsearchPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_faqprivacy_faqprivacy__["a" /* FaqprivacyPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_api_api__["a" /* ApiPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_professional_professional__["a" /* ProfessionalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_familydetails_familydetails__["a" /* FamilydetailsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_aboutmyfamily_aboutmyfamily__["a" /* AboutmyfamilyPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_partnerbasicdetails_partnerbasicdetails__["a" /* PartnerbasicdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_partnerreligious_partnerreligious__["a" /* partnerreligiousPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lookingfor_lookingfor__["LookingforPage"],
                __WEBPACK_IMPORTED_MODULE_50__pages_comingsoon_comingsoon__["a" /* ComingsoonPage */],
                // SentPage,
                __WEBPACK_IMPORTED_MODULE_37__pages_swipe_swipe__["a" /* SwipePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_editprofileown_editprofileown__["a" /* EditprofileownPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_basicdetails_basicdetails__["a" /* BasicdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_religious_religious__["a" /* ReligiousPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_filtersearch_filtersearch__["a" /* FiltersearchPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_professionalpreferance_professionalpreferance__["a" /* ProfessionalpreferancePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_locationpreference_locationpreference__["a" /* LocationpreferencePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_uploadimg_uploadimg__["a" /* UploadimgPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_67__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_63__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_62__providers_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, app, splashScreen, alertCtrl) {
        // used for an example of ngFor and navigation
        // this.pages = [
        //   { title: 'My Matches', component: HomePage,icon: "ios-people"},
        //   { title: 'Success Stories', component: SuccessstoriesPage,icon: "ios-contacts" },
        //   { title: 'Membership', component: MembershipPage,icon: "person-add" },
        //   { title: 'Settings', component: SettingsPage,icon: "md-settings" },
        //   { title: 'Signup', component: SignupPage,icon: "ios-chatbubbles" },
        //   { title: 'Login', component: LoginPage,icon: "document" },
        //    { title: 'Edit Profile', component: EditPage,icon: "ios-person" },
        this.platform = platform;
        this.statusBar = statusBar;
        this.app = app;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */];
        this.alertShown = false;
        //   // { title: 'Inbox', component: InboxPage,icon: "mail-open" },
        //   // { title: 'Sent', component: SentPage ,icon: "md-send"},
        //   // { title: 'Daily Recommendations', component: SwipePage ,icon: "ios-calendar"},
        //   // { title: 'Help Center', component: HelpcenterPage,icon: "ios-help-circle" },
        //   // { title: 'Notification', component: NotificationPage,icon: "ios-notifications" }
        //   ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\app\app.html"*/'<ion-menu [content]="content">\n  <img src="assets/imgs/comingsoon.png" style="margin: 25% 0">\n<!-- <ion-header no-border>\n      <ion-toolbar>\n       <div class="sidemenu">\n          <div class="sidemenu-img">\n              <img src="assets/imgs/img.png" class="logo-size profile-img" alt="logo">\n              \n          </div>\n          <div class="sidemenu-content">\n            <p>M5607253</p>\n            <div class="profile-name">\n                <h5>Mukesh Kumar S</h5>\n            </div>\n            <div class="edit">\n                <ion-icon class="edit-icon" ios="ios-create" md="md-create"></ion-icon>\n            </div>\n            \n          </div>\n       </div> \n   \n      </ion-toolbar>\n    </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <div class="menu-margin">\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon class="menu-icon" item-end [name]="p.icon"></ion-icon> {{p.title}}\n        </button>\n      </div>\n    </ion-list>\n  </ion-content> -->\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-card>\n          <div class="card">\n            <div class="card-1">\n              <img class="card-1-img" src="assets/imgs/1.png">\n             <div class="icon-1">\n                <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n                <p>Shortlist</p>\n             </div>\n             <div class="icon-1">\n                <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n                <p>1w ago</p>\n              </div> \n            </div>\n            <div class="card-2">\n              <p>H12345678</p>\n              <h2>Rakesh</h2>\n              <p>20 yrs, 5.5ft / 165 cm </p>\n              <p>B.Sc IT/Computer Science , Hindu</p>\n              <p>Cast ,Hasta </p>\n              <p>Lucknow, Uttar pradhesh, india</p>  \n               <div class="icon-2">\n                <div class="like-her">\n                    <p>Like Her?</p>\n                  </div>\n                  <div class="icon-cancel">\n                      <ion-icon class="icon-close" name="close"></ion-icon>\n                  </div>\n                  <div class="icon-okey">\n                      <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                  </div>\n             </div> \n            </div>\n          </div>\n         \n        </ion-card>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_first_first__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BannerPage = /** @class */ (function () {
    function BannerPage(navCtrl, loadingCtrl, nav) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
    }
    BannerPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Accessing your profile'
        });
        loading.present();
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_first_first__["a" /* FirstPage */]);
        }, 2000);
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    BannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-banner',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\banner\banner.html"*/'\n\n<ion-header>\n\n      \n\n</ion-header>\n\n\n\n  <ion-content>\n\n    \n\n    <img src="assets/imgs/mobile-banner.png" style="height: 100%;">\n\n          \n\n  </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\banner\banner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], BannerPage);
    return BannerPage;
}());

//# sourceMappingURL=banner.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessstoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessstoriesPage = /** @class */ (function () {
    function SuccessstoriesPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    SuccessstoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-successstories',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\successstories\successstories.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="inbox-title">SUCCESS STORIES</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n        <div class="card-details">\n\n            <div class="card-img">\n\n                <img src="assets/imgs/1-1.png">\n\n            </div>\n\n            <div class="card-content">\n\n                <h5>Kohli & Anushka sharma</h5>\n\n                <p>M33756548</p>\n\n                <p>Marriage Date:08-FEB-17</p>\n\n            </div>\n\n            <div class="card-story">\n\n                <p>\n\n                    Today we have promised each other to be bound in love for ever. We are truly blessed to share the news with you. This beautiful\n\n                    day will be made more special with the love and support of our family of fans & well wishers.\n\n                </p>\n\n            </div>\n\n\n\n        </div>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <div class="card-details">\n\n            <div class="card-img">\n\n                <img src="assets/imgs/1-2.png">\n\n            </div>\n\n            <div class="card-content">\n\n                <h5>Raina & Priyanka</h5>\n\n                <p>M33756548</p>\n\n                <p>Marriage Date:08-FEB-17</p>\n\n            </div>\n\n            <div class="card-story">\n\n                <p>\n\n                    Today we have promised each other to be bound in love for ever. We are truly blessed to share the news with you. This beautiful\n\n                    day will be made more special with the love and support of our family of fans & well wishers. \n\n                </p>\n\n            </div>\n\n\n\n        </div>\n\n\n\n    </ion-card>\n\n\n\n\n\n    <ion-card>\n\n        <div class="card-details">\n\n            <div class="card-img">\n\n                <img src="assets/imgs/1-3.png">\n\n            </div>\n\n            <div class="card-content">\n\n                <h5>Dhoni & sakshi </h5>\n\n                <p>M33756548</p>\n\n                <p>Marriage Date:08-FEB-17</p>\n\n            </div>\n\n            <div class="card-story">\n\n                <p>\n\n                    Today we have promised each other to be bound in love for ever. We are truly blessed to share the news with you. This beautiful\n\n                    day will be made more special with the love and support of our family of fans & well wishers. \n\n                </p>\n\n            </div>\n\n\n\n        </div>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n            <div class="card-details">\n\n                <div class="card-img">\n\n                    <img src="assets/imgs/1-1.png">\n\n                </div>\n\n                <div class="card-content">\n\n                    <h5>Kohli & Anushka sharma</h5>\n\n                    <p>M33756548</p>\n\n                    <p>Marriage Date:08-FEB-17</p>\n\n                </div>\n\n                <div class="card-story">\n\n                    <p>\n\n                        Today we have promised each other to be bound in love for ever. We are truly blessed to share the news with you. This beautiful\n\n                        day will be made more special with the love and support of our family of fans & well wishers. \n\n                    </p>\n\n                </div>\n\n    \n\n            </div>\n\n    \n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\successstories\successstories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], SuccessstoriesPage);
    return SuccessstoriesPage;
}());

//# sourceMappingURL=successstories.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settingsnotification_settingsnotification__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_account_account__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_privacy_privacy__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    SettingsPage.prototype.gotosettingsnotification = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_settingsnotification_settingsnotification__["a" /* SettingsnotificationPage */]);
        }, 1000);
    };
    SettingsPage.prototype.gotoaccount = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_account_account__["a" /* AccountPage */]);
        }, 1000);
    };
    SettingsPage.prototype.gotoprivacy = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_privacy_privacy__["a" /* PrivacyPage */]);
        }, 100);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      \n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="inbox-title">SETTINGS</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content >\n\n\n\n     <div class="settings">\n\n    \n\n        <div class="matches-view">\n\n            <div class="match-icon"><ion-icon ios="ios-people" md="md-people"></ion-icon></div>\n\n            <div class="match-conetent">Matches View</div>\n\n            <ion-list radio-group>                 \n\n                    <ion-item>\n\n                      <ion-label>List View</ion-label>\n\n                      <ion-radio checked="true" value="go"></ion-radio>\n\n                    </ion-item>\n\n                  \n\n                    <ion-item>\n\n                      <ion-label>Photo View</ion-label>\n\n                      <ion-radio value="rust"></ion-radio>\n\n                    </ion-item>\n\n            </ion-list>\n\n        </div>\n\n        <div class="matches-view" (click)="gotosettingsnotification()">\n\n            <div class="match-icon"><ion-icon name="notifications"></ion-icon></div>\n\n            <div class="match-conetent">Notifications</div>\n\n        </div>\n\n        <div class="matches-view" (click)="gotoprivacy()">\n\n            <div class="match-icon"> <ion-icon ios="ios-lock" md="md-lock"></ion-icon></div>\n\n            <div class="match-conetent">Privacy</div>\n\n        </div>\n\n        <div class="matches-view" (click)="gotoaccount()">\n\n            <div class="match-icon">  <ion-icon ios="ios-person" md="md-person"></ion-icon></div>\n\n            <div class="match-conetent"> Account</div>\n\n        </div>\n\n    </div>\n\n    \n\n  \n\n  </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_open_native_settings__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_nearyou_nearyou__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlertPage = /** @class */ (function () {
    function AlertPage(navCtrl, loadingCtrl, nav, alerCtrl, openNativeSettings) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.alerCtrl = alerCtrl;
        this.openNativeSettings = openNativeSettings;
        // let loading = this.loadingCtrl.create({
        //   content: 'Loading...'
        // });
    }
    AlertPage.prototype.ngOnInit = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            message: "For best results, turn on device location,which uses Google's location sevice.",
            buttons: [
                {
                    text: 'CANCEL',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.openNativeSettings.open('location');
                        setTimeout(function () {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_nearyou_nearyou__["a" /* NearyouPage */]);
                        }), 3000;
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-alert',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\alert\alert.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">NEAR YOU PAGE </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  \n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\alert\alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpcenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_feedback_feedback__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_branchlocator_branchlocator__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_faq_faq__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelpcenterPage = /** @class */ (function () {
    function HelpcenterPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    HelpcenterPage.prototype.gotofeedback = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_feedback_feedback__["a" /* FeedbackPage */]);
        }), 1000;
    };
    HelpcenterPage.prototype.gotobranches = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_branchlocator_branchlocator__["a" /* BranchlocatorPage */]);
        }), 1000;
    };
    HelpcenterPage.prototype.gotofaq = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_faq_faq__["a" /* FaqPage */]);
        }), 1000;
    };
    HelpcenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-helpcenter',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\helpcenter\helpcenter.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="inbox-title">27X7 HELP CENTER</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-grid>\n\n        <ion-row (click)="gotofaq()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/help/1.png"></ion-col><ion-col class="privacy-content" col-10> FAQ</ion-col>\n\n        </ion-row>\n\n        <ion-row (click)="gotofeedback()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/help/2.png"></ion-col><ion-col class="privacy-content" col-10> Feedback</ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row (click)="gotochat()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/help/3.png"></ion-col><ion-col class="privacy-content" col-10> 24x7 chat</ion-col>\n\n        </ion-row> -->\n\n        <ion-row (click)="gotobranches()">\n\n          <ion-col col-2 class="col1"><img class="privacy-img" src="assets/imgs/help/4.png"></ion-col><ion-col class="privacy-content" col-10> Branch Locator</ion-col>\n\n        </ion-row>\n\n       \n\n      </ion-grid>\n\n   \n\n       \n\n \n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\helpcenter\helpcenter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], HelpcenterPage);
    return HelpcenterPage;
}());

//# sourceMappingURL=helpcenter.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiPage = /** @class */ (function () {
    function ApiPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    ApiPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var imgUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20009695fbbb42ac8bdcf0fdfbf8036d';
        console.log(imgUrl);
        this.http.get(imgUrl)
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            // console.log(result);
            _this.news = result.articles;
            console.log(_this.news);
        });
    };
    ApiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-api',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\api\api.html"*/'<ion-header>\n\n        <ion-navbar>\n\n            <ion-title>News</ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      \n\n      <ion-content class="cards-bg social-cards">\n\n      <ion-card>\n\n        <div *ngFor="let s of news" >\n\n            <ion-card class="product-card" (click)="page(s)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{s.urlToImage}}" class="list-image" *ngIf="s.urlToImage!=null" />\n\n                </ion-thumbnail>\n\n                <h2 class="product-title" *ngIf="s.urlToImage!=null">{{s.title}}</h2>\n\n                <p class="ingredient" *ngIf="s.urlToImage!=null">{{s.publishedAt}}</p>\n\n                <p class="description"  *ngIf="s.urlToImage!=null">{{s.description }}</p>\n\n            </ion-card>\n\n        </div>\n\n      </ion-card>\n\n      </ion-content>\n\n      '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\api\api.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ApiPage);
    return ApiPage;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// For swipe cards



var SwipePage = /** @class */ (function () {
    function SwipePage(http) {
        var _this = this;
        this.http = http;
        this.recentCard = '';
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 300;
            }
        };
    }
    SwipePage.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
        // this.cards = [{email: ''}];
        this.cards = [];
        this.addNewCards(3);
    };
    // Called whenever we drag an element
    SwipePage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x < 0) {
            color = '#FF' + hexCode + hexCode;
        }
        else {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        if (color.length > 7) {
            color = '#FFFFFF';
        }
        // console.log('color :'+color.length);
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // Connected through HTML
    SwipePage.prototype.voteUp = function (like) {
        console.log('voteup called with ' + like);
        console.log('this.cards : ' + JSON.stringify(this.cards));
        var removedCard = this.cards.pop();
        console.log('length ' + Object.keys(removedCard).length);
        // if(Object.keys(removedCard).length == 0){
        //   console.log('Popped two cards');
        //   removedCard = this.cards.pop();
        // }
        console.log('removedCard : ' + JSON.stringify(removedCard));
        this.addNewCards(1);
        if (like) {
            // this.recentCard = 'You liked: ' + removedCard.email;
            console.log('You liked: ' + removedCard.name.first + ' ' + removedCard.name.last);
        }
        else {
            // this.recentCard = 'You disliked: ' + removedCard.email;
            console.log('You disliked: ' + removedCard.name.first + ' ' + removedCard.name.last);
            // console.log('You disliked: ' + removedCard.email);
        }
    };
    // Add new cards to our array
    SwipePage.prototype.addNewCards = function (count) {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=' + count)
            .map(function (data) { return data.json().results; })
            .subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var val = result_1[_i];
                console.log("pushing : " + JSON.stringify(val));
                // this.cards=this.cards.reverse();
                // if(this.cards.length>1){
                //   console.log('popping cards');
                //   let card2=this.cards.pop();
                //   console.log('popped'+card2);
                //   let card1=this.cards.pop();
                //   console.log('popped'+card1);
                // }
                var shiftCards = void 0, oldCard = void 0, oldCard2 = void 0;
                shiftCards = false;
                if (_this.cards.length == 2) {
                    oldCard = _this.cards.pop();
                    oldCard2 = _this.cards.pop();
                    shiftCards = true;
                }
                _this.cards.push(val);
                if (shiftCards) {
                    // console.log('Pushing oldCard '+oldCard);
                    _this.cards.push(oldCard2);
                    _this.cards.push(oldCard);
                }
                // if(this.cards.length>1){
                //   this.cards.push(card1);
                //   this.cards.push(card2);
                // }
                // this.cards=this.cards.reverse();
                // this.cards.unshift(val);
                // this.cards.reverse();
            }
            // this.cards=this.cards.reverse();
            console.log("cards : " + JSON.stringify(_this.cards));
        });
    };
    // Add new cards to our array
    // addNewCards2(count: number) {
    //   this.http.get('https://randomuser.me/api/?results=' + count)
    //   .map(data => data.json().results)
    //   .subscribe(result => {
    //     for (let val of result) {
    //       console.log("pushing : "+JSON.stringify(val));
    //       // this.cards=this.cards.reverse();
    //       this.cards.unshift(val);
    //       // this.cards=this.cards.reverse();
    //       // this.cards.unshift(val);
    //       // this.cards.reverse();
    //     }
    //     // this.cards=this.cards.reverse();
    //     console.log("cards : "+JSON.stringify(this.cards));
    //   })
    // }
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    SwipePage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    SwipePage.prototype.trackByCards = function (index, cardData) {
        // console.log('trackByCards');
        // console.log(cardData);
        // console.log(cardData.email);
        // if(cardData)
        return cardData.email;
        // else
        //   return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["SwingStackComponent"])
    ], SwipePage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], SwipePage.prototype, "swingCards", void 0);
    SwipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-swipe',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\swipe\swipe.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Daily Recommendations</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding  class="no-scroll">\n\n    <!-- Card stack container -->\n\n    <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack" [style.zIndex]="-1000">\n\n      <!-- Card container --> \n\n      <ion-card #mycards1 swing-card *ngFor="let c of cards;trackBy:trackByCards; let i=index;" [style.zIndex]="-1+i" [style.marginTop]="i===0?\'0px\':\'12px\'">\n\n        <ion-row *ngIf="c.picture">\n\n          <ion-col>\n\n              <img *ngIf="c.picture" [src]="c.picture.large" imageViewer>  \n\n              <!-- <img *ngIf="c.picture" src="https://blackopswiki.s3.amazonaws.com/uploads/article/avatar/207/large_avatar_default-user-icon.png">   -->\n\n              \n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="c.picture">\n\n          <ion-col class="card_user_info">\n\n              <!-- <h2 class="card_user_name">{{i}}:{{ c.name.first }} {{ c.name.last}}</h2>   -->\n\n              <h2 class="card_user_name">{{ c.name.first }} {{ c.name.last}}</h2>  \n\n              <h4 class="card_user_city">{{ c.location.city }}</h4>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n  \n\n        <!-- <ion-item *ngIf="c.picture"> -->\n\n          <!-- <ion-avatar item-left>\n\n            <img *ngIf="c.picture" [src]="c.picture.medium">\n\n          </ion-avatar> -->\n\n          <!-- <h2>{{ c.name.first }} {{ c.name.last}}</h2> -->\n\n          <!-- <p>{{ c.email }}</p> -->\n\n          <!-- <h4>{{ c.location.city }}</h4> -->\n\n          <!-- <ion-card-content *ngIf="c.location"> -->\n\n            \n\n            <!-- From: {{ c.location.city }}, {{ c.location.postcode }}<br>\n\n            Phone: {{ c.phone }} -->\n\n          <!-- </ion-card-content> -->\n\n        <!-- </ion-item> -->\n\n   \n\n        \n\n   \n\n        \n\n      </ion-card>\n\n      <!--/ Card container -->\n\n      \n\n    </div>\n\n    <ion-row class="responseIconRow">\n\n      <ion-col class="responseIcon">\n\n        <button ion-button clear small icon-left color="primary" (click)="voteUp(false)">\n\n          <!-- <ion-icon name="thumbs-down"></ion-icon> -->\n\n          <ion-icon name="close-circle" class="dislikeicon"></ion-icon>\n\n          <!-- No -->\n\n        </button>\n\n      </ion-col>\n\n      <ion-col  class="responseIcon">\n\n        <button ion-button clear small icon-left color="primary" (click)="voteUp(true)">\n\n          <ion-icon name="heart" class="likeicon"></ion-icon>\n\n          <!-- <ion-icon name="thumbs-up"></ion-icon> -->\n\n          <!-- Yes -->\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <p style="text-align: center; width: 100%;">{{ recentCard }}</p> -->\n\n    <!--/ Card stack container -->\n\n  </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\swipe\swipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SwipePage);
    return SwipePage;
}());

//# sourceMappingURL=swipe.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiledetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_membership_membership__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfiledetailsPage = /** @class */ (function () {
    function ProfiledetailsPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
    }
    ProfiledetailsPage.prototype.gotomember = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_membership_membership__["a" /* MembershipPage */]);
        }), 1000;
    };
    ProfiledetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profiledetails',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\profiledetails\profiledetails.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="inbox-title">H7167576</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n        <div class="card">\n\n            <img src="assets/imgs/13.jpg" imageViewer>\n\n            <div class="card-title1">Kavya</div>\n\n            <div class="card-subtitle">20 Yrs,5\'9\',Delhi / NCR,India</div>\n\n        </div>\n\n\n\n        <div class="tabs">\n\n\n\n            <a class="tab-item" (click)="toggleButton(1)"><ion-icon name="star-outline"></ion-icon>  Shortlist </a>\n\n    \n\n            <a class="tab-item" onclick="document.getElementById(\'id01\').style.display=\'block\'"> <ion-icon ios="ios-call" md="md-call"></ion-icon> Call Now </a>\n\n    \n\n            <a class="tab-item" onclick="document.getElementById(\'id02\').style.display=\'block\'">   <ion-icon name="chatbubbles"></ion-icon> Chat Now</a>\n\n    \n\n        </div>\n\n    \n\n        <ion-card-content>\n\n\n\n            <h5 class="personal-details">Personal Details</h5>\n\n            <ion-card-title class="detail-header">\n\n                    <ion-icon class="edit-icon" ios="ios-create" md="md-create"></ion-icon> In My Own Words\n\n            </ion-card-title>\n\n            <p class="detail-content">\n\n                    My sister has completed her Bachelor\'s degree. She is currently not working and she lives in Vadakkuvalliyur. We come from a middle class, joint family background with moderate values. she s very much interested in agriculture and dairy farming\n\n            </p>\n\n\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n                <ion-card-title class="detail-header">\n\n                        <ion-icon class="edit-icon" name="document"></ion-icon> Basic Details\n\n                </ion-card-title>\n\n                \n\n                <ion-row><ion-col>Name</ion-col><ion-col>: Kavya</ion-col></ion-row>\n\n                <ion-row><ion-col>Gender</ion-col><ion-col>: Female</ion-col></ion-row>\n\n                <ion-row><ion-col>Age</ion-col><ion-col>: 20 yrs</ion-col></ion-row>\n\n                <ion-row><ion-col>Height</ion-col><ion-col>: 5 Ft 9 in / 175 Cms</ion-col></ion-row>\n\n                <ion-row><ion-col>Weight</ion-col><ion-col>: 65 kgs / 143 lbs </ion-col></ion-row>\n\n                <ion-row><ion-col>Maritial Status</ion-col><ion-col>: Never Married</ion-col></ion-row>\n\n                <ion-row><ion-col>Mother Tongue</ion-col><ion-col>: Tamil</ion-col></ion-row>\n\n                <ion-row><ion-col>Physical Status</ion-col><ion-col>: Normal</ion-col></ion-row>\n\n                <ion-row><ion-col>Body Type</ion-col><ion-col>: Average</ion-col></ion-row>\n\n                <ion-row><ion-col>Complexion</ion-col><ion-col>: Wheatish</ion-col></ion-row>\n\n                <ion-row><ion-col>Profile Created by</ion-col><ion-col>: Myself</ion-col></ion-row>\n\n                <ion-row><ion-col>Eating Habits</ion-col><ion-col>: Eggetarian</ion-col></ion-row>\n\n                <ion-row><ion-col>Drinking Habits</ion-col><ion-col>: Never Drinks</ion-col></ion-row>\n\n                <ion-row><ion-col>Smoking Habits</ion-col><ion-col>: Never Smokes</ion-col></ion-row>\n\n        </ion-card-content>\n\n\n\n\n\n\n\n        <ion-card-content>\n\n\n\n                <ion-card-title class="detail-header">\n\n                        <ion-icon class="edit-icon" ios="ios-person" md="md-person"></ion-icon> Basic Details\n\n                </ion-card-title>\n\n                \n\n                <ion-row><ion-col>Contact Number</ion-col><ion-col>: <span class="blur">9878654564</span> |  <ion-icon ios="ios-lock" md="md-lock"></ion-icon></ion-col></ion-row>\n\n                <ion-row><ion-col>Chat Status</ion-col><ion-col>: Offline </ion-col></ion-row>\n\n                <ion-row><ion-col>Send Mail</ion-col><ion-col>: Locked | <ion-icon ios="ios-lock" md="md-lock"></ion-icon></ion-col></ion-row>\n\n               \n\n                <ion-grid class="upgrade">\n\n                        <ion-row><ion-col class="lock"><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></ion-col><ion-col class="unlock">To unlock the contact Details</ion-col><ion-col><button class="upgrade-now" (click)="gotomember()" ion-button color="secondary">Upgrade now</button></ion-col></ion-row>    \n\n                </ion-grid>\n\n        </ion-card-content>\n\n    \n\n\n\n        <ion-card-content>\n\n\n\n                <ion-card-title class="detail-header">\n\n                        <ion-icon class="edit-icon" name="document"></ion-icon> Religious Information\n\n                </ion-card-title>\n\n                \n\n                <ion-row><ion-col>Religion</ion-col><ion-col>: Hindu</ion-col></ion-row>\n\n                <ion-row><ion-col>Caste</ion-col><ion-col>: Some</ion-col></ion-row>\n\n                <ion-row><ion-col>Sub Caste</ion-col><ion-col>: Don\'t Know sub-caste</ion-col></ion-row>\n\n                <ion-row><ion-col>Gothram</ion-col><ion-col>:  Send Request</ion-col></ion-row>\n\n                <ion-row><ion-col>Star</ion-col><ion-col>: Send Request </ion-col></ion-row>\n\n                <ion-row><ion-col>Raasi</ion-col><ion-col>: Kark</ion-col></ion-row>\n\n        </ion-card-content>\n\n\n\n\n\n        <ion-card-content>\n\n                <ion-card-title class="detail-header">\n\n                        <ion-icon class="edit-icon" name="document"></ion-icon> Professional Information\n\n                </ion-card-title>\n\n                \n\n                <ion-row><ion-col>Educational Category</ion-col><ion-col>:  B.E</ion-col></ion-row>\n\n                <ion-row><ion-col>Educational in Detail</ion-col><ion-col>:  Send Request</ion-col></ion-row>\n\n                <ion-row><ion-col>Occupation</ion-col><ion-col>:  Student</ion-col></ion-row>\n\n                <ion-row><ion-col>Emplyed In </ion-col><ion-col>:  Not Working</ion-col></ion-row>\n\n        </ion-card-content>\n\n\n\n\n\n        <ion-card-content>\n\n                <ion-card-title class="detail-header">\n\n                        <ion-icon class="edit-icon" ios="ios-school" md="md-school"></ion-icon>Location\n\n                         \n\n                </ion-card-title>\n\n                \n\n                <ion-row><ion-col>Country</ion-col><ion-col>:  India</ion-col></ion-row>\n\n                <ion-row><ion-col>State</ion-col><ion-col>: Delhi/NCR</ion-col></ion-row>\n\n                <ion-row><ion-col>Citizenship</ion-col><ion-col>:  India</ion-col></ion-row>\n\n               \n\n        </ion-card-content>\n\n\n\n\n\n        <ion-card-content>\n\n                <ion-card-title class="detail-header">\n\n                        <ion-icon class="edit-icon" ios="ios-people" md="md-people"></ion-icon>Family Details\n\n                         \n\n                </ion-card-title>\n\n                \n\n                <ion-row><ion-col>Family Values</ion-col><ion-col>:  Moderate</ion-col></ion-row>\n\n                <ion-row><ion-col>Family Type</ion-col><ion-col>: Joint family</ion-col></ion-row>\n\n                <ion-row><ion-col>Family Status</ion-col><ion-col>:  Upper Middle class</ion-col></ion-row>\n\n                <ion-row><ion-col>Father\'s Occupation</ion-col><ion-col>: Business man</ion-col></ion-row>\n\n                <ion-row><ion-col>mother\'s Occupation</ion-col><ion-col>:  Homemaker</ion-col></ion-row>\n\n                <ion-row><ion-col>Ancestral Origin</ion-col><ion-col>: Send Request</ion-col></ion-row>\n\n                               \n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <ion-card-title class="detail-header">\n\n                    <ion-icon class="edit-icon" ios="ios-people" md="md-people"></ion-icon>About Our Family\n\n                    \n\n            </ion-card-title>\n\n        </ion-card-content>\n\n\n\n      </ion-card>\n\n\n\n      <ion-card-content>\n\n            <h5 class="personal-details">PARTNER PREFERENCE</h5>\n\n\n\n            <ion-row class="preference"><ion-col><img class="partner" src="assets/imgs/img.png"></ion-col><ion-col class="profile-match">Your Profile matches 16/21 of her preferences</ion-col><ion-col><img class="partner" src="assets/imgs/13.png"></ion-col></ion-row>\n\n\n\n            <ion-card-title class="detail-header">\n\n                    <ion-icon class="edit-icon" name="document"></ion-icon> Basic Details\n\n            </ion-card-title>\n\n \n\n            <ion-row><ion-col>Grooms Age</ion-col><ion-col>: 20 yrs</ion-col></ion-row>\n\n            <ion-row><ion-col>Height</ion-col><ion-col>: 5 Ft 9 in / 175 Cms</ion-col></ion-row>\n\n            <ion-row><ion-col>Maritial Status</ion-col><ion-col>: Never Married</ion-col></ion-row>\n\n            <ion-row><ion-col>Mother Tongue</ion-col><ion-col>: Tamil</ion-col></ion-row>\n\n            <ion-row><ion-col>Physical Status</ion-col><ion-col>: Normal</ion-col></ion-row>\n\n            <ion-row><ion-col>Eating Habits</ion-col><ion-col>: Eggetarian</ion-col></ion-row>\n\n            <ion-row><ion-col>Drinking Habits</ion-col><ion-col>: Never Drinks</ion-col></ion-row>\n\n            <ion-row><ion-col>Smoking Habits</ion-col><ion-col>: Never Smokes</ion-col></ion-row>\n\n    </ion-card-content>\n\n\n\n    <ion-card-content>\n\n\n\n            <ion-card-title class="detail-header">\n\n                    <ion-icon class="edit-icon" name="document"></ion-icon> Religious Information\n\n            </ion-card-title>\n\n            \n\n            <ion-row><ion-col>Religion</ion-col><ion-col>: Hindu</ion-col></ion-row>\n\n            <ion-row><ion-col>Caste</ion-col><ion-col>: Some</ion-col></ion-row>\n\n            <ion-row><ion-col>Sub Caste</ion-col><ion-col>: Any</ion-col></ion-row>\n\n            <ion-row><ion-col>Gothram</ion-col><ion-col>:  Any</ion-col></ion-row>\n\n            <ion-row><ion-col>Star</ion-col><ion-col>: Any </ion-col></ion-row>\n\n            <ion-row><ion-col>Raasi</ion-col><ion-col>: Any</ion-col></ion-row>\n\n    </ion-card-content>\n\n\n\n\n\n    <ion-card-content>\n\n            <ion-card-title class="detail-header">\n\n                    <ion-icon class="edit-icon" name="document"></ion-icon> Professional Information\n\n            </ion-card-title>\n\n            \n\n            <ion-row><ion-col>Educational </ion-col><ion-col>:  Any</ion-col></ion-row>\n\n            <ion-row><ion-col>Occupation</ion-col><ion-col>:  Any</ion-col></ion-row>\n\n            <ion-row><ion-col>Emplyed In </ion-col><ion-col>:  Any</ion-col></ion-row>\n\n    </ion-card-content>\n\n\n\n\n\n    <ion-card-content>\n\n            <ion-card-title class="detail-header">\n\n                    <ion-icon class="edit-icon" ios="ios-school" md="md-school"></ion-icon>Location\n\n                     \n\n            </ion-card-title>\n\n            \n\n            <ion-row><ion-col>Country</ion-col><ion-col>:  India</ion-col></ion-row>\n\n            <ion-row><ion-col>Residing State</ion-col><ion-col>: Uttra Pradesh</ion-col></ion-row>\n\n            <ion-row><ion-col>Residing City</ion-col><ion-col>: Azagrah</ion-col></ion-row>\n\n            <ion-row><ion-col>Citizenship</ion-col><ion-col>:  Any</ion-col></ion-row>\n\n           \n\n    </ion-card-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <div class="w3-container">\n\n            \n\n        <div id="id01" class="w3-modal">\n\n          <div class="w3-modal-content w3-animate-top w3-card-4">\n\n            <header class="w3-container w3-teal"> \n\n              <span onclick="document.getElementById(\'id01\').style.display=\'none\'" class="w3-button w3-display-topright">&times;</span>\n\n              <div class="popup-img">\n\n                <img class="partner" src="assets/imgs/13.png" style="margin-top: 20px;">\n\n                <p> Kavya</p>\n\n              </div>\n\n            </header>\n\n            <div class="w3-container">\n\n               <div class="popup-contact">\n\n                <p>Contact kavya on</p>\n\n                <p><ion-icon class="popup-icon" ios="ios-call" md="md-call"></ion-icon> +91 9510XXXXXX</p>\n\n                <button (click)="gotomember()" ion-button color="secondary" clear>UPGRADE NOW</button>\n\n               </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n\n        <div id="id02" class="w3-modal">\n\n                <div class="w3-modal-content w3-animate-top w3-card-4">\n\n                  <header class="w3-container w3-teal"> \n\n                    <span onclick="document.getElementById(\'id02\').style.display=\'none\'" class="w3-button w3-display-topright">&times;</span>\n\n                    <div class="popup-img">\n\n                      <img class="partner" src="assets/imgs/13.png" style="margin-top: 20px;">\n\n                      <p> Kavya</p>\n\n                    </div>\n\n                  </header>\n\n                  <div class="w3-container">\n\n                     <div class="popup-contact">\n\n                      <p>Chat kavya on</p>\n\n                      <p>Comming Soon</p>\n\n                     </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n      </div>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\profiledetails\profiledetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]])
    ], ProfiledetailsPage);
    return ProfiledetailsPage;
}());

//# sourceMappingURL=profiledetails.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingsoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComingsoonPage = /** @class */ (function () {
    function ComingsoonPage(navCtrl, loadingCtrl, alertCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.http = http;
        this.user = {};
    }
    ComingsoonPage.prototype.gotologout = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    ComingsoonPage.prototype.logout = function () {
        var _this = this;
        console.log(this.user);
        var data1 = this.user;
        console.log(data1);
        var string = this.http.getCookieString('http://68.66.207.110:8020/authenticate');
        console.log(string);
        this.http.setCookie('http://68.66.207.110:8020/authenticate', string);
        localStorage.removeItem('Usercookie');
        var loading = this.loadingCtrl.create({
            content: 'Logout...'
        });
        loading.present();
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
            loading.dismiss();
        }, 1000);
    };
    ComingsoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comingsoon',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\comingsoon\comingsoon.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title class="inbox-title">BENKEY MATRIMONY</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  \n\n   <img src="assets/imgs/comingsoon.png" style="margin: 10% 0">\n\n       \n\n   <button (click)="logout()" class="logout" ion-button color="secondary" clear>Logout</button>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\comingsoon\comingsoon.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], ComingsoonPage);
    return ComingsoonPage;
}());

//# sourceMappingURL=comingsoon.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadimgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadimgPage = /** @class */ (function () {
    function UploadimgPage(camera, transfer, file, loadingCtrl) {
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
    }
    UploadimgPage.prototype.takephoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    UploadimgPage.prototype.getphoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    UploadimgPage.prototype.uploadfile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var random = Math.floor(Math.random() * 100);
        var options = {
            fileKey: 'photo',
            fileName: "myimage_" + random + ".jpg",
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.myphoto, "http://192.168.1.30/api/uploadFoto.php", options)
            .then(function (data) {
            alert("success");
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    UploadimgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-uploadimg',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\uploadimg\uploadimg.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>\n\n          Ionic Blank\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button (click)="takephoto()" ion-button>Take Pic </button>\n\n\n\n  <button (click)="getphoto()" ion-button>Get Pic </button>\n\n\n\n  <p style="text-align: center"><img src ="{{ myphoto }}"></p>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\uploadimg\uploadimg.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _d || Object])
    ], UploadimgPage);
    return UploadimgPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=uploadimg.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var apiUrl = 'http://68.66.207.110:8020/authenticate';
var AuthService = /** @class */ (function () {
    function AuthService(navCtrl, storage, nav, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data1 = _this.user;
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://68.66.207.110:8020/authenticate', data1, {})
                .then(function (data) {
                var resp = JSON.parse(data["_body"]);
                var string = _this.http.getCookieString('http://68.66.207.110:8020/authenticate');
                console.log(string);
                console.log(data.data);
                _this.http.setCookie('http://68.66.207.110:8020/authenticate', string);
                _this.http.post(apiUrl + 'login', JSON.stringify(credentials), { headers: headers })
                    .then(function (res) {
                    resolve(function (res) { return res.json(); });
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    AuthService.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var string = _this.http.getCookieString('http://68.66.207.110:8020/authenticate');
            _this.http.post(apiUrl + 'signup', JSON.stringify(data), { headers: headers })
                .then(function (res) {
                resolve(function (res) { return res.json(); });
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            var string = _this.http.getCookieString('http://68.66.207.110:8020/authenticate');
            headers.append('string', localStorage.getItem('cookie'));
            _this.http.post(apiUrl + 'logout', {}, { headers: headers })
                .then(function (res) {
                localStorage.clear();
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, nav, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
    }
    LoginPage.prototype.gotologin = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__["a" /* SignupPage */]);
        }, 1000);
    };
    LoginPage.prototype.login = function () {
        // console.log(this.user);
        // var data1 = {
        //   Email: undefined,
        //   Mobile: undefined,
        //   Password: undefined
        // };
        // if (this.user && this.user.Field.includes('@')) {
        //   data1.Email = this.user.Field;
        // } else {
        //   data1.Mobile = this.user.Field;
        // }
        // data1.Password = this.user.Password;
        var _this = this;
        console.log(data1);
        console.log(this.user);
        var data1 = this.user;
        console.log(data1);
        this.http.post('http://68.66.207.110:8020/authenticate', data1, {})
            .then(function (data) {
            var resp = JSON.stringify(data["_body"]);
            console.log(function (res) { return status; });
            if (function (resp) { return status == "Success"; }) {
                var string = _this.http.getCookieString('http://68.66.207.110:8020/authenticate');
                // console.log(string);
                // console.log(data.data);
                localStorage.setItem('Usercookie', string);
                console.log('i am in');
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loading_1.present();
                setTimeout(function () {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
                    loading_1.dismiss();
                }, 3000);
            }
            else if (function (resp) { return status == "LoginFailed"; }) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Opps!',
                    // subTitle: resp.message,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\login\login.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <!-- <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button> -->\n\n          <ion-title class="login">LOGIN</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n  <ion-content padding>\n\n  \n\n   \n\n    <ion-list>\n\n    \n\n        <ion-item>\n\n            <ion-label color="primary" floating> E-Mail ID</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.Email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label color="primary" floating>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="user.Password"></ion-input>\n\n        </ion-item>\n\n      \n\n        <button ion-button round class="login-button" (click)="login()">LOGIN</button>\n\n\n\n        <!-- <div class = "row">\n\n            <div class = "col" style="border-right: 1px solid #aaaaaa; height: 25px;">Login Via OTP</div>\n\n            <div class = "col">Forgot Password</div>\n\n        </div> -->\n\n        <p class="login">Not a member?<span class="login-span" (click)="gotologin()"> Register</span></p>\n\n        <!-- <button ion-button round outline class="member-button">Not a member? <span class="reg"> Register Free</span></button> -->\n\n\n\n      </ion-list>\n\n      \n\n     \n\n  </ion-content>\n\n  '/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inbox_inbox__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_notification_notification__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profiledetails_profiledetails__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, nav, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.http = http;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 50;
        this.tabs = [];
        this.tabs = ["MATCHES", "PREMIUM MEMBERS", "VIEWED MY PROFILE", "RECENTLY VIEWED", "NEAR YOU"];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.SwipedTabsIndicator = document.getElementById("indicator");
        var imgUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20009695fbbb42ac8bdcf0fdfbf8036d';
        console.log(imgUrl);
        this.http.get(imgUrl)
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            // console.log(result);
            _this.news = result.articles;
            console.log(_this.news);
        });
        var api = 'http://www.json-generator.com/api/json/get/bQjntkPDci?indent=2';
        console.log(api);
        this.http.get(api)
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            // console.log(result);
            _this.detail = result;
            console.log(_this.detail);
        });
    };
    HomePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.scroll.scrollTo(index * this.tabElementWidth_px, 0, 500);
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    HomePage.prototype.updateIndicatorPosition = function () {
        this.scroll.scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    HomePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    HomePage.prototype.gotoinbox = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_inbox_inbox__["a" /* InboxPage */]);
        });
    };
    HomePage.prototype.gotonotification = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_notification_notification__["a" /* NotificationPage */]);
        }), 1000;
    };
    // gotoprofiledetails(){
    //   setTimeout(()=>{
    //       this.nav.push(ProfiledetailsPage) ;
    //  }),1000;
    // }
    HomePage.prototype.gotoprofiledetails = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_profiledetails_profiledetails__["a" /* ProfiledetailsPage */]);
        }), 1000;
    };
    HomePage.prototype.gotosearch = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */]);
        }), 1000;
    };
    HomePage.prototype.gotofirst = function () {
        var _this = this;
        setTimeout(function () {
            _this.nav.setRoot(HomePage_1);
        }), 1000;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], HomePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], HomePage.prototype, "scroll", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    \n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-segment [(ngModel)]="page" color="dark">\n          <ion-segment-button value="Home">\n              <ion-icon class="header-icon" name="home"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="Notifications" (click)="gotonotification()">\n              <ion-icon class="header-icon" name="notifications-outline"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="Mail" (click)="gotoinbox()">\n              <ion-icon class="header-icon" name="mail"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="Search" (click)="gotosearch()">\n             <ion-icon class="header-icon" name="search"></ion-icon>\n          </ion-segment-button>\n      </ion-segment>\n  </ion-navbar>\n<ion-content  #scroll scrollX="true" style="height: 42px;">\n  <ion-segment  class="SwipedTabs-tabs"  >\n    <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n    [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'  [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" >\n      {{tab}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- here is our dynamic line  "indicator"-->\n  <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" ></div>\n</ion-content>\n</ion-header>\n\n<ion-content >\n\n\n  <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n              (ionSlideWillChange)="updateIndicatorPosition()"\n              (ionSlideDidChange)="updateIndicatorPosition()"\n              (pan)="updateIndicatorPosition()"\n              [pager]="false"\n        >\n   <ion-slide #scroll  scrollY="true">\n      <ion-card>\n        <div class="card" (click)="gotoprofiledetails()" *ngFor="let s of news">\n          <div class="card-1">\n            <img class="card-1-img" src="{{s.urlToImage}}">\n           <div class="icon-1">\n              <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n              <p>Shortlist</p>\n           </div>\n           <div class="icon-1">\n              <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n              <p>1w ago</p>\n            </div> \n          </div>\n          <div class="card-2">\n            <p>H12345678</p>\n            <h2>{{s.author}}</h2>\n            <p>20 yrs, 5.5ft / 165 cm </p>\n            <p>B.Sc IT/Computer Science , Hindu</p>\n            <p>Cast ,Hasta </p>\n            <p>Lucknow, Uttar pradhesh, india</p>  \n             <div class="icon-2">\n              <div class="like-her">\n                  <p>Like Him?</p>\n                </div>\n                <div class="icon-cancel">\n                    <ion-icon class="icon-close" name="close"></ion-icon>\n                </div>\n                <div class="icon-okey">\n                    <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                </div>\n           </div> \n          </div>\n        </div>\n       \n      </ion-card>\n      <ion-card>\n          <div class="card" (click)="gotoprofiledetails()">\n            <div class="card-1">\n              <img class="card-1-img" src="assets/imgs/2.png">\n             <div class="icon-1">\n                <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n                <p>Shortlist</p>\n             </div>\n             <div class="icon-1">\n                <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n                <p>1w ago</p>\n              </div> \n            </div>\n            <div class="card-2">\n              <p>H12345678</p>\n              <h2>Rakesh</h2>\n              <p>20 yrs, 5.5ft / 165 cm </p>\n              <p>B.Sc IT/Computer Science , Hindu</p>\n              <p>Cast ,Hasta </p>\n              <p>Lucknow, Uttar pradhesh, india</p>  \n               <div class="icon-2">\n                <div class="like-her">\n                    <p>Like Him?</p>\n                  </div>\n                  <div class="icon-cancel">\n                      <ion-icon class="icon-close" name="close"></ion-icon>\n                  </div>\n                  <div class="icon-okey">\n                      <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                  </div>\n             </div> \n            </div>\n          </div>\n         \n        </ion-card>\n        <ion-card>\n            <div class="card" (click)="gotoprofiledetails()">\n              <div class="card-1">\n                <img class="card-1-img" src="assets/imgs/3.png">\n               <div class="icon-1">\n                  <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n                  <p>Shortlist</p>\n               </div>\n               <div class="icon-1">\n                  <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n                  <p>1w ago</p>\n                </div> \n              </div>\n              <div class="card-2">\n                <p>H12345678</p>\n                <h2>Rakesh</h2>\n                <p>20 yrs, 5.5ft / 165 cm </p>\n                <p>B.Sc IT/Computer Science , Hindu</p>\n                <p>Cast ,Hasta </p>\n                <p>Lucknow, Uttar pradhesh, india</p>  \n                 <div class="icon-2">\n                  <div class="like-her">\n                      <p>Like Him?</p>\n                    </div>\n                    <div class="icon-cancel">\n                        <ion-icon class="icon-close" name="close"></ion-icon>\n                    </div>\n                    <div class="icon-okey">\n                        <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                    </div>\n               </div> \n              </div>\n            </div>\n           \n          </ion-card>\n         \n            \n              \n    </ion-slide>\n    \n\n    <ion-slide>\n      <div class="premium-members">\n        <img class="important-img" src="assets/imgs/danger.png">\n        <p>No profiles available that match your criteria.</p>\n        <p>Try to refine your search</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="premium-members">\n          <img class="important-img" src="assets/imgs/danger.png">\n          <p>You have not shortlisted any profiles.</p>\n          <h5 (click)="gotofirst()">Go to matching profiles</h5>\n        </div>\n    </ion-slide>\n    <ion-slide>\n      <ion-card>\n        <div class="card" (click)="gotoprofiledetails()">\n          <div class="card-1">\n            <img class="card-1-img" src="assets/imgs/1.png">\n           <div class="icon-1">\n              <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n              <p>Shortlist</p>\n           </div>\n           <div class="icon-1">\n              <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n              <p>1w ago</p>\n            </div> \n          </div>\n          <div class="card-2">\n            <p>H12345678</p>\n            <h2>Rakesh</h2>\n            <p>20 yrs, 5.5ft / 165 cm </p>\n            <p>B.Sc IT/Computer Science , Hindu</p>\n            <p>Cast ,Hasta </p>\n            <p>Lucknow, Uttar pradhesh, india</p>  \n             <div class="icon-2">\n              <div class="like-her">\n                  <p>Like Him?</p>\n                </div>\n                <div class="icon-cancel">\n                    <ion-icon class="icon-close" name="close"></ion-icon>\n                </div>\n                <div class="icon-okey">\n                    <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                </div>\n           </div> \n          </div>\n        </div>\n       \n      </ion-card>\n      <ion-card>\n          <div class="card" (click)="gotoprofiledetails()">\n            <div class="card-1">\n              <img class="card-1-img" src="assets/imgs/2.png">\n             <div class="icon-1">\n                <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n                <p>Shortlist</p>\n             </div>\n             <div class="icon-1">\n                <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n                <p>1w ago</p>\n              </div> \n            </div>\n            <div class="card-2">\n              <p>H12345678</p>\n              <h2>Rakesh</h2>\n              <p>20 yrs, 5.5ft / 165 cm </p>\n              <p>B.Sc IT/Computer Science , Hindu</p>\n              <p>Cast ,Hasta </p>\n              <p>Lucknow, Uttar pradhesh, india</p>  \n               <div class="icon-2">\n                <div class="like-her">\n                    <p>Like Him?</p>\n                  </div>\n                  <div class="icon-cancel">\n                      <ion-icon class="icon-close" name="close"></ion-icon>\n                  </div>\n                  <div class="icon-okey">\n                      <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                  </div>\n             </div> \n            </div>\n          </div>\n         \n        </ion-card>\n        <ion-card>\n            <div class="card" (click)="gotoprofiledetails()">\n              <div class="card-1">\n                <img class="card-1-img" src="assets/imgs/3.png">\n               <div class="icon-1">\n                  <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n                  <p>Shortlist</p>\n               </div>\n               <div class="icon-1">\n                  <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n                  <p>1w ago</p>\n                </div> \n              </div>\n              <div class="card-2">\n                <p>H12345678</p>\n                <h2>Rakesh</h2>\n                <p>20 yrs, 5.5ft / 165 cm </p>\n                <p>B.Sc IT/Computer Science , Hindu</p>\n                <p>Cast ,Hasta </p>\n                <p>Lucknow, Uttar pradhesh, india</p>  \n                 <div class="icon-2">\n                  <div class="like-her">\n                      <p>Like Him?</p>\n                    </div>\n                    <div class="icon-cancel">\n                        <ion-icon class="icon-close" name="close"></ion-icon>\n                    </div>\n                    <div class="icon-okey">\n                        <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                    </div>\n               </div> \n              </div>\n            </div>\n           \n          </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card>\n        <div class="card" (click)="gotoprofiledetails()" *ngFor="let d of detail">\n          <div class="card-1">\n            <img class="card-1-img" src="assets/imgs/1.png">\n           <div class="icon-1">\n              <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n              <p>Shortlist</p>\n           </div>\n           <div class="icon-1">\n              <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n              <p>1w ago</p>\n            </div> \n          </div>\n          <div class="card-2">\n            <p>{{d._id}}</p>\n            <h2>{{d.name}}</h2>\n            <p>{{d.age}} yrs, {{d.height}}ft / 165 cm </p>\n            <p>{{d.qualification}}</p>\n            <p>{{d.cast}} ,Hasta </p>\n            <p>{{d.address}}</p>  \n             <div class="icon-2">\n              <div class="like-her">\n                  <p>Like Him?</p>\n                </div>\n                <div class="icon-cancel">\n                    <ion-icon class="icon-close" name="close"></ion-icon>\n                </div>\n                <div class="icon-okey">\n                    <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                </div>\n           </div> \n          </div>\n        </div>\n       \n      </ion-card>\n      <!-- <ion-card>\n          <div class="card" (click)="gotoprofiledetails()">\n            <div class="card-1">\n              <img class="card-1-img" src="assets/imgs/2.png">\n             <div class="icon-1">\n                <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n                <p>Shortlist</p>\n             </div>\n             <div class="icon-1">\n                <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n                <p>1w ago</p>\n              </div> \n            </div>\n            <div class="card-2">\n              <p>H12345678</p>\n              <h2>Rakesh</h2>\n              <p>20 yrs, 5.5ft / 165 cm </p>\n              <p>B.Sc IT/Computer Science , Hindu</p>\n              <p>Cast ,Hasta </p>\n              <p>Lucknow, Uttar pradhesh, india</p>  \n               <div class="icon-2">\n                <div class="like-her">\n                    <p>Like Him?</p>\n                  </div>\n                  <div class="icon-cancel">\n                      <ion-icon class="icon-close" name="close"></ion-icon>\n                  </div>\n                  <div class="icon-okey">\n                      <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                  </div>\n             </div> \n            </div>\n          </div>\n         \n        </ion-card>\n        <ion-card>\n            <div class="card" (click)="gotoprofiledetails()">\n              <div class="card-1">\n                <img class="card-1-img" src="assets/imgs/3.png">\n               <div class="icon-1">\n                  <ion-icon class="icon-star" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n                  <p>Shortlist</p>\n               </div>\n               <div class="icon-1">\n                  <ion-icon class="icon-chat" name="chatboxes"></ion-icon>\n                  <p>1w ago</p>\n                </div> \n              </div>\n              <div class="card-2">\n                <p>H12345678</p>\n                <h2>Rakesh</h2>\n                <p>20 yrs, 5.5ft / 165 cm </p>\n                <p>B.Sc IT/Computer Science , Hindu</p>\n                <p>Cast ,Hasta </p>\n                <p>Lucknow, Uttar pradhesh, india</p>  \n                 <div class="icon-2">\n                  <div class="like-her">\n                      <p>Like Him?</p>\n                    </div>\n                    <div class="icon-cancel">\n                        <ion-icon class="icon-close" name="close"></ion-icon>\n                    </div>\n                    <div class="icon-okey">\n                        <ion-icon class="icon-ok" name="checkmark"></ion-icon>\n                    </div>\n               </div> \n              </div>\n            </div>\n           \n          </ion-card> -->\n    </ion-slide>\n  </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 50;
        this.tabs = [];
        this.tabs = ["PENDING", "ACCEPTED", "DECLINED"];
    }
    InboxPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    InboxPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.scroll.scrollTo(index * this.tabElementWidth_px, 0, 500);
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    InboxPage.prototype.updateIndicatorPosition = function () {
        this.scroll.scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    InboxPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], InboxPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], InboxPage.prototype, "scroll", void 0);
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inbox',template:/*ion-inline-start:"F:\Mukesh smk\Tasks\matriapp\src\pages\inbox\inbox.html"*/'<ion-header>\n\n\n\n                <ion-navbar>\n\n                    <button ion-button menuToggle>\n\n                        <ion-icon name="menu"></ion-icon>\n\n                    </button>\n\n                  <ion-title>INBOX</ion-title>\n\n                </ion-navbar>\n\n                <ion-content  #scroll scrollX="true" style="height: 42px;">\n\n                                <ion-segment  class="SwipedTabs-tabs"  >\n\n                                  <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n\n                                  [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'  [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" >\n\n                                    {{tab}}\n\n                                  </ion-segment-button>\n\n                                </ion-segment>\n\n                              \n\n                                <!-- here is our dynamic line  "indicator"-->\n\n                                <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" ></div>\n\n                              </ion-content>\n\n                              </ion-header>\n\n                              \n\n                              <ion-content >\n\n                              \n\n                              \n\n                <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n\n                        (ionSlideWillChange)="updateIndicatorPosition()"\n\n                        (ionSlideDidChange)="updateIndicatorPosition()"\n\n                        (pan)="updateIndicatorPosition()"\n\n                        [pager]="false"\n\n                                      >\n\n                <ion-slide #scroll scrollX="true" scrollY="true">\n\n                        <div class="premium-members">\n\n                                <img class="important-img" src="assets/imgs/danger.png">\n\n                                <p>No messages in this folder</p>\n\n                        </div>\n\n                  </ion-slide>\n\n                  <ion-slide>\n\n                        <div class="premium-members">\n\n                                <img class="important-img" src="assets/imgs/danger.png">\n\n                                <p>No messages in this folder</p>\n\n                        </div>\n\n                  </ion-slide>\n\n                  <ion-slide>\n\n                        <div class="premium-members">\n\n                                <img class="important-img" src="assets/imgs/danger.png">\n\n                                <p>No messages in this folder</p>\n\n                        </div>\n\n                  </ion-slide>\n\n                </ion-slides>\n\n              \n\n              \n\n              </ion-content>'/*ion-inline-end:"F:\Mukesh smk\Tasks\matriapp\src\pages\inbox\inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ })

},[411]);
//# sourceMappingURL=main.js.map
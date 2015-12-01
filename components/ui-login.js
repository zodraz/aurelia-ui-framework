var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-validation", "../utils/ui-event", "../utils/ui-model"], function (require, exports, aurelia_framework_1, aurelia_validation_1, ui_event_1, ui_model_1) {
    var UILogin = (function () {
        function UILogin(element, container) {
            this.element = element;
            this.model = new LoginModel({ user: 'ddd' });
        }
        UILogin.prototype.attached = function () {
            $(this._form).find('.ui-login-content').append($(this._form).find('.ui-temp').children());
            $(this._form).find('.ui-temp').remove();
        };
        UILogin.prototype.doLogin = function () {
            var _this = this;
            this.error = '';
            this.model.validate()
                .then(function () {
                ui_event_1.UIEvent.fireEvent('login', _this.element, _this.model);
            })
                .catch(function (e) {
            });
        };
        UILogin = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-login'), 
            __metadata('design:paramtypes', [Element, aurelia_framework_1.Container])
        ], UILogin);
        return UILogin;
    })();
    exports.UILogin = UILogin;
    var LoginModel = (function (_super) {
        __extends(LoginModel, _super);
        function LoginModel(data) {
            _super.call(this);
        }
        LoginModel.prototype.validate = function () {
            return this.validation.validate();
        };
        __decorate([
            aurelia_validation_1.ensure(function (t) { return t.isNotEmpty().isEmail(); }), 
            __metadata('design:type', String)
        ], LoginModel.prototype, "username");
        __decorate([
            aurelia_validation_1.ensure(function (t) { return t.isNotEmpty(); }), 
            __metadata('design:type', String)
        ], LoginModel.prototype, "password");
        LoginModel = __decorate([
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [Object])
        ], LoginModel);
        return LoginModel;
    })(ui_model_1.UIModel);
    exports.LoginModel = LoginModel;
});

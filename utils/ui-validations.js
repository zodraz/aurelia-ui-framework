var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'aurelia-validation', "aurelia-validation"], function (require, exports, aurelia_validation_1, aurelia_validation_2) {
    var UIValidationStrategy = (function (_super) {
        __extends(UIValidationStrategy, _super);
        function UIValidationStrategy() {
            _super.call(this);
            aurelia_validation_2.ValidationGroup.prototype.isPhone = function () {
                this.passes(function (newValue) {
                    return PhoneLib.isValid(newValue, '');
                }, null).withMessage(function () {
                    return 'invalid phone number';
                });
                return this;
            };
        }
        UIValidationStrategy.prototype.appendMessageToElement = function (formGroup, validationProperty) {
            var helpBlock = formGroup.lastChild;
            if (helpBlock) {
                if (!helpBlock.classList) {
                    helpBlock = null;
                }
                else if (!helpBlock.classList.contains('ui-help-block')) {
                    helpBlock = null;
                }
            }
            if (!helpBlock) {
                helpBlock = document.createElement('p');
                helpBlock.classList.add('ui-help-block');
                formGroup.appendChild(helpBlock);
            }
            helpBlock.textContent = validationProperty ? validationProperty.message : '';
        };
        UIValidationStrategy.prototype.appendUIVisuals = function (validationProperty, formGroup) {
            if (validationProperty && validationProperty.isDirty) {
                if (validationProperty.isValid) {
                    formGroup.classList.remove('ui-invalid');
                    formGroup.classList.add('ui-valid');
                }
                else {
                    formGroup.classList.remove('ui-valid');
                    formGroup.classList.add('ui-invalid');
                }
            }
            else {
                formGroup.classList.remove('ui-invalid');
                formGroup.classList.remove('ui-valid');
            }
            this.appendMessageToElement(formGroup, validationProperty);
        };
        UIValidationStrategy.prototype.prepareElement = function (validationProperty, element) {
            this.appendUIVisuals(null, element);
        };
        UIValidationStrategy.prototype.updateElement = function (validationProperty, element) {
            this.appendUIVisuals(validationProperty, element);
        };
        return UIValidationStrategy;
    })(aurelia_validation_1.ValidationViewStrategy);
    exports.UIValidationStrategy = UIValidationStrategy;
});

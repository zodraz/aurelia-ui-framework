import {ValidationViewStrategy} from 'aurelia-validation';
import {ValidationGroup} from "aurelia-validation";

export class UIValidation extends ValidationViewStrategy {
	constructor() {
		super();

		ValidationGroup.prototype.isPhone = function () {
			this.passes((newValue)=> {
				return PhoneLib.isValid(newValue, '');
			}, null).withMessage(()=> {
				return 'invalid phone number';
			});
			return this;
		};
	}

	appendMessageToElement(formGroup, validationProperty) {
		let helpBlock:Element = formGroup.lastChild;
		if (helpBlock) {
			if (!helpBlock.classList) {
				helpBlock = null;
			} else if (!helpBlock.classList.contains('ui-help-block')) {
				helpBlock = null;
			}
		}

		if (!helpBlock) {
			helpBlock = document.createElement('p');
			helpBlock.classList.add('ui-help-block');
			formGroup.appendChild(helpBlock);
		}

		helpBlock.textContent = validationProperty ? validationProperty.message : '';
	}

	appendUIVisuals(validationProperty, formGroup) {
		if (validationProperty && validationProperty.isDirty) {
			if (validationProperty.isValid) {
				formGroup.classList.remove('ui-invalid');
				formGroup.classList.add('ui-valid');
			} else {
				formGroup.classList.remove('ui-valid');
				formGroup.classList.add('ui-invalid');
			}
		} else {
			formGroup.classList.remove('ui-invalid');
			formGroup.classList.remove('ui-valid');
		}

		this.appendMessageToElement(formGroup, validationProperty);
	}

	prepareElement(validationProperty, element) {
		this.appendUIVisuals(null, element);
	}

	updateElement(validationProperty, element) {
		this.appendUIVisuals(validationProperty, element);
	}
}

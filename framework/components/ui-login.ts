/**
 *    UI Component: Login Panel
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, transient, bindingMode, Container} from "aurelia-framework";
import {ensure, Validation, ValidationGroup} from "aurelia-validation";
import {UIEvent} from "../utils/ui-event";
import {Utils} from "../utils/ui-utils";
import {UIModel} from "../utils/ui-model";

@autoinject()
@containerless()
@customElement('ui-login')
export class UILogin {
	model:LoginModel;
	error:string;
	_form;

	constructor(public element:Element, container:Container) {
		this.model = new LoginModel({user: 'ddd'});
	}

	attached() {
		$(this._form).find('.ui-login-content').append($(this._form).find('.ui-temp').children());
		$(this._form).find('.ui-temp').remove();
	}

	doLogin() {
		this.error = '';
		this.model.validate()
			.then(()=> {
				UIEvent.fireEvent('login', this.element, this.model);
			})
			.catch(e=> {
			});
	}
}

@transient()
export class LoginModel extends UIModel {
	@ensure(t=>t.isNotEmpty().isEmail())
	username:string;

	@ensure(t=>t.isNotEmpty())
	password:string;

	remember:boolean;

	validation:ValidationGroup;

	constructor(data) {
		super();
	}

	validate() {
		return this.validation.validate();
	}
}
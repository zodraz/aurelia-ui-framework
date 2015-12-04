/**
 *    UI Component: Login Panel
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, transient, bindingMode} from "aurelia-framework";
import {ensure, Validation, ValidationGroup} from "aurelia-validation";
import {UIEvent} from "../utils/ui-event";
import {Utils} from "../utils/ui-utils";
import {UIModel} from "../utils/ui-model";
import {UIApplicationState} from "../utils/ui-app-state";

@autoinject()
@containerless()
@customElement('ui-login')
export class UILogin {
	model:LoginModel;
	_form;

	@bindable error:string;
	@bindable busy:boolean = false;

	constructor(public element:Element, public appState:UIApplicationState) {
		this.model = new LoginModel();
	}

	attached() {
		$(this._form).find('.ui-login-content').append($(this._form).find('.ui-temp').children());
		$(this._form).find('.ui-temp').remove();
		if (this.model.remember === true) this.doLogin();
	}

	doLogin() {
		this.error = '';
		this.model.validate()
			.then(()=> {
				this.model.save();
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
	appState:UIApplicationState;

	validation:ValidationGroup;

	constructor() {
		super();
		this.appState = Utils.lazy(UIApplicationState);

		let _u, _p;
		if ((_u = this.appState.getLocal('AppUsername')) !== null)
			this.username = _u;
		if ((_p = this.appState.getLocal('AppPassword')) !== null) {
			this.password = _p;
			this.remember = true;
		}
	}

	validate() {
		return this.validation.validate();
	}

	save() {
		this.appState.saveLocal('AppUsername', this.username);
		this.appState.saveLocal('AppPassword', this.remember ? this.password : null);
	}
}
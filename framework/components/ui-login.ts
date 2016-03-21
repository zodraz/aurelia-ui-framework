/**
 *    UI Component  Login Panel
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, transient, bindingMode} from "aurelia-framework";
import {ensure, Validation} from "aurelia-validation";
import {UIEvent} from "../utils/ui-event";
import {UIUtils} from "../utils/ui-utils";
import {UIModel} from "../utils/ui-model";
import {UIApplication} from "../utils/ui-application";

@autoinject()
@customElement('ui-login')
export class UILogin {
	model:LoginModel;

	__temp;
	__content;

	@bindable
	error:string;
	@bindable
	busy:boolean = false;

	constructor(public element:Element, public appState:UIApplication) {
		this.model = new LoginModel();
	}

	attached() {
		if (this.model.remember === true) this.doLogin();

		this.__content.appendChild(this.__temp);
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
@autoinject()
export class LoginModel extends UIModel {

	@ensure(t=>t.isNotEmpty())
	username:string = '';
	@ensure(t=>t.isNotEmpty())
	password:string = '';

	remember:boolean = false;

	appState:UIApplication;

	constructor() {
		super();

		let _u, _p;
		this.appState = UIUtils.lazy(UIApplication);
		if ((_u = this.appState.persist('AppUsername')) !== null) {
			this.username = _u;
		}
		if ((_p = this.appState.persist('AppPassword')) !== null) {
			this.password = _p;
			this.remember = true;
		}

		this.validation
			.ensure('username', null)
			.isNotEmpty()
			.isEmail()
			.ensure('password', null)
			.isNotEmpty();
	}

	save() {
		this.appState.persist('AppUsername', this.username);
		this.appState.persist('AppPassword', this.remember ? this.password : null);
	}
}
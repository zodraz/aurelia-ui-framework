export class AppLogin {

	onLogin($event) {
		$.notify(`${$event.detail.username}/${$event.detail.password}`);
	}
}
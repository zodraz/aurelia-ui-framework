export class AppLogin {
	onLogin($event) {
		$.notify(`${$event.data.username}/${$event.data.password}`);
	}
}
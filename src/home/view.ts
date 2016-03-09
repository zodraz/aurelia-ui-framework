export class Home {
	optVal   = 2;
	enabled = true;

	change($event) {
		console.log($event.target, $event.detail);
	}
}
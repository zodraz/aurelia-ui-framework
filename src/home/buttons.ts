export class HomeButtons {
	t1 = 0;

	menu1 = [{
		id: 0, title: 'Link 0'
	}, {
		id: 1, title: 'Link 1'
	}, {
		id: 2, title: 'Link 2'
	}, '-', 'Section', {
		id: 3, title: 'Link 3'
	}, {
		id: 4, title: 'Link 4'
	}, {
		id: 5, title: 'Link 5'
	}, '-', {
		id: 6, title: 'Link 6'
	}, {
		id: 7, title: 'Link 7'
	}, {
		id: 8, title: 'Link 8'
	}, {
		id: 9, title: 'Link 9'
	}];

	buttonclick($event) {
		let data;
		if (data = $event.detail) {
			var msg = 'OOPS! You clicked the wrong button';
			if (data._theme == 'primary')msg = 'YIPEE! Im the primary color';
			if (data._theme == 'info')msg = 'HOUSTON! We have lift-off';
			if (data._theme == 'success')msg = 'HOUSTON! The eagle has landed';
			if (data._theme == 'danger')msg = 'EXTERMINATE! EXTERMINATE!';
			if (data._theme == 'warning')msg = 'HOUSTON! We have a problem';
			if (data._theme != 'secondary') {
				$.notify(msg, {
					style: 'ui',
					className: data._theme,
					autoHide: false
				});
			}
			else {
				$('.ui-page-title').notify('Error contacting web-service. Please try again later.', {
					style: 'ui',
					elementPosition: 'b c',
					arrowShow: false,
					className: 'danger'
				});
			}
		}
	}

	menuclicked($event) {
		$.notify(`You clicked ${$event.detail.title}`, {
			style: 'ui',
			className: 'primary',
			autoHide: true
		});
	}
}
import {moment} from "aurelia-ui-framework";

export class HomeDataGrid {
	title = 'DataGrid Example';

	myPage = 1;

	data = [{
		id: 1,
		FName: 'Leroy',
		LName: 'Gibbs',
		Gender: 'MALE',
		SDate: '1951-09-02',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 2,
		FName: 'Tony',
		LName: 'DiNozzo',
		Gender: 'MALE',
		SDate: '1968-07-08',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 3,
		FName: 'Tim',
		LName: 'McGee',
		Gender: 'MALE',
		SDate: '1977-11-15',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 4,
		FName: 'Eleanor',
		LName: 'Bishop',
		Gender: 'FEMALE',
		SDate: '1984-04-26',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 5,
		FName: 'Abigail',
		LName: 'Scuitto',
		Gender: 'FEMALE',
		SDate: '1969-03-27',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 6,
		FName: 'Donald',
		LName: 'Mallard',
		SDate: '1933-09-19',
		Gender: 'MALE',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 7,
		FName: 'Jimmy',
		LName: 'Palmer',
		Gender: 'MALE',
		SDate: '1977-11-14',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 8,
		FName: 'Leon',
		LName: 'Vance',
		Gender: 'MALE',
		SDate: '1963-07-08',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 9,
		FName: 'Ziva',
		LName: 'David',
		Gender: 'FEMALE',
		SDate: '1979-11-12',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 10,
		FName: 'Jenny',
		LName: 'Shepard',
		Gender: 'FEMALE',
		SDate: '1963-10-28',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}, {
		id: 11,
		FName: 'Caitlin',
		LName: 'Todd',
		Gender: 'FEMALE',
		SDate: '1973-05-17',
		Amount: Math.random() * 100000,
		Count: Math.random() * 10000000,
		Currency: 'USD'
	}];

	constructor() {
		//this.data = [];
	}

	getGender($event) {
		return `<span class="ui-text-primary ui-font-big ${$event.model.Gender == 'MALE' ? 'fi-ext-men46' : 'fi-ext-women23'}"></span>`;
	}

	getFullName($event) {
		return `${$event.model.FName} <strong>${$event.model.LName}</strong>`;
	}

	linkclicked($event) {
		let g = this.getGender($event.detail);
		let d = $event.detail.model;
		if ($event.detail.link == 'edit') {
			$.notify(`You want to edit ${d.FName} <strong>${d.LName}</strong>`, {
				style: 'ui',
				className: 'warning',
				autoHide: true
			});
		}
		if ($event.detail.link == 'delete') {
			$.notify(`You want to delete ${d.FName} <strong>${d.LName}</strong>?`, {
				style: 'ui',
				className: 'danger',
				autoHide: true
			});
		}
		if ($event.detail.link == 'FName') {
			$.notify(`Details for ${g} ${d.FName} <strong>${d.LName}</strong>
			<br/>${d.Gender == 'MALE' ? 'He' : 'She'} is ${moment(d.SDate).fromNow(true)} old`, {
				style: 'ui',
				className: 'info',
				autoHide: true
			});
		}
	}

	pageChanged($event) {
		this.myPage = $event.detail;
	}
}
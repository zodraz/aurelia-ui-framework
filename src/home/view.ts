import {Validation} from "aurelia-validation";
import {autoinject} from "aurelia-framework";
import {_, moment, UIApplication, UITreeOptions, UIDialogService, UIHttpService} from "../../framework/index";
import {MyDialog} from "./my-dialog";
import {HttpClient} from "aurelia-fetch-client";
import "fetch";

@autoinject()
export class Home {
  optVal = 2;
  enabled = true;
  months = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' }
  ];
  countries = _.groupBy(window.countries, 'continent');

  model = {
    email: '', lat: null, long: null, ctry: 'AE'
  };

  getDisplay() {
    return JSON.stringify(this.model, null, 4);
  }

  __page;
  __content;
  __bgToggle;

  md;

  validation;
  __tree;
  checked;
  treeModel;
  treeOpts = new UITreeOptions({
    showCheckbox: true,
    selectionLevel: 0
  });
  data = [
    {
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

  constructor(_validation: Validation, public appState: UIApplication,
				public dialogService: UIDialogService, public httpClient: UIHttpService) {
    this.validation = _validation
      .on(this, null)
      .ensure('model.email')
      .isNotEmpty()
      .ensure('model.lat')
      .isNumber()
      .isBetween(-90, 90)
      .ensure('model.long')
      .isNumber()
      .isBetween(-180, 180);

    var ct = [];
    _.forEach(_.groupBy(window.countries, 'continent'), (v: any, k: string) => {
      let c = {
        id: _.camelCase(k),
        name: k,
        expanded: k == 'Asia',
        children: []
      }
      _.forEach(v, (o: any) => {
        c.children.push({
          id: o.iso3,
          name: o.name,
          leaf: true,
          checked: (o.iso3 == 'UAE' || o.iso3 == 'IND'),
          iconGlyph: `ui-flag ${o.iso3}`
								})
      });
      ct.push(c);
    });
    this.treeModel = ct;

  }

  canActivate(model) {
    return this.httpClient
      .text('./src/home/example.md')
      .then(resp=> this.md = resp);
  }

  onSubmit() {
    this.validation.validate()
      .then(() => {

    })
      .catch(() => {

    });
  }

  attached() {
    this.checked = this.__tree.getChecked();
    setTimeout(() => this.__content.scrollTop = 0, 20);
  }

  formatName($event) {
    return `${$event.model.FName} <strong>${$event.model.LName}</strong>`;
  }

  change($event) {
    console.log($event.target, $event.detail);
  }

  changeTheme($event) {
    let theme = $event.detail.label.toLowerCase();
    this.__bgToggle.className = `ui-button-group ui-button-group-${theme}`;
  }

  showDialog(modal) {
    this.dialogService.show(MyDialog, { modal: modal });
  }

  linkClicked($event) {
    this.appState.toast({
      message: $event.detail.dataId + ':' + $event.detail.model.LName
    });
  }

  checkAge($event): any {
    if (moment()
      .diff($event.model.SDate, 'years', true) > 50) {
      return { theme: 'warning' };
    }
    if (moment()
      .diff($event.model.SDate, 'years', true) < 40) {
      return 'No Preview';
    }
    return { theme: 'info' };
  }

  toastMe(pos, theme) {
    if (pos == 'page') {
      this.__page.toast({
        icon: 'fi-vaadin-bell',
        autoHide: false,
        theme: 'danger',
        message: 'Toasted message for the page'
      });
    }
    else {
      this.appState.toast({ theme: theme, icon: 'fi-vaadin-bell', message: 'Toasted message' });
    }
  }

}

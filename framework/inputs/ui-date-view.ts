/**
 *    UI Input      Inline Date Input
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable, bindingMode} from "aurelia-framework";
import {moment} from "../utils/ui-utils";
import {UIDateOptions} from "./ui-date";

@autoinject()
@customElement('ui-date-view')
export class UIDateView {
  m = moment;

  __start;
  __month;
  __year;
  __current = moment();

  __disablePrev;
  __disableNext;

  __dates;
  __months;
  __years;

  __decade;

	/**
	 * @property    value
	 * @type        string
	 */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  date: string = moment().format();
	/**
	 * @property    options
	 * @type        string
	 */
  @bindable()
  options: UIDateOptions = new UIDateOptions();

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  showing = true;

  constructor(public element: Element) {
  }

  bind() {
    if (moment(this.date).isValid()) this.__current = moment(this.date);
    this.__changeDates();
  }

  showingChanged(newValue) {
    if (this.showing = isTrue(newValue)) {
      if (moment(this.date).isValid()) this.__current = moment(this.date);
      this.__dates.classList.remove('ui-hidden');
      this.__months.classList.add('ui-hide');
      this.__years.classList.add('ui-hide');
      this.__changeDates();
    }
  }

  getDateClass(dt) {
    var c = 'date';
    if (dt.isSame(this.__current, 'month')) {
      c += ' active';
    }
    else {
      c += ' muted ';
    }
    if (dt.isSame(moment(), 'day')) c += ' today';
    if (dt.isSame(this.date, 'day')) c += ' selected';
    if (dt.isBefore(this.options.minDate, 'day')) c += ' disabled';
    if (dt.isAfter(this.options.maxDate, 'day')) c += ' disabled';
    return c;
  }

  getMonthClass(dt) {
    var c = 'month';
    if (dt.isBefore(this.options.minDate, 'month')) c += ' disabled';
    if (dt.isAfter(this.options.maxDate, 'month')) c += ' disabled';
    return c;
  }

  getYearClass(dt) {
    var c = 'year';
    if (dt.isBefore(this.options.minDate, 'year')) c += ' disabled';
    if (dt.isAfter(this.options.maxDate, 'year')) c += ' disabled';
    return c;
  }

  datePanelClick($event) {
    console.log($event);
    if ($event.target.classList.contains('disabled') ||
      $event.target.classList.contains('selected')) {
      return;
    }
    else if ($event.target.classList.contains('prevmonth')) {
      this.__current.add(-1, 'month');
      this.__changeDates();
    }
    else if ($event.target.classList.contains('nextmonth')) {
      this.__current.add(1, 'month');
      this.__changeDates();
    }
    else if ($event.target.classList.contains('prevyear')) {
      this.__current.add(-1, 'year');
      this.__changeMonths();
    }
    else if ($event.target.classList.contains('nextyear')) {
      this.__current.add(1, 'year');
      this.__changeMonths();
    }
    else if ($event.target.classList.contains('prevdecade')) {
      this.__current.add(-20, 'year');
      this.__changeYears();
    }
    else if ($event.target.classList.contains('nextdecade')) {
      this.__current.add(20, 'year');
      this.__changeYears();
    }
    else if ($event.target.classList.contains('setmonth')) {
      this.__dates.classList.add('ui-hidden');
      this.__months.classList.remove('ui-hide');
    }
    else if ($event.target.classList.contains('setyear')) {
      this.__months.classList.add('ui-hide');
      this.__years.classList.remove('ui-hide');
    }
    else if ($event.target.classList.contains('settoday')) {
      this.date = moment().format();
      this.__current = moment();
      this.__changeDates();
      if (this.element.classList.contains('floating')) this.showing = false;
    }
    else if ($event.target.classList.contains('year')) {
      this.__current = $event.target['year'];
      this.__months.classList.remove('ui-hide');
      this.__years.classList.add('ui-hide');
      this.__changeMonths();
    }
    else if ($event.target.classList.contains('month')) {
      this.__current = $event.target['month'];
      this.__months.classList.add('ui-hide');
      this.__dates.classList.remove('ui-hidden');
      this.__changeDates();
    }
    else if ($event.target.classList.contains('date')) {
      this.date = $event.target['date'].format();
      this.__current = $event.target['date'];
      this.__changeDates();
      if (this.element.classList.contains('floating')) this.showing = false;
    }
  }

  private __changeDates() {
    this.__current.startOf('month');
    let __start = moment(this.__current).startOf('month');
    let __end = moment(this.__current).endOf('month');

    this.__month = this.__current.month();
    this.__year = this.__current.year();
    this.__decade = (this.__year - (this.__year % 20)) + 1;

    if (__start.weekday() < 3) __start.add(-7, 'day');
    this.__start = __start.add(__start.weekday() * -1, 'day');
    __end = __end.add(6 - __end.weekday(), 'day');

    this.__disablePrev = this.__start.isBefore(this.options.minDate, 'day');
    this.__disableNext = __end.isAfter(this.options.maxDate, 'day');
  }

  private __changeMonths() {
    let __start = moment(this.__current).set('month', 0);
    let __end = moment(this.__current).set('month', 11);

    this.__year = this.__current.year();
    this.__decade = (this.__year - (this.__year % 20)) + 1;

    this.__disablePrev = __start.isBefore(this.options.minDate, 'month');
    this.__disableNext = __end.isAfter(this.options.maxDate, 'month');
  }

  private __changeYears() {
    this.__year = this.__current.year();
    this.__decade = (this.__year - (this.__year % 20)) + 1;

    let __start = moment(this.__current).set('year', this.__decade);
    let __end = moment(this.__current).set('year', this.__decade + 19);

    this.__disablePrev = __start.isBefore(this.options.minDate, 'year');
    this.__disableNext = __end.isAfter(this.options.maxDate, 'year');
  }
}

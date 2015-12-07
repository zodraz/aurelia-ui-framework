/**
 * window object properties
 */

interface ICountry {
	continent:string;
	iso3:string;
	iso2:string;
	name:string;
	tld:string;
	currency:string;
	phone:number;
}

interface Window {
	pathToDwrServlet:string;
	ajaxFunctions:any;
	dwr:any;

	countries:Array<ICountry>;
	currencies:any;

	unescape(v?:any);
}


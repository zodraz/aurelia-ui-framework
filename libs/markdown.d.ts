interface MarkedObject {
	html:string;
}


declare function marked(text:string, opts?:any):MarkedObject;

declare module "marked" {

	export = marked;

}
interface MarkdownDialect {
	toHTML(value?:string, dialect?:string, options?:any):any;
}

interface Markdown {
	markdown:MarkdownDialect;
}

declare var markdown:Markdown;

declare module "markdown" {

	export = markdown;

}
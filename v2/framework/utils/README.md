## UTILS

* [Global Methods](#global-methods)
* [UIConverters](#uiconverters)
* [UIFormat](#uiformat)
* [UIUtils](#uiutils)
* [UIEvent](#uievent)


---
	
### Global Methods ###

    isEmpty(?)
    isTrue(?)
    
---
	
### UIConverters ###

* MarkdownValueConverter: 

    usage `${markdownText | markdown}`

* DateValueConverter: 

    usage `${value | date:'[format?]'}`

* FromNowValueConverter: 

    usage `${value | formNow}`

* NumberValueConverter: 

    usage `${value | number:'[format?]'}`

* CurrencyValueConverter: 

    usage `${value | currency:'[symbol?]':'[format?]'}`

* PercentValueConverter: 

    usage `${value | percent}`


* KeysValueConverter: 

    usage `${object | keys}`, get objects property keys

* GroupValueConverter: 

    usage `${array | group:'[property]'}`, uses LoDash.groupBy

* SortValueConverter: 

    usage `${array | sort:'[property]'}`, uses LoDash.sortBy

* JsonValueConverter: 

    usage `${object : json}`, convert JSON into readable text


* IsStringValueConverter: 

    usage `${object : isString}`
    
* IsObjectValueConverter: 

    usage `${object : isObject}`

* IsArrayValueConverter: 

    usage `${object : isArray}`

---
	
### UIFormat ###

`toHTML(markdown):string`: parse markdown text into HTML markup, uses marked js library

`date(value,format?):string`: format a date|date string|moment object, default format 'DD MMM YYYY hh:mm A'

`dateToISO(value):string`: format a date|date string|moment object into an ISO string 'YYYY-MM-DDThh:mm:ssZ'

`fromNow(value):string`: format a date|date string|moment object using the `fromNow` method in moment

`number(value,format?):string`: format an number using the numeral js library, default format '0,0[.]00'

`currency(value,symbol?,format?):string`: format an number using the numeral js library, default symbol '$', default format '$ 0,0[.]00'

`percent(value):string`: format an number into percentage using the numeral js library

---
	
### UIUtils ###

`setContainer(container)`: set the container on app startup to support lazy loading

`lazy(T):<T>`: Lazy load class of type T, return instance of T

`getAscii(string):string`: Convert all latin alphabets into ascii equivalent alphabet

---
	
### UIEvent ###

`fireEvent(event,target,data?):boolean`: fire an event

`broadcast(event,data)`: broadcast an event using Aurelia.EventAggregator

`subscribe(event,callback):Subscription`: subscribe to custom events, returns Aurelia.Subscription

`observe(object,property):PropertyObserver`: observe for property changes, returns Aurelia.PropertyObserver


## UTILS

* [Global Methods](#global-methods)
* [UIApplication](#uiapplication)
* [UIHttpService](#uihttpservice)
* [UIModel](#uimodel)
* [UIValidationStrategy](#uivalidationstrategy)
* [UIConverters](#uiconverters)
    * [Value Converters](#__value-converters__)
    * [Repeat Converters](#__repeat-converters__)
    * [If Converters](#__if-converters__)
* [UIFormat](#uiformat)
* [UIEvent](#uievent)
* [UIUtils](#uiutils)


---
	
### Global Properties/Methods ###

```javascript
// Global Constants Object attached to Window
Constants = {}

// check true using regex `/^(true|yes|1|y|on)$`
window.isTrue(?)

// undefined | null | array.length=0 | empty object | empty string
window.isEmpty(?)

window.isFunction(?)

// Get DOM Parent by TagName
window.getParentByTag(element:Element, selector:string):HTMLElement

// Get DOM Parent by ClassName, stop when parent class-name contains `lastElement`
window.getParentByClass(element:Element, selector:string, lastElement?:string):HTMLElement
```

---
	
### UIApplication ###

Singleton class for application level settings and methods

```javascript

/**
 * Usage
 */
import {UIApplication} from "aurelia-ui-framework";

@inject(UIApplication)
export class AppClass {
    constructor(appState) {
    ...
    }
}

/**
 * Properties
 */
AppConfig:Object
HttpConfig:Object

// Boolean indicator set/unset by the HttpService
IsHttpInUse:boolean

IsAuthenticated:boolean

// Authorization user and password for Basic Authentication header
AuthUser:string
AuthToken:string

Username:string
UserGroup:string
UserGroupLabel:string

/**
 * Methods
 */
// Route navigation
navigate(hash)

navigateTo(route, params)

// Toast notifications
toast({
    icon:string,
    message:string,
    theme:string, // primary | info | danger | success | warning
    extraClass:string,
    autoHide:boolean
})

// Storage
session(key, value?) // session storage, if value is null it will be deleted
persist(key, value?) // local storage, if value is null it will be deleted
clearSession()

// Logging
info(tag, message, ...args?)
warn(tag, message, ...args?)
debug(tag, message, ...args?)
error(tag, message, ...args?)

```

---

### UIHttpService ###

```javascript

/**
 * Usage
 */
import {UIHttpService} from "aurelia-ui-framework";

@inject(UIHttpService)
export class AppClass {
    constructor(httpService) {
    ...
    }
}

/**
 * Methods
 */
get(api-route):Promise

post(api-route, json-body):Promise

put(api-route, json-body):Promise

delete(api-route):Promise

```

---
	
### UIConverters ###

##### __Value Converters__

_MarkdownValueConverter_ 
```html
<div>${markdownText | markdown}</div>
```
    
_DateValueConverter_ 
```html
<div>${value | date:'format?'}</div>
```

_FromNowValueConverter_
```html
<div>${value | formNow}</div>
```

_NumberValueConverter_
```html
<div>${value | number:'format?'}</div>
```

_CurrencyValueConverter_
```html
<div>${value | currency:'symbol?':'format?'}</div>
```

_PercentValueConverter_
```html
<div>${value | percent}</div>
```

_JsonValueConverter_
```html
<div>${value | json}</div>
```



##### __Repeat Converters__

_KeysValueConverter_
```html
<div repeat.for="key of object | keys"></div>
```

_GroupValueConverter_
```html
<div repeat.for="key of object | group:'property'"></div>
```

_SortValueConverter_
```html
<div repeat.for="key of object | sort:'property'"></div>
```

	

##### __If Converters__

_IsTrueValueConverter_
```html
<div if.bind="value | isTrue"></div>
```

_IsFalseValueConverter_
```html
<div if.bind="value | isFalse"></div>
```

_IsStringValueConverter_
```html
<div if.bind="value | isString"></div>
```
    
_IsObjectValueConverter_
```html
<div if.bind="value | isObject"></div>
```

_IsArrayValueConverter_
```html
<div if.bind="value | isArray"></div>
```

---
	
### UIFormat ###

```javascript
// parse markdown text into HTML markup, uses marked js library
UIFormat.toHTML(markdown):string

// format a date|date string|moment object, default format 'DD MMM YYYY hh:mm A'
UIFormat.date(value,format?):string

// format a date|date string|moment object using the `fromNow` method in moment
UIFormat.dateToISO(value):string

// format a date|date string|moment object, default format 'DD MMM YYYY hh:mm A'
UIFormat.fromNow(value):string

// format a number using the numeral js library, default format '0,0[.]00'
UIFormat.number(value,format?):string

// format a number using the numeral js library, default symbol '$', default format '$ 0,0[.]00'
UIFormat.currency(value,symbol?,format?):string

// format a number into percentage using the numeral js library
UIFormat.percent(value):string
```

---
	
### UIEvent ###

```javascript
// fire an event
UIEvent.fireEvent(event,target,data?):boolean

// broadcast an event using `Aurelia.EventAggregator`
UIEvent.broadcast(event,data)

// subscribe to custom events, returns `Aurelia.Subscription`
UIEvent.subscribe(event,callback):Subscription

// observe for property changes, returns `Aurelia.PropertyObserver`
UIEvent.observe(object,property):PropertyObserver
```

---
	
### UIUtils ###

```javascript
// set the container on app startup to support lazy loading
UIUtils.setContainer(container)

// Lazy load class of type T, return instance of T
UIUtils.lazy(T):<T>

// Convert all latin alphabets into ascii equivalent alphabet
UIUtils.getAscii(string):string
```

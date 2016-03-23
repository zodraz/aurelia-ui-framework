# Aurelia UI Framework for Business Apps

> A complete UI Framework for building business applications for the Web.

> This UI framework has been built on the [Aurelia](http://aurelia.io) JavaScript client framework.


#### [Demo Pages](http://adarshpastakia.github.io/aurelia-ui-framework/v2)

#### [Help Wiki](https://github.com/adarshpastakia/aurelia-ui-framework/wiki/Home)


------

## AureliaUIFramework
### Version 2

> Rethought and Reworked Framework

### Sections

* [Core](framework/core)
* [Inputs](framework/inputs)
* [Components](framework/components)
* [Utils](framework/utils)


#### Usage `main.js`

```javascript
import {UIValidationStrategy} from "aurelia-ui-framework";

function configure(aurelia) {
    aurelia.use
       .standardConfiguration()
       .developmentLogging()
       .plugin('aurelia-ui-framework', function (config) {
           // AppKey for local/session storage key prefix
           config.App.Key = 'App';
           // Application Title
           config.App.Title = 'Aurelia UI Framework';
           // Application Version
           config.App.Version = '1.00';

           // HTTPClient Base API URL
           config.Http.BaseUrl = './';
           // HTTPClient Extra Headers
           config.Http.Headers = {
               'X-API-VERSION': '1'
           };
           // HTTPClient Send Basic Authorization Header
           config.Http.AuthorizationHeader = false;
       })
       .plugin('aurelia-validation', function (config) {
           config.useViewStrategy(new UIValidationStrategy());
       });
```

---

#### Core Components
* Viewport - main app viewport
* Page - (has page title, to be used as route viewport)
* Section - row/column layout
* Content - auto/fill
* Sidebar - can collapse
* Header
* Toolbar
* Statsbar
* Grid

#### Inputs
* BaseInput (Private) - Generic input class to handle common functionality between all input controls
* Input - Single line input control
    * Text
    * Number
    * Email
    * Url
* Date
* Combo
* List
* Tags
* Textarea
* Option (Private) - Generic option control
    * Checkbox
    * Radio
* Switch
* Button
* Markdown
* Language
* MultiSelect

#### Components
* Form
* Tree
* Ribbon
* Pager
* Menu
* Login
* Dialog
* Panel
* Tabs
* Datagrid

#### Utils
* UIApplication
* UIConverters - Global value converters
* UIFormatters - Module containing common formatting methods
* UIHttpService - HttpService extending Aurelie-Fetch
* UIValidation - Aurelia validation strategy
* UIEvent
* UIUtils
* UIModel
* UITreeModel

### Dependencies

* `Marked`, `Moment`, `Numeral`, `LoDash`


### Changes

* Removed external UI dependencies.
* Removed dependency on jQuery, instead using pure javascript DOM manipulation

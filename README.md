# Aurelia UI Framework for Business Apps

> A complete UI Framework for building business applications for the Web.

> This UI framework has been built on the [Aurelia](http://aurelia.io) JavaScript client framework.


## [Demo Pages](http://adarshpastakia.github.io/aurelia-ui-framework/)

## [Help Wiki](https://github.com/adarshpastakia/aurelia-ui-framework/wiki/Home)


------

# Version 2

> Rethought and Reworked Framework

### ReadMe's

* [Core](framework/src)
* [Inputs](framework/inputs)
* [Utils](framework/utils)

### UI Elements

###### Inputs
* BaseInput - Generic input class to handle common functionality between all input controls
* Input (Private) - Generic single line input control
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

###### Components
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

###### Core Components
* Viewport - main app viewport
* Section - row/column (can have title to be used as route viewport)
* Content - auto/fill
* Sidebar - can collapse
* Header
* Toolbar
* Statsbar
* Grid

### Dependencies

* `Marked`, `Moment`, `Numeral`, `LoDash`


### Changes

* Removed external UI dependencies.
* Removed dependency on jQuery, instead using pure javascript DOM manipulation

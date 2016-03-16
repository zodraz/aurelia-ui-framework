## COMPONENTS

* [UIForm](#uiform)
* [UIMenu](#uimenu)
* [UIPanel](#uipanel)
* [UIDialog](#uidialog)
* [UITabPanel](#uitabpanel)
* [UITree](#uitree)
* [UIDataGrid](#uidatagrid)
* [UIPager](#uipager)
* [UILogin](#uilogin)
* [UIRibbon](#uiribbon)

---

### UIForm

* Form layout can contain only two columns

```html
<ui-form busy.bind=? validation.bind=? submit.trigger=?>    
    <ui-row>
        <ui-column> <ui-input.....> </ui-column>
        <ui-column> <ui-input.....> </ui-column>
    </ui-row>
</ui-form>
```

---

### UIMenu


```html
<ui-menu (router.bind=? | menu.bind=?) click.trigger=?>    
</ui-menu>
```

```javascript
menu:Array = [{
    id
    icon?
    title
    href?
    isActive
}, '-', 'Section']
```

* `-` will create a separator
* `string` will add a section header

---

### UIPanel

```html
<ui-panel>
    <!--optional header-->
    <ui-header collapse="true|false" close="true|false" primary|secondary>Title</ui-header>
    <!--optional toolbar-->
    <ui-toolbar>...</ui-toolbar>

    <ui-body scroll padded></ui-body>
</ui-panel>
```

---

### UIDialog

_Dialog content view_

```html
<template>
    <!-- any page component or panel -->
</template>
```

_Dialog content view-model must extend UIDialog_

```javascript
class MyDialog extends UIDialog {
    // The model being passed can be consumed in any of the following methods
    canActivate(model?){}
    activate(model?){}
}
```

_Initializing the view_

```javascript
@inject(UIDialogService)
class AnyView {
    constructor(dialogService){}
    showDialog() {
        dialogService.show(MyDialog, model?);
    }
}
```

---

### UITabPanel

```html
<ui-tab-panel active-tab=?>
    <ui-tab label=? icon=? scroll|flex>
        <compose></compose>
        or
        <!-- any page component or panel -->
    </ui-tab>
</ui-tab-panel>
```

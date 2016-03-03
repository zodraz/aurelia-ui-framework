## INPUTS

* [UIButton](#uibutton)
* [UIButtonGroup](#uibuttongroup)
* [UISwitch](#uiswitch)
* [UICheckbox](#uicheckbox)
* [UIRadio](#uiradio)
* [UIOptionGroup](#uioptiongroup)
* [UIInput](#uiinput)
* [UIPhone](#uiphone)
* [UIDualInput](#uidualinput)
* [UITextArea](#uitextarea)

---

### UIButton

```html
<ui-button icon.bind=? label.bind=? href.bind=? disabled.bind=? click.trigger=?
    (theme) primary|secondary|info|danger|success|warning 
    (size) normal|small|large
    (icon-align) left|top>
    
    <!-- menu options for dropdown buttons -->
</ui-button>
```

---

### UIButtonGroup

If `disabled | theme` set on button group, it will override the properties of individual buttons

```html
<ui-button-group value.bind=? disabled.bind=? change.trigger=?
    
    toggle="single|multiple" // Enable toggle
    
    (theme) primary|secondary|info|danger|success|warning 
    (size) normal|small|large
    (icon-align) left|top>
    
    <!-- ui-button value.bind=? -->
</ui-button>
```

---

### UISwitch

```html
<ui-switch checked.bind=? disabled.bind=? change.trigger=?
    (theme) primary|secondary|info|danger|success|warning 
    label-on=? label-off=? width='?px'>
    <!-- Label text -->
</ui-switch>
```

---

### UICheckbox

UIOptionGroup as parent container is optional

```html
<ui-checkbox checked.bind=? disabled.bind=? change.trigger=?>
    <!-- Label text -->
</ui-checkbox>
```

---

### UIRadio

UIOptionGroup as parent container is mandatory

```html
<ui-radio value.bind=? disabled.bind=?>
    <!-- Label text -->
</ui-radio>
```

----

### UIOptionGroup

`name` and `value` properties only applicable for radio button groups

```html
<ui-option-group label.bind=? name.bind=? value.bind=? change.trigger=?>
    <!-- ui-radio | ui-checkbox -->
</ui-option-group>
```

----

### UIInput

```html
<ui-input text|email|number|decimal|url|search|password|capitalize>Label</ui-input>
```

Attributes common to all input elements except checkbox/radio

###### Singular attributes
* `checkbox`: add a checkbox to enable/disable input

###### Bindable attributes
* `disabled`
* `readonly`
* `placeholder`
* `checked`: available only if checkbox is enabled
* `help-text`: text to be displayed below the input field

* `prefix-icon`: Add-On prefix icon 
* `prefix-text`: Add-On prefix text

* `suffix-icon`: Add-On suffix icon 
* `suffix-icon`: Add-On suffix text

* `button-icon`: Add-On button icon 
* `button-icon`: Add-On button text

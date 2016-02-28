## INPUTS

* [UIButton](#uibutton)
* [UIButtonGroup](#uibuttongroup)
* [UISwitch](#uiswitch)
* [UICheckbox](#uicheckbox)
* [UIRadio](#uiradio)
* [UIOptionGroup](#uioptiongroup)

---

### UIButton

    <ui-button icon.bind=? label.bind=? href.bind=? disabled.bind=? click.trigger=?
        (theme) primary|secondary|info|danger|success|warning 
        (size) normal|small|large
        (icon-align) left|top>
        
        <!-- menu options for dropdown buttons -->
    </ui-button>
    
---

### UIButtonGroup

If `disabled | theme` set on button group, it will override the properties of individual buttons

    <ui-button-group value.bind=? disabled.bind=? change.trigger=?
        
        toggle="single|multiple" // Enable toggle
        
        (theme) primary|secondary|info|danger|success|warning 
        (size) normal|small|large
        (icon-align) left|top>
        
        <!-- ui-button value.bind=? -->
    </ui-button>

---

### UISwitch

    <ui-switch checked.bind=? disabled.bind=? change.trigger=?
        (theme) primary|secondary|info|danger|success|warning 
        label-on=? label-off=? width='?px'>
        <!-- Label text -->
    </ui-switch>

---

### UICheckbox

UIOptionGroup as parent container is optional

    <ui-checkbox checked.bind=? disabled.bind=? change.trigger=?>
        <!-- Label text -->
    </ui-checkbox>

---

### UIRadio

UIOptionGroup as parent container is mandatory

    <ui-radio value.bind=? disabled.bind=? change.trigger=?>
        <!-- Label text -->
    </ui-radio>

----

### UIOptionGroup

`name` and `value` properties only applicable for radio button groups

    <ui-option-group label.bind=? name.bind=? value.bind=? change.trigger=?>
        <!-- ui-radio | ui-checkbox -->
    </ui-option-group>

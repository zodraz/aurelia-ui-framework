## CORE

* [UIViewport](#uiviewport)
* [UIPage](#uipage)
* [UISection](#uisection)
* [UIContent](#uicontent)
* [UISidebar](#uisidebar)
* [UIToolbar](#uitoolbar)
* [UIStatsbar](#uistatsbar)

Grid Layout

* [UIRow](#uirow)
* [UIColumn](#uicolumn)

---

### UIViewport

Main app template must contain UIViewport, can only have a single UIViewport. The Viewport contains main application `router-view`.

##### Usage

    <ui-viewport router.bind="Main Router" options.bind="appOptions">
        <!-- Header extras -->
    </ui-viewport>

##### UIViewportOptions

    // App Logo - Relative Path | URL
	logo:string;
	// App Title
	title:string;
	// App Subtitle
	subtitle:string;
	// Footer Copyright
	copyright:string;

	// Show app side menu
	showMenu:boolean = true;
	// Show Taskbar multiple dialogs
	showTaskbar:boolean = true;
	
---
	
### UIPage

Router view container

    <ui-page page-title="?">
        <!-- page content -->
    </ui-page>
    
---
	    
### UISection

Define page section, can contain UISidebar, UIContent, UIToolbar, UIStatsbar. Default layout `row`.

    <ui-section row|column>
        <!-- content -->
    </ui-section>
    
---
	    
### UIContent 

Container for actual page content. Default layout `fill` and `no-scroll`.

    <ui-content fill|auto scroll|no-scroll>
        <!-- content -->
    </ui-content>

---
	    
### UISidebar 

Sidebar to for content / child router. Default width `220px`, not `collapsible`.

    <ui-sidebar router.bind="Child Router" width="?px" collapsible>
        <!-- content -->
    </ui-sidebar>

---
	    
### UIToolbar

A Toolbar to display buttons, can add custom elements within `ui-column`. Default alignment `flex-end`.

    <ui-toolbar>
        <!-- ui-button | ui-column | ui-divider -->
    </ui-toolbar>

---
	    
### UIStatsbar

A simple bar container to metrical statistics for the view

    <ui-statsbar>
        <!-- ui-metric | ui-divider -->
    </ui-statsbar>

---

### UIRow

Flexbox display wrapper, default layout direction `row`

    <ui-row row|column>
        <!-- ui-column -->
    </ui-row>

### UIColumn

Flexed element, default basis `auto`. 

    <ui-column auto|fill|fit size=? width='?px'>
        <!-- content -->
    </ui-column>

* `auto`: auto fit to content size
* `fill`: fill available space
* `full`: wrap and take 100% space

Applicable sizes `xs`,`sm`,`md`,`lg`,`xl` `1-12`.

eg. `size='xl-3 lg-4 md-6'`: 25% width on X-Large, 33.33% width on Large, 50% width on Medium views

----

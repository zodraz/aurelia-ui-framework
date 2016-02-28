## CORE


### UIViewport

Main app template must contain UIViewport, can only have a single UIViewport. The Viewport contains main application `router-view`.

##### Usage

    <ui-viewport options.bind="appOptions">
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
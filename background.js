window.addEventListener('load', function(){
	var theButton;
	var ToolbarUIItemProperties = {
		disabled: false,
		title: 'OGP checker',
		icon: 'icons/icon-18.png',
		onclick: function(){
			 var tab = opera.extension.tabs.getFocused();
			 if( tab ){
				var url = encodeURIComponent(tab.url);
				var newtab = opera.extension.tabs.create({ url:'https://developers.facebook.com/tools/debug/og/object?q='+url, focused: true });
			}
		}
	}
	theButton = opera.contexts.toolbar.createItem( ToolbarUIItemProperties );
	opera.contexts.toolbar.addItem( theButton );
}, false);
(function($){Drupal.jQueryUiFilter=Drupal.jQueryUiFilter||{}
var _currentHash=location.hash;Drupal.jQueryUiFilter.hashChange=function(func){if('onhashchange'in window){$(window).bind('hashchange',func);}
else{window.setInterval(function(){if(location.hash!=_currentHash){_currentHash=location.hash;func();}},100);}}
Drupal.jQueryUiFilter.globalOptions=function(widgetType){Drupal.jQueryUiFilter.cleanupOptions(jQuery.extend($.ui[widgetType].prototype.options,Drupal.settings.jQueryUiFilter[widgetType+'Options'],Drupal.jQueryUiFilter[widgetType+'Options']));}
Drupal.jQueryUiFilter.getOptions=function(widgetType,options){return Drupal.jQueryUiFilter.cleanupOptions(jQuery.extend({},Drupal.settings.jQueryUiFilter[widgetType+'Options'],Drupal.jQueryUiFilter[widgetType+'Options'],options||{}));}
Drupal.jQueryUiFilter.cleanupOptions=function(options){for(var name in options){if(typeof(options[name])=='string'&&options[name]==''){delete options[name];}
else if(options[name]=='false'){options[name]=false;}
else if(options[name]==='true'){options[name]=true;}
else if(name==='position'&&options[name].indexOf(',')!=-1){options[name]=options[name].split(/\s*,\s*/);}
else if(typeof(options[name])=='object'){options[name]=Drupal.jQueryUiFilter.cleanupOptions(options[name]);}}
return options;}})(jQuery);;
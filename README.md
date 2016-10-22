ngContextMenu
================

Handles right mouse button clicks to open the Angular UI Bootstrap Dropdown as a custom context menu.

-----
## Dependencies
https://angular-ui.github.io/bootstrap/
-at minimum the dropdown module

-----
## Download/Include
First Download/Clone the repo or get it from npm/bower with
```
 npm install uib-context-menu
 bower install uib-context-menu
```
you can automatically add them to your dependency list in packagae.json by suffixing the commands with 
```
--save
```
Then include your script
```
<script src="dist/UIBContextMenu.js"></script>
```
Next Inject module into your app
```
var app = angular.module('myApp', ['uib-context-menu']);

```

-----
## Create a Context Menu
Creating a custom context menu in your DOM
```
 <ul id="context1" class="dropdown-menu">
   <li><a ng-click="">Edit</a></li>
   <li class="divider"></li>
   <li><a ng-click="">Delete</a></li>
 </ul>
```

-----
## Create multiple context menus
and using them is as easy as placing the ```context=""``` directive in any element and pointing to the ID of the desired menu
```
<div context="context1" role="button">
  <p>div as a button with context menu</p>
</div>
```

-----
## Callback prior to opening
if you want to execute a function before opening the popup simply create the function in your controller
```
$scope.myCallback = function(){
 console.log("callback");
}
```
and use the optional ```callback=""``` directive by placing it in the same element as the context directive
```
<div context="context1" callback="myCallback()" role="button">
  <p>div as a button with context menu</p>
</div>
```

-----
## Demo
http://plnkr.co/edit/Gc7MRE?p=info

-----
### Similar repos
- https://github.com/ianwalter/ng-context-menu
- https://github.com/Templarian/ui.bootstrap.contextMenu

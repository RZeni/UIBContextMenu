ngContextMenu
================

Handles right mouse button clicks to open the Angular UI Bootstrap Dropdown as a custom context menu.

Usage
-----
First Download or clone repo or get from npm with
```
 npm install uib-context-menu
```
Then include your script
```
<script src="dist/ngContextMenu.js"></script>
```
Next Inject module into your app
```
var app = angular.module('myApp', ['ngContextMenu']);

```
Create a custom context menu in your DOM
```
 <ul id="context1" class="dropdown-menu">
   <li><a ng-click="">Edit</a></li>
   <li class="divider"></li>
   <li><a ng-click="">Delete</a></li>
 </ul>
```
You can create multiple context menus,
and using them is as easy as placing the ```context=""``` directive in any element and pointing to the ID of the desired menu
```
<div context="context1" role="button">
  <p>div as a button with context menu</p>
</div>
```
if you want to execute a function before opening the popup simply bind to the focus event using ng-focus since it executes before contextmenu event.
To do so, create a function in you controller
```
$scope.myCallback = function(){
 console.log("callback");
}
```
and place it in the same element as the context directive
```
<div context="context1" ng-focus="myCallback()" role="button">
  <p>div as a button with context menu</p>
</div>
```

Demo
-----
http://plnkr.co/edit/Gc7MRE?p=info

Similar repos
-----
- https://github.com/ianwalter/ng-context-menu
- https://github.com/Templarian/ui.bootstrap.contextMenu

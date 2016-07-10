ngContextMenu
================

Handles right mouse button clicks to open the Angular UI Bootstrap Dropdown as a custom context menu.

Usage
-----
First include your script
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
There is also an optional ```context-callback=""``` directive that allows you to execute a function before opening the popup.
In your controller define a scope function
```
$scope.myCallback = function(){
 console.log("callback");
}
```
and place it in the same element as the context directive
```
<div context="context1" context-callback="myCallback()" role="button">
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

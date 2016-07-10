(function(angular) {
  var ngContextMenu = angular.module('ngContextMenu', []);

  ngContextMenu.directive('context', [function($timeout) {
    var contextMenus = [];
    return {
      restrict: 'A',
      scope: '@&',
      link: function compile(scope, iElement, iAttrs) {
        //handle callback
        iAttrs.$observe("context-callback", function (val) {
          if (val) {
            console.log(val);
            iElement.attr( val); // whatever you want to do
          }
        });

        var ul = document.getElementById(iAttrs.context),
          last = null;

        ul.style.display = 'none';

        angular.element(iElement).bind('contextmenu', function(event) {
          if(contextMenus.length > 0){
            contextMenus[0].style.display = "none";
            contextMenus.pop();
          }
          ul.style.position = "fixed",
          ul.style.display = "block";

          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();

          var left = event.clientX - 50;
          var top = event.clientY;
          var menuHeight = angular.element(ul)[0].offsetHeight;
          var menuWidth = angular.element(ul)[0].offsetWidth;
          var winHeight = event.view.innerHeight;
          var winWidth = event.view.innerWidth;

          if(top + menuHeight > winHeight)
            top -= menuHeight;

          if(left + menuWidth > winWidth)
            left -= menuWidth;

          ul.style.left = left + 'px',
          ul.style.top = top + 'px';
          last = event.timeStamp;

          contextMenus.push(ul);
          console.log(contextMenus);
          return false;
        });

        angular.element(document).bind('click', function(event) {
          var target = angular.element(event.target);
          if (!target[0].classList.contains('popover') && !target.parent()[0].classList.contains(".popover")) {
            if (last === event.timeStamp)
              return;
            ul.style.display = 'none';
          }
          contextMenus.pop();
        });
      }
    };
  }]);
})(window.angular);

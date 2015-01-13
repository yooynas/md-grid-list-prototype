"use strict";angular.module("gridTestApp",[]),angular.module("gridTestApp").controller("MainCtrl",["$scope",function(){this.actionInvoked=function(a){console.log("primary",a)},this.secondaryActionInvoked=function(a){console.log("secondary",a)}}]),angular.module("gridTestApp").directive("mdGridTile",function(){return{restrict:"E",require:"^mdGridList",scope:{onAction:"&mdOnAction",onSecondaryAction:"&mdOnSecondaryAction"},template:"<md-grid-tile-content ng-transclude></md-grid-tile-content>",transclude:!0,link:function(a,b,c,d){var e=b[0].querySelector("header, footer");b.on("click",function(b){a.$apply(function(){b.target==e||b.target.parentNode==e?a.onSecondaryAction({$event:b}):a.onAction({$event:b})})});var f=angular.bind(d,d.invalidateLayout);f(),a.$on("$destroy",f),c.$observe("colspan",f),c.$observe("rowspan",f)}}}),function(){function a(a){this.invalidated=!1,this.$timeout_=a,this.layoutDelegate}function b(a){function b(a){for(var b=0,f=0;f-b<a.col;)k>=j?c():(b=m.indexOf(0,k),-1!=b?(f=e(b+1),-1!=f?k=f+1:c()):c());return d(b,a.col,a.row),k=b+a.col,{col:b,row:l}}function c(){k=0,l++,d(0,j,-1),console.log("row("+l+"):",m)}function d(a,b,c){for(var d=a;a+b>d;d++)m[d]=Math.max(m[d]+c,0)}function e(a){var b;for(b=a;b<m.length;b++)if(0!=m[b])return b;return b==m.length?b:void 0}function f(){for(var a=[],b=0;j>b;b++)a.push(0);return a}function g(a){return{col:parseInt(a.attr("colspan"),10)||1,row:parseInt(a.attr("rowspan"),10)||1}}function h(b,c){return{width:c.col/j*100+"%",height:c.row*a.rowHeight+"px",left:b.col/j*100+"%",top:b.row*a.rowHeight+"px"}}var i=Array.prototype.slice.call(a.container[0].querySelectorAll("md-grid-tile")),j=a.cols,k=0,l=0,m=f();i.map(function(a){return angular.element(a)}).forEach(function(a){var c=g(a),d=b(c);a.css(h(d,c))})}angular.module("gridTestApp").directive("mdGridList",["$$mdGridLayout","$parse",function(b,c){return{restrict:"E",controller:a,link:function(a,d,e,f){var g=angular.bind(f,f.invalidateLayout);e.$observe("cols",g),e.$observe("rowHeight",g),f.layoutDelegate=function(){b({container:d,cols:c(e.cols)(a),rowHeight:c(e.rowHeight)(a)})}}}}]).factory("$$mdGridLayout",function(){return b}),a.$inject=["$timeout"],a.prototype.invalidateLayout=function(){this.invalidated||(this.invalidated=!0,this.$timeout_(angular.bind(this,this.layout)))},a.prototype.layout=function(){try{this.layoutDelegate()}finally{this.invalidated=!1}}}();
angular.module("app", [])
.run(function ($rootScope) {
    $rootScope.rootvar = "Object defined on $rootScope";
})
.controller("MainController", function ($scope) {
    $scope.sendMail = function () {
        alert("Sending mail to" + $scope.to);
    };
    $scope.brand = "Mbalukas";
})
.controller("ChildController", function ($scope) {

})
.directive("myDir", function () {
    return {
        restrict: "A",
        priority: 0,
        scope: true,
        template: "<div>Inherited even inside own directive {{rootvar}}</div>"
    };
})
.directive("isolateScope", function () {
    return {
        restrict: "A",
        replace: true,
        scope: {},
        template: "<div>rootvar not available{{rootvar}}</div>"
    };
})
.directive("testDir", function () {
    return {
        scope: {
            firstname: "=firstname"
        },
        replace: true,
        template: "<div><input type='text' ng-model='firstname'></div>"
    };
})
.directive("isolateScopeDemo", function () {
    return{
        scope: {
            localtochild: "@"
        },
        replace: true,
        template: "<div><input type='text' ng-model='localtochild'></div>"
    };
})
.directive("scopeExample", function () {
    return{
        scope: {
            ngModel: '=',
            onSend: '&',
            fromName: '@'
        },
        replace: true,
        template: "<div><input type='text' ng-model='fromName'><br><input type='submit' ng-click='onSend()'></div>"
    };
})
.directive("navBar", function () {
    return {
        restrict: "A",
        scope: true,
        transclude: true,
        templateUrl: "navbar.html"
    };
})
.directive("controlledDir", function () {
    return {
        scope: true,
        restrict: "A",
        templateUrl: "with_controller.html",
        controller: function ($scope, $element, $attrs, $transclude) {
            $scope.scope = $scope.toString();
            console.log($scope);
            $scope.element = $element;
            $scope.attrs = $attrs;
            $scope.transclude = $transclude;
            console.log($transclude);
        }
    };
});
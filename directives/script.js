angular.module("app", [])
.run(function ($rootScope) {
    $rootScope.root = "In root scope ";
})
.controller("MainController", function ($scope) {
    $scope.parent = "In parent scope ";
})
.controller("ChildScope", function ($scope) {
    $scope.child = "In child scope ";
    $scope.fromctrl = "From controller: " + $scope.child + $scope.parent + $scope.root;
})
.directive("myButton", function () {
    return{
        restrict: "A",
        replace: true,
        template: "<a href='https://google.com'>Go to Google</a>"
    };
})
.directive("myDir", function () {
    return {
        restrict: "A",
        replace: true,
        scope: {
            myLink: "@",
            myText: "@"
        },
        template: "<a href='{{myLink}}'>{{myText}}</a>"
    };
}).directive("nameDir", function () {
    return {
        restrict: "A",
        replace: true,
        scope: {
            firstName: "@"
        },
        template: "<div>Hello, {{firstName}}</div>"
    };
}).directive("twoWay", function () {
    return{
        restrict: "A",
        replace: true,
        scope: {
            internalText: "=displayText",
            link: "@"
        },
        template: '\
                <div>\
                <label>Internal link text:</label><br>\
                <input type="text"\
                ng-model="internalText" /><br>\
                <a href="{{link}}">{{internalText}}</a>\
                </div>\
                '
    };
});
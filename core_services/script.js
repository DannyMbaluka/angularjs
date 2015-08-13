"use strict";
(function (angular) {
    angular.module("app", [])
    .controller("MainController", ["$scope", "$compile", function ($scope,
        $compile) {
            $scope.id = $scope.$id;
            $scope.parent = $scope.$parent;
            $scope.$watch("name", function () {
                console.log("variable");
            });
            var myhtml = "<div>This thing is really {{how}}</div>";
            angular.element(".test").html(($compile(myhtml)($scope)));
            $scope.how = "Shitty!";

        }
    ]);
})(window.angular);

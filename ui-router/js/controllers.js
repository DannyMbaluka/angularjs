"use strict";
(function (angular) {
    angular.module("app")
    .controller("app.mainController", function () {

    }).controller("app.products", ["$scope", function ($scope) {
            $scope.products = [
                {
                    "code": "1234001",
                    "name": "Kimbo",
                    "price": "500"
                },
                {
                    "code": "1234002",
                    "name": "Sugar",
                    "price": "250"
                },
                {
                    "code": "1234003",
                    "name": "Salt",
                    "price": "30"
                }
            ];

        }
    ]);
})(window.angular);
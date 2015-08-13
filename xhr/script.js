angular.module("app", [])
.controller("MainController", ["$scope", "$http", function ($scope, $http) {
        $http
        .jsonp("https://api.github.com?callback=JSON_CALLBACK")
        .success(function (data) {
            console.log(data)
        });
    }]);
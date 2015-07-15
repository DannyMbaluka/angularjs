angular.module("app", ["ngRoute"])
.config(['$locationProvider', function ($locationProvider) {
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');
    }
])
.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/home", {
            controller: "MainController",
            templateUrl: "home.html",
        }).when("/about", {
            controller: "MainController",
            templateUrl: "about.html"
        }).when("/contact", {
            controller: "MainController",
            templateUrl: "contact.html"
        }).when("/login", {
            controller: "MainController",
            temlateUrl: "login.html"
        }).otherwise({
            redirectTo: "/home"
        });
    }
])
.controller("MainController", ["$scope", "$location", function ($scope,
    $location) {
        $scope.login = function () {
            $location.path("/home").replace();
        };
    }
]);
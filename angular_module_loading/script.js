angular.module("app", ["ngRoute"])
.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "MainController",
            templateUrl: "home.html"
        }).when("/about", {
            controller: "MainController",
            templateUrl: "about.html"
        }).when("/admin", {
            controller: "MainController",
            templateUrl: "admin.html"
        });
    }])
.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function (evt, next, current) {
        if (next.templateUrl === "admin.html") {
            alert("You cannot go to admin site");
            window.location = "";
        }
    });
})
.controller("MainController", function () {

});
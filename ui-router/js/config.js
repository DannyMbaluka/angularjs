"use strict";
(function (angular) {
    angular.module("app")
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider,
        $urlRouterProvider) {
            $stateProvider.state("app", {
                url: "/",
                views: {
                    "main": {
                        templateUrl: "tpls/main.html",
                        controller: "app.mainController"
                    }
                }
            }).state("app.products", {
                url: "products",
                views: {
                    "content@app": {
                        templateUrl: "tpls/products.html",
                        controller: "app.products"
                    }
                }
            }).state("app.services", {
                url: "services",
                views: {
                    "content@app": {
                        templateUrl: "tpls/services.html"
                    }
                }
            }).state("app.about", {
                url: "about",
                views: {
                    "content@app": {
                        templateUrl: "tpls/about.html"
                    }
                }
            }).state("app.login", {
                url: "login",
                views: {
                    "content@app": {
                        templateUrl: "tpls/login.html"
                    }
                }
            });
            $urlRouterProvider.otherwise("/");
        }]);
})(window.angular);
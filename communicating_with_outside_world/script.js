angular.module("app", ["ngResource", "firebase"])
//.config(["$httpProvider", "$cacheFactory", function ($httpProvider,
//    $cacheFactory) {
//        $httpProvider.defaults.cache = $cacheFactory("lru", {
//            capacity: 20
//        });
//    }
//])
.factory("myInterceptor", function ($q) {
    var interceptor = {
        "request": function (config) {
            return config;
        },
        "response": function (response) {
            return response;
        },
        "requestError": function (rejection) {
            return rejection;
        },
        "responseError": function (responseError) {
            return responseError;
        }
    };
    return interceptor;
})
.config(function ($httpProvider) {
    $httpProvider.interceptors.push('myInterceptor');
    $httpProvider.defaults.headers.common["Accept"] = "Application/json";
    $httpProvider.defaults.headers.post["Content-type"] = "Application/json";
    $httpProvider.defaults.headers.common["X-Requested-by"] = "myApp";
})
.service("UserService", function ($http) {
    this.getUsers = function () {
        var request = $http({
            method: "GET",
            url: "users.json"
        });
        return request;
    };

})
.controller("MainController",
["$scope", "UserService", "$http", "$httpParamSerializer", "$firebaseObject", function (
    $scope, UserService, $http, $httpParamSerializer, $firebaseObject) {
        var ref = new Firebase(
        "https://blinding-fire-1663.firebaseio.com/angulartut/author");
        var authorObject = $firebaseObject(ref);
        authorObject.$bindTo($scope, "author");
        $scope.test = function () {
            console.log($scope.author);
        };

        UserService.getUsers().success(function (data) {

        }).error(function (error) {

        });
        UserService.getUsers().then(function (response) {
            $scope.users = response.data.users;
            console.log($scope.users);
        });

        $http({
            method: "GET", //Can also be POST, HEAD, DELETE & JSONP
            url: "users.json", //Can be relative or absolute
            params: {"name": "Daniel Mbaluka", "age": 50}, //Resolve into queryparams
            data: {"firstname": "Daniel Mbaluka", "age": 40}, //Corresponds to POST data
            headers: {"Accept": "application/json", "Content-type": "application/json"},
            transformRequest: function (data, headers) {
                return {
                    data: data,
                    headers: headers
                };
            },
            transformResponse: function (data, headers) {
                return {
                    data: data,
                    headers: headers
                };
            },
            cache: true,
            timeout: 5000,
            withCredentials: true,
            responseType: "json",
            paramSerializer: $httpParamSerializer
        });
    }
]);
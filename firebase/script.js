angular.module("app", ["ngRoute", "firebase"])
.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/users", {
            controller: "UsersController",
            templateUrl: "users.list.html"
        })
        .when("/users/new", {
            controller: "UsersController",
            templateUrl: "users.new.html"
        })
        .when("/users/:userId", {
            controller: "UserEditController",
            templateUrl: "users.edit.html"
        })
        .otherwise({
            redirectTo: "/users"
        });
    }
])
.controller("UsersController", ["$scope", "$firebaseArray", function ($scope,
    $firebaseArray) {
        var usersRef = new Firebase(
        "https://blinding-fire-1663.firebaseio.com/angulartut/users");
        $scope.users = $firebaseArray(usersRef);
        $scope.addUser = function () {
            console.log("Adding user...");
            $scope.users.$add({
                firstname: $scope.user.fname,
                lastname: $scope.user.lname,
                email: $scope.user.email
            });
        };
        $scope.removeUser = function (user) {
            $scope.users.$remove(user);
        };
    }
])
.controller("UserEditController",
["$scope", "$firebaseObject", "$routeParams", function (
    $scope, $firebaseObject, $routeParams) {
        var userRef = new Firebase(
        "https://blinding-fire-1663.firebaseio.com/angulartut/users/" + $routeParams.userId);
        var user = $firebaseObject(userRef);
        user.$bindTo($scope, "user");
    }
]);
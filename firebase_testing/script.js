angular.module("app", ["firebase"])
.controller("MainController", ["$scope", "$firebaseArray", function ($scope,
    $firebaseArray) {
        var ref;
        var users = {
            ref: function () {
                if (!ref)
                    ref = new Firebase(
                    "https://blinding-fire-1663.firebaseio.com/angulartut/users");
                return ref;
            },
            greet: function (person) {
                console.log("Hi, " + person.fname);
            },
            listen: function () {
                users.ref().on("child_added", function (snapshot) {
                    users.greet(snapshot.val());
                });
            }
        };
        var usersRef = users.ref();
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
    }]);
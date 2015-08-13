"use strict";
(function (angular) {
    angular.module("app", ["js-data", "firebase"])
    .constant("FBPATH",
    "https://blinding-fire-1663.firebaseio.com/angulartut")
    .config(["DSFirebaseAdapterProvider", "FBPATH", function (
        DSFirebaseAdapterProvider, FBPATH) {
            DSFirebaseAdapterProvider.defaults.basePath = FBPATH;
        }
    ])
    .run(["DS", "DSFirebaseAdapter", function (DS, DSFirebaseAdapter) {
            DS.adapters.firebase = DSFirebaseAdapter;
            DS.registerAdapter("firebase", DSFirebaseAdapter,
            {"default": true});
        }
    ])
    .factory("User", ["DS", function (DS) {
            var users = DS.defineResource({
                endpoint: "users",
                name: "user",
                idAttribute: "userID"
            });
            return users;
        }
    ])
    .controller("MainController", ["$scope", "User", "Account", function (
        $scope, User, Account) {
            User.findAll().then(function (users) {
                $scope.users = users;
            });

            $scope.createUser = function () {
//                var account = {
//                    userId: "/-Jw_nP_9Cp7YNNkZL2zx",
//                    created: new Date().getTime(),
//                    balance: 0
//                };
//                Account.create(account).then(function (account) {
//                    console.log(account);
//                }, function (error) {
//                    console.log(error);
//                });
                User.create($scope.user).then(function (user) {
//                    console.log(user);
                    var account = {
                        userId: user.userID,
                        created: new Date().getTime(),
                        balance: 0
                    };
                    Account.create(account).then(function (account) {
                        $scope.createdAccount = account;
                        console.log(account);
                        //console.log(account.user);
                        console.log(User.get(account.userId));
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    console.log(error);
                });
            };
        }
    ]);
})(window.angular);

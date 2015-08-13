angular.module("app")
.factory("Account", ["DS", function (DS) {
        var account = DS.defineResource({
            name: "account",
            idAttribute: "accountID",
            endpoint: "accounts",
            relations: {
                belongsTo: {
                    user: {
                        localField: "user",
                        localKey: "userId"
                    }
                }
            }
        });
        return account;
    }
]);
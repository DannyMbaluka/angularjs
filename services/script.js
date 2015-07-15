angular.module("app", [])
.provider("providerMembers", function () {
    var members = [
        "Daniel Mbaluka",
        "Francis Muthui",
        "Mike Moses"
    ];
    this.addMember = function (name) {
        members.push(name);
    };
    this.$get = function () {
        return{
            getMembers: function () {
                return  members;
            }
        };

    };

})
.config(["providerMembers", function (providerMembers) {
        providerMembers.addMember("Another Member");
        providerMembers.addMember("Yet Another Member");
    }
])
.factory('factoryMembers', function () {
    var members = [
        "Daniel Mbaluka",
        "Francis Muthui",
        "Mike Moses"
    ];
    return {
        members: members
    };
})
.service("serviceMembers", function () {
    var members = [
        "Daniel Mbaluka",
        "Francis Muthui",
        "Mike Moses"
    ];
    this.getMembers = function () {
        return  members;
    };
})
.controller("MainController",
["$scope", "factoryMembers", "serviceMembers", "providerMembers", function (
    $scope,
    factoryMembersService, serviceMembersService, providerMembersService) {
        $scope.factoryMembers = factoryMembersService.members;
        $scope.serviceMembers = serviceMembersService.getMembers();
        $scope.providerMembers = providerMembersService.getMembers();
    }
]);
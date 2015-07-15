angular.module("myApp", []).controller("MyController",
        function ($scope, $interval) {
            $interval(function () {
                $scope.test = new Date();
            }, 1000);
            $scope.person = {
                name: "Daniel Mbaluka"
            }
        }).controller("InnerController",
        function ($scope) {
            $scope.person.male = "Male";
        }).filter("sentence", function(){
            return function(input){
                return input[0].toUpperCase() + input.slice(1);
            };
        });

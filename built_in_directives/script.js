angular.module("app", [])
.run(["$rootScope", function ($rootScope) {
        $rootScope.test = "<p>ng-app creates <em>$rootScope</em>, accessible in <em>.run</em></p>";
    }])
.controller("MainController", ["$scope", "$timeout", function ($scope,
    $timeout) {
        $timeout(function () {
            $scope.myHref = "https://google.com";
        }, 2500);
        $timeout(function () {
            $scope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
        }, 2000);

        $scope.commonValue = "This is a common value (simple)";
        $scope.changeValue = function () {
            $scope.commonValue = "Common value changed by parent (simple)";
        };
        $scope.strings = [
            "One",
            "Another",
            "Another"
        ];
        $scope.add = function () {
            $scope.strings.push("Another");
        };

        $scope.ctrlname = "Uses the controller of the including element";
        $scope.objectOnScope = {};
        $scope.objectOnScope.property = "objectOnScope.property value";
        $scope.checkGender = function () {
            alert("This directive has been missing for a long time");
        };

        $scope.fields = [
            {placeholder: 'Username', isRequired: true},
            {placeholder: 'Password', isRequired: true},
            {placeholder: 'Email (optional)', isRequired: false}
        ];
        $scope.submitForm = function () {
            alert("it works!");
        };
        $scope.cities = [
            {name: 'Seattle'},
            {name: 'San Francisco'},
            {name: 'Chicago'},
            {name: 'New York'},
            {name: 'Boston'}
        ];
    }])
.controller("ChildCtrl", ["$scope", function ($scope) {
        $scope.ctrlname = "Uses the controller explicitly stated";
        $scope.changeValue = function () {
            $scope.commonValue = "Common value changed by child (simple)";
        };
        $scope.add = function () {
            $scope.strings.push("Another)");
        };
    }]);
"use strict";
(function (angular) {
    angular.module("pg-grid", [])
    .directive("pgGrid", function () {
        return {
            scope: {
                config: "="
            },
            replace: true,
            templateUrl: "pg-grid.html"
        };
    });
})(window.angular);
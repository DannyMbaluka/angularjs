"use strict";
(function (angular) {
    angular.module("pg-grid-test", ["pg-grid"]).controller("MainController",
    function ($scope) {
        $scope.config = {};
        $scope.config.data = [
            {
                "dessert": "Frozen yogurt",
                "calories": "159",
                "fat": "6.0",
                "carbs": "24",
                "protein": "4.0",
                "sodium": "87",
                "calcium": "14%",
                "iron": "1%"
            },
            {
                "dessert": "Ice cream sandwich",
                "calories": "237",
                "fat": "9.0",
                "carbs": "37",
                "protein": "4.3",
                "sodium": "129",
                "calcium": "18%",
                "iron": "1%"
            },
            {
                "dessert": "Eclair",
                "calories": "262",
                "fat": "16.0",
                "carbs": "24",
                "protein": "6.0",
                "sodium": "337",
                "calcium": "6%",
                "iron": "7%"
            },
            {
                "dessert": "Frozen yogurt",
                "calories": "159",
                "fat": "6.0",
                "carbs": "24",
                "protein": "4.0",
                "sodium": "87",
                "calcium": "14%",
                "iron": "1%"
            },
            {
                "dessert": "Cupcake",
                "calories": "305",
                "fat": "3.7",
                "carbs": "67",
                "protein": "4.3",
                "sodium": "413",
                "calcium": "3%",
                "iron": "8%"
            },
            {
                "dessert": "Gingerbread",
                "calories": "356",
                "fat": "14.0",
                "carbs": "49",
                "protein": "3.9",
                "sodium": "327",
                "calcium": "7%",
                "iron": "16%"
            },
            {
                "dessert": "Jelly bean",
                "calories": "392",
                "fat": "0.2",
                "carbs": "94",
                "protein": "0.0",
                "sodium": "50",
                "calcium": "0%",
                "iron": "2%"
            },
            {
                "dessert": "Lollipop",
                "calories": "375",
                "fat": "0.0",
                "carbs": "98",
                "protein": "0.0",
                "sodium": "38",
                "calcium": "0%",
                "iron": "1%"
            },
            {
                "dessert": "Honey comb",
                "calories": "308",
                "fat": "0.2",
                "carbs": "98",
                "protein": "0",
                "sodium": "38",
                "calcium": "0%",
                "iron": "2%"
            },
            {
                "dessert": "Donut",
                "calories": "159",
                "fat": "6.0",
                "carbs": "24",
                "protein": "4.0",
                "sodium": "87",
                "calcium": "14%",
                "iron": "1%"
            },
            {
                "dessert": "Kitkat",
                "calories": "518",
                "fat": "26.0",
                "carbs": "65",
                "protein": "7",
                "sodium": "54",
                "calcium": "12%",
                "iron": "6%"
            }

        ];
    });
})(window.angular);

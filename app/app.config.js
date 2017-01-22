var app = angular.module('babyApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/', {
                    template: '<item-list></item-list>',
                    controller: "MainCtrl"
                }).
                when('/items/images', {
                    template: '<image-gallery></image-gallery>',
                    controller: "ImagesCtrl"
                }).
                when('/items/needed', {
                    template: '<items-needed></items-needed>',
                    controller: "NeededCtrl"
                }).
                when('/items/purchased', {
                    template: '<items-purchased></items-purchased>',
                    controller: "PurchasedCtrl"
                }).
                when('/items/:itemId', {
                    template: '<item-detail></item-detail>',
                    controller: "DetailCtrl"
                }).

                otherwise('/');
        }
    ]);

app.controller("MainCtrl", function ($scope) {
    $scope.pageClass = "page-home";
});
app.controller("NeededCtrl", function ($scope) {
    $scope.pageClass = "page-needed";
});
app.controller("PurchasedCtrl", function ($scope) {
    $scope.pageClass = "page-purchased";
});
app.controller("ImagesCtrl", function ($scope) {
    $scope.pageClass = "image-gallery";
});
app.controller("DetailCtrl", function ($scope) {
    $scope.pageClass = "page-detail";
});
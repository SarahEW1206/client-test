var app = angular.module('sassApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/', {
                    template: '<main-page></main-page>',
                    controller: "MainCtrl"
                }).
                when('/web', {
                    template: '<web-page></web-page>',
                    controller: "WebCtrl"
                }).

                when('/content', {
                    template: '<content-page></content-page>',
                    controller: "ContentCtrl"
                }).
                when('/brand', {
                    template: '<brand-page></brand-page>',
                    controller: "BrandCtrl"
                }).

                otherwise('/');
        }
    ]);

app.controller("MainCtrl", function ($scope) {
    $scope.pageClass = "page-home";
    $scope.pageBackground = "home-background"

});

app.controller("WebCtrl", function ($scope) {
    $scope.pageClass = "page-web";
    $scope.pageBackground = "web-background";

});

app.controller("ContentCtrl", function ($scope) {
    $scope.pageClass = "page-content";
    $scope.pageBackground = "content-background";

});

app.controller("BrandCtrl", function ($scope) {
    $scope.pageClass = "page-brand";
    $scope.pageBackground = "brand-background";

});

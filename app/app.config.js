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

                otherwise('/');
        }
    ]);

app.controller("MainCtrl", function ($scope) {
    $scope.pageClass = "page-home";
});

app.controller("WebCtrl", function ($scope) {
    $scope.pageClass = "page-web";
});

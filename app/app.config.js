var app = angular.module('sassApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
        
            // $locationProvider.hashPrefix('!');
            $locationProvider.html5Mode(true);
            
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
                when('/about', {
                    template: '<brand-page></brand-page>',
                    controller: "BrandCtrl"
                }).
                when('/design', {
                    template: '<design-page></design-page>',
                    controller: "DesignCtrl"
                }).
                when('/contact', {
                    template: '<contact-page></contact-page>',
                    controller: "ContactCtrl"
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
app.controller("DesignCtrl", function ($scope) {
    $scope.pageClass = "page-design";
    $scope.pageBackground = "design-background";

});
app.controller("ContactCtrl", function ($scope) {
    $scope.pageClass = "page-contact";
    $scope.pageBackground = "contact-background";

});

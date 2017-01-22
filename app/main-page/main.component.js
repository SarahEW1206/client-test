angular.module('sassApp').component('mainPage', {
    templateUrl: 'main-page/main.template.html', controller: function
    ItemListController($scope) {
        var self = this;



        self.pageClass = function pageClass() {
            self.pageClass = "page-home";
        };
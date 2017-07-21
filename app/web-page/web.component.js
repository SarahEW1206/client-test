angular.module('sassApp').component('webPage', {
    templateUrl: '/web-page/web.template.html',
    controller: function WebPageController($scope) {
        var self = this;



        self.pageClass = function pageClass() {
            self.pageClass = "page-web";
        };

    }

})
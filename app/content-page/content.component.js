angular.module('sassApp').component('contentPage', {
    templateUrl: '/content-page/content.template.html',
    controller: function ContentPageController($scope) {
        var self = this;



        self.pageClass = function pageClass() {
            self.pageClass = "page-conent";
        };

    }

})
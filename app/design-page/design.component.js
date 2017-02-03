angular.module('sassApp').component('designPage', {
    templateUrl: 'design-page/design.template.html',
    controller: function ContentPageController($scope) {
        var self = this;



        self.pageClass = function pageClass() {
            self.pageClass = "page-design";
        };

    }

})
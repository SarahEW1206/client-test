angular.module('sassApp').component('brandPage', {
    templateUrl: 'brand-page/brand.template.html',
    controller: function BrandPageController($scope) {
        var self = this;



        self.pageClass = function pageClass() {
            self.pageClass = "page-brand";
        };

    }

})
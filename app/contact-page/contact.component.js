angular.module('sassApp').component('contactPage', {
    templateUrl: '/contact-page/contact.template.html',
    controller: function ContactPageController($scope) {
        var self = this;



        self.pageClass = function pageClass() {
            self.pageClass = "page-contact";
        };

    }

})
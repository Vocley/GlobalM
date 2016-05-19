(function() {
    'use strict';

    angular
        .module('globalM')
        .controller('MainController', MainController);

    function MainController($scope, $timeout, ajaxService) {
        var vm = this;

        vm.sendButton = 'Apply';
        vm.feedbackColor = '';
        vm.fileName = '';
        
        //get file name
        angular.element('#browseBtn').on('change', function(evt) {
            var files = evt.target.files;

            vm.fileName = files[0].name;
            $scope.$apply();
        });

        //browse inputfield
        vm.browse = function() {
            angular.element('#browseBtn').trigger('click');
        };

        //Contact Form
        vm.contact = {
            firstName: '',
            secondName: '',
            email: '',
            phone: '',
            linkedIn: '',
            website: '',
            upload: '',
            message: ''
        };

        vm.submitForm = function(isValid) {

            vm.isSending = false;
            vm.feedbackMessage = '';

            if (isValid) {

                vm.isSending = true;
                vm.sendButton = 'Applying..';
                

                //ajaxService.postAjax('#', vm.contact)
                //this is a mock service mockPostSuccess() for success mockPostFail() for fail - use above line for actual posting service
                ajaxService.mockPostFail()
                    .then(function() {
                        //success
                        vm.isSending = false;
                        vm.sendButton = 'Applied';
                        vm.feedbackColor = 'green';
                        vm.feedbackMessage = 'Thank you ' + vm.contact.firstName + ' for your application.';
                        

                        vm.contact = {
                            firstName: '',
                            secondName: '',
                            email: '',
                            phone: '',
                            linkedIn: '',
                            website: '',
                            upload: '',
                            message: ''
                        };

                        $scope.contForm.$setPristine();
                        $scope.contForm.$setUntouched();


                    }, function() {
                        //fail
                        vm.isSending = false;
                        vm.sendButton = 'Apply';
                        vm.feedbackColor = 'red';
                        vm.feedbackMessage = 'Oops....Something is wrong.';
                        
                    });
            }
        };

    }
})();

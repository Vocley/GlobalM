(function() {
    'use strict';

    angular
        .module('globalM')
        .service('ajaxService', function($http, $timeout, $q) {

            var urlBase = '#';

            this.postAjax = function(url, data) {

                return $http.post(urlBase + url, data);

            };

            this.mockPostSuccess = function() {

                var deferred = $q.defer();

                $timeout(function() {
                    deferred.resolve();
                }, 2000);

                return deferred.promise;
            };

            this.mockPostFail = function() {

                var deferred = $q.defer();

                $timeout(function() {
                    deferred.reject();
                }, 2000);

                return deferred.promise;
            };

        });
})();

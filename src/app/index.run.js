(function() {
  'use strict';

  angular
    .module('globalM')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

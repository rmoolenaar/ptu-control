'use strict';

describe('myPTU.control module', function() {

  beforeEach(module('myPTU.control'));

  describe('controller', function(){

    it('should ....', inject(function($rootScope, $controller) {
      var scope = $rootScope.$new();
      //spec body
      var ctrl = $controller('ControlCtrl', {$scope: scope});
      expect(ctrl).toBeDefined();
    }));

  });
});

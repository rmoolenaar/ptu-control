'use strict';

describe('myPTU.version module', function() {
  beforeEach(module('myPTU.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

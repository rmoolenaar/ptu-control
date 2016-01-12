'use strict';

angular.module('myPTU.version', [
  'myPTU.version.interpolate-filter',
  'myPTU.version.version-directive'
])

.value('version', '0.1');

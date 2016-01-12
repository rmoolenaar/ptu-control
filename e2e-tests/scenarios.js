'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my PTU', function() {


  it('should automatically redirect to /control when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/control");
  });


  describe('control', function() {

    beforeEach(function() {
      browser.get('index.html#/control');
    });


    it('should render control when user navigates to /control', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Control PTU/);
    });

  });
});

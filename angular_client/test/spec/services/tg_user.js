'use strict';

describe('Service: tgUser', function () {

  // load the service's module
  beforeEach(module('project1App'));

  // instantiate service
  var tgUser;
  beforeEach(inject(function (_tgUser_) {
    tgUser = _tgUser_;
  }));

  it('should do something', function () {
    expect(!!tgUser).toBe(true);
  });

});

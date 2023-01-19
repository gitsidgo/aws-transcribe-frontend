//
//
//We will test frontend
//what unit will we test?
//    get Credentials functio
//
//
//    should be able to get credentials from aws sts
//    //given
//    url='nock'
//        //expectation
//        ill give a call to the nock url. It should reply back with status code 200 and credentials
//    //when
//    getCredentials(url)
//    //then
//        //verify
//        it returns the response body as json
//        it has access key and it should be in this format -
//        it has secret key and it should be in this format -
//        it has session token and it should be in this format -

var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
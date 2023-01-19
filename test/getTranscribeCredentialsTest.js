//const getCredentials = require('../src/services/getTranscribeCredentials.js');
import getCredentials from '../src/services/getTranscribeCredentials.js';

//var assert = require('chai').assert
//var expect = require('chai').expect
//var should = require('chai').should()
//const nock = require('nock')

import * as chai from 'chai';
import nock from 'nock';

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;




describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
    //given
    var array = [1,2,3]
    var num = 4
    //when
    // when I call indexOf operation on an array
      var result = array.indexOf(num)
    //then
      assert.equal(result, -1);
      expect(result).to.equal(-1);
      result.should.equal(-1)
    });
  });
});

describe('credentialsManager', function () {
    describe('getCredentials', function () {
        it('should be able to get aws credentials from backend application', async function () {
            //given
            let backendUrl;
            backendUrl = nock('http://www.my-backend.com')
                          .post('/creds')
                          .reply(200, { 'aws_access_key_id': 'some-access-key', 'aws_secret_access_key': 'some-secret-access-key', 'aws_session_token': 'some-session-token' })
            //when
            var result = await getCredentials(backendUrl)
            //then
            result.aws_access_key_id.should.equal('some-access-key')
            result.aws_secret_access_key.should.equal('some-secret-access-key')
            result.aws_session_token.should.equal('some-session-token')
        });
    });
});



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
//    getCredentials(url)   doesValueExists
//    //then
//        //verify
//        it returns the response body as json
//        it has access key and it should be in this format -
//        it has secret key and it should be in this format -
//        it has session token and it should be in this format -


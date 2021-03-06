'use strict';

import chai from 'chai';
import {PathAwareDriver} from '../../../lib/Local/Driver/PathAwareDriver';
import {PathAwareDriverMock} from '../../../test/Mock/Driver/PathAwareDriverMock';
import nodeFS from 'fs';

suite('Local/Driver/PathAwareDriver', () => {
  let pathAwareDriver = new PathAwareDriverMock();

  test('Class PathAwareDriver exists in Local/Driver/PathAwareDriver', () => {
    chai.expect(PathAwareDriver).to.be.an('function');
  });

  test('Check DBPath static getter returns valid value', () => {
    chai.expect(PathAwareDriver.DBPath).to.be.contains('/PathAwareDriver');
  });

  test('Check path getter/setter returns/sets _path value', () => {
    pathAwareDriver.path = PathAwareDriver.DBPath;
    chai.expect(pathAwareDriver.path).to.be.equal(PathAwareDriver.DBPath);

    let newPath = 'newPath';
    pathAwareDriver.path = newPath;
    chai.expect(pathAwareDriver.path).to.be.equal(newPath);
  });

  test('Check path getter/setter returns/sets _path value', () => {
    pathAwareDriver.path = PathAwareDriver.DBPath;
    chai.expect(pathAwareDriver.path).to.be.equal(PathAwareDriver.DBPath);

    let newPath = 'newPath';
    pathAwareDriver.path = newPath;
    chai.expect(pathAwareDriver.path).to.be.equal(newPath);
  });

  test('Check DBPath() static method returns DBPath dir', () => {
    let actualResult = PathAwareDriver.DBPath;

    chai.expect(actualResult).to.contains('/PathAwareDriver');
    chai.expect(nodeFS.existsSync(actualResult)).to.equal(true);
  });

  test('Check DBPath() static method returns creates DBPath dir and returns it',
    () => {
      //remove directory
      let actualResult = PathAwareDriver.DBPath;

      nodeFS.rmdirSync(actualResult);
      chai.expect(nodeFS.existsSync(actualResult)).to.equal(false);

      actualResult = PathAwareDriver.DBPath;
      chai.expect(actualResult).to.contains('/PathAwareDriver');
      chai.expect(nodeFS.existsSync(actualResult)).to.equal(true);
    }
  );
});

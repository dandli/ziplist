/**
 *
 * Created by danli on 4/14/2017.
 */
/* eslint-env mocha, chai */

describe('zipList', function () {
  const list1 = [1, 2, 3];
  const list2 = ['a', 'b', 'c'];

  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(list1, list2).length).to.equal(6);
    });

    it('should deep equal the passed array with six elements', function () {
      chai.expect(zipList(list1, list2).length).to.deep.equal(6);
    });
  });
});

describe('zipListTheSimpleWay', function () {
  const list1 = [1, 2, 3];
  const list2 = ['a', 'b', 'c'];

  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipListTheSimpleWay(list1, list2).length).to.equal(6);
    });

    it('should deep equal the passed array with six elements', function () {
      chai.expect(zipListTheSimpleWay(list1, list2).length).to.deep.equal(6);
    });
  });
});

function add(a, b) {
    return a + b;
  }

  describe('Math Functions', () => {
    let assert;
  
    before(async () => {
      const chai = await import('chai'); //dynamic import
      assert = chai.assert;
    });
  
    describe('add function', () => {
      it('should add two numbers correctly', () => {       
        const result = add(2, 3);
        assert.equal(result, 5);
      });
    });
  });
  
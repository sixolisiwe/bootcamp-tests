describe('greet function', function () {
    it('should say Hello, siwe when the name(siwe) is passed', function () {
        assert.equal('Hello, siwe', greet('siwe'));

    });
    it('should say Hello, Makho when the name(Makho) is passed', function () {
        assert.equal('Hello, Makho', greet('Makho'));

    });

});
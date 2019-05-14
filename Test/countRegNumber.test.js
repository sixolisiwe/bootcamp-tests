describe('countRegNumber' , function(){
    it('should count registration number', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('should return the total number registration numbers', function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3 );
});
})
describe('isFromBellville' , function(){
    it('should return true if a registration number starts with CY', function(){
        assert.equal(isFromBellville('CY'), true);
        

    });
    it('should return false if a registration number starts with cj', function(){
        assert.equal(isFromBellville('cj'), false);
});
});
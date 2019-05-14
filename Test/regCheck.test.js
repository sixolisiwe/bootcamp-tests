describe('regCheck' , function(){
 it('should check the registration number of a car and its code', function(){
        assert.equal(regCheck("CY 123","CY"), true);
    });
    it('should check the wrong registration number of a car and its code', function(){
       assert.equal(regCheck("123","gfgfgfgf"), false);
});
})
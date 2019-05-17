describe('mostProfitableDepartment' , function(){
    it('should determine which department is the most profitable', function(){
    assert.deepEqual(mostProfitableDepartment(salesData), results)
    });
    it('should return false if the the sales data is invalid', function(){
        assert.equal(mostProfitableDepartment('223345tt'), false)
    });
});

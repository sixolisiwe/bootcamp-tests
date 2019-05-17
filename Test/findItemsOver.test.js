describe('findItemsOver' , function(){
it('should return products that have a quantity higher than the threshold', function(){
assert.deepEqual(findItemsOver(items,threshold), result)
});
it('should return false if the data is invalid', function(){
    assert.equal(findItemsOver('1356gutf'), false)
});
});
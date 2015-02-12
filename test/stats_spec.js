/* globals describe it expect */
describe("Stats", function(){
    it("exists", function(){
        expect(Stats).toBeDefined();
    });
    
    describe("Stats for [1,1,3,7", function(){
        it("should be {1:2, 3:1, 7:1}", function(){
           expect(Stats.generate([1,1,3,7])).toEqual({
               1: 2,
               3: 1,
               7: 1
           });
        })
    });
});
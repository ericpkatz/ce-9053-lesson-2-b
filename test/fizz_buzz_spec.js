var FizzBuzz = {
   generate: function(a, b){
       var start = 1;
       var finish = a;
       if(b){
           start = a;
           finish = b;''
       }
       var results = [];
       for(var i = start; i <= finish; i++){
            if( i % 3 == 0 && i % 5 == 0)
                results.push('FizzBuzz');
            else if( i % 3 == 0)
                results.push('Fizz');
            else if( i % 5 == 0)
                results.push('Buzz');
            else
                results.push(i);
       }
       return results;
   } 
};
describe("FizzBuzz", function(){
    it("exists", function(){
        expect(FizzBuzz).toBeDefined();
    });
     describe("generate", function(){ 
         it("exists", function(){
             expect(FizzBuzz.generate).toBeDefined();
         });
         
         it("generate(3) returns [1,2,'Fizz']", function(){
            expect(FizzBuzz.generate(3)).toEqual([1, 2, 'Fizz']); 
         });
         
         it("generate(5) returns [1,2,'Fizz',4,'Buzz']", function(){
            expect(FizzBuzz.generate(5))
                .toEqual([1, 2, 'Fizz', 4, 'Buzz']); 
         });
         
         it("generate(14, 15) returns [14, 'FizzBuzz']", function(){
            expect(FizzBuzz.generate(14, 15))
                .toEqual([14, 'FizzBuzz']); 
         });
    });
});
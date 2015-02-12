var FizzBuzz = {
   generate: function(a, b){
       var start = 1;
       var finish = a;
       if(b){
           start = a;
           finish = b;
       }
       
       function isFizz(num){
          return num % 3 == 0; 
       }
       
       function isBuzz(num){
          return num % 5 == 0; 
       }
       
       function isFizzBuzz(num){
           return isFizz(num) && isBuzz(num);
       }
       
       var results = [];
       for(var i = start; i <= finish; i++){
            if(isFizzBuzz(i)){
                results.push('FizzBuzz');
                continue;
            }
            if(isFizz(i)){
                results.push('Fizz');
                continue;
            }
            if(isBuzz(i)){
                results.push('Buzz');
                continue;
            }
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
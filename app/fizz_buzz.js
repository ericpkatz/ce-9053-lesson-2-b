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
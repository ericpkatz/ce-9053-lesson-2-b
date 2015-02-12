var Stats = {
   generate: function(arr){
       var stats = {};
       for(var i = 0; i < arr.length; i++){
           var key = arr[i];
           if(!(key in stats))
             stats[key] = 0;
            stats[key] = stats[key] + 1;
       }
       return stats;
   } 
};
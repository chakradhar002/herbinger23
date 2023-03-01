const prompt = require("prompt");

function fizzBuzz(){
    prompt.start();

    prompt.get(["num1"],
    
    function(err,res){
        if(err){
            console.log(err)
        }
        else{
            for (let index = 0; index <= res.num1; index++) {
               if(index % 5===0 && index % 3 ===0 ){
                console.log("fizzBuzz")
               }
               else if(index % 5==0){
                console.log("Buzz")
               }
               else if(index % 3===0){
                console.log("Fizz")
               }
               else{
                console.log(index)
               }
                
            }
        }
    }

    );
}
fizzBuzz()
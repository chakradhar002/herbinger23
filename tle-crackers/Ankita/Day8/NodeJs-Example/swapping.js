const prompt = require("prompt");

function swapping(){
    prompt.start();

    prompt.get(["num1","num2"],
    // console.log("before swapping:",num1,num2)

        function(err,res){
            if(err){
                console.log(err)
            }
        
    
            var temp = res.num1;
            res.num1 = res.num2;
            res.num2=temp
       
       console.log("after swapping",res.num1,res.num2)
        }); 
    }
swapping()
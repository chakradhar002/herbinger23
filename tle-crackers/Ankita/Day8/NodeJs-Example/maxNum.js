const prompt = require("prompt")
function maxNumber(){
    prompt.start();

    prompt.get(["num1","num2"],

    function(err,res){
        if(err){
            console.log(err)
        }
        else{
            if(res.num1>res.num2){
                console.log("greater number :",res.num1)
            }
            else{
                console.log("greater number :",res.num2)
            }
        }
    }
    );
}
maxNumber()
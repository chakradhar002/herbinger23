const prompt = require("prompt")

function primeNum(){
    prompt.start();

    prompt.get(["num1"],

    function(err,res){
        
        if(err,res){
            console.log(err)
        }
        else{
        let flag=1;
        for (let index = 1; index < res.num1; index++) {
            flag ===1;
            for (let index1 = 2; index1 <= res.index; index1++) {
                if(index %  res.index1 ===0 ){
                    flag=0;
                    break;
                }
                
            }
            if(flag === 1){
                console.log(res.index)
            }
        }
    }
}
    );
}
primeNum()
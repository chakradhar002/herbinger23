//the typescript never type that contain no value
//it is used to throw the error
function raiseError(message: string):never{
    throw new Error(message);

}

function reject(){
    return raiseError('Rejected');
}
/* The above code is creating an enum called StatusCodes. It is then logging the values of the enum to
the console. */
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  };
  
  // logs 404
  console.log(StatusCodes.NotFound);
  
  // logs 200
  console.log(StatusCodes.Success);
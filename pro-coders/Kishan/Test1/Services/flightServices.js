const router =  require('../controller/flightcontroller')
var connection  = require('../db/mysqlconnection');
  /**
   * @description Create Flight Info  
   * @param {*} req 
   * @param {*} res 
   */
  const sign_up = async (req, res) => {
        const firstName=req.body.firstname;
        const lastName=req.body.lastname;
        const id=req.body.id;
        const gender=req.body.gender;
        const dob=req.body.dob;
        const email = req.body.email;
        const password=req.body.password;
        try{
          function checkNotNull(){
            return firstName!=null && lastName!=null && password!=null && gender!=null && dob!=null && email!=null
          }        
          if(checkNotNull()){
            await connection.query("INSERT INTO sign_up(firstName, lastName,gender,dob,email,password) VALUES (?,?,?,?,?,?)",[firstName,lastName,gender,dob,email,password],(err, result)=> {
            if (err) throw err;
            else {
              console.log("inserted successfully");
              console.log(result.insertId);
              const id=result.insertId
               getUserDetailsById(req,res,id);
              // res.send("Inserted Succesfully")
            };
            });
          }      
    }
    catch(err){
        res.send(err)
    }
};
 /**
 * @description get Flight Details By Id
 * @param {*} req 
 * @param {*} res 
 * @param {*} id 
 */
const getUserDetailsById=async (req, res,id)=>{
   await connection.query("select * from sign_up where id= ?",[id],(err, result)=> {
   if (err) throw err;
   else {
    console.log("Flight list is getting");
    res.status(200).json(result);
  };
});
}
/**
 * @description get Flight Details 
 * @param {*} req 
 * @param {*} res 
 */
const getFlightDetails=async(req, res)=>{
  const source=req.body.source;
  const destination=req.body.destination;
  const date=req.body.Arrivaldate;
  try{
    function checkNotNull(){
      return source!=null && source!=null && source!=null
    }
      if(checkNotNull()){
          await connection.query("select * from flight_details where sourceairport= ? and destinationairport=? and arrivaldate=? ",[source,destination,date],(err, result)=> {
          if (err) throw err;
          else {
            console.log("Flights list is getting");
            console.log(result)
            res.status(200).json(result);
          };
        });
      }
      else{
        res.send("Something data is missing")
      }
    }
    catch(e){
      res.send(e)
    }
}
/**
 * @description reservation flight 
 * @param {*} req 
 * @param {*} res 
 */
const reservationFlight=async(req,res)=>{
        const flightid=req.body.flightid;
        const remail=req.body.remail;
        const airline=req.body.airline;
        const totalamout=req.body.totalamout;
        const mealType=req.body.mealtype;
        const noofseats=req.body.noofseats;

        try{
          function checkNotNull(){
            return flightid!=null && remail!=null && noofseats!=null && mealType!=null && airline!=null && totalamout!=null
          }
            if(checkNotNull()){
               await connection.query("INSERT INTO reservation(flightid, remail,noofseats,mealtype,airline,totalamount) VALUES (?,?,?,?,?,?)",[flightid,remail,noofseats,mealType,airline,totalamout],(err,result)=>{
                  if(err) throw err;
                  else {
                    if(result!=""){
                    console.log("Reservation successfully");
                    console.log(result.insertId);
                    const id=result.insertId
                    getRerservationDetails(req,res,id);
                    }
                  };
                })
            }
            else{
              res.send("Something data is missing")
            }
          }
            catch(e){
              res.send(e)
            }
}

/**
 * @description get Flight Details By Id
 * @param {*} req 
 * @param {*} res 
 * @param {*} id 
 */
const getRerservationDetails=async (req, res,rid)=>{
  await connection.query("select * from reservation where rid= ?",[rid],(err, result)=> {
  if (err) throw err;
  else {
   console.log("Flight list is getting");
   res.status(200).json(result);
 };
});
}

/**
 * @description  cancel reservation
 * @param {*} req 
 * @param {*} res 
 */
const cancelReservation=async(req,res)=>{
  const rid=req.body.rid;
  try{
    function checkNotNull(){
      return rid!=null 
    }
      if(checkNotNull()){
        await connection.query(`UPDATE reservation SET status=0 WHERE rid=?`,[rid],(err,result)=>{
          if(err) throw err;
          else {
            console.log("Cancel Reservation successfully");
            getRerservationDetails(req,res,rid);
          };
          
        })
      }
    }
    catch(e){
      res.send("Error Occured")
    }
}

/**
 * @description  Update reservation
 * @param {*} req 
 * @param {*} res 
 */
const updateReservation=(req,res)=>{
  const rid=req.body.rid;
  const flightid=req.body.flightid;
  try{
    function checkNotNull(){
      return rid!=null &&  flightid!=null
    }
      if(checkNotNull()){
        connection.query(`UPDATE reservation SET flightid=? WHERE rid=?`,[flightid,rid],(err,result)=>{
          if(err) throw err;
          else {
            console.log("Updated successfully");
            getRerservationDetails(req,res,rid);
          };
        })
      }
      else{
        res.send("Updated successfully");
      }
    }
    catch(e){
      res.send(e)
    }
}


//exporting function
 module.exports =  {
                      reservationFlight,
                      sign_up,
                      getFlightDetails,
                      cancelReservation,
                      updateReservation
                  };
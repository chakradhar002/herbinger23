import React from 'react';
class MessageWithEvent extends React.Component {
    constructor(props) {
       super(props);
 
}

    //user
    logEventSurbhiToConsole(e) {
       console.log(e.target.innerHTML);
    }


     football(){
     console.log(" this  is football")
     }

      Goal(props) {
      const isGoal = props.isGoal;
      if (isGoal) {
           <h1> gola</h1>
      }
      <h1> misseed gola</h1>
    }




    //view
    render() {
       return (
          <div onClick={this.logEventSurbhiToConsole}>
           <button onClick={this.football}>Take the shot!</button>
         
           
          </div>
       );
    }
 }
 export default MessageWithEvent;
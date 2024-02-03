import ButtonLayout from "./ButtonLayout";
function Game(props) {
    return (
      <div className="game">
        <img src={props.gameObj.photoName} alt = {props.gameObj.name}/>
        <div>
          <h3>{props.gameObj.name}</h3>
          <p>{props.gameObj.description}</p>


          <div>
           <ButtonLayout
             button1Label="Buy On Steam"
             button2Label="Buy on Epic Games"
             centeredButtonLabel="Find out more"
           />
         </div>
       </div>
      </div>
    );
  }

  export default Game;
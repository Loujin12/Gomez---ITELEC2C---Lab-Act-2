import playstationGames from "./Data.js";
import FaqDropdown from "./FAQDropdown.js";
import Game from "./Game.js";

function Menu() {
    return (
      <div className="home">

        <div>
          <button style={{
                 border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 color:"black",
                 fontWeight:1000,
                 marginRight:20,
                 marginTop:18,
                }}>Now Available</button>


          <button style={{
                 border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 color:"black",
                 fontWeight:1000,
                 marginRight:20,
                 marginTop:18,
                }} >Coming Soon</button>
        </div>
      
        
        

        <p>
          New and upcoming games
        </p>
        <ul className="games">
          {playstationGames.map((game) => (
            <Game gameObj = {game} />
            ))}
          
        </ul>

        <div className="store">
          <h2 style={{fontSize:40, marginLeft:150}}>Available at a range of digital retailers including:</h2>


          <div className="img-container">
             <img src="pictures/steam.png" alt = "steam logo" style={{maxWidth:200, maxHeight:200, marginLeft:350, marginTop:20}}/>
             <img src="pictures/epicgames.png" alt = "epic games logo" style={{maxWidth:200, maxHeight:200, marginLeft:350, marginTop:20}}/>
          </div>

          <div className="btn-container">
            <button style={{
                 border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 color:"black",
                 fontWeight:1000,
                 marginRight:20,
                 marginTop:18,
                 marginLeft:380

                }}>Visit Steam
             </button>

              <button style={{
                 border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 color:"black",
                 fontWeight:1000,
                 marginRight:20,
                 marginTop:18,
                 marginLeft:375

                }}>Visit Epic Games
              </button>


          </div>

          
        </div>

        <div className="controller">
        <img src="pictures/dualsense.png" alt = "DualSense Controller" style={{maxWidth:700, maxHeight:650, }}/>
        <h1 style={{color:"black", fontSize:27, marginTop:30 }}>Heighten Your Senses™</h1> 
        <p style={{color:"black", fontSize:24, marginLeft:30, fontFamily:"sans-serif", marginTop:30}}>Elevate PC gaming with the DualSense™ wireless controller from PlayStation® and discover a deeper immersive experience in your favourite PC games. Bring gaming worlds to life in the palms of your hand with haptic feedback, dynamic adaptive triggers and a built-in microphone – all integrated into an iconic comfortable design</p>
        
        
        </div>

        <button style={{
                 border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 backgroundColor:"blue",
                 color:"white",
                 fontWeight:1000,
                 marginRight:20,
                 marginTop:0,
                 marginLeft:50

                }}>Find out more
              </button>

              <FaqDropdown/>


              <img src="pictures/playstationstudio.jpg" alt = "PlayStation Studio" style={{maxWidth:1000, maxHeight:1000, }}/>


              <div className="marvelrights">
                <p style={{marginTop:30, marginLeft:200}} >The above information is subject to change without prior notice. </p>
                <p style={{marginTop:20, marginLeft:90}}>This game/content may not be available in some countries and regions and in some languages.</p>

                <img src="pictures/marvel.png" alt = "Marvel logo" style={{maxWidth:200, maxHeight:200, marginTop:40, marginLeft:350}}/>

                <p style={{marginTop:40, color:"black", marginBottom:30}}>© 2022 MARVEL © 2022 Sony Interactive Entertainment LLC. Created and developed by Insomniac Games, Inc.</p>


              </div>





              

       
      </div>

      
      
    );


  }

  export default Menu;
const ButtonLayout = ({ button1Label, button2Label, centeredButtonLabel }) => {
    const containerStyle = {
      textAlign: 'center',
    };
  
    const buttonContainerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px', 
      margin:'auto'
      
    };
  
    return (
      <div style={containerStyle}>
        <div style={buttonContainerStyle}>
          <button style={{border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 color:"white",
                 backgroundColor:"#ff8c00",
                 fontSize:15,
                 fontWeight:900}} >{button1Label}</button>
          <button style={{border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 color:"white",
                 fontWeight:900,
                 fontSize:15,
                 backgroundColor:"#ff8c00",}} >{button2Label}</button>
        </div>
        <button style={{border: '5px solid #333', 
                 padding: '10px', 
                 borderRadius: '20px',
                 cursor: 'pointer',
                 color:"black",
                 margin:'auto',
                 fontWeight:900,
                 fontSize:15,
                 backgroundColor:"white"}} >{centeredButtonLabel}</button>
      </div>
    );
  };
  
  export default ButtonLayout;
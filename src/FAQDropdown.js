import React, { useState } from 'react';
const FaqDropdown = () => {
    const faqData = [
      { question: 'How much do PlayStation games on PC cost?', answer: 'Pricing varies by title. Please check with your preferred retailer for the latest prices.' },
      { question: 'Do I need a PSN account to play PlayStation games on PC?', answer: 'No, you currently do not need a PSN account to enjoy PlayStation Studios games on PC.' },
      { question: 'Can I use a Dualsense controller to play PlayStation games on PC?', answer: 'Yes, you can use a DualSense controller to play PlayStation Studios games on PC via a wired connection. Support of DualSense specific features and wireless connectivity varies by title.' },
      { question: 'What other control inputs do PlayStation games on PC support?', answer: 'All PlayStation Studios games on PC support many input options including mouse and keyboard, DualShock 4, and DualSense, as well as other game controllers. Specific features vary by title.' },
      { question: 'What If I already own the game on PS4 or PS5, do I need to purchase the game separately to play it on PC, and vice versa?', answer: 'Yes, the PC and console versions of PlayStation Studios games are different products. It is currently not possible to purchase the PC version of a title and then play it on a PS4 or PS5 console, or vice versa. ' },
      { question: 'Can I transfer my save from the PS4 or PS5 version to the PC version?', answer: 'It is currently not possible to transfer your save data from the PS4 or PS5 version to the PC version of a PlayStation Studios title, or vice versa. ' },
      { question: 'Do PlayStation games on PC have trophy support?', answer: 'PlayStation Studios titles include support for achievements on both Steam and Epic Games Store. They will not sync with your trophies list on your PSN profile.' },
      { question: 'What other games are coming to PC?', answer: 'Stay up to date on new announcements on PlayStations Twitter and Instagram, and check back here to learn more about new PlayStation Studios games coming to PC.' },
      { question: 'Where can I buy PC games?', answer: 'PlayStation Studios titles on PC are available for purchase at a range of digital retailers, including Steam and Epic Games.' },
      { question: 'Where should I go for customer support of my PC games?', answer: 'For questions regarding the purchase of your PC game, please visit Steam Support or Epic Games Support for more information.For questions around a game or to report game issues, please visit PlayStations Support page.' },
      
    ];
  
    const [selectedQuestion, setSelectedQuestion] = useState(null);
  
    const handleSelectQuestion = (index) => {
      setSelectedQuestion(index === selectedQuestion ? null : index);
    };
  
    return (
      <div>
        <h2 style={{alignContent:"center", fontSize:40}}>PlayStation PC games FAQs</h2>
        {faqData.map((faq, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <div
              onClick={() => handleSelectQuestion(index)}
              style={{
                cursor: 'pointer',
                padding: '5px',
                background: index === selectedQuestion ? '#e0e0e0' : 'transparent',
                fontSize:18
              }}
            >
              <strong>{faq.question}</strong>
            </div>
            {index === selectedQuestion && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    );
  };
  
  export default FaqDropdown;
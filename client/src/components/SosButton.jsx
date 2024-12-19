const SOSButton = () => {
    const handleSOSClick = async () => {
      const response = await fetch('/send-sos', {
        method: 'POST',
        body: JSON.stringify({
          phoneNumber: 'emergency_contact_number',
          message: 'I need help. I am trapped.',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      alert('SOS message sent!');
    };
  
    return <button onClick={handleSOSClick}>Send SOS</button>;
  };
  
  export default SOSButton;
  
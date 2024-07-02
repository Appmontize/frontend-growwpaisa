import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

   const form = useRef();
   const [lastSentTimestamp, setLastSentTimestamp] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    //Check if the user has sent a message within the certain period of time

    if (lastSentTimestamp && Date.now() - lastSentTimestamp < 3600000){
      window.alert('You can send only one message per hour.');
      return;

    }
    emailjs.sendForm('service_3gwrp4b', 'template_3ie31aa', form.current, 'AFvZPA5l5q_qvjXxP')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
           window.alert("Email sent successfully!");

           setLastSentTimestamp(Date.now());

      }, (error) => {
          console.log(error.text);
          window.alert("Error");
      });
  };

  return (

        <div div id= 'contact'>
        <h1>CONTACT US</h1>
     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
 
  );
}

export default Contact;


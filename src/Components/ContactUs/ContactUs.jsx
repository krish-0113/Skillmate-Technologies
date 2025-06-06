// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ContactUs.css';
import message_icon from '../../assets/message_icon.png';
import email_icon from '../../assets/email_icon.png';
import phone_icon from '../../assets/phone_icon.png';
import address_icon from '../../assets/address_icon.png';
// import success_icon from '../../assets/success_icon.png';

const ContactUs = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("🔘Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2f844e23-fa91-438b-9fab-324fc19a9feb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("✅ Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="message_icon" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam recusandae quidem fuga at modi velit, officia aliquid mollitia dolorum accusamus voluptate earum. Molestiae iusto esse ex fugiat quod expedita, numquam rem, voluptatem nulla odio libero error. Quidem, esse ex.</p>
        <ul>
          <li><img src={email_icon} alt="" /> skillmate@gmail.com</li>
          <li><img src={phone_icon} alt="" /> +91 090110 55857</li>
          <li><img src={address_icon} alt="" /> Office P311, Mayur Trade Center, Pimpri-Chinchwad, Maharashtra 411019</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} className='contact-form'>
          <div className="mb-3">
            <label >Your Name</label>
            <input type="text" className="form-control" placeholder="Enter Your full name" aria-label="Enter your full name" />
          </div>
          <div className="mb-3">
          <label >Phone Number</label>
            <input type="text" className="form-control" placeholder="Enter Phone Number" aria-label="Enter your phone number" />
          </div>
          <div className="mb-3 form-floating">
          </div>
          <div className="mb-3 form-floating">
       
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
            <label htmlFor="floatingTextarea2">Write your message here</label>
          </div>
          <div className=" submit d-grid gap-2 d-md-block">
            <button className=" btn1 btn btn-primary" type="submit">Submit Now</button>
          </div>
        </form>
        <span className='toggle-msg'>{result}</span>
      </div>
    </div>
  );
}

export default ContactUs;

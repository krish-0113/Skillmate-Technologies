/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


import React, { useEffect } from 'react';
import './Training.css';
import intern_img from '../../assets/intern_img.png';
import practice_img from '../../assets/practice_img.png';
import learn_img from '../../assets/learn_img.png';
import { Link } from 'react-router-dom';



const Training = () => {

  // useEffect(() => {
  //   const element = document.getElementById('training-section');
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop - 100, // Adjust offset as needed
  //       behavior: 'smooth'
  //     });
  //   }
  // }, []);
  //   const [result, setResult] = React.useState("");

  //   const onSubmit = async (event) => {
  //     event.preventDefault();
  //     setResult("🔘Sending....");
  //     const formData = new FormData(event.target);
  
  //     formData.append("access_key", "2f844e23-fa91-438b-9fab-324fc19a9feb");
  
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData
  //     });
  
  //     const data = await response.json();
  
  //     if (data.success) {
  //       setResult("✅ Form Submitted Successfully");
  //       event.target.reset();
  //     } else {
  //       console.log("Error", data);
  //       setResult(data.message);
  //     }
  //   };
  return (
    <div className='training-container'
       id="training-section">
         Start Your journey Today!!
        <div className="card-group">
       
            <div className="card">
              
                <img src={intern_img}className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className='training-detaills'>
                    
                    <h4>Training program Fee :</h4>
                    <ul>
                        <li>Rs.9,900 + 18% GST for each participant</li>
                        <li> Rs. 3,500 Google exam fees included for limited time period</li>
                    
                    </ul>
                    {/* <span>Batch Date:</span>
                    <ul>
                        <li>5th & 10th August 2024</li>
                    </ul> */}
                </div>
                
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to="/enroll"className="btn btn-primary">Enroll Now</Link>
          </div>
     </div>
        <div className="card">
                <img src={learn_img}className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className='training-detaills'>
                    {/* <ul>
                        <li>Instructor Led Training </li>
                        <li>Online Reading Material </li>
                        <li>Regular Doubt solving sessions </li>
                        <li>12+ Assignments and Mock Exam </li>
                        <li>Weekend Batches available </li>
                    </ul> */}
                    <h4>Training program Fee :</h4>
                    <ul>
                        <li>Rs.9,900 + 18% GST for each participant</li>
                        <li> Rs. 3,500 Google exam fees included for limited time period</li>
                    
                    </ul>
                    {/* <span>Batch Date:</span>
                    <ul>
                        <li>5th & 10th August 2024</li>
                    </ul> */}
                </div>
                
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link to="/enroll"className="btn btn-primary">Enroll Now</Link>
          </div>
     </div>

     <div className="card">
                <img src={learn_img}className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className='training-detaills'>
                    {/* <ul>
                        <li>Instructor Led Training </li>
                        <li>Online Reading Material </li>
                        <li>Regular Doubt solving sessions </li>
                        <li>12+ Assignments and Mock Exam </li>
                        <li>Weekend Batches available </li>
                    </ul> */}
                    <h4>Training program Fee :</h4>
                    <ul>
                        <li>Rs.9,900 + 18% GST for each participant</li>
                        <li> Rs. 3,500 Google exam fees included for limited time period</li>
                    
                    </ul>
                    {/* <span>Batch Date:</span>
                    <ul>
                        <li>5th & 10th August 2024</li>
                    </ul> */}
                </div>
                
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to="/enroll"className="btn btn-primary">Enroll Now</Link>
          </div>
     </div>
     <div className="card">
                <img src={practice_img}className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className='training-detaills'>
                    {/* <ul>
                        <li>Instructor Led Training </li>
                        <li>Online Reading Material </li>
                        <li>Regular Doubt solving sessions </li>
                        <li>12+ Assignments and Mock Exam </li>
                        <li>Weekend Batches available </li>
                    </ul> */}
                    <h4>Training program Fee :</h4>
                    <ul>
                        <li>Rs.9,900 + 18% GST for each participant</li>
                        <li> Rs. 3,500 Google exam fees included for limited time period</li>
                    
                    </ul>
                    {/* <span>Batch Date:</span>
                    <ul>
                        <li>5th & 10th August 2024</li>
                    </ul> */}
                </div>
                
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link to="/enroll"className="btn btn-primary">Enroll Now</Link>
          </div>
     </div>
     {/* <div className="contact-col">
        <h1>Get More Info</h1>
        <hr />
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
      </div> */}
</div>
    </div>
  )
}

export default Training
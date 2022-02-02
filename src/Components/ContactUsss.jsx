import React from "react";

import "../Styles/contact.css";

const ContactUsss =() =>{
    return(
        <div class="container">
        <h1>Contact Us</h1>
        <hr/>
        <br />
        <h2 >Have any questions? We'd love to hear from you</h2>
        <div class="contact-items">
            <div class="customer-care">
                <h3>Customer Care</h3>
                <p>Our Support team is spread all over the world to give you fast response</p>
                <p>+919966992233</p>
                
            </div>
            <div class="write-us">
                <h3>Write Us</h3>
                <p> You can write us if you have any queries</p>
              <p>sagarestate@queries.com</p>
            </div>
            <div class="sales-market">
                <h3> Sales and Marketing</h3>
                <p>Get in touch with our sales and marketing team</p>
                <br />
                <br />
                <p>sagarestate@sales.in</p>
                

            </div>
        </div>
    </div>
    )
}

export default ContactUsss;
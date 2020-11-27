const { default: ContactForm } = require("./ContactForm")


const Contact = () => {
    return ( 
        <section id="contact">
            <article className="contact-intro">
                <div className="contact_details">
                    <h3 className= "contact_h3">Contact us</h3>
                    <h2 className= "contact_h2 uppercase">Experience the 1920's prohibition</h2>
                    <p>Want to get in touch? Drop us a dime or shoot us an email using the form below.</p>
                </div>
                <div></div>
            </article>

            <article className="contact-map">
                <h2 className="map-adress">132 9th Avenue New York</h2>   
            </article>

            <article className="contact-form">
                <div className="contact_details">
                    <h3 className= "contact_h3">Get in touch</h3>
                    <h2 className= "contact_h2">132 9th Avenue <br/>New York, NY 10011 <br/>
                    646-559-1671 <br/>info@btgnyc.com
                    </h2>
                    <h3 className= "contact_h3">Hours of Operation</h3>
                    <div className="hours">
                        <ul>
                            <li>Monday</li>
                            <li>Tuesday - Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                        </ul>

                        <ul>
                            <li>8am — 4pm</li>
                            <li>8am — 10pm</li>
                            <li>9am — 10pm</li>
                            <li>9am — 4pm</li>
                        </ul>
                    </div>
                </div>
              
                <ContactForm />
                
            </article>
        </section>
  
     );
}
 
export default Contact;
import React, { Component } from 'react';

class ContactForm extends Component {
    state = { 
        inputName : "",
        inputEmail : "",
        inputMobile : "",
        inputMessage : ""
    }
    
    handleInput = (event) => {  
        // console.log(event);
        this.setState({ [event.target.name]: event.target.value  });
    }
    render() { 
        return ( 
            <section id="inputForm">
                <input type="text" name="inputName" value={this.state.inputName} placeholder="Name" onChange={this.handleInput}/>
                <input type="email" name="inputEmail" value={this.state.inputEmail} placeholder="Email Address" onChange={this.handleInput}/>
                <input type="number" name="inputMobile" value={this.state.inputMobile} placeholder="Mobile" onChange={this.handleInput}/>
                
                <textarea id="text" name="inputMessage" cols="35" rows="10" value={this.state.inputMessage} placeholder="Your message" onChange={this.handleInput}/>
                
                <input id="button-form" type="submit" value="Submit"/>
            </section>
         );
    }
}
 
export default ContactForm;
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import mail from '../images/mail.png'
import phone from '../images/phone.png'
import hours from '../images/hours.png'

class Homepage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div class="container"> <br/>
                    <div class="row align-items-start">
                        <div class="col">
                            
                            <h2>About us</h2> <br/>
                            <p>
                                Since 1973, Taylor’s success in helping people with their property needs
                                means that we have expanded rapidly throughout the South and Midlands of the UK.
                                Whether you are buying, selling, letting or renting property, or simply want to arrange
                                a mortgage, we would be delighted to help you. After all, it's what we do best. Covering
                                the entire property spectrum from first time buyer flats to large country properties with acreage,
                                at Taylors we pride ourselves on being able to make your property sale, purchase or rental a success every time.
                            </p>
                    
                            <br/><br/>

                            <h2>Where we are?</h2> <br/>
                            <div id="map-container-google-1" class="z-depth-1-half map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.569230593873!2d9.27981197598198!3d45.59920372442135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b97b50a72d29%3A0xac8e98f7ff2b4afd!2sFontanella!5e0!3m2!1sit!2sit!4v1697022895721!5m2!1sit!2sit"
                                    width="400" height="300" style={{border:0}}
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        <div class="col">
                        
                        </div>
                        
                        <div class="col">
                            <h2>Contacts</h2> <br/>
                            <img src={mail}/> <a href="mailto:taylorsAgency@email.com" target="_blank">taylorsAgency@email.com</a> <br/><br/>
                            <img src={phone}/> <a href="tel:11234567890">11234567890</a> <br/><br/>
                            <img src={hours}/> 09:00 - 13:00 / 15:00 - 19:00
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
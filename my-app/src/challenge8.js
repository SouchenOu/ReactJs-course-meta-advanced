import img1 from "./images/a.jpg";
import img2 from "./images/b.png";
import img3 from "./images/c.jpg";
// import img4 from "./images/d.jpg";
import phone from "./images/phone.png";
import message from "./images/message.png";
import './style3.css'

function Contact(props)
{
    return (
        <div className="AllContact">
                <div className="contacts">
                    <div className="contact-card">
                        <img className="firstImage"src={props.img} alt="" />
                        <h3> {props.name}</h3>
                        <div className="info--group">
                            <img className="Phone-icon"src={phone} alt=""/>
                            <p>{props.phone}</p>
                        </div>
                        <div className="mail--icon">
                            <img src={message} alt="" width="15px" height="15px"/>
                            <p>{props.email}</p>
                        </div>

                    </div>

                </div>
                

        </div>
        
    )
}



function Challenge8()
{
    return (
        <div className="AllContact">
            <Contact 
                img = {img1}
                name = "Mrs . soukaina"
                phone = "+21235875462"
                email = "soukainaouchenuai@gmail.com"
            />
            <Contact
                 img = {img2}
                 name = "Mrs . sanae"
                 phone = "+21235875462"
                 email = "soukainaouchenuai@gmail.com"
            />
            <Contact
                 img = {img3}
                 name = "Mrs . asmae"
                 phone = "+21235875462"
                 email = "soukainaouchenuai@gmail.com"
            />
            
        </div>


    );
}

export default Challenge8;
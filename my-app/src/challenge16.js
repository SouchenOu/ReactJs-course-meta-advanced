/**********Build a meme generator complex state: Objects */
import img from './images/profile.png';
import React from "react"


function Challenge16()
{

    const [contact, setContact] = React.useState({
        firstName: "souchen",
        lastName: "ouchen",
        phone : "+212 616805240",
        email: "soukainaouchenuai@gmail.com",
        isFavorite: false
    })
       function toggleFavorite()
       {
        setContact(prevcontact => {
            return {
                isFavorite: !prevcontact.isFavorite
            }
        })
       } 
return (
        <div>
               <main>
                    <article className="card">
                        <img className="card--favorite" src={img} alt="" width="90px" onClick={toggleFavorite}/>
                        <h2 className="card--favorite">{contact.firstName} </h2>
                        <p className="card--contact">{contact.phone}</p>
                        <p className="card--contact">{contact.email}</p>

                    </article>
               </main>
        </div>
    )
}

export default Challenge16;
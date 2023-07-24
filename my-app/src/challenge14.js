/********
 * Challenge: Complete the function bellow Given a name , return "Good <timeofDay>, <name>"
 * depending on the current time of day
 * 
 * 
 * 4 am - 11:59 am, timeOfDay = "morning"
 * 12 pm - 4:59 pm timeOfDay = "afternoon"
 * 5 pm - 7:59pm: timeOfDay = "evening"
 * 8 pm - 3:59 am timeofDay = "night"
 * E.g :  If it is currently 1 pm , greating("souchen") ==> "Good afternoon, "Souchen""
 * 
 */

function Challenge14()
{
    const date = new Date();
    let clock;
    const hours = date.getHours();
    if((hours >= 4 && hours <= 12))
        clock = "Good morning souchen";
    if((hours >= 12 && hours <= 17))
       clock = "Good afternoon souchen";
    if(hours >= 17 && hours <= 20)
       clock = "Good evening souchen ";
    return (
        <div>
             <button onClick={function(){
                window.alert(clock);
             }}className="btn">Clock</button>
        </div>

    )
}

export default Challenge14;
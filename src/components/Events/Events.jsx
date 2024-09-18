import React from "react";
import '../Events/Events.css';

function Events() {
    return (
        
        <div>
            <h2 className="greeting">We do events!</h2>
            <div className="container">
                    <div className="column">
                            Birthdays
                            <img className="bday-img" src="./images/birthday.jpeg"/>
                        </div>
                        <div className="column" >
                            Weddings
                            <img className="wedding-img" src="./images/wedding.jpg"/>
                        </div>
                    
                        <div className="column">
                            Baby Showers
                            <img  className="baby-img"src="./images/baby-shower.jpeg"/>
                        </div>      
            </div>
        </div>    
    );
}

export default Events;
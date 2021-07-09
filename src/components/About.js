import React from "react";

class About extends React.Component{
    render(){
        return(
            <div className="About__aboutus">
                <p>This is a <strong>Basic Banking System</strong> consisting of a dummy database of 10 customers.</p>
                <p>It has no login or authentication page. It only transfers money between multiple users present in the database.</p>
                <p>Technologies used in this project:</p>
                   <ul>
                       <li>React JS</li>
                       <li>Node JS</li>
                       <li>Express</li>
                       <li>Sqlite3</li>
                   </ul>
                <p>Styling is done through:</p>
                   <ul>
                       <li>External CSS</li>
                   </ul>
            </div>
        )
    }   
}
export default About;
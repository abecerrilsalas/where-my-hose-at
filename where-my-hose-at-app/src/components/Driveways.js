import "./Driveways.css";
import React from "react";
import Return from "./Return";
import { Link } from "react-router-dom";

function Driveways() {

    return (
        <div>
            <div>
            <h1>You are currently renting:</h1>
            <Return />
            </div>

            <div>
            <br></br>
            <h4>Got a driveway to share?</h4>
            Get started <Link to="/newlisting">here</Link>!
            </div>
            <br></br>
            <div><Link to="/home">…go back</Link></div>
        </div>
    );
}

export default Driveways;

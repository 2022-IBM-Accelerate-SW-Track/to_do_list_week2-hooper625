import React, { Component } from "react";
import "./About.css";
import Erika_Hooper from "../assets/Erika_Hooper.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={Erika_Hooper}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Erika Hooper</div>
            <div className="brief_description">
            I attend Liberty University in the information technology with data networking and security specialization degree program. I have completed classes in the following programing languages: C++, Java, and C#. 
I enjoy being outdoors and I have a farm where I grow apples. I love all things outdoors when the sun is shining and curling up with a good book on rainy days.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

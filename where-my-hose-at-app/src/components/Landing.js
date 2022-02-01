import React from "react";
import "./Landing.css";
import Banner from "./Banner";
import Card from "./Card";

function Landing() {
  return (
    <div className="landing">
      {/* <h1>Home Component</h1> */}

      <Banner />
      <div className="landing__section">
        <Card
          src="https://media.angi.com/s3fs-public/driveway-modern-home.jpeg"
          title="Normal driveway"
          description="Shoutout to all the normies"
        />
        <Card
          src="https://i.pinimg.com/originals/70/3a/2d/703a2da61dd6331f0b474adbcceb6dc3.jpg"
          title="Beautiful driveway for all your needs!"
          description="Come on down and have a good time. We have plenty of tools!"
        />
        <Card
          src="https://i.pinimg.com/originals/bf/f7/4d/bff74dfc86f606d277834909ebcc4b13.jpg"
          title="Spooky driveway"
          description="Night owls welcome, please bring your paranormal experiments"
        />
      </div>
      <div className="landing__section">
        <Card
          src="https://i.pinimg.com/originals/86/c0/90/86c090efc59e3dbaf1f7fb7ca75c33d7.jpg"
          title="Beautiful desert driveway"
          description="Pull up a chair and soak up some sun"
        />
        <Card
          src="https://media.architecturaldigest.com/photos/5da9e6cb3baf780009fd9396/16:9/w_2560%2Cc_limit/PNXBWB.jpg"
          title="Gated Victorian mansion"
          description="for frolicking and tea time"
        />
        <Card
          src="https://static.wixstatic.com/media/3905b1_38b94acd7aeb4c15ba7d67051e4ab711~mv2_d_5450_3633_s_4_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg"
          title="BARN BONANZA"
          description="Work on your projects in the company of our farm animals! TRUCKS WELCOME"
        />
      </div>
    </div>
  );
}

export default Landing;

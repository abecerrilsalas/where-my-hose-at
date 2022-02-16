import "./Presentation.css";
import { Link } from "react-router-dom";

function Presentation() {
  return (
    <section className="ext_container">
      <div className="int_element">
        <p>
        ✨ <b>WHERE MY HOSE AT</b> ✨
          <br />
          C16 Capstone / Ada Developers Academy
          <br />
          by Alma Becerril Salas (she/her) & Tanya Tran (they/them)
          <br />
          <img className="almaTanya" src="/almaAndTanya.png" alt="Alma & Tanya" />
        </p>
        
      </div>
      <div className="int_element">
        <img src="/hose3.png" alt="Where My Hose At logo with hose in hand"/>
      </div>
      <div className="int_element">
        <p>
          <b>What problem does the app solve? Who does it solve it for?</b>
          <br /><br />
          
          ✨<i> Where My Hose At </i>✨ solves the problem of <i>not having a driveway</i>—something that apartment-dwellers don't typically have access to.
          <br /><br />
          💦🏡🐈‍⬛🪴🛠🚙☀️🧺
          <br /><br />
          What is a driveway? It's a place where projects get tackled! 
          Driveways can be the perfect outdoor project zone. It's where you can use a hose and other tools not fit for a small living space, and tackle chores that require ventilation—or just extra space so you can focus less on the mess, and more on getting the task done.
          <br /><br />
          Sometimes you just need a flat surface where you can be an automechanic to your car. 
          <br />Or maybe you really need to wash out your cat's litter box.
          <br />
          It's a simple solution to simple problems.
          <br /><br />
          And if you're a driveway-owner—think of lending your driveway as a service to your community… and also, when you're out of town, wouldn't it be nice to make it seem like your house isn't unoccupied? 👀
          
        </p>
      </div>
      <div className="int_element">
        <p>
          <b>How we built it 🦾</b>
          <br />
          <br />– <b>React</b>
          <br />– <b>Firebase</b>
          <br />– Pieced together tons of tutorials
          <br />– Read documentation
          <br />– Watched YouTube
          <br /><i>(… and ended every day unwinding with </i>The X-Files 👽<i>)</i>
        </p>
      </div>
      <div className="int_element">
        <p>
          <b>What we learned 🤔</b>
          <br />
          <br /><b>– MVP means MVP</b>
          <br /><i>(lessons on flexibility, pacing, prioritization)</i>
          <br /><b>– Programming ≠ syntax</b>
          <br /><i>(lessons on learning a new technology [aka Firebase] when the newest version is still relatively new)</i>
          <br /><b>– Importance of design, React hooks, NoSQL databases</b>
          <br /><i>(wow coding can be so complex? but also flexible? where do things go? how do they connect?)</i>
        </p>
      </div>
      <div className="int_element">
        <Link to="/">
          <img src="/hose4.png" alt="Where My Hose At logo with woman gardening"/>
        </Link>
      </div>      
    </section>
  );
}

export default Presentation;
import "./Return.css";
import React, { useEffect, useState } from "react";
import { useAuth, getCurrentDriveways } from "../firebase-config";

export default function Return() {
  //   const currentUser = useAuth();
  //   console.log(currentUser);

  const [driveways, setDriveways] = useState([]);

  useEffect(() => {
    const currentUser = useAuth();
    const loadCurrentDriveways = async () => {
      const userDriveways = await getCurrentDriveways(currentUser);
      setDriveways(userDriveways);
    };
    loadCurrentDriveways();
  }, []);

  console.log(driveways);

  const handleReturn = () => {};

  return (
    <div>
      <button onClick={handleReturn}>Return Driveway</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCredentials from "./UserCredentials";
import ProfilePage from "./ProfilePage";

export default function UserPage() {
  const [isUser, setIsUser] = useState();

  useEffect(() => {
    async function toggleUserPage() {
      try {
        const response = await axios.get("http://localhost:4000/user/request", {
          withCredentials: true,
        });

        // Assume the backend returns a boolean like { isUser: true }
        if (response.data === false) {
          console.log("yes it is here");
          setIsUser(false);
        } else {
          console.log("yes it is not here");
          setIsUser(true);
        }
      } catch (error) {
        console.error("Request failed:", error);
        setIsUser(true); // fallback to ProfilePage on error
      }
    }

    toggleUserPage();
  }, []);

  return <>{isUser ? <UserCredentials /> : <ProfilePage />}</>;
}

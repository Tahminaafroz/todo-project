import { useEffect, useState } from "react";

// import data from "../staticData/People.json";
import axios from "axios";
//import "../assets/styles/pages/Profile.scss";

import "../Styles/Pages/Profile.scss";
const SingleUser = () => {
  const [user, setUser] = useState(null);
  //const { id } = useParams(); // Extract id from the URL parameters

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(user); // Log the user data

  return (
    <div className="profile-page">
      <div className="profile-containers">
        {user &&
          user.map((suser) => (
            <div key={suser.id} className="profile-card">
              <div className="profile-img">
                <img src="src/assets/image/profilePic-1.jpg" alt="Profile" />
              </div>

              <div className="profile-info">
                <h2 style={{}}>Personal Information </h2>

                <h3>Name:</h3>
                <h2> {suser.name}</h2>
                <h3>Email:</h3>
                <p> {suser.email}</p>
                <h2>Address:</h2>
                <p>street:{suser.address.street}</p>
                <p>suite: {suser.address.suite}</p>
                <p>city:{suser.address.city}</p>
                <h2>Phone:</h2>
                <p>{suser.phone}</p>
                <h2>Company:</h2>
                <p>{suser.company.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SingleUser;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom'; // Import BrowserRouter and useLocation

const UserData = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const [userID, setUserID] = useState();

  // Use useLocation to get the current location
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Extract UID from the URL params
        const params = new URLSearchParams(location.search);
        const uid = params.get('uid');

        // Set UID state
        setUserID(uid);

        // Fetch data based on the extracted UID
        const response = await fetch(`https://snappbay1111.firebaseio.com/userData/${uid}.json`);
        if (!response.ok) {
          throw new Error('Data fetch failed');
        }
        const userData = await response.json();
        setUserData(userData);
        console.log(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [location.search]);

  const handleClicked = (data) => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <form style={styles.companyInfo}>
        {userData && <>

          <p>Your Company: {userData.company}</p>
          <p>Your Name: {userData.name}</p>
          <p>Your Surname: {userData.surname}</p>
          <p>Your Phone Number: {userData.phone}</p>
          <p>Your Country: {userData.country}</p>

        </>
        }

        {/* {userData && Object.keys(userData).map((key, index) => (

          < ul style={styles.companyListUl} key={index} >

            {
              userData[key].uid === userID && (
                <li key={key + '_company'}>{userData[key].company}</li>
              )
            }
            {
              userData[key].uid === userID && (
                <li key={key + '_country'}>{userData[key].country}</li>
              )
            }
          </ul>
        ))} */}
      </form>



    </div >
  );
};


const styles = {
  companyInfo: {
    border: 'solid 0px blue',

  },

  companyListUl: {
    border: 'solid 1px blue',
    borderRadius: '3px',
    border: '1px solid #ccc',
    padding: '5px',
    cursor: 'pointer',
  }
}

const UserDataWithRouter = () => (
  <Router>
    <UserData />
  </Router>
);

export default UserDataWithRouter;

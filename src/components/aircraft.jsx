// import React, { useState, useEffect } from 'react';


// const UserData = () => {
//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [selectedData, setSelectedData] = useState(null);
//   const [userId, setUserId] = useState();



//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch('https://snappbay1111.firebaseio.com/userData.json');
//   //       if (!response.ok) {
//   //         throw new Error('data fetch failed', error);
//   //       }
//   //       const finalData = await response.json();
//   //       setUserData(finalData);
//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error('error fetching data', error);
//   //     }
//   //   }
//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Extract UID from the URL
//         const url = window.location.href;
//         const uidIndex = url.lastIndexOf('/') + 1;
//         const uid = url.substring(uidIndex);
//         setUserId(uid);

//         // Fetch data based on the extracted UID
//         const response = await fetch(`https://snappbay1111.firebaseio.com/userData/${uid}.json`);
//         if (!response.ok) {
//           throw new Error('Data fetch failed');
//         }
//         const userData = await response.json();
//         setUserData(userData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);



//   const handleClicked = (data) => {
//     setSelectedData(data)
//   };
//   const closeModal = () => {
//     setSelectedData(null)
//   };
//   if (loading) {
//     return <div>loading...</div>
//   }



//   // Clean up function
//   //return () => {
//   //     unsubscribe(); // Unsubscribe from Firebase listener
//   //   };
//   // }, [uid]);

//   return (
//     <div>
//       {/* <h1>data</h1> */}
//       <p>UID: {userId} </p>
//       <form>
//         {Object.keys(userData).map((key, index) => (
//           <ul key={index}>
//             {userData[key].uid === userId && (
//               <li key={key} onClick={() => handleClicked(userData[key])}>
//                 {userData[key].company}
//               </li>
//             )}
//           </ul>
//         ))}
//       </form>

//     </div>
//   );
// };

// export default UserData;
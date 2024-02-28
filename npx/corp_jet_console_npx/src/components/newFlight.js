import React, { useState, useEffect } from 'react';
import ModalForm from './modalForm.js';

const FleetData = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://snappbay1111.firebaseio.com/fleetInfo.json');
                if (!response.ok) {
                    throw new Error('data fetch failed');
                }
                const finalData = await response.json();
                setUserData(finalData);
                //console.log(userData)
                setLoading(false);
            } catch (error) {
                console.error('error fetching data', error);
            }
        }
        fetchData();
    }, []);

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
            <form>
                {Object.keys(userData).map((key, index) => (
                    <ul key={index}>
                        {userData[key] && (
                            <li key={key} onClick={() => handleClicked(userData[key])}>
                                {userData[key].amenities}
                            </li>
                        )}
                    </ul>
                ))}
            </form>

            {selectedData && (
                <ModalForm userData={selectedData} onClose={closeModal} />
            )}
        </div>
    );
};

export default FleetData;


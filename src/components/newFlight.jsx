import React, { useState, useEffect } from 'react';
import ModalForm from './modalForm';

const FleetData = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://snappbay1111.firebaseio.com/fleetInfo.json');
                if (!response.ok) {
                    throw new Error('data fetch failed', error);
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
            <form style={styles.aircraftList}>
                {Object.keys(userData).map((key, index) => (
                    <ul style={styles.aircraftListUl} key={index}>
                        {userData[key] && (
                            <li key={key} onClick={() => handleClicked(userData[key])}>
                                {userData[key].tailNumber}
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

const styles = {
    aircraftList: {
        border: 'solid 0px blue',
        marginTop: '10px',

    },

    aircraftListUl: {
        border: 'solid 1px blue',
        borderRadius: '3px',
        border: '0px solid #ccc',
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.8)',
        padding: '5px',
        cursor: 'pointer',
        listStyleType: 'none',
    }
}




export default FleetData;


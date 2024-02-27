import React, { useState } from 'react';
import Air from "./modalDisplay.jsx";


const ModalForm = ({ userData, onClose }) => {
    const [formData, setFormData] = useState({
        amenities: userData.amenities || '',
        model: userData.model || '',
        name: userData.name || '',
        oem: userData.oem || '',
        pictures: userData.pictures || '',
        seats: userData.seats || '',
        tailnumber: userData.tailnumber || '',
        type: userData.type || '',

    });



    // const submitMyData = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     onClose();
    // };

    return (
        <>
            <Air data={formData} onClose={onClose} />
        </>
    );
};

export default ModalForm;



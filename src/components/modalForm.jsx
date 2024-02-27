import { PrinterIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import ModalDisplay from './modalDisplay.jsx';

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
    })

    return (
        <div className='modal'>
            <ModalDisplay data={userData} onClose={onClose} />
            {/* {console.log(userData)} */}
        </div>

    )
}

export default ModalForm;



import { PrinterIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';

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

        departureDate: '',
        departureTime: '',
        departureAirport: '',
        arrivalAirport: '',
        price: '',
    })
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(previousData => ({
            ...previousData,
            [name]: value
        }));
    };

    const submitMyData = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();

    }
    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>&times</span>
                <h2>data</h2>
                <form onSubmit={submitMyData}>
                    <div>
                        <label htmlFor='amenities'>amenities:</label>
                        <input type='text' name='amenities' value={userData.amenities} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='model'>model:</label>
                        <input type='text' name='model' value={userData.model} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='name'>name:</label>
                        <input type='text' name='name' value={userData.name} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='oem'>oem:</label>
                        <input type='text' name='oem' value={userData.oem} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='pictures'>pictures:</label>
                        <input type='text' name='pictures' value={userData.pictures} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='seats'>seats:</label>
                        <input type='text' name='seats' value={userData.seats} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='tailnumber'>tailnumber:</label>
                        <input type='text' name='tailnumber' value={userData.tailnumber} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='type'>type:</label>
                        <input type='text' name='type' value={userData.type} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='departureDate'>departureDate:</label>
                        <input type='text' name='departureDate' value={userData.departureDate} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='departureTime'>type:</label>
                        <input type='text' name='departureTime' value={userData.departureTime} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='departureAirport'>type:</label>
                        <input type='text' name='departureAirport' value={userData.departureAirport} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='arrivalAirport'>type:</label>
                        <input type='text' name='arrivalAirport' value={userData.arrivalAirport} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='price'>type:</label>
                        <input type='text' name='price' value={userData.price} onChange={changeHandler} />
                    </div>
                </form>
            </div>

        </div>
    )
}


export default ModalForm;



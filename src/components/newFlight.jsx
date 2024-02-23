import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

function NewFlight({ onClose }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        tailNumber: '',
        oem: '',
        model: '',
        type: '',
        seats: '',
        amenities: '',
        pictures: '',
    })
    const submitData = (e) => {
        e.preventDefault();
        firebase.database().ref('fleetInfo').push(formData);
        setFormData({
            tailNumber: '',
            oem: '',
            model: '',
            type: '',
            seats: '',
            amenities: '',
            pictures: '',
        })
    }
    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setFormData(previousData => ({
            ...previousData, [name]: value
        }))
    }
    // Function to toggle the form visibility
    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleForm}>Open Form</button>
            {isOpen && (
                <div className="popup">

                    <form className="needs-validation" noValidate onSubmit={submitData}>
                        <div className="">
                            <label htmlFor="tailNumber" className="form-label"></label>
                            <input name="tailNumber" type="text" className="form-control" value={formData.tailNumber} onChange={handleChangeData} placeholder="Tail Number" defaultValue="" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="oem" className="form-label"></label>
                            <input name="oem" type="text" className="form-control" value={formData.oem} onChange={handleChangeData} placeholder="OEM" defaultValue="" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="model" className="form-label"></label>
                            <input name="name" type="text" className="form-control" value={formData.model} onChange={handleChangeData} placeholder="Model" defaultValue="" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="type" className="form-label"></label>
                            <input name="type" type="text" className="form-control" value={formData.type} onChange={handleChangeData} placeholder="Type" defaultValue="" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="seats" className="form-label"></label>
                            <input name="seats" type="text" className="form-control" value={formData.seats} onChange={handleChangeData} placeholder="Seats" defaultValue="" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="amenities" className="form-label"></label>
                            <input name="amenities" type="text" className="form-control" value={formData.amenities} onChange={handleChangeData} placeholder="Amenities" defaultValue="" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="pictures" className="form-label"></label>
                            <input name="pictures" type="text" className="form-control" value={formData.pictures} onChange={handleChangeData} placeholder="Pictures" defaultValue="" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <button type="button" className="close-button" onClick={onClose}>Close</button>
                        <div className="">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>

                    </form>
                </div>
            )}
        </div>
    );
}

export default NewFlight;

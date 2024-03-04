import React from 'react';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../configs/firebaseConfig.js';
import { Images } from './image.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

const Air = ({ data, onClose }) => {
    const [mydata, setmyData] = useState({
        amenities: data.amenities || '',
        model: data.model || '',
        oem: data.oem || '',
        pictures: data.pictures || '',
        seats: data.seats || '',
        tailNumber: data.tailNumber || '',
        type: data.type || '',
        departureDate: '',
        departureTime: '',
        Latitude: '',
        Longitude: '',
        arrivalAirport: '',
        price: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setmyData(previousData => ({
            ...previousData,
            [name]: value
        }));
    };

    const handleClose = () => {
        onClose();
    };

    const [startDate, setStartDate] = useState(null);

    const [time, setTime] = useState('12:00');


    const submitMyData = (e) => {
        // e.preventDefault();
        // console.log(formData);
        const productRef = collection(db, 'operator_products');
        addDoc(productRef, { mydata }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })
        onClose();
    };
    return (
        <div style={styles.container}>

            <span className="close" onClick={handleClose} style={styles.closeButton}>&times;</span>
            <h2 style={styles.heading}>Publish Aircraft to Map</h2>
            <form style={styles.form} onSubmit={submitMyData}>

                <div style={styles.inputRow}>

                    <div style={styles.inputGroup}>
                        <label htmlFor='amenities' style={styles.label}>Amenities:</label>
                        <input
                            type='text'
                            name='amenities'
                            value={mydata.amenities || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='model' style={styles.label}>Model:</label>
                        <input
                            type='text'
                            name='model'
                            value={mydata.model || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>

                </div>

                <div style={styles.inputRow}>

                    <div style={styles.inputGroup}>
                        <label htmlFor='oem' style={styles.label}>OEM:</label>
                        <input
                            type='text'
                            name='oem'
                            value={mydata.oem || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    {/* <div style={styles.inputGroup}>
                        <label htmlFor='pictures' style={styles.label}>Pictures:</label>
                        <input
                            type='text'
                            name='pictures'
                            value={mydata.pictures || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div> */}
                    <div style={styles.inputGroup}>

                        <Images
                        />
                    </div>
                </div>

                <div style={styles.inputRow}>

                    <div style={styles.inputGroup}>
                        <label htmlFor='seats' style={styles.label}>Seats:</label>
                        <input
                            type='text'
                            name='seats'
                            value={mydata.seats || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='tailNumber' style={styles.label}>Tail Number:</label>
                        <input
                            type='text'
                            name='tailNumber'
                            value={mydata.tailNumber || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                </div>

                <div style={styles.inputRow}>

                    <div style={styles.inputGroup}>
                        <label htmlFor='type' style={styles.label}>Type:</label>
                        <input
                            type='text'
                            name='type'
                            value={mydata.type || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                </div>

                <div style={styles.inputRow}>

                    <div style={styles.inputGroup}>
                        <label htmlFor='departureDate' style={styles.label}>Departure Date:</label>

                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select Departure Date"
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='departureTime' style={styles.label}>Departure Time:</label>
                        <input
                            type='text'
                            name='departureTime'
                            value={mydata.departureTime}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Departure Time'
                            required
                        />
                    </div>
                </div>

                <div style={styles.inputRow}>

                    <div style={styles.inputGroup}>
                        <label htmlFor='Latitude' style={styles.label}>Departure Airport Latitude:</label>
                        <input
                            type='text'
                            name='Latitude'
                            value={mydata.Latitude}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Departure Airport Lat.'
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='Longitude' style={styles.label}>Departure Airport Longitude:</label>
                        <input
                            type='text'
                            name='Longitude'
                            value={mydata.Longitude}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Departure Airport Long.'
                            required
                        />
                    </div>
                </div>

                <div style={styles.inputRow}>

                    <div style={styles.inputGroup}>
                        <label htmlFor='arrivalAirport' style={styles.label}>Arrival Airport:</label>
                        <input
                            type='text'
                            name='arrivalAirport'
                            value={mydata.arrivalAirport}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Arrival Airport'
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='price' style={styles.label}>Price:</label>
                        <input
                            type='text'
                            name='price'
                            value={mydata.price}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Price for the whole Aircraft'
                            required
                        />
                    </div>
                </div>

                <button>SUBMIT</button>
            </form >
        </div >
    );
};

const styles = {
    container: {
        position: 'absolute',
        top: '60%',
        right: '-15%',
        // left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
        maxWidth: '600px',
    },
    closeButton: {
        cursor: 'pointer',
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '10px',
        fontWeight: 'bold',
    },
    heading: {
        marginBottom: '10px',
        textAlign: 'center',
        color: '#333',
    },
    form: {
        position: 'relative',
    },
    inputRow: {
        display: 'flex',
        marginBottom: '10px',
    },
    inputGroup: {
        flex: 1,
        marginRight: '0px',
    },

    label: {
        marginBottom: '2px',
        color: '#555',
        fontSize: '10px',
        textAlign: 'left',
    },

    label2: {
        marginBottom: '2px',
        color: '#555',
        fontSize: '10px',
        width: '50px',
        textAlign: 'left',
    },
    input: {

        borderRadius: '3px',
        border: '1px solid #ccc',
        width: '100%',
        padding: '3px 10px',
        margin: '8px 0px 8px 5px',
        boxSizing: 'border-box',
    },



    input2: {
        borderRadius: '3px',
        border: '1px solid #ccc',
        width: '50%',
        padding: '3px 10px',
        margin: '8px 0px 8px -5px',
        boxSizing: 'border-box',
    },

};

export default Air;
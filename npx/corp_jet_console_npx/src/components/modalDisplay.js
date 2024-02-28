import React from 'react';
import { useState } from 'react';

const Air = ({ data, onClose }) => {
    const [mydata, setmyData] = useState({
        amenities: data.amenities || '',
        model: data.model || '',
        name: data.name || '',
        oem: data.oem || '',
        pictures: data.pictures || '',
        seats: data.seats || '',
        tailnumber: data.tailnumber || '',
        type: data.type || '',
        departureDate: '',
        departureTime: '',
        departureAirport: '',
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





    const submitMyData = (e) => {
        // e.preventDefault();
        onClose();
    };
    return (
        <div style={styles.container}>
            <span className="close" onClick={handleClose} style={styles.closeButton}>&times;</span>
            <h2 style={styles.heading}>Aircraft Form</h2>
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

                        />
                    </div>
                </div>
                <div style={styles.inputRow}>
                    <div style={styles.inputGroup}>
                        <label htmlFor='name' style={styles.label}>Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={mydata.name || ''}
                            onChange={handleChange}
                            style={styles.input}

                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='oem' style={styles.label}>OEM:</label>
                        <input
                            type='text'
                            name='oem'
                            value={mydata.oem || ''}
                            onChange={handleChange}
                            style={styles.input}

                        />
                    </div>
                </div>
                <div style={styles.inputRow}>
                    <div style={styles.inputGroup}>
                        <label htmlFor='pictures' style={styles.label}>Pictures:</label>
                        <input
                            type='text'
                            name='pictures'
                            value={mydata.pictures || ''}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='seats' style={styles.label}>Seats:</label>
                        <input
                            type='text'
                            name='seats'
                            value={mydata.seats || ''}
                            onChange={handleChange}
                            style={styles.input}

                        />
                    </div>
                </div>
                <div style={styles.inputRow}>
                    <div style={styles.inputGroup}>
                        <label htmlFor='tailnumber' style={styles.label}>Tail Number:</label>
                        <input
                            type='text'
                            name='tailnumber'
                            value={mydata.tailnumber || ''}
                            onChange={handleChange}
                            style={styles.input}

                        />
                    </div>
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
                        <label htmlFor='departureDate' style={styles.label}>Dep. Date:</label>
                        <input
                            type='text'
                            name='departureDate'
                            value={mydata.departureDate}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='departure date'
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='departureTime' style={styles.label}>Dep. Time:</label>
                        <input
                            type='text'
                            name='departureTime'
                            value={mydata.departureTime}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Departure time'
                            required
                        />
                    </div>
                </div>
                <div style={styles.inputRow}>
                    <div style={styles.inputGroup}>
                        <label htmlFor='departureAirport' style={styles.label}>Dep. Airport:</label>
                        <input
                            type='text'
                            name='departureAirport'
                            value={mydata.departureAirport}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Departure Airport'
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor='arrivalAirport' style={styles.label}>Arv. Airport:</label>
                        <input
                            type='text'
                            name='arrivalAirport'
                            value={mydata.arrivalAirport}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder='Arrival arirport'
                            required
                        />
                    </div>
                </div>
                <div style={styles.inputRow}>
                    <div style={styles.inputGroup}>
                        <label htmlFor='price' style={styles.label2}>Price:</label>
                        <input
                            type='text'
                            name='price'
                            value={mydata.price}
                            onChange={handleChange}
                            style={styles.input2}
                            placeholder='enter price'
                            required
                        />
                    </div>
                    <button>SUBMIT</button>
                </div>

            </form>
        </div>
    );
};

const styles = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
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
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    },
    form: {
        position: 'relative',
    },
    inputRow: {
        display: 'flex',
        marginBottom: '15px',
    },
    inputGroup: {
        flex: 1,
        marginRight: '10px',
    },
    label: {
        marginBottom: '2px',
        color: '#555',
        fontSize: '12px'
    },

    label2: {
        marginBottom: '2px',
        color: '#555',
        fontSize: '12px',
        width: '50px'
    },
    input: {
        width: '60%',
        padding: '5px',
        borderRadius: '3px',
        border: '1px solid #ccc',
    },
    input2: {
        width: '30%',
        padding: '5px',
        borderRadius: '3px',
        border: '1px solid #ccc',
    },
};

export default Air;
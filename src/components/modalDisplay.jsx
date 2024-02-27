import React, { useState, useEffect } from 'react';

const ModalDisplay = ({ data, onClose }) => {
    const [mydata, setMyData] = useState({
        amenities: data.amenities || '',
        model: data.model || '',
        name: data.name || '',
        oem: data.oem || '',
        pictures: data.pictures || '',
        seats: data.seats || '',
        tailnumber: data.tailnumber || '',
        type: data.type || '',

        departureAirport: '',
        departureDate: '',
        arrivalAirport: '',
        price: '',

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMyData(previousData => ({
            ...previousData,
            [name]: value
        }));
    };

    const submitMyData = (e) => {
        e.preventDefault();
        // console.log(myData);
        onClose();

    }
    const handleClose = () => {
        onClose();
    }

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
            </form>
        </div>
    )
}










const styles = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.8)',
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
        fontSize: '12px',
    },
    label2: {
        marginBottom: '2px',
        color: '#555',
        fontSize: '12px',
        width: '50px',
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
    }

}

export default ModalDisplay;


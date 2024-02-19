import React from 'react';


function FleetInfo({ onClose }) {
    return (
        <div className="popup">
            <form className="needs-validation" noValidate>
                <div className="">
                    <label htmlFor="validationCustom01" className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="OEM" defaultValue="" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom02" className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Model" defaultValue="" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom03" className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom03" placeholder="Type" defaultValue="" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom04" className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="Seats" defaultValue="" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom05" className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="Amenities" defaultValue="" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom05" className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="Pictures" defaultValue="" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <button type="button" className="close-button" onClick={onClose}>Close</button>
                {/* Other form elements */}
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>

            </form>
        </div>
    );
}

export default FleetInfo;

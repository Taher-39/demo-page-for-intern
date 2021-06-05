import React from 'react';

const AccountHeading = () => {
    return (
            <div className="row pt-2">
                <div className='col-md-6'>
                    <h4 className='text-secondary'>Account settings</h4>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-secondary">SAVE CHANGES</button>
                </div>
            </div>
    );
};

export default AccountHeading;
import React, { useState } from 'react';
import './dashboard.css'
import Select from 'react-select'
const Dashboard = () => {
    const data = [
        {
            value: 1,
            label: "Cardiology"
        },
        {
            value: 2,
            label: "Neurology"
        },
        {
            value: 3,
            label: "Pediatric Surgery"
        },
        {
            value: 4,
            label: "Plastic Surgery"
        },
        {
            value: 5,
            label: "Opthmalogist"
        },
        {
            value: 6,
            label: "psychiatrist"
        },
        {
            value: 7,
            label: "orthopaedic"
        },
    ];
    const location = [
        {
            value: 1,
            label: "All Locations"
        },
        {
            value: 2,
            label: "haryana"
        },
        {
            value: 3,
            label: "up"
        },
        {
            value: 4,
            label: "mumbai"
        },
        {
            value: 5,
            label: "west bengal"
        },
        {
            value: 6,
            label: "punjab"
        },
        {
            value: 7,
            label: "Delhi"
        },
        {
            value: 8,
            label: "maharashtra"
        },
    ];
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const handleChangeSelect = obj => {
        setSelectedValue(obj);
    }
    const handleChangeLocation = obj => {
        setSelectedLocation(obj);
    }
    return (
        <div className='dcontainer'>
            <div className='dbox1'>
                Choose your specialist and location
            </div>
            <div className='dbox2'>
                <div className='dselection'>
                    <Select className="dselect"
                        value={selectedValue}
                        options={data}
                        onChange={handleChangeSelect}
                    />
                    <Select className="dselect"
                        value={selectedLocation}
                        options={location}
                        onChange={handleChangeLocation}
                    />
                </div>
                <div >
                    <button className='dsubmit'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

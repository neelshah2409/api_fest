// import React from 'react';

const Validation = (values) => {
    let errors={};
    if(!values.fullname){
        errors.fullname="fullname is required."
    }
    if(!values.email){
        errors.email="email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Invalid Email"
    }
    if(!values.phone){
        errors.phone="Phone number is required."
    }
    if(!values.password){
        errors.password="password is required."
    }else if(values.password.length<5){
        errors.password="Password must be more than five characters."
    }
    return errors;
};

export default Validation;

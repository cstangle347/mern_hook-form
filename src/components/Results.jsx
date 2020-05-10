import React from 'react'

const Results = (props) => {
    const {firstName, lastName, email, password, confirmPW} = props.result;
    return(

    <div>
            <h4>Your Form Data</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPW}</p>
        </div>
    )
};

export default Results;
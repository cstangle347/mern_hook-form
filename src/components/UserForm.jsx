import React from "react"
    
const UserForm = props => {
    const { inputs, setInputs } = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    return(
        <form>
            <div classname="form-group">
                <lable htmlFor="firstName">First Name</lable>
                <input onChange={ onChange } type="text" name= "firstName" 
                />
            </div>
            <br></br>
            <div classname="form-group">
                <lable htmlFor="lastName">Last Name</lable>
                <input onChange={ onChange } type="text" name= "lastName" 
                />
            </div>
            <br></br>
            <div classname="form-group">
                <lable htmlFor="email">Email</lable>
                <input onChange={ onChange } type="text" name= "email" 
                />
            </div>
            <br></br>
            <div classname="form-group">
                <lable htmlFor="password">Password</lable>
                <input onChange={ onChange } type="password" name= "password" 
                />
            </div>
            <br></br>
            <div classname="form-group">
                <lable htmlFor="confirmPW">Confirm PW</lable>
                <input onChange={ onChange } type="password" name= "confirmPW" 
                />
            </div>
        </form>
    );
};
    
export default UserForm;
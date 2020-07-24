import React, { useRef, useState } from 'react';
import UncontrolledJobForm from './UncontrolledJobForm';
import ControlledJobForm from './ControlledJobForm';
import FormikJobForm from './FormikJobForm';
import HookJobForm from './HookJobForm';

export function HTMLForms(props) {

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();

    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log({
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
        });
    }

    console.log('render');

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input ref={firstnameRef} type="text" required={true} placeholder="FirstName" name="firstname" onChange={(e) => {
                    if (e.target.value === 'Admin') {
                        setError(true)
                    } else {
                        setError(false)
                    }
                }} />
                {firstnameRef && firstnameRef.current && firstnameRef.current.value === 'Admin' ?
                    <span>You cannot use this</span> : <></>}

                <input ref={lastnameRef} type="text" placeholder="LastName" name="lastname" />
                <input ref={emailRef} type="email" placeholder="Email" name="email" />
                <button type="submit" className="btn">Save</button>
            </form>
        </div>
    )
}


export function ReactForm() {

    let [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })

    const handleOnChange = (field, value) => {
        let newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    console.log('render');

    return (
        <div className="container">
            {/* <form>
                <input value={formData['firstname']} onChange={e => handleOnChange('firstname', e.target.value)} type="text" placeholder="FirstName" name="firstname" />
                { formData['firstname'] === 'Admin' ? <span>You cannot use this</span> : <></>}
                
                <input value={formData['lastname']} onChange={e => handleOnChange('lastname', e.target.value)} type="text" placeholder="LastName" name="lastname" />
                <input value={formData['email']} onChange={e => handleOnChange('email', e.target.value)} type="email" placeholder="Email" name="email" />
                <button type="submit" className="btn">Save</button>
            </form> */}
            {/* <UncontrolledJobForm /> */}
            {/* <ControlledJobForm/> */}
            {/* <FormikJobForm/> */}
            <HookJobForm/>
        </div>
    )
}
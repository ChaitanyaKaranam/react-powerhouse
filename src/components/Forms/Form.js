import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export function HTMLForms(props) {

    const inputRef = useRef(null);
    const lnRef = useRef(null);
    const emRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // let newFormData = {};
        // for(const [key, value] of formData.entries()){
        //     newFormData[key] = value;
        // }
        // console.log(newFormData);

        console.log(inputRef.current.value);
        console.log(lnRef.current.value);
        console.log(emRef.current.value);
    }

    console.log('html render');

    return (
        <div>
            <h4>HTML Forms</h4>
            <br />
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} type="text" defaultValue="test" name="firstname" placeholder="First Name" required pattern="^((?!Admin).)*$"/>
                    <input ref={lnRef} type="text" defaultValue="test" name="lastname" placeholder="Last Name" required />
                    <input ref={emRef} type="email" defaultValue="test@test.com" name="email" placeholder="Email Address" required />
                    <button type="submit" className="btn">Save</button>
                </form>

            </div>
        </div>
    )
}

export function ReactForm() {

    const [formData, setFormData] = useState({
        firstname: 'test',
        lastname: 'test',
        email: 'test@test.com'
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (field, value) => {
        let newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData)
    }

    console.log('render');

    return (
        <div>
            <h4>React Forms</h4>
            <br />
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={formData['firstname']}
                        name="firstname" 
                        placeholder="First Name" 
                        required 
                        onChange={e => handleChange('firstname', e.target.value)}/>
                    {formData['firstname'] === 'Admin' ? 'You cannot use this name' : ''}
                    <input 
                        type="text" 
                        defaultValue="test" 
                        name="lastname" 
                        placeholder="Last Name" 
                        required 
                        onChange={e => handleChange('lastname', e.target.value)}/>
                    <input 
                        type="email" 
                        defaultValue="test@test.com" 
                        name="email" 
                        placeholder="Email Address" 
                        required 
                        onChange={e => handleChange('email', e.target.value)}/>
                    <button type="submit" className="btn">Save</button>
                </form>

            </div>
        </div>
    )
}

export function HookForm(props) {

    const { register, handleSubmit, errors, watch } = useForm({
        defaultValues: {
            firstname: 'test',
            lastname: 'test',
            email: 'test@123.com'
        }
    });

    const watchFirstName = watch('firstname', '');

    const submitData = data => {
        console.log(data);
    }

    return (
        <div>
            <h4>Hook Forms</h4>
            <br />
            <div className="container">

                <form onSubmit={handleSubmit(submitData)}>
                    <input 
                        ref={register({
                            required: 'This is a required field'
                        })}
                    type="text" 
                    name="firstname" 
                    placeholder="First Name"/>

                    { watchFirstName && watchFirstName === 'Admin' && <span>You cannot use this name</span>}

                    <input 
                        ref={register({
                            required: 'This is a requied field'
                        })} 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name"/>


                    <input ref={register({ required: 'This is a required field' })} type="email" name="email" placeholder="Email Address"/>
                    <button type="submit" className="btn">Save</button>
                </form>

            </div>
        </div>
    )
}
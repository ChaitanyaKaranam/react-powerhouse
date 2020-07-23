import React, { useRef, useState } from 'react';

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
            <UncontrolledJobForm />
        </div>
    )
}

function UncontrolledJobForm() {
    return (
        <form>
            <section>
                <h4>Personal Information</h4>
                <br />
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" name="firstname" />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" name="lastname" />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" />
                </div>
            </section>
            <section>
                <h4>Work Information</h4>
                <br />
                <div>
                    <label htmlFor="current_employer">Current Employer</label>
                    <input type="text" id="current_employer" name="current_employer" />
                </div>
                <div>
                    <label htmlFor="current_role">Current Role</label>
                    <input type="text" id="current_role" name="current_role" />
                </div>
                <div>
                    <label htmlFor="role_description">Role Description</label>
                    <input type="text" id="role_description" name="role_description" />
                </div>
                <div>
                    <label htmlFor="experience">Total Years of Experience</label>
                    <input type="text" id="experience" name="experience" />
                </div>
                <div>
                    <label htmlFor="skills">Skills</label>
                    <input type="text" id="skills" name="skills" />
                </div>
            </section>
            <section>
                <h4>Social Medial Links</h4>
                <br />
                <div>
                    <label htmlFor="portfolio_links">Portfolio links</label>
                    <input type="text" id="portfolio_links" name="portfolio_links" />
                </div>
                <div>
                    <label htmlFor="social_media_links">Social Media Links</label>
                    <input type="text" id="social_media_links" name="social_media_links" />
                </div>
            </section>
            <section>
                <h4>Uploads</h4>
                <br />
                <div>
                    <label htmlFor="resume">Select Resume</label>
                    <br/>
                    <input type="file" id="resume"/>
                </div>
                <br/><br/>
                <div>
                    <label htmlFor="cover_letter">Select Cover Letter</label>
                    <br/>
                    <input type="file" id="cover_letter"/>
                </div>
            </section>
            <br/><br/>
            <button type="submit" className="btn">Submit Form</button>
        </form>
    )
}







































// export function HookForm(props) {

//     const { register, handleSubmit, errors, watch } = useForm({
//         defaultValues: {
//             firstname: 'test',
//             lastname: 'test',
//             email: 'test@123.com'
//         }
//     });

//     const watchFirstName = watch('firstname', '');

//     const submitData = data => {
//         console.log(data);
//     }

//     return (
//         <div>
//             <h4>Hook Forms</h4>
//             <br />
//             <div className="container">

//                 <form onSubmit={handleSubmit(submitData)}>
//                     <input
//                         ref={register({
//                             required: 'This is a required field'
//                         })}
//                         type="text"
//                         name="firstname"
//                         placeholder="First Name" />

//                     {watchFirstName && watchFirstName === 'Admin' && <span>You cannot use this name</span>}

//                     <input
//                         ref={register({
//                             required: 'This is a requied field'
//                         })}
//                         type="text"
//                         name="lastname"
//                         placeholder="Last Name" />


//                     <input ref={register({ required: 'This is a required field' })} type="email" name="email" placeholder="Email Address" />
//                     <button type="submit" className="btn">Save</button>
//                 </form>

//             </div>
//         </div>
//     )
// }
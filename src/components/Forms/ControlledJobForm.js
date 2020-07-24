import React, { useState } from 'react';

function ControlledJobForm(props) {

    let [ formData, setFormData ] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        location: '',
        current_employer: '',
        current_role: '',
        role_description: '',
        experience: 0,
        skills: '',
        portfolio_links: '',
        social_media_links: ''
    })

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

    function handleOnChange(field, value){
        let newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    console.log('render');

    return (
        <form onSubmit={handleOnSubmit}>
            <section>
                <h4>Personal Information</h4>
                <br />
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        required
                        type="text" 
                        id="firstname" 
                        name="firstname" 
                        value={formData['firstname'] ? formData['firstname'] : ''} 
                        onChange={e => handleOnChange('firstname', e.target.value)}
                    />
                </div>
                { formData['firstname'] === 'Admin' ? <span className="red-text">Cannot use this value</span> : <></> }
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        required
                        type="text" 
                        id="lastname" 
                        name="lastname" 
                        value={formData['lastname']} 
                        onChange={e => handleOnChange('lastname', e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        required 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData['email']} 
                        onChange={e => handleOnChange('email', e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        required
                        type="tel" 
                        id="phone" 
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={formData['phone']} 
                        onChange={e => handleOnChange('phone', e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        required
                        type="text" 
                        id="location" 
                        name="location" 
                        value={formData['location']} 
                        onChange={e => handleOnChange('location', e.target.value)}/>
                </div>
            </section>
            <section>
                <h4>Work Information</h4>
                <br />
                <div>
                    <label htmlFor="current_employer">Current Employer</label>
                    <input 
                        type="text" 
                        id="current_employer" 
                        name="current_employer" 
                        value={formData['current_employer']} 
                        onChange={e => handleOnChange('current_employer', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="current_role">Current Role</label>
                    <input
                        type="text" 
                        id="current_role" 
                        name="current_role" 
                        value={formData['current_role']} 
                        onChange={e => handleOnChange('current_role', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="role_description">Role Description</label>
                    <input 
                        type="text" 
                        id="role_description" 
                        name="role_description" 
                        value={formData['role_description']} 
                        onChange={e => handleOnChange('role_description', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="experience">Total Years of Experience</label>
                    <input 
                        type="number" 
                        id="experience" 
                        name="experience" 
                        value={formData['experience']} 
                        onChange={e => handleOnChange('experience', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="skills">Skills</label>
                    <input 
                        type="text" 
                        id="skills" 
                        name="skills" 
                        value={formData['skills']} 
                        onChange={e => handleOnChange('skills', e.target.value)}
                    />
                </div>
            </section>
            <section>
                <h4>Social Medial Links</h4>
                <br />
                <br />
                <div>
                    <label>
                        <input
                            className="filled-in"
                            type="checkbox"
                            name="include_portfolio"
                            id="include_portfolio"
                            onChange={e => handleOnChange('include_portfolio', e.target.checked)} />
                        <span>Include Portfolio Links?</span>
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        <input
                            className="filled-in"
                            type="checkbox"
                            name="include_social"
                            id="include_social"
                            onChange={e => handleOnChange('include_social', e.target.checked)} />
                        <span>Include Social Media Links?</span>
                    </label>
                </div>
                <br />
                { formData['include_portfolio'] && <div>
                    <label htmlFor="portfolio_links">Portfolio links</label>
                    <input
                        required 
                        type="url" 
                        id="portfolio_links" 
                        name="portfolio_links" 
                        value={formData['portfolio_links']} 
                        onChange={e => handleOnChange('portfolio_links', e.target.value)}
                    />
                </div>}
                { formData['include_social'] && <div>
                    <label htmlFor="social_media_links">Social Media Links</label>
                    <input
                        required 
                        type="url" 
                        id="social_media_links" 
                        name="social_media_links" 
                        value={formData['social_media_links']} 
                        onChange={e => handleOnChange('social_media_links', e.target.value)}
                    />
                </div>}
            </section>
            <section>
                <h4>Uploads</h4>
                <br />
                <br />
                <div>
                    <label htmlFor="resume">Select Resume</label>
                    <br />
                    <input type="file" id="resume" />
                </div>
                <br /><br />
                <div>
                    <label htmlFor="cover_letter">Select Cover Letter</label>
                    <br />
                    <input type="file" id="cover_letter" />
                </div>
            </section>
            <br/><br/>
            <button type="submit" className="btn">Submit Form</button>
        </form>
    );
}

export default ControlledJobForm;
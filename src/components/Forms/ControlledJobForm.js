import React, { useState } from 'react';

function ControlledJobForm(props) {

    let [ formData, setFormData ] = useState({})

    function handleOnChange(field, value){
        let newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    return (
        <form>
            <section>
                <h4>Personal Information</h4>
                <br />
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input 
                        type="text" 
                        id="firstname" 
                        name="firstname" 
                        value={formData['firstname']} 
                        onChange={e => handleOnChange('firstname', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        name="lastname" 
                        value={formData['lastname']} 
                        onChange={e => handleOnChange('lastname', e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData['email']} 
                        onChange={e => handleOnChange('email', e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        value={formData['phone']} 
                        onChange={e => handleOnChange('phone', e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input 
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
                        type="text" 
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
                <div>
                    <label htmlFor="portfolio_links">Portfolio links</label>
                    <input 
                        type="text" 
                        id="portfolio_links" 
                        name="portfolio_links" 
                        value={formData['portfolio_links']} 
                        onChange={e => handleOnChange('portfolio_links', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="social_media_links">Social Media Links</label>
                    <input 
                        type="text" 
                        id="social_media_links" 
                        name="social_media_links" 
                        value={formData['social_media_links']} 
                        onChange={e => handleOnChange('social_media_links', e.target.value)}
                    />
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
                <div className="file-field input-field">
                    <div className="btn-small">
                        <span>Upload Resume</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                </div>
                <div className="file-field input-field">
                    <div className="btn-small">
                        <span>Upload Cover Letter</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                </div>
            </section>
            <br/><br/>
            <button type="submit" className="btn">Submit Form</button>
        </form>
    );
}

export default ControlledJobForm;
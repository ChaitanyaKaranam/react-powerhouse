import React, {useRef, useState} from 'react';

function UncontrolledJobForm(props) {

    const [errorMessage, setErrorMessage] = useState({});
    const [showField, setShowField] = useState({});
    const firstNameRef = useRef();
    const portfolioRef = useRef();
    const socialRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('uc-jobform');
        const formData = new FormData(form);
        let uploadData = {}
        for (let i of formData) {
            uploadData[i[0]] = i[1]
        }
        console.log(uploadData);
    }

    console.log('render');

    return (
        <form onSubmit={handleSubmit} id="uc-jobform">
            <section>
                <h4>Personal Information</h4>
                <br />
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input ref={firstNameRef} required type="text" id="firstname" name="firstname" onChange={() => {
                        if (firstNameRef.current.value === 'Admin') {
                            let em = { ...errorMessage }
                            em['firstname'] = 'Cannot use this value';
                            setErrorMessage(em);
                        } else {
                            if (errorMessage['firstname']) {
                                let em = { ...errorMessage }
                                delete em['firstname'];
                                setErrorMessage(em);
                            }
                        }
                    }} />
                    {errorMessage['firstname'] ? <span className="red-text">{errorMessage['firstname']}</span> : <></>}
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input required type="text" id="lastname" name="lastname" />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input required type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input required type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <textarea required id="location" className="materialize-textarea" name="location" />
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
                    <textarea type="text" id="role_description" className="materialize-textarea" name="role_description" />
                </div>
                <div>
                    <label htmlFor="experience">Total Years of Experience</label>
                    <input type="number" id="experience" name="experience" />
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
                    <label>
                        <input
                            ref={portfolioRef}
                            className="filled-in"
                            type="checkbox"
                            name="include_portfolio"
                            id="include_portfolio"
                            onChange={() => {
                                let fields = { ...showField };
                                fields['include_portfolio'] = portfolioRef.current.checked;
                                setShowField(fields);
                            }} />
                        <span>Include Portfolio Links?</span>
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        <input
                            ref={socialRef}
                            className="filled-in"
                            type="checkbox"
                            name="include_social"
                            id="include_social"
                            onChange={() => {
                                let fields = { ...showField };
                                fields['include_social'] = socialRef.current.checked;
                                setShowField(fields);
                            }} />
                        <span>Include Social Media Links?</span>
                    </label>
                </div>
                <br />
                {showField['include_portfolio'] && <div>
                    <label htmlFor="portfolio_links">Portfolio links</label>
                    <input required type="url" id="portfolio_links" name="portfolio_links" />
                </div>}
                <br />
                {showField['include_social'] && <div>
                    <label htmlFor="social_media_links">Social Media Links</label>
                    <input required type="url" id="social_media_links" name="social_media_links" />
                </div>}
            </section>
            <section>
                <h4>Uploads</h4>
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
            <br /><br />
            <button type="submit" className="btn">Submit Form</button>
        </form>
    )
}

export default UncontrolledJobForm;
import React from 'react';
import { useForm } from 'react-hook-form';

function HookJobForm(props) {

    const { register, handleSubmit, errors, watch } = useForm();

    const onSubmit = values => console.log(values);

    const watchValues = watch(['firstname', 'include_portfolio', 'include_social']);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <h4>Personal Information</h4>
                <br />
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input required ref={register} type="text" id="firstname" name="firstname" />
                    { watchValues && watchValues['firstname'] === 'Admin' ? <span>You cannot use this</span> : <></>}
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input ref={register} type="text" id="lastname" name="lastname" />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input ref={register} type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input ref={register} type="text" id="phone" name="phone" />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input ref={register} type="text" id="location" name="location" />
                </div>
            </section>
            <section>
                <h4>Work Information</h4>
                <br />
                <div>
                    <label htmlFor="current_employer">Current Employer</label>
                    <input ref={register} type="text" id="current_employer" name="current_employer" />
                </div>
                <div>
                    <label htmlFor="current_role">Current Role</label>
                    <input ref={register} type="text" id="current_role" name="current_role" />
                </div>
                <div>
                    <label htmlFor="role_description">Role Description</label>
                    <input ref={register} type="text" id="role_description" name="role_description" />
                </div>
                <div>
                    <label htmlFor="experience">Total Years of Experience</label>
                    <input ref={register} type="text" id="experience" name="experience" />
                </div>
                <div>
                    <label htmlFor="skills">Skills</label>
                    <input ref={register} type="text" id="skills" name="skills" />
                </div>
            </section>
            <section>
                <h4>Social Medial Links</h4>
                <br />
                <div>
                    <label>
                        <input
                            ref={register}
                            className="filled-in"
                            type="checkbox"
                            name="include_portfolio"
                            id="include_portfolio"/>
                        <span>Include Portfolio Links?</span>
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        <input
                            ref={register}
                            className="filled-in"
                            type="checkbox"
                            name="include_social"
                            id="include_social"/>
                        <span>Include Social Media Links?</span>
                    </label>
                </div>
                <br />
                { watchValues && watchValues['include_portfolio'] && <div>
                    <label htmlFor="portfolio_links">Portfolio links</label>
                    <input ref={register} type="text" id="portfolio_links" name="portfolio_links" />
                </div>}
                { watchValues && watchValues['include_social'] && <div>
                    <label htmlFor="social_media_links">Social Media Links</label>
                    <input ref={register} type="text" id="social_media_links" name="social_media_links" />
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
    );
}

export default HookJobForm;
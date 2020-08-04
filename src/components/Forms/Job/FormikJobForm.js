import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormikJobForm(props) {

    return (
        <Formik
            initialValues={{
                'firstname': '',
                'lastname': '',
                'email': '',
                'phone': '',
                'location': '',
                'current_employer': '',
                'current_role': '',
                'role_description': '',
                'experience': 0,
                'skills': '',
                'include_portfolio': false,
                'include_social': false
            }}
            onSubmit={values => console.log(values)}
            validate={values => {
                let error = {};
                if (values.firstname === 'Admin') {
                    error['firstname'] = 'You cannot use this';
                }
                return error;
            }}
        >
            {({values}) => (
                <Form>
                    { console.log('render') }
                    <section>
                        <h4>Personal Information</h4>
                        <br />
                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <Field required type="text" id="firstname" name="firstname" />
                            <ErrorMessage name="firstname" component="span" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <Field required type="text" id="lastname" name="lastname" />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <Field type="email" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <Field type="text" id="phone" name="phone" />
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <Field type="text" id="location" name="location" />
                        </div>
                    </section>
                    <section>
                        <h4>Work Information</h4>
                        <br />
                        <div>
                            <label htmlFor="current_employer">Current Employer</label>
                            <Field type="text" id="current_employer" name="current_employer" />
                        </div>
                        <div>
                            <label htmlFor="current_role">Current Role</label>
                            <Field type="text" id="current_role" name="current_role" />
                        </div>
                        <div>
                            <label htmlFor="role_description">Role Description</label>
                            <Field type="text" id="role_description" name="role_description" />
                        </div>
                        <div>
                            <label htmlFor="experience">Total Years of Experience</label>
                            <Field type="text" id="experience" name="experience" />
                        </div>
                        <div>
                            <label htmlFor="skills">Skills</label>
                            <Field type="text" id="skills" name="skills" />
                        </div>
                    </section>
                    <section>
                        <h4>Social Medial Links</h4>
                        <br />
                        <br />
                        <div>
                            <label>
                                <Field
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
                                <Field
                                    className="filled-in"
                                    type="checkbox"
                                    name="include_social"
                                    id="include_social"/>
                                <span>Include Social Media Links?</span>
                            </label>
                        </div>
                        <br />
                        { values['include_portfolio'] && <div>
                            <label htmlFor="portfolio_links">Portfolio links</label>
                            <Field type="text" id="portfolio_links" name="portfolio_links" />
                        </div>}
                        { values['include_social'] && <div>
                            <label htmlFor="social_media_links">Social Media Links</label>
                            <Field type="text" id="social_media_links" name="social_media_links" />
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
                </Form>
            )}
        </Formik>
    )
}

export default FormikJobForm;
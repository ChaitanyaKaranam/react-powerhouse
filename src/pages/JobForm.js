import React from 'react';
import Form from '../components/Forms/Reusable/Form';

function JobForm(props) {

    let template = {
        title: 'Job Application Form',
        fields: [
            {
                title: 'First Name',
                type: 'text',
                name: 'firstname',
                validationProps: {
                    required: 'First Name is mandatory'
                }
            },
            {
                title: 'Second Name',
                type: 'text',
                name: 'secondname',
                validationProps: {
                    required: 'Second Name is mandatory'
                }
            },
            {
                title: 'Email',
                type: 'email',
                name: 'email'
            },
            {
                title: 'Include Portfolio',
                type: 'checkbox',
                name: 'include_portfolio'
            },
            {
                title: 'Portfolio Link',
                type: 'url',
                name: 'portfolio_link',
                dynamic: {
                    field: 'include_portfolio',
                    value: true
                }
            }
        ]
    }

    return (
        <Form
            template={template}
            watchFields={['firstname', 'include_portfolio']}
            validate={validate}
            onSubmit={onSubmit}
        />
    );
}


function onSubmit(values) {
    console.log(values);
}

function validate(watchValues, errorMethods) {
    let { errors, setError, clearErrors } = errorMethods;

    // Firstname validation
    if(watchValues['firstname'] === 'Admin'){
        if(!errors['firstname']){
            setError('firstname', {
                type: 'manual',
                message: 'You cannot use this first name'
            })
        }
    }else{
        if(errors['firstname'] && errors['firstname']['type'] === 'manual'){
            clearErrors('firstname');
        }
    }
}

export default JobForm;
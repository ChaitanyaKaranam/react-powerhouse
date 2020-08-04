import React from 'react';
import Form from '../components/Forms/Reusable/Form';
import JobTemplate from '../templates/forms/jobTemplate.json';

function ReactForms(props) {
    return (
        <div>
            <Form
                template={JobTemplate}
                watchFields={[
                    'firstname', 'include_portfolio', "include_social"
                ]}
                watchValues={(val, errorMethods) => validate(val, errorMethods)}
                onSubmit={values => console.log(values)}
                onError={errors => console.log(errors)}
            />
            <br/>
        </div>
    );
}

function validate(val, errorMethods){
    if(val['firstname'] === 'Admin'){
        if(!errorMethods.errors['firstname']){
            errorMethods.setError('firstname', {
                type: 'manual',
                message: 'You cannot use this'
            })
        }
    }else{
        if(errorMethods.errors['firstname']){
            errorMethods.clearErrors('firstname')
        }
    }
}

export default ReactForms;
import React from 'react';
import { useForm } from 'react-hook-form';

// Reusable Form Component
function Form({ template, onSubmit, watchFields, validate }) {

    let { register, handleSubmit, errors, watch, setError, clearErrors } = useForm();
    let { title, fields } = template;

    let watchValues = watch(watchFields);
    validate(watchValues, { errors, setError, clearErrors });

    const renderFields = (fields) => {
        return fields.map(field => {
            let { title, type, name, validationProps, dynamic } = field;

            let showField = dynamic ? watchValues[dynamic['field']] === dynamic['value'] : true;

            if(!showField) return null;

            switch (type) {
                case 'text':
                    return (
                        <div key={name}>
                            <label htmlFor={name}>{title}</label>
                            <input type="text" name={name} id={name} ref={register(validationProps)} />
                            {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                        </div>
                    )
                case 'email':
                    return (
                        <div key={name}>
                            <label htmlFor={name}>{title}</label>
                            <input type="email" name={name} id={name} ref={register(validationProps)} />
                            {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                        </div>
                    )
                case 'checkbox':
                    return (
                        <div key={name}>
                            <label>
                                <input type="checkbox" name={name} id={name} ref={register(validationProps)} />
                                <span>{title}</span>
                                {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                            </label>
                        </div>
                    )
                case 'url':
                    return (
                        <div key={name}>
                            <label htmlFor={name}>{title}</label>
                            <input type="url" name={name} id={name} ref={register(validationProps)} />
                            {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                        </div>
                    )
                default:
                    return (
                        <div key={name}>
                            <span className="red-text">Invalid Field</span>
                        </div>
                    )
            }


        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>{title}</h4>
                {renderFields(fields)}
                <br />
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Form;
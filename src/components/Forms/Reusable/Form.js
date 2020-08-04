import React from 'react';
import { useForm } from 'react-hook-form';

function Form({ template, onSubmit, onError, watchFields=[], watchValues }) {

    let { register, handleSubmit, errors, setError, clearErrors, watch, getValues } = useForm();

    if (!template) {
        return <span className="red-text">Need to pass template prop</span>
    }

    let { title, sections } = template;

    let wv = watch(watchFields);

    watchValues(wv, { setError, clearErrors, errors });

    const getField = (field) => {

        let { title, type, name, id, validationProps, dynamic } = field;

        let showField = dynamic ? getValues(dynamic['field']) === dynamic['value'] : true;

        if(!showField) return;

        switch (type) {
            case 'text':
                return (
                    <div key={id}>
                        <label htmlFor={id}>{title}</label>
                        <input ref={register(validationProps)} type="text" name={name} id={id} />
                        {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                    </div>
                )
            case 'tel':
                return (
                    <div key={id}>
                        <label htmlFor={id}>{title}</label>
                        <input ref={register(validationProps)} type="tel" name={name} id={id} />
                        {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                    </div>
                )
            case 'number':
                return (
                    <div key={id}>
                        <label htmlFor={id}>{title}</label>
                        <input ref={register(validationProps)} type="number" name={name} id={id} />
                        {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                    </div>
                )
            case 'email':
                return (
                    <div key={id}>
                        <label htmlFor={id}>{title}</label>
                        <input ref={register(validationProps)} type="email" name={name} id={id} />
                        {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                    </div>
                )
            case 'url':
                return (
                    <div key={id}>
                        <label htmlFor={id}>{title}</label>
                        <input ref={register(validationProps)} type="url" name={name} id={id} />
                        {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                    </div>
                )
            case 'file':
                return (
                    <React.Fragment key={id}>
                        <div>
                            <label htmlFor={id}>{title}</label>
                            <br/>
                            <input ref={register(validationProps)} type="file" name={name} id={id} />
                            {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                        </div>
                        <br/>
                    </React.Fragment>
                )
            case 'checkbox':
                return (
                    <div key={id}>
                        <label>
                            <input className="filled-in" ref={register(validationProps)} type="checkbox" name={name} id={id} />
                            <span>{title}</span>
                        </label>
                        {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                    </div>
                )
            default:
                return <span key="invalid" className="red-text">Invalid field detected</span>
        }
    }

    const renderFields = (fields) => {
        if (fields && Array.isArray(fields)) {
            return fields.map(field => getField(field))
        } else {
            return <span className="red-text">Invalid Sections in template</span>
        }
    }

    const renderSections = (sections) => {
        if (sections && Array.isArray(sections)) {
            return sections.map(({ title, id, fields }) => {
                return (
                    <section key={id}>
                        <h5>{title}</h5>
                        <br />
                        {renderFields(fields)}
                    </section>
                )
            })
        } else {
            return <span className="red-text">Invalid Sections in template</span>
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>{title}</h4>
            <div className="divider"></div>
            <br />
            {renderSections(sections)}
            <br/>
            <button type="submit" className="btn" onClick={() => onError(errors)}>Submit Form</button>
        </form>
    );
}

export default Form;

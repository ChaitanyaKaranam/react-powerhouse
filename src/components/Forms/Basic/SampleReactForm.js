import React from 'react';

function SampleReactForm(props){

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
        <form>
            <input value={formData['firstname']} onChange={e => handleOnChange('firstname', e.target.value)} type="text" placeholder="FirstName" name="firstname" />
            {formData['firstname'] === 'Admin' ? <span>You cannot use this</span> : <></>}

            <input value={formData['lastname']} onChange={e => handleOnChange('lastname', e.target.value)} type="text" placeholder="LastName" name="lastname" />
            <input value={formData['email']} onChange={e => handleOnChange('email', e.target.value)} type="email" placeholder="Email" name="email" />
            <button type="submit" className="btn">Save</button>
        </form>
    )
}

export default SampleReactForm;
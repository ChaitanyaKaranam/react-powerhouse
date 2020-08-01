import React from 'react';

function SampleHTMLForms(props) {

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();

    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log({
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
        });
    }

    console.log('render');

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input ref={firstnameRef} type="text" required={true} placeholder="FirstName" name="firstname" onChange={(e) => {
                    if (e.target.value === 'Admin') {
                        setError(true)
                    } else {
                        setError(false)
                    }
                }} />
                {firstnameRef && firstnameRef.current && firstnameRef.current.value === 'Admin' ?
                    <span>You cannot use this</span> : <></>}

                <input ref={lastnameRef} type="text" placeholder="LastName" name="lastname" />
                <input ref={emailRef} type="email" placeholder="Email" name="email" />
                <button type="submit" className="btn">Save</button>
            </form>
        </div>
    )
}

export default SampleHTMLForms;
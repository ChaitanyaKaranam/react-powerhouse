import React from 'react';
import { HTMLForms, ReactForm, HookForm } from '../components/Forms';

function ReactForms(props) {
    return (
        <div>
            <h1>Forms</h1>
            <div className="divider"></div>
            <HTMLForms />
            <br />
            <div className="divider"></div>
            <ReactForm />
            <br/>
            <div className="divider"></div>
            <HookForm />
            <br/>
        </div>
    );
}

export default ReactForms;
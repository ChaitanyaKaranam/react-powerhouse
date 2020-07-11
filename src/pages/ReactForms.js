import React from 'react';
import { HTMLForms, ReactForm } from '../components/Forms';

function ReactForms(props) {
    return (
        <div>
            <HTMLForms />
            <br />
            <div className="divider"></div>
            <ReactForm />
        </div>
    );
}

export default ReactForms;
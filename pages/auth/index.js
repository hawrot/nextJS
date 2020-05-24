import React from 'react';
import User from '../../components/User';

const authIndexpage = () => (
    <div>
        <h1>The auth index page</h1>
        <User name="Max" age={25}/>
        <style jsx>
            {`
            div {
                border: 1px solid #eee;
                text-align: center;
            }
            `}
        </style>
    </div>
);


export default authIndexpage;

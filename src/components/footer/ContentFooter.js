import React from 'react';

import './ContentFooter.css';

function ContentFooter(props) {
    return (
        <div className={`footer-column footer-column-${props.fd.id}`}>
            <h2>{ props.fd.title }</h2>
            <ul>
                {
                    props.fd.links.map((item) => (
                        <li className={`footer-link ${props.fd.title}-${item.id}`} >
                            <a className={`footer-anchor`} href={item.href}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ContentFooter;
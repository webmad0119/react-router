import React, { Component } from 'react';
import paths from './paths.json'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li><Link to={paths.home.path}>{paths.home.sectionName}</Link></li>
            <li><Link to={paths.about.path}>{paths.about.sectionName}</Link></li>
        </ul>
    )
}

export default Navigation;
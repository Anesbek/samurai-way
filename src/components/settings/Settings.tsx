import React from 'react';
import s from './Settings.module.css'

const Settings = (props: any) => {
    return (
        <div >
          <h1>Settings</h1>
            <div>
                <ul>
                    <li>Foto</li>
                    <li>Apps</li>
                    <li>Video</li>
                    <li>Camera</li>
                    <li>Downlouad</li>
                </ul>
            </div>
        </div>
    );
};

export default Settings;
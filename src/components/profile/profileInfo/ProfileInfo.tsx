import React from 'react';
import s from './ProfileInfo.module.css';
export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.Foto}>
                <img src="https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png" alt=""/>
            </div>
            <div className={s.discriptionBlog}>
                ava+dic
            </div>
        </div>
    );
};


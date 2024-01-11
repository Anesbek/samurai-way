import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./messege/Messege";

const Dialogs = (props: any) => {


    let dialogsElements = props.state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)

        // props.message - undefined
     let messegesElemeents = props.state.messeges.map((m: { message: string; }) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messeges}>
                {messegesElemeents}
            </div>
        </div>
    );
};

export default Dialogs;
import React from 'react';
import './App.css';

import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import Header from "./components/header/Header";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props:any) => {



    return (
        <BrowserRouter>
            <div className="app-wpapper">
                <Header/>
                <Navbar/>
                <div className="app-wpapper-content">
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/musıc' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}

                    <Route path="/dialogs" render={()=><Dialogs state ={props.state.dialogPage} />}/>

                    <Route path="/profile" render={()=><Profile state = {props.state.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

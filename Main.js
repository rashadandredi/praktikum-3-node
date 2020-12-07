import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Pegawai from './Page/Pegawai';

class Main extends Component {
    render = () => {
        return (
            <Switch>
                {/* load component tiap halaman */}
                <Route path="/pegawai" component={Pegawai} />
            </Switch>
        );
    }
}

export default Main;
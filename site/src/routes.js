
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import ChooseDay from './pages/chooseDay'
import ChooseMovie from './pages/chooseMovie'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/sessao" component={ChooseDay} />
                <Route path="/filme/:data" component={ChooseMovie} />
            </Switch>
        </BrowserRouter>
    )
}

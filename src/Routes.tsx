import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PressData from "./PressData";
import PressInitializer from "./PressInitializer/index";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/filldata">
                    <PressData />
                </Route>
                <Route path="/press">
                    <PressInitializer />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
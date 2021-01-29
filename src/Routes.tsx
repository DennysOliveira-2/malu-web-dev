import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/index";
import PressData from "./PressData/index";
import PressInitializer from "./PressInitializer/index";
import Printer from "./Printer/index";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/print">
                    <Printer />
                </Route>
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
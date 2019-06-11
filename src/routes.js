import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Error from "./pages/error";

const Routes = () => (
    <HashRouter>
        {/* <Switch> */}
            {/* Main */}
            <Route exact path="/" component={Main} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/app-react" component={Main} />

            {/* Product */}
            <Route exact path="/app-react/products" component={Product} />
            <Route exact path="/app-react/products/:id" component={Product} />

            {/* Error */}
            <Route component={Error} />
        {/* </Switch> */}
    </HashRouter>
);

export default Routes;

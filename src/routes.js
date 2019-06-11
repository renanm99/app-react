import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Error from "./pages/error";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* Main */}
            {/* <Route exact path="/" component={Main} /> */}
            {/* <Route exact path="/home" component={Main} /> */}
            <Route exact path="/app-react/" component={Main} />
            <Route exact path="/app-react/products" component={Main} />

            {/* Product */}
            <Route exact path="/app-react/products/:id" component={Product} />

            {/* Error */}
            <Route exact path="/app-react/erro" component={Error} />
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

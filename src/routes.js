import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Error from "./pages/error";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/home" component={Main} />
            <Route path="/app-react" component={Main} />
            <Route path="/app-react/products" component={Main} />
            <Route path="/app-react/products/:id" component={Product} />

            {/* default */}
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

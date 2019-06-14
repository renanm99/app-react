import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Erro from "./pages/error";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* Main */}
            <Route exact path="/" component={Main} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/products" component={Main} />

            {/* Product */}
            <Route exact path="/products/:id" component={Product} />

            {/* Error */}
            <Route component={Erro} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

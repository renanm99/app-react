import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Main from "./pages/main";
import Routes from "./routes";

import "./styles.css";

const App = () => (
    <div className="App">
        <Header />
        <Routes />
        <Footer />
    </div>
);

export default App;

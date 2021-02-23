import React, { Component } from "react";

import { Home } from "./pages/Home";

import { Header } from "./cmps/Header";
import { Footer } from "./cmps/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

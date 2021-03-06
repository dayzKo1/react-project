import React, { Component } from "react";
import Header from "@/components/Header.jsx"
import Content from "@/components/Content.jsx"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nowpages: "Popular" };
  }
  pagesClick = (pages) => {
    this.setState({ nowpages: pages });
  };
  render() {
    const { nowpages } = this.state;
    return (
      <div>
        <Header
          pagesClick={this.pagesClick}
          nowpages={nowpages}
        ></Header>
        <Content nowpages={nowpages}></Content>
      </div>
    );
  }
}

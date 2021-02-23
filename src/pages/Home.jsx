import React, { Component } from "react";
import store from "store";

import { ItemsList } from "../cmps/ItemsList";
import { InputItem } from "../cmps/InputItem";

import { itemsService } from "../services/itemsService";
export class Home extends Component {
  state = {
    items: [],
    newItem: "",
    userId: "",
  };

  async componentDidMount() {
    let userId = store.get("userId");
    if (!userId) {
      userId = itemsService.getRandomId();
      store.set("userId", userId);
    }
    this.setState({ userId });
    const items = await itemsService.query(userId);
    this.setState({ items });
    console.log("items", items);
  }

  onAddItem = () => {
    if (this.state.newItem.length === 0) {
      alert("Please write a new task");
      return;
    }
    const newItem = {
      _id: itemsService.getRandomId(),
      todo: this.state.newItem,
    };
    this.setState({ items: [...this.state.items, newItem] }, async () => {
      await itemsService.save(this.state.userId, this.state.items);
      this.setState({ newItem: "" });
    });
  };

  handleChange = (ev) => {
    this.setState({ newItem: ev.target.value });
  };
  render() {
    return (
      <div className="home">
        {this.state.items.length === 0 ? (
          <div>Add new tasks</div>
        ) : (
          <ItemsList items={this.state.items} />
        )}

        <InputItem
          value={this.state.newItem}
          onAddItem={this.onAddItem}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

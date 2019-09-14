import React from "react";
import "./App.css";
import items from "./items.js";
import MenuSummary from "./components/MenuSummary";
import ItemPicker from "./components/ItemPicker";
import MenuPreview from "./components/MenuPreview";

class App extends React.Component {
  state = {
    items: [],
    selectedItemIds: []
  };

  componentWillMount() {
    this.setState({ items });
  }

  selectItem(id) {
    this.setState({ selectedItemIds: [...this.state.selectedItemIds, id] });
  }

  unselectItem(id) {
    const updatedSelectedItemIds = this.state.selectedItemIds.filter(
      itemId => itemId !== id
    );
    this.setState({ selectedItemIds: updatedSelectedItemIds });
  }

  getSelectedAndUnselectedItems() {
    const { items, selectedItemIds } = this.state;

    const selectedItems = selectedItemIds.map(
      itemId => items.filter(item => item.id === itemId)[0]
    );
    const unselectedItems = items.filter(item => !selectedItems.includes(item));

    return { selectedItems, unselectedItems };
  }

  render() {
    const { items, selectedItemIds } = this.state;
    const { selectedItems, unselectedItems } = this.getSelectedAndUnselectedItems();

    return (
      <div className="wrapper">
        <MenuSummary items={selectedItems} />
        <div className="container menu-builder">
          <div className="row">
            <ItemPicker
              selectItem={id => this.selectItem(id)}
              items={unselectedItems}
            />
            <MenuPreview
              unselectItem={id => this.unselectItem(id)}
              items={selectedItems}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import ItemPicker from "./ItemPicker";
import Item from "../Item";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import items from "../../items";

Enzyme.configure({ adapter: new Adapter() });

const mockSelectItem = jest.fn(item => id);

describe("<ItemPicker />", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <ItemPicker items={items.slice(0, 5)} selectItem={mockSelectItem} />
    );
  });

  it("renders 5 Item components given 5 items as props", () => {
    const itemComponents = component.find(Item);
    expect(itemComponents).toHaveLength(5);
  });

  it("all Item components do not have canRemoveProp=false", () => {
    const itemComponents = component.find(Item);
    itemComponents.forEach(item => {
      expect(item.props().canRemoveProp).toBeUndefined;
    });
  });
});

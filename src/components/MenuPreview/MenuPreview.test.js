import React from "react";
import MenuPreview from "./MenuPreview";
import Item from "../Item";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import items from "../../items";

Enzyme.configure({ adapter: new Adapter() });

const mockUnselectItem = jest.fn(item => id);

describe("<MenuPreview />", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <MenuPreview items={items.slice(0, 5)} unselectItem={mockUnselectItem} />
    );
  });

  it("renders 5 Item components given 5 items as props", () => {
    const itemComponents = component.find(Item);
    expect(itemComponents).toHaveLength(5);
  });

  it("all Item components have canRemoveProp=true", () => {
    const itemComponents = component.find(Item);
    itemComponents.forEach(item => {
      expect(item.props().canRemoveProp).toBeTrue;
    });
  });
});

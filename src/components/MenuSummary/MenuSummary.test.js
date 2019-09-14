import React from "react";
import MenuSummary from "../MenuSummary";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import items from "../../items";

Enzyme.configure({ adapter: new Adapter() });

describe("<MenuSummary />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<MenuSummary items={items.slice(0, 2)} />);
  });
  it("renders correct number of items", () => {
    const numItems = component.find(".num-items");
    expect(numItems.text()).toBe("2 items");
  });

  //  dietaries: ["gf", "df", "rsf"],
  // dietaries: ["v", "ve", "df", "gf", "n!"],
  describe("renders correct breakdown of diffent dietaries of all items", () => {
    it("renders the correct number dietary types", () => {
      const dietaries = component.find(".dietary-type");
      expect(dietaries.length).toBe(6);
    });
  });

  it("renders the correct count of all dietary types", () => {
    const dietariesText = component
      .find(".dietary-type")
      .map(dietary => dietary.text().trim());
      
    expect(dietariesText).toContain("1x v");
    expect(dietariesText).toContain("2x gf");
    expect(dietariesText).toContain("2x df");
    expect(dietariesText).toContain("1x rsf");
    expect(dietariesText).toContain("1x ve");
    expect(dietariesText).toContain("1x n!");
  });
});

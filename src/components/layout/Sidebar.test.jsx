import React from "react";
import renderer from "react-test-renderer";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("Has properly rendered", () => {
    const tree = renderer
      .create(<Sidebar toggleSidebar={() => {}} isOpen={true}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
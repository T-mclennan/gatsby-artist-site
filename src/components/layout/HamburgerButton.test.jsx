import React from "react";
import renderer from "react-test-renderer";
import HamburgerButton from "./HamburgerButton";

describe("HamburgerButton", () => {
  it("Has properly rendered", () => {
    const tree = renderer
      .create(<HamburgerButton />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
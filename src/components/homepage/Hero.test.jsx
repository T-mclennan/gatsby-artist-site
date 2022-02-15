import React from "react";
import renderer from "react-test-renderer";
import Hero from "./Hero";

describe("Hero", () => {
  it("Has properly rendered", () => {
    const tree = renderer
      .create(<Hero />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
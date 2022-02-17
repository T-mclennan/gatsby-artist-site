import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react"
import Sidebar from "./Sidebar";
import {checkProps} from '../../test/testUtils';


const defaultProps = {
  toggleSidebar: ()=>{}, 
  isOpen: true,
}

describe("Sidebar", () => {
  it("Has properly rendered", () => {
    const tree = renderer
      .create(<Sidebar {...defaultProps}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it("Shows sidebar when isOpen is true", () => {
    const { getByTestId } = render(<Sidebar toggleSidebar={() => {}} isOpen={true}/>)
    expect(getByTestId("component-sidebar")).toHaveClass('show-sidebar')
  })

  it("Hides sidebar when isOpen is false", () => {
    const { getByTestId } = render(<Sidebar toggleSidebar={() => {}} isOpen={false}/>)
    expect(getByTestId("component-sidebar")).not.toHaveClass('show-sidebar')
  })

  it("Shows appropriate links", () => {
    const { getByTestId } = render(<Sidebar {...defaultProps}/>);
    const parent = getByTestId('component-sidebar');
    const child = getByTestId('side-links');
    expect(parent).toContainElement(child);
  })

  it('Does not throw warning with expected props', () => {
    checkProps(Sidebar, defaultProps);
  })
})

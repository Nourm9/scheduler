import React from "react";
 
import {
  render,
  cleanup,
  waitForElement,
  getByText,
  getByAltText,
  getAllByTestId,
  prettyDOM,
  queryByText,
  getByPlaceholderText,
  fireEvent
} from "@testing-library/react";



import Application from "components/Application";
import axios from "../../__mocks__/axios.js";
afterEach(cleanup);  
jest.mock("axios")
 

describe("Application", () => {

  it("renders without crashing", () => {
  render(<Application />);
  });

it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container } = render(<Application />);

  await waitForElement(() => getByText(container, "Archie Cohen"));

  const appointments = getAllByTestId(container, "appointment");
  const appointment = appointments[0];

  fireEvent.click(getByAltText(appointment, "Add"));

  fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
    target: { value: "Lydia Miller-Jones" }
  });

  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
  fireEvent.click(getByText(appointment, "Save"));

  expect(getByText(appointment, "Saving")).toBeInTheDocument();

  await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

  const day = getAllByTestId(container, "day").find(day =>
    queryByText(day, "Monday")
  );

  expect(getByText(day, "no spots remaining")).toBeInTheDocument();
});
}) 








  
//  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
//    const { container, debug } = render(<Application />);

//    await waitForElement(() => getByText(container, "Archie Cohen"));

//    const appointments = getByText(container, "appointment");
//    const appointment = appointments[0];

//    fireEvent.click(getByAltText(appointment, "Add"));

//    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
//      target: { value: "Lydia Miller-Jones" },
//    });
//    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

//    fireEvent.click(getByText(appointment, "Save"));

//    console.log(prettyDOM(appointment));
//  });
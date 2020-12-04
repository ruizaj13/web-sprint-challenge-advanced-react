import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header= screen.getByTestId('formHeader')
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const fName = screen.getByLabelText(/first name/i);
    const Lname = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);

    userEvent.type(fName, 'Juan');
    userEvent.type(Lname, 'Ruiz');
    userEvent.type(address, '123 Sesame St');
    userEvent.type(city, 'New York City');
    userEvent.type(state, 'New York');
    userEvent.type(zip, '12345');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const successMsg = screen.getByText(/You have ordered some plants/i);
    expect(successMsg).toBeInTheDocument();

    

});


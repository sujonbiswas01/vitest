import {it,expect,test} from "vitest"
import { render, screen } from "@testing-library/react";
import UserForm from "./User";

test("renders user form with correct fields", () => {
    render(<UserForm />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const agreeCheckbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button", { name: "Add User" });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(agreeCheckbox).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
// generate test for About.jsx
import { render, screen } from "@testing-library/react";
import About from "./About.jsx";
import { profile } from "../data/resume.js";

describe("About component", () => {
  test("renders the summary and contact information", () => {
    render(<About />);

    // Check if the summary is rendered
    expect(screen.getByText(profile.summary)).toBeInTheDocument();

    // Check if the email link is rendered
    const emailLink = screen.getByRole("link", { name: `"${profile.email}"` });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${profile.email}`);

    // Check if the LinkedIn link is rendered
    const linkedinLink = screen.getByRole("link", {
      name: `"${profile.linkedin.replace("https://www.", "")}"`,
    });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", profile.linkedin);
  });
});

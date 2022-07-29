import React from "react";
import { render, screen, unmountComponentAtNode} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Loading from "../../../components/loading/loading";

test('Loading - Manage to render Loading', () => {
    render(<Loading />);
    const linkElement = screen.getByText(/Please Wait/);
    expect(linkElement).toBeInTheDocument();
  });
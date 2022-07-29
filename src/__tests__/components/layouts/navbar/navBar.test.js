import React from "react";
import { render, screen, unmountComponentAtNode} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import ResponsiveAppBar from "../../../../components/layouts/navbar/navbar";


test('ResponsiveAppBar - Manage to render App Bar', () => {
    render(<ResponsiveAppBar />);
    const linkElement = screen.getByText(/Movie Finder/);
    expect(linkElement).toBeInTheDocument();
  });
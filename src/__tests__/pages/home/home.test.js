import React from "react";
import { render, screen, unmountComponentAtNode} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../../../redux/store/index";
import Home from "../../../pages/home/home";

test('Home - Manage to render Home', () => {
    render(
      <Provider store = {store}>
        <Home />
      </Provider>
    );
    const linkElement = screen.getByText(/Find/);
    expect(linkElement).toBeInTheDocument();
  });
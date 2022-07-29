import React from "react";
import { render, screen, unmountComponentAtNode} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store/index";

import SearchBar from "../../../../components/form/searchBar/searchBar";

test('SearchBar - Manage to render search bar', () => {
    render(
      <Provider store = {store}>
        <SearchBar />
      </Provider>
    );
    const linkElement = screen.getByText(/Find/);
    expect(linkElement).toBeInTheDocument();
  });
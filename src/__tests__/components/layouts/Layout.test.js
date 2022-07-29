import React from "react";
import { render, screen, unmountComponentAtNode} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Layout from "../../../components/layouts/Layout";

test('Layout - Manage to render its child props', () => {
    render(
      <Layout>
        <div>
          <p >Page Wrapper Test</p>
        </div>
      </Layout>
    );
    const linkElement = screen.getByText(/Page Wrapper Test/);
    expect(linkElement).toBeInTheDocument();
  });
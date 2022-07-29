import React from "react";
import { render, screen, unmountComponentAtNode} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import PageWrapper from "../../../../components/layouts/pageWrapper/pageWrapper";

test('Page Wrapper - able to render child component within page wrapper', () => {
    render(
      <PageWrapper>
        <main>
          <div>
            <p >Page Wrapper Test</p>
          </div>
        </main>
      </PageWrapper>
      );
    const linkElement = screen.getByText(/Page Wrapper Test/);
    expect(linkElement).toBeInTheDocument();
  });
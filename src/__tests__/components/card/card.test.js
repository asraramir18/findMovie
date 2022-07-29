import React from "react";
import { render, screen, fireEvent} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Card from "../../../components/card/card";

const testData = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

test('Card -- Test if manage to render', () => {
    render(<Card data={testData} />);
    const Title = screen.getByTestId('cardTitle');
    const Year = screen.getByTestId('cardSubTitle');
    const poster = screen.getByRole('img');
    expect(Title).toHaveTextContent(testData.Title);;
    expect(Year).toHaveTextContent(testData.Year);;
    expect(poster).toHaveAttribute('src', testData.Poster);
    expect(poster).toHaveAttribute('alt', 'poster');
});

import React from 'react';
import App from './App';
import { render, userEvent, findByText, fireEvent } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

const mockData = {
    image: {original: 'original'},
    name: 'test',
    summary: 'summary',
    _embedded: {
        episodes: [
            {
                id: '1',
                image: { medium: 'medium image'},
                name: 'name',
                season: 3,
                number: 2,
                summary: 'summary',
                runtime: 20,
            },
        ],
    },
};

test("Renders app and tests components", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    const {rerender, getByTestId, getAllByTestId} = render(<App/>);

    const moviePoster = getAllByTestId(/moviePoster/i);
    expect(moviePoster).toHaveLength(1);

    const dropdown = getByTestId(/dropdown/i);
    fireEvent.click(dropdown);

});
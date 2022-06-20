import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CharContext from '../../contexts/CharContext.ts';
import ShowResult from '.';
import mock from './mock.json';

describe('ShowResult', () => {
    test('Render list', () => {
        const results = mock;
        const loading = false;
        const error = false;
        const postFavourites = () => { };
        const component = render(
            <CharContext.Provider value={{ results, loading, error, postFavourites }}>
                <ShowResult />
            </CharContext.Provider>
        );
        const listItems = component.getAllByRole('listitem');
        expect(listItems.length).toBe(3);
    });
});
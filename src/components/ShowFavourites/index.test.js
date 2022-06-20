import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ShowFavourites from '.';
import mock from './mock.json';

describe('ShowFavourites', () => {

    test('Render status', () => {
        const component = render(<ShowFavourites favourites={mock} />);

        const alive = component.getByText('Alive');
        expect(alive).toBeInTheDocument();
    });

    test('Amount of favourites', () => {
        const component = render(<ShowFavourites favourites={mock} />);

        const listItems = component.getAllByRole('listitem');

        expect(listItems.length).toBe(3);
    });
});
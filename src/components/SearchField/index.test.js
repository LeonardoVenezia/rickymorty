import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchField from '.';

const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => mockedNavigator
}));


describe('SearchField', () => {

    test('Render status', async () => {
        const component = render(
            <MemoryRouter>
                <SearchField />
            </MemoryRouter>
        );
        const input = component.getByPlaceholderText('Search by name');
        fireEvent.change(input, { target: { value: 'mock' } })
        const search = component.getByDisplayValue('search');
        fireEvent.click(search);
        expect(mockedNavigator).toHaveBeenCalled();
    });
});

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './';

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        const count = screen.getByRole('heading');
        expect(count).toBeInTheDocument();
        const incrementButton = screen.getByRole('button', {
            name: "Increment",
        });
        expect(incrementButton).toBeInTheDocument();
    });

    test('renders a count of 0', () => {
        render(<Counter />);
        const count = screen.getByRole('heading');
        expect(count).toHaveTextContent('0');
    });
    
    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name: "Increment",
        });
        await user.click(incrementButton);
        const count = screen.getByRole('heading');
        expect(count).toHaveTextContent('1');
    }); 

    test('render a count of 10 clicking the set button', async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        await user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole('button', {
            name: 'Set',
        });
        await user.click(setButton);
        const count = screen.getByRole('heading');
        expect(count).toHaveTextContent('10');
    });

    test('elements are focused in the right order', async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', {
            name: 'Set',
        });
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });

        await user.tab();
        expect(incrementButton).toHaveFocus();
        await user.tab();
        expect(amountInput).toHaveFocus();
        await user.tab();
        expect(setButton).toHaveFocus();
    });
});
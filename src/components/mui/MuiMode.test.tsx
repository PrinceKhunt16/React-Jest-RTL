import { render, screen } from '@testing-library/react';
import AppProviders from '../../providers/AppProviders';
import MuiMode from './';

describe('MuiMode', () => {
    test('renders text correctly', () => {
        render(<MuiMode />, {
            wrapper: AppProviders,
        });
        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent('dark mode');
    });
});
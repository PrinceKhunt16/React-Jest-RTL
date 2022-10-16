import { render, screen } from '@testing-library/react';
import Hello from './';

describe.skip('Hello', () => {
    test.skip('render hello', () => {
        render(<Hello />);
        const text = screen.getByText(/hello/i);
        expect(text).toBeInTheDocument();
    });
    
    test.only('render props name', () => {
        render(<Hello name='john' />);
        const props = screen.getByText(/hello john/i);
        expect(props).toBeInTheDocument();
    });
});
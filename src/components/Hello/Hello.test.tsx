import { render, screen } from '@testing-library/react';
import Hello from './';

describe.skip('Hello', () => {
    it('render hello', () => {
        render(<Hello />);
        const text = screen.getByText(/hello/i);
        expect(text).toBeInTheDocument();
    });
    
    it('render props name', () => {
        render(<Hello name='john' />);
        const props = screen.getByText(/hello john/i);
        expect(props).toBeInTheDocument();
    });
});
import { render, screen } from '@testing-library/react';
import Hello from '.';

test('render hello', () => {
    render(<Hello />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
});

test('render props name', () => {
    render(<Hello name='john' />);
    const textElement = screen.getByText(/hello john/i);
    expect(textElement).toBeInTheDocument();
});
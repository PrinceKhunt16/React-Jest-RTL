import { render, screen } from '@testing-library/react';
import App from './App';

test('render app', () => {
    render(<App />);
    const textElement = screen.getByText(/app/i);
    expect(textElement).toBeInTheDocument();
});
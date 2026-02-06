// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smartTitan title', () => {
    render(<App />);
    const titleElement = screen.getByText(/smartTitan/i);
    expect(titleElement).toBeInTheDocument();
});

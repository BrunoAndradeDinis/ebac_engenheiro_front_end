import React from 'react';
import { render, screen } from '@testing-library/react';
import SeuComponente from '../index';

test('hello world!', () => {
	render(<SeuComponente />);
	const element = screen.getByText(/hello world/i);
	expect(element).toBeInTheDocument();
});
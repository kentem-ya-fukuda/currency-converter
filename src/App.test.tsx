// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from './App';

// test('renders currency converter', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/currency converter/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('converts currency', async () => {
//   render(<App />);
//   const amountInput = screen.getByRole('spinbutton');
//   const fromSelect = screen.getByLabelText('From Currency');
//   const toSelect = screen.getByLabelText('To Currency');
//   const convertButton = screen.getByRole('button', { name: /convert/i });

//   fireEvent.change(amountInput, { target: { value: '100' } });
//   fireEvent.change(fromSelect, { target: { value: 'USD' } });
//   fireEvent.change(toSelect, { target: { value: 'EUR' } });
//   fireEvent.click(convertButton);

//   const result = await screen.findByText(/100 USD =/i);
//   expect(result).toBeInTheDocument();
// });

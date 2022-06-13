import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should render the same text passed into title prop', () => {
    render(<Header title={"My header"} />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});


//it will fail if we have more than one h element, we should give the input text parameter to specify it
// it('Should render the h element', () => {
//     render(<Header title={"My header"}/>);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
//   });

it('Should render the h element', () => {
    render(<Header title={"My header"} />);
    const headingElement = screen.getByRole("heading", { name: 'My header' });
    expect(headingElement).toBeInTheDocument();
});

it('Should render the same text passed into title prop async', async () => {
    render(<Header title={"My header"} />);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

it('Should not render the same text passed into title prop async', async () => {
    render(<Header title={"My header"} />);
    const headingElement =  screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});
it('Should get all heading elements', async () => {
    render(<Header title={"My header"} />);
    const headingElement =  screen.getAllByRole("heading");
    expect(headingElement.length).toBe(1);
});
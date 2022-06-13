import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}
const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    });
}
describe("Integration tests", () => {

    it('Should render a div element with value written in input', async () => {
        render(<MockTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", { name: /Add/i })
        fireEvent.change(inputElement, { target: { value: 'blah blah' } })
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/blah blah/i)
        expect(divElement).toBeInTheDocument();
    });
    it('Should return the number of created tasks', async () => {
        render(<MockTodo />);
        addTask(['BLAH BLAH', 'BLAH2 BLAH2'])
        const divElement = screen.getAllByTestId('test-container')
        expect(divElement.length).toBe(2);
    });
    it('Task should not have completed class when initially rendered ', async () => {
        render(<MockTodo />);
        addTask(['BLAH BLAH', 'BLAH2 BLAH2'])
        const divElement = screen.getByText(/BLAH BLAH/i)
        expect(divElement).not.toHaveClass('todo-item-active');
    });
    it('Task should have completed class when initially rendered ', async () => {
        render(<MockTodo />);
        addTask(['BLAH BLAH'])
        const divElement = screen.getByText(/BLAH BLAH/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active');
    });
})


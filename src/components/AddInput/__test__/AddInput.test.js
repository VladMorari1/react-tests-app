import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';



describe('Add input', () => {

    it('Should render input element ', async () => {
        render(<AddInput
            todos={[]}
            setTodos={() => { }} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('Should be able to type into input ', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={() => { }} />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: 'OF of of' } })
        expect(inputElement.value).toBe('OF of of');
    });
    it('Should have empty input when add button is clicked ', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={() => { }} />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button', { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: 'OF of of' } })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('');
    });
})
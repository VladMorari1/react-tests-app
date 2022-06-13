import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
    return <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
}
describe("jest Hooks", () => {
    beforeEach(() => {
        console.log("Running before each test")
    })

    beforeAll(() => {
        console.log("Running before all test")
    })
    it('Should get an async element', async () => {
        render(<MockFollowersList />)
        const followerDivElement = await screen.findByTestId('follower-item-0')
        expect(followerDivElement).toBeInTheDocument()
    });
})


it('Should get an async element', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')
    expect(followerDivElement).toBeInTheDocument()
});

it('Should get 5 async items', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findAllByTestId(/follower-item/)
    expect(followerDivElement.length).toBe(5)
});
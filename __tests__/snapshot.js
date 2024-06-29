import { render } from '@testing-library/react'
import TestComponent from "@/components/test/TestComponent";

it('renders homepage unchanged', () => {
    const { container } = render(<TestComponent />)
    expect(container).toMatchSnapshot()
})
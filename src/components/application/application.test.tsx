import { render, screen } from '@testing-library/react';
import Application from "./";

/*

Priority order for queries

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

*/

describe('Application', () => {
    it('render correctly', () => {
        render(<Application />);
        
        const pageHeading = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const paragraphHeading = screen.getByText('Fill the form carefully');
        expect(paragraphHeading).toBeInTheDocument();

        const image = screen.getByAltText('person');
        expect(image).toBeInTheDocument();

        const close = screen.getByTitle('close');
        expect(close).toBeInTheDocument();

        const custom = screen.getByTestId('custom-element');
        expect(custom).toBeInTheDocument();

        const name = screen.getByRole('textbox', {
            name: 'Name',
        });
        expect(name).toBeInTheDocument();

        const nameLabel = screen.getByLabelText('Name', {
            selector: 'Input',
        });
        expect(nameLabel).toBeInTheDocument();

        const namePlaceholder = screen.getByPlaceholderText('Name');
        expect(namePlaceholder).toBeInTheDocument();

        const nameValue = screen.getByDisplayValue('john');
        expect(nameValue).toBeInTheDocument();

        const bio = screen.getByRole('textbox', {
            name: 'Bio',
        });
        expect(bio).toBeInTheDocument();

        const jobLocation = screen.getByRole('combobox');
        expect(jobLocation).toBeInTheDocument();

        const terms = screen.getByRole('checkbox');
        expect(terms).toBeInTheDocument();

        const termsLabel = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsLabel).toBeInTheDocument();

        const submit = screen.getByRole('button');
        expect(submit).toBeInTheDocument();
    });
});
import { render, screen, logRoles } from '@testing-library/react';
import Skills from './';

describe('Skills', () => {
    const skills = ['html', 'css', 'javascript'];

    test('renders correctly', () => {
        render(<Skills skills={skills}/>);
        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();
    });

    test('renders a list of skills', () => {
        render(<Skills skills={skills}/>);
        const listItem = screen.getAllByRole('listitem');
        expect(listItem).toHaveLength(skills.length);
    });

    test('renders login button',() => {
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButton).toBeInTheDocument();
    });

    // when the situation changes in the future that time we would use query.
    test('start learning button is not rendered',() => {
        render(<Skills skills={skills}/>);
        const startLearningButton = screen.queryByRole('button', {
            name: 'Start Learning'
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });

    // when asynchronous conditions happen that time we would use find.  
    test('start learning button is eventually displayed', async () => {
        render(<Skills skills={skills}/>);
        // const view = render(<Skills skills={skills}/>);
        // logRoles(view.container);
        // screen.debug();
        const startLearningButton = await screen.findByRole('button', {
            name: 'Start Learning'
        },{
            timeout: 2000
        });
        expect(startLearningButton).toBeInTheDocument();
        // screen.debug();
    });
});
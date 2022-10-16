import "./App.css";
import Application from "./components/application";
import Counter from "./components/counter";
import Skills from "./components/skills";
import MuiMode from "./components/mui";
import AppProviders from "./providers/AppProviders";

const App = () => {
    return (
        <AppProviders>
            <div>
                {/* <Application /> */}
                {/* <Skills skills={['html', 'css', 'javascript']} /> */}
                {/* <Counter /> */}
                <MuiMode />
            </div>
        </AppProviders>
    )
}

export default App;
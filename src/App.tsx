import "./App.css";
import Application from "./components/application";
import Counter from "./components/counter";
import Skills from "./components/skills";
import MuiMode from "./components/mui";
import AppProviders from "./providers/AppProviders";
import CounterTwo from "./components/counterTwo";

const App = () => {
    return (
        <AppProviders>
            <div>
                {/* <Application /> */}
                {/* <Skills skills={['html', 'css', 'javascript']} /> */}
                {/* <Counter /> */}
                {/* <MuiMode /> */}
                <CounterTwo count={1} />
            </div>
        </AppProviders>
    )
}

export default App;
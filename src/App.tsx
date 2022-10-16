import "./App.css";
import Application from "./components/application";
import Counter from "./components/counter";
import Skills from "./components/skills";

const App = () => {
    return ( 
        <div>
            <Application />
            <Skills skills={['html', 'css', 'javascript']} />
            <Counter />
        </div>
    )
}

export default App;
import "./App.css";
import Application from "./components/application";
import Skills from "./components/skills";

const App = () => {
    return ( 
        <div>
            <Application />
            <Skills skills={['html', 'css', 'javascript']} />
        </div>
    )
}

export default App;
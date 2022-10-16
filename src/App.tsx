import "./App.css";
import Skills from "./components/skills";

const App = () => {
    return (
        <div>
            <Skills skills={['html', 'css', 'javascript']} />
        </div>
    )
}

export default App;
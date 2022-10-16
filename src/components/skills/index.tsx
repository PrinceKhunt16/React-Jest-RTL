import { useState, useEffect } from "react";

type SkillsProps = { 
    skills: string[],
}

const Skills = (props: SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 1500);
    }, []);
    
    return (
        <>
            <ul>
                {props.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            {isLoggedIn ? (
                <button>Start Learning</button>
            ) : (
                <button 
                    onClick={() => {
                        setIsLoggedIn(true);
                    }}
                >Login</button>
            )}
        </>
    );
};

export default Skills;
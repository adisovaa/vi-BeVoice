import React, {useEffect, useState} from "react";


const MainPage = () => {
    const happyPress = useKeyPress("h");
    const sadPress = useKeyPress("s");

    return (
        <div>
            <p> {happyPress && "ok"}Привет</p>
            <h1>{sadPress && "ok"}Что</h1>
        </div>
    )
}

function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);
    return keyPressed;
}

export default MainPage
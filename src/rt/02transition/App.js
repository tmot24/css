import styles from "./App.module.css";
import cn from "classnames";
import {useState} from "react";

export const App = () => {
    const [animated, setAnimated] = useState(false);

    return (
        <div style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={styles.parent}>
                <div onClick={() => setAnimated(!animated)}
                     className={cn(styles.smile, {
                         [styles.isAnimated]: animated
                     })}/>
            </div>
        </div>
    );
};
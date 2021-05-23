import styles from "./App.module.css"
import cn from "classnames";
import {useState} from "react";

export const App = () => {
    const [animated, setAnimated] = useState(false)

    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <button className={styles.button} onClick={() => setAnimated(!animated)}>toggle</button>
            <div className={cn(styles.smile, {
                [styles.isAnimated]: animated
            })}/>
        </div>
    )
}
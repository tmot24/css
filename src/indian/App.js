import styles from "./App.module.css";
import {useRef} from "react";

const array = [...Array(20).keys()];

export const App = () => {
    const cursor = useRef(null);

    window.onmousemove = (e) => {
        cursor.current.style.left = e.clientX + "px";
        cursor.current.style.top = e.clientY + "px";
    };

    return (
        <>
            <div className={styles.container}>
                {
                    array.map((elem, index) =>
                        <div key={index} className={styles.row}>
                            {
                                array.map((elem, index) =>
                                    <div key={index} className={styles.hexagon}/>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div ref={cursor}/>
        </>
    );
};
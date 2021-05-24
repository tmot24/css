import styles from "./App.module.css"

const array = [...Array(15).keys()];

export const App = () => {
    return (
        <div className={styles.root}>
            <div className={styles.loader}>
                {
                    array.map((elem, index) =>
                        <div key={index} className={styles.span}/>
                    )
                }
            </div>
        </div>
    )
}
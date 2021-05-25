import styles from "./App.module.css";

const backArray = [...Array(15).keys()];
const cubeArray = [...Array(3).keys()];

export const App = () => {
    return (
        <>
            <div className={styles.root}>
                <div className={styles.container}>
                    {
                        backArray.map((el, index) =>
                            <div key={index} className={styles.row}>
                                {
                                    backArray.map((el, index) => <div key={index} className={styles.cube}>
                                            {
                                                cubeArray.map((el, index) => <span key={index}/>)
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};
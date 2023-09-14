import styles from './EqualSign.module.css'

const EqualSign = ({ equalsign, active, active2, setActive, setActive2 }) => {
    const handleCalculate = () => {
        setActive2(active2 = eval(active))
    }

    return (
        <p className={styles.sign} onClick={() => handleCalculate()}>{ equalsign}</p>
    )
}

export default EqualSign;
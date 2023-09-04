import styles from './EqualSign.module.css'

const EqualSign = ({ equalsign, active, active2, setActive }) => {
    const handleCalculate = () => {
        setActive(eval(`${active2}${active}`))
    }

    return (
        <p className={styles.sign} onClick={() => handleCalculate(equalsign)}>{ equalsign}</p>
    )
}

export default EqualSign;
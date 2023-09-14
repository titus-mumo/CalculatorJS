import styles from './Sign.module.css'

const Decimal = ({ decimal, active, setActive }) => {
    const zero = 0
    const handleClickDecimal = (decimal) => {
        setActive(active = active.concat(decimal))
    }
    return (
        <p className={styles.sign} onClick={() => handleClickDecimal(decimal)}>{ decimal }</p>
    )
}

export default Decimal;
     
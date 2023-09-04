import styles from './Sign.module.css'

const Decimal = ({ decimal, active, setActive }) => {
    const zero = 0
    const handleClickDecimal = (decimal) => {
        console.log(decimal)
        if (active) {
            if (!active.includes('.')) {
                setActive(active.concat(decimal))
            }
        } else {
            setActive(zero.toString().concat(decimal))
        }
    }

    return (
        <p className={styles.sign} onClick={() => handleClickDecimal(decimal)}>{ decimal }</p>
    )
}

export default Decimal;
     
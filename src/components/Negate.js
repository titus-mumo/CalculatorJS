import styles from './Sign.module.css'

const Negate = ({ negate, active, setActive, setActive2 }) => {
    const handleNegate = (negate) => {
        setActive(active = negate.concat(active))
        setActive2 = (eval(active))
    }

    return (
        <p className={styles.sign} onClick={() => handleNegate(negate)}>+/-</p>
    )
}

export default Negate;
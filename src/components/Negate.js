import styles from './Sign.module.css'

const Negate = ({ negate, active, setActive }) => {
    const handleNegate = (negate) => {
        console.log(negate)
        handleWorking()
    }
    const handleWorking = () => {
        setActive( active = `negate(${active? active: 0})`)
    }

    return (
        <p className={styles.sign} onClick={() => handleNegate(negate)}>+/-</p>
    )
}

export default Negate;
import styles from './Number.module.css'

const Number = ({ number, active, setActive, active2, setActive2, signExist, setSignExist }) =>{
    const handleClickNumber = (number) => {
        console.log(number)
        setActive(active = active.concat(number))
        setActive2(eval(active))
    }

    return (
        <p className={styles.number} onClick={() => handleClickNumber(number)} value={ number }>{ number }</p>
    )
}

export default Number;
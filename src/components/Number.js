import styles from './Number.module.css'

const Number = ({ number, active, setActive, active2, setActive2, signExist, setSignExist }) => {
    const signs = ['+', '-', '*', '/']
    const endsWithOperator = (inputString, operatorsArray) => {
        for (const operator of operatorsArray) {
            if (inputString.endsWith(operator)) {
                return true;
            }
        }
        return false;
    }
    const handleClickNumber = (number) => {
        if (active2 && endsWithOperator(active2, signs)) {
            setSignExist(signExist? signExist.concat(number.toString()): number.toString())
            setActive(signExist)    
        } else {
            setActive(active? active.concat(number.toString()): number.toString())
        }
    }

    return (
        <p className={styles.number} onClick={() => handleClickNumber(number)} value={ number }>{ number }</p>
    )
}

export default Number;
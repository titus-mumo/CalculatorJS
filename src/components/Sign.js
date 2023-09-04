import styles from './Sign.module.css'

const Sign = ({active, sign, setActive, active2, setActive2, signExist, setSignExist }) => {
    const signs = ['+', '-', '*', '/']
    const zero = 0;

    const endsWithOperator = (inputString, operatorsArray) => {
        for (const operator of operatorsArray) {
            if (inputString.endsWith(operator)) {
                return true;
            }
        }
        return false;
    }

    const handleClickSign = (sign) => {
        // if (active) {
        //     console.log(endsWithOperator(active, signs))
        //     if (endsWithOperator(active, signs)) {
        //         setActive(active = active.slice(0, -1))
        //         setActive(active.concat(sign))
        //     } else {
        //         setActive(active.concat(sign))
        //     }
        // }

        if (active2 && active && endsWithOperator(active2, signs)) {
            console.log('hello')
            setActive2(eval(`${active2.slice(0, -1)}${active2[active2.length - 1]}${active}`))
            setActive2(active2 = active2.concat(sign))
        } else if (active) {
            setActive(active.concat(sign))
        } else if (!active) {
            setActive(zero.toString().concat(sign))
        }
    }

    return (
        <p className={styles.sign} onClick={() =>handleClickSign(sign)}>{ sign}</p>
    )
}

export default Sign;

import styles from './Sign.module.css'

const Sign = ({active, sign, setActive, active2, setActive2, signExist, setSignExist }) => {

    const handleClickSign = (sign) => {
        setActive(active.concat(sign))
    }

    return (
        <p className={styles.sign} onClick={() =>handleClickSign(sign)}>{ sign}</p>
    )
}

export default Sign;

import { useState } from "react";
import Negate from "./Negate";
import Number from "./Number";
import Sign from "./Sign";
import Decimal from "./Decimal";
import Working from "./Working";
import EqualSign from "./EqualSign";
import styles from "./Main.module.css"
import Del from "./Del";

const Main = () => {

    // you can convert this into an array then iterate while rendering'
    // let buttons = [... buttons]

    let one = '1';
    let two = '2';
    let three = '3';
    let four = '4';
    let five = '5';
    let six = '6';
    let seven = '7';
    let eight = '8';
    let nine = '9';  
    let zero = '0';
    let multiply = '*';
    let divide = '/';
    let add = '+';
    let subtract = '-';
    let decimal = '.';
    let equalsign = '=';
    let negate = '-'
    const del = 'Del'

    const [active, setActive] = useState('')
    const [active2, setActive2] = useState(0)
    const [signExist, setSignExist] = useState(0)
    

    return (
        <section>
            <div>
                <Working active={active} setActive={setActive} active2={active2} setActive2={setActive2} signExist={ signExist} setSignExist={setSignExist} />
            </div>
            <div className={styles.gthree}>
                <Del del={del} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2}  signExist={ signExist} setSignExist={setSignExist}/>
            </div>
            <div className={styles.gthree}>
                <Sign sign={divide} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2}  signExist={ signExist} setSignExist={setSignExist}/>
            </div>
            <div className={styles.gthree}>
                < Number number={seven} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2}  signExist={ signExist} setSignExist={setSignExist}/>
                < Number number={ eight } active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2}  signExist={ signExist} setSignExist={setSignExist}/>
                < Number number={nine} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2}  signExist={ signExist} setSignExist={setSignExist}/>
                <Sign sign={multiply} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2}  signExist={ signExist} setSignExist={setSignExist}/>
            </div>
            <div className={styles.gthree}>
                < Number number={ four } active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                < Number number={ five } active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                < Number number={six} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                <Sign sign={subtract} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
            </div>
            <div className={styles.gthree}>
                < Number number={ one } active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                < Number number={ two } active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                < Number number={three} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                <Sign sign={add} active={active} setActive = {setActive}/>
            </div>
            <div className={styles.gthree}>
                < Negate negate={negate} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                < Number number={zero} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                <Decimal decimal={decimal} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
                <EqualSign equalsign={equalsign} active={active} setActive = {setActive} active2={active2} setActive2 = {setActive2} signExist={ signExist} setSignExist={setSignExist}/>
            </div>    
        </section>

    )
}

export default Main;
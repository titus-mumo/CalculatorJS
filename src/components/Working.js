const Working = ({ active, active2, setActive, setActive2 }) => {
    const signs = ['+', '-', '*', '/']
    // const endsWithOperator = (inputString, operatorsArray) => {
    //     for (const operator of operatorsArray) {
    //         if (inputString.endsWith(operator)) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // if (active) {
    //     if (endsWithOperator(active, signs)) {
    //         setActive2(active)
    //         setActive(active = active.slice(0, -1))
    //     }
    // }

    return (
        <div style={{color:'white'}} className="working">
            <div className="displayanswer">
                <p>{active2? active2:active}</p>
            </div>
            <div>
                <p className="displaywork" style={{color:'white'}}>{ active}</p>
            </div> 
        </div>
    )
}

export default Working;
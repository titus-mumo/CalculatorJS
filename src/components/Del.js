import React from 'react'
import styles from './Sign.module.css'

const Del = ({ del, setActive, setActive2, active, active2 }) => {
    const handleDel = () => {
        setActive(active = active.slice(0, -1))
        const signs = ['*', '/', '-', '+'];
        let lastChar = active.slice(-1);
        console.log(lastChar)
        for (let index = 0; index < signs.length; index++){
            if (lastChar !== signs[index]) {
                setActive2(eval(active))
            } else {
                setActive2(active2)
            }
        }   
    }
  return (
      <div>
          <p className={styles.sign} onClick={() => handleDel()}>{ del }</p>
    </div>
  )
}

export default Del;



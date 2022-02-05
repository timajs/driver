import React from 'react';
import css from './useful.module.css';

function Useful(){
    return(
        <div className={css.useful}>
            <p className={css.title}>Полезное</p>
            <div className={css.images}>
                <img src="/img/usefulOne.svg" alt="" />
                <img src="/img/usefulTwo.svg" alt="" />
                <img src="/img/usefulThree.svg" alt="" />
            </div>
        </div>
    );
}
 
export default Useful;
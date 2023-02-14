import React from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'
const Header = () => {
    return (
        <div className={'paddings ${css.wrapper}'}>
            
            <div className={'flexCenter innerWidth ${css.container}'}>
                <div className={css.name}>
                    Fabio
                </div>

                <ul className={'flexCenter ${css.menu}'}>
                    <li><a href="">Education</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Technical Skills</a></li>
                    <li>
                    <p>+1 514 318 0820</p>
                    <BiPhoneCall size={"40px"}/>
                    </li>
                </ul>
            </div>

        </div>
    )
}


export default Header

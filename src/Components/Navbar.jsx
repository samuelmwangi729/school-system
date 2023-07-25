import React, { Component } from 'react'
import styles from '../Styles/Navbar.styles.module.css'
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
             componentName:'Navigation Bar'
        }
    }

    render= ()=> {
        return (
            <>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    Udemy Free
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder='Search the Courses Here ...' className={styles.srchInput} />
                    <a href=""> 
                        <button className={styles.srchBtn}>
                            <span>Search</span>
                        </button>
                    </a>
                </div>
                <div className={styles.navigationLinks}>
                    <ul className={styles.navlinks}>
                        <li className={styles.navItem}><a href="#">Home</a></li>
                        <li className={styles.navItem}><a href="#">About Us</a></li>
                        <li className={styles.navItem}><a href="#">Teams</a></li>
                        <li className={styles.navItem}><a href="#">Services</a></li>
                        <li className={styles.navItem}><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar

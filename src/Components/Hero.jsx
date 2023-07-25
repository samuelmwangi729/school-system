import React, { Component } from 'react'
import styles from '../Styles/Hero.styles.module.css'
class Hero extends Component {
  render() {
    return (
      <>
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.cta}>
                    <h1>Vast Array  of Courses</h1>
                    <span>
                        Study at your own pace, on your schedule.<br/>
                        Access Courses from anywhere and on any device<br/>
                        No boundaries to hold you back.<br/>
                    </span>
                    <div className={styles.ctaButtons}>
                        <button>Explore Courses</button>
                        <button>Join Community</button>
                    </div>
                </div>
                <div className={styles.Accounts}>
                    Login Register Here
                </div>

            </div>
        </div>
      </>
    )
  }
}
export default Hero
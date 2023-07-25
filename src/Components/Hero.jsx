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
                    <div className={styles.heroSpan}>
                      <span>
                          Study at your own pace, on your schedule.<br/>
                          Access Courses from anywhere and on any device<br/>
                          No boundaries to hold you back.<br/>
                      </span>
                    </div>
                    <div className={styles.ctaButtons}>
                        <button className={styles.ctaButtons1}>
                            <span>Explore Courses</span>
                        </button>
                        <button className={styles.ctaButtons2}>
                            <span>
                              Join Community
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
export default Hero
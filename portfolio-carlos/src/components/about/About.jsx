import React from 'react'
import photo from '../../assets/foto intranet.jpg'

const About = () => {
  return (
    <section id="about">
        <h5>Get to Kwow</h5>
        <h2>About  Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    img
                </div>
            </div>
            <div className="about__content">
                <img src={photo} alt="my photo" />
            </div>
        </div>
    </section>
  )
}

export default About
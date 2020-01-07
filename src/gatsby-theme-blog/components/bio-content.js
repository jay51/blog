import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hello, and welcome to my modest corner of the web!
    I'm a passionate Developer who loves building things and breaking even more things.
    This blog began in 2018 as a personal online journal;
    in the past few years it became mostly an outlet for technical, programming-related posts.

    <br />
    For questions and comments, you could find me on github
    <br />
    <Styled.a href="https://github.com/jay51">github &nbsp;&nbsp;</Styled.a>
    <Styled.a href="https://www.linkedin.com/in/jamal-al-119a14152/"> Linkedin</Styled.a>
  </Fragment>
)

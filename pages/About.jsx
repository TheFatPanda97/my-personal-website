/* eslint-disable react/no-unescaped-entities */
import Button from '../components/Button';

import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Student, Engineer, Dreamer</h1>
      <p>
        Hi there, my name is Yingxiaoyang Hu, but you can call me Shawn.
        <br />
        <br />
        Who Am I?
        <br />
        <br />
        Other than my name, I've been called many other things, a dreamer, an ambitious person, and
        most recently, an software engineer. However, my proudest title would have to be a problem
        solver. As a computer science student at the University of Toronto, this could not have been
        a better compliment.
        <br />
        <br />
        The purpose of this website is to provide an overview of who I am and what I have done. I
        will also be updating it with new projects. Please feel free to explore and make any
        suggestions you have.
        <br />
        <br />
        Hopefully, my work will intrigue you.
      </p>
      <Button path="Projects">Projects</Button>
    </div>
  );
};

export default About;

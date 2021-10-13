import Card from '../components/Card';
import styles from '../styles/projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'VIAplanner',
      imgSrc: '/viaplanner.png',
      content:
        'VIAplanner is a tool designed by students at the University of Toronto to help the community. We desire to enhance the course selection process.',
    },
    {
      title: 'VIAplanner',
      imgSrc: '/viaplanner.png',
      content:
        'VIAplanner is a tool designed by students at the University of Toronto to help the community. We desire to enhance the course selection process.',
    },
    {
      title: 'VIAplanner',
      imgSrc: '/viaplanner.png',
      content:
        'VIAplanner is a tool designed by students at the University of Toronto to help the community. We desire to enhance the course selection process.',
    },
    {
      title: 'VIAplanner',
      imgSrc: '/viaplanner.png',
      content:
        'VIAplanner is a tool designed by students at the University of Toronto to help the community. We desire to enhance the course selection process.',
    },
  ];

  return (
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <Card key={index} title={project.title} imgSrc={project.imgSrc} content={project.content} />
      ))}
    </div>
  );
};

export default Projects;

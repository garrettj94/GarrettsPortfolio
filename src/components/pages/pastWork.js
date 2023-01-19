import React from 'react';



export default function Past() {

  const styles = {
    card: {
      // display: 'flex',
      // flexDirection: 'row',
      width: '80%',
      // position: 'relative',
      // left:10,
      hight: "40",

    },
    heading: {
      // background: 'indigo',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      position: 'relative',
      width: '100%',
      textAlign: 'center',
    },
    content: {
      position: 'relative',
      left: '10',


    },
  };


  const projects = [

    {
      name: 'Tough Decisions',
      url: 'https://toughdecisions.herokuapp.com/',
      image: <img style={{ width: 400, height: 200 }} className='toughDecisions' src={require('../assets/toughdecisions.png')} alt='Project1'></img>
    },
    {
      name: 'Dream Team Management',
      url: 'https://sheltered-atoll-76141.herokuapp.com/',
      image: <img style={{ width: 400, height: 200 }} className='DreamTeam' src={require('../assets/Screenshot_20221201_030412.png')} alt='Project2'></img>
    },
    {
      name: 'What do  you Want to Watch',
      url: ' https://garrettj94.github.io/Whatdoyouwanttowatch/',
      image: <img style={{ width: 400, height: 200 }} className='WhattoWatch' src={require('../assets/WhatToWatch.png')} alt='Project3'></img>
    },
  ];

  const projects2 = [

    {
      name: 'Password Generator',
      url: 'https://garrettj94.github.io/PasswordGen/',
      image: <img style={{ width: 400, height: 200 }} className='Password' src={require('../assets/Passwordgen.png')} alt='Project4'></img>
    },
    {
      name: ' Note Taker',
      url: 'https://notetakernode.herokuapp.com/',
      image:<img style={{ width: 400, height: 200 }} className='NoteTaker' src={require('../assets/NoteTaker.png')} alt='Project5'></img>
    },
    {
      name: ' E-Commerce Back End Project',
      url: 'https://drive.google.com/file/d/1u_y2niJrsJ4g21H-0WLUZ7AF_f3uznpP/view',
      image:<img style={{ width: 400, height: 200 }} className='ORM' src={require('../assets/ORM.png')} alt='Project6'></img>
    },
  ]

  return (
    <div>
      <h1>My Projects</h1>


      <div className='projects' style={styles.card}>
        {projects.map((project) => (
          <div >
            <h2 style={styles.heading} >{project.name}
            </h2>
            <div style={styles.content}>
              <a href={project.url} >{project.image}</a>
            </div>

          </div>

        ))}
      </div>
      <div className='projects2' style={styles.card}>
        {projects2.map((project) => (
          <div >
            <h2 style={styles.heading} >{project.name}
            </h2>
            <div style={styles.content}>
              <a href={project.url} >{project.image}</a>
            </div>

          </div>

        ))}
      </div>

    </div>












  );
}

import React from 'react';


const resume = [

  {
    url: 'https://docs.google.com/document/d/1GZbRybpj0pp5aPUPlkrvZXA04Shf1Ct3GB5ByzRmyr0/edit?usp=sharing',
    image: <img style={{ width: 200, height: 110 }} className='DreamTeam' src={require('../assets/Resume.png')} alt='Project1'></img>
  },
]



export default function Resume() {


  return (

    <div>

      <h1> 
        
        <h2> My Resume </h2>
      
      </h1>

      <div>
        <div className='Resume'>
          {resume.map((resume) => (
            <div >

              <div >
                <a href={resume.url} >{resume.image}</a>
              </div>

            </div>
          ))}
        </div>
  

        <div className='FrontEndKnowledge'>
          <p >
            Front-End Knowledge:
          </p>
          <ul className='FrontEnd'>
            <li> HTML </li>
            <li> CSS </li>
            <li> React </li>
            <li> JavaScript</li>
            <li> jQuery </li>
          </ul>
        </div>

        <div className='BackEndKnowledge'>
          <p >
            Back-End Knowledge:
          </p>
          <ul className='BackEnd'>
            <li> NoSql </li>
            <li> SQL </li>
            <li> Node </li>
            <li> Express </li>
            <li> Object-Relational Mapping </li>



          </ul>


        </div>
        </div>
        </div>


        );
        
      }





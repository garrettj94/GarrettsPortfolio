import React from 'react';

const linkedIn = [

    {
        url: "https://www.linkedin.com/in/garrett-jackson-8a603a25a/",
        image: <img style={{ width: 40, height: 40 }} className=' linkedin ' src={require('../assets/LinkedIn.png')} alt="Linkedin"></img>,
    },
   
]
const Github = [

    
    {

        url: 'https://github.com/garrettj94',
        image: <img style={{ width: 40, height: 40 }} className=' github' src={require('../assets/github.png')} alt="Gthub"></img>

    },
]


function Footer() {
    return (
        <div className='foot'>

            <div className='Linkedin'>
                {linkedIn.map((linkedIn) => (
                    <div >
                        <div    >
                            <a href={linkedIn.url} >{linkedIn.image}</a>
                        </div>

                    </div>

                ))}
            </div>

            <div className='Github'>
                {Github.map((Github) => (
                    <div >
                        <div    >
                            <a href={Github.url} >{Github.image}</a>
                        </div>

                    </div>

                ))}
            </div>








        </div>


    )
}

export default Footer;
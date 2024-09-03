import './Footer.css';
import footerpic from './image/seshmemoji.png';

function Footer() {

    const handleClick = () => {
        window.location.href='mailto:theseshwinraj@gmail.com';
    }

    const resume = () => {
        window.location.href = 'https://seshresume.tiiny.site';
      }

    const handleWhatsApp = () => {
        window.location.href = 'https://wa.link/nw3vli';
    }

      const linkedin = () =>{
        window.location.href = 'https://www.linkedin.com/in/seshwinraj-jayakrishnan-450ba3296/';
    }

    const github = () =>{
        window.location.href = 'https://github.com/SeshLovesCoding';
    }

    return (
        <div className="footer-container">
            <div className="col-title">
                <div className="footer-title">
                    <h1 className='footer-title-text'>
                        <span className='yellow-text'>LET’S
                        </span> ⎯⎯⎯⎯⎯ WORK<br/>⎯⎯⎯⎯⎯⎯
                        <span className='yellow-text'> TOGETHER</span>
                    </h1>
                </div>
            </div>
            <div className="col-content">
                <div className="glassmorphism-card">
                    <div className="row-quote">
                        <img className='footer-picture' src={footerpic} alt=""/>
                        <h2 className='signature-text'>Seshwinraj</h2>
                        <h2 className='quote'>A canvas vast of endless possibility, Where
                            <span className='yellow-text'> creativity</span><br/>meets with
                            <span className='blue'> usability</span>.</h2>
                    </div>
                    <div className="row-spotify">
                        <h2 className='spotify-text'>// Recent Listen</h2>
                        <iframe
    style={{ borderRadius: '12px' }}
    src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
/>
                    </div>
                    <div className="row-socials">
                        <div className="contact-me">
                            <h2 className='contact-text'>Contact Me<br/><button onClick={handleClick} className='footer-button'>Email Me <span className='arrow'>&#8594;</span></button><br/><button onClick={handleWhatsApp} className='footer-button'>WhatsApp Me <span className='arrow'>&#8594;</span></button></h2>
                        </div>
                        <div className="resume-download">
                            <h2 className='contact-text'>Resume/CV<br/><button onClick={resume} className='footer-button'>Download Resume <span className='arrow'>&#8594;</span></button></h2>
                        </div>
                        <div className="socials">
                        <i onClick={linkedin} id="linkedin-icon" className="bi bi-linkedin"></i>
                        <i onClick={github} id="github-icon" className="bi bi-github"></i></div>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>Made with ❤️‍🔥  by Seshwinraj © 2024 </div>
        </div>
    )
}

export default Footer;
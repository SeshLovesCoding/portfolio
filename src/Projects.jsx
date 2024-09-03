import './Projects.css';
import React, {useRef, useState, useEffect} from 'react';
import spinningstar from './image/spinningstar.png'

const Projects = () => {
    const carouselRef = useRef(null);
    const [isDragging,
        setIsDragging] = useState(false);
    const [startX,
        setStartX] = useState(0);
    const [scrollLeft,
        setScrollLeft] = useState(0);

    useEffect(() => {
        const mouseMove = (e) => {
            console.log(e);
        }
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('movemouse', mouseMove);
        }
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
        carouselRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        carouselRef.current.style.cursor = 'default';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        carouselRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) 
            return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the scroll speed
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="projects-container">
            <h1 className='projects-header-title'>MY ⎯⎯ PROJECTS</h1>
            <div className='projects-header-text'>
                <h2 className='h2first'>building bespoke websites that align with the client’s
                    brand identity and business goals</h2>
                <img className="spinningstar" src={spinningstar}/>
                <h2 className='h2second'>// Web Design, Web Development, Desktop Application and Mobile Application</h2>
            </div>
            <div
                className="carousel"
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>

                <div id="INJ" className="carousel-item">
                    <h1 className='carousel-header'>01</h1>
                    <h2 className='carousel-subheader'>Ivan Ng Jaya Auto Garage</h2>
                    <h3 className='carousel-desc'>Crafted a sleek, responsive website for a car
                        workshop, enhancing user experience with intuitive navigation and seamless
                        WhatsApp functionality. Designed for performance, visibility, and customer
                        engagement</h3>
                    <div className="category">
                        <div className="category-items">Website Design</div>
                        <div className="category-items">UI/UX</div>
                        <div className="category-items">Website Development</div>
                        <div className="category-items">Front-end</div>
                    </div>
                </div>
                <div id="PERFOMIND" className="carousel-item">
                    <h1 className='carousel-header'>02</h1>
                    <h2 className='carousel-subheader'>Perfomind (Python Web Application)</h2>
                    <h3 className='carousel-desc'>This system uses machine learning tools to
                        understand how students act and do through multiple assessments and is like a
                        detective - it looks at how students perform in scoring their exams, then
                        figures out how their personality affects their grades.</h3>
                    <div className="category">
                        <div className="category-items">Python</div>
                        <div className="category-items">Machine Learning</div>
                        <div className="category-items">Interactive Tools</div>
                        <div className="category-items">Streamlit</div>
                    </div>
                </div>
                <div id="THEOS" className="carousel-item">
                    <h1 className='carousel-header'>03</h1>
                    <h2 className='carousel-subheader'>Theos Institute (Education)</h2>
                    <h3 className='carousel-desc'>Created a landing page for Theos Institute, a
                        biblical education center, using HTML, CSS, JavaScript, and PHP. The project
                        involved designing a visually appealing and informative landing page that
                        reflects the mission and values of the institute.
                    </h3>
                    <div className="category">
                        <div className="category-items">Website Design</div>
                        <div className="category-items">UI/UX</div>
                        <div className="category-items">Website Development</div>
                        <div className="category-items">Front-end</div>
                    </div>
                </div>
                <div id="DOLLY" className="carousel-item">
                    <h1 className='carousel-header'>04</h1>
                    <h2 className='carousel-subheader'>Dolly<br/>
                        Phone Gadget</h2>
                    <h3 className='carousel-desc'>Developed a web application for a final-year
                        diploma student, where I was responsible for both front-end and back-end
                        development. The application includes key functionalities such as adding,
                        modifying, and removing products from the inventory.</h3>
                    <div className="category">
                        <div className="category-items">Front-end</div>
                        <div className="category-items">Web Design</div>
                        <div className="category-items">PHP</div>
                        <div className="category-items">MySQL</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <h1 className='carousel-header'>05</h1>
                    <h2 className='carousel-subheader'>Financial Tracker Mobile Application</h2>
                    <h3 className='carousel-desc'>Purrfection is the go-to online destination for
                        all things feline. Whether you’re a new cat owner, a seasoned cat lover, or
                        simply curious about these majestic creatures</h3>
                    <div className="category">
                        <div className="category-items">Coming Soon</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <h1 className='carousel-header'>06</h1>
                    <h2 className='carousel-subheader'>HeavenL Florist Landing Page</h2>
                    <h3 className='carousel-desc'>Developed a fully functional online florist shop ,
                        designed to seamlessly convert web traffic into active clients through direct
                        engagement on WhatsApp. My role encompassed the entire development lifecycle,
                        from concept to deployment.
                    </h3>
                    <div className="category">
                        <div className="category-items">Coming Soon</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects
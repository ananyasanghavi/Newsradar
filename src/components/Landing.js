
import '../App.css';
import {FaReadme} from "react-icons/fa";
import { useRef } from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from './variants';
import { NewsCard } from './NewsCard';
import { useNavigate } from 'react-router-dom';


export const Landing = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const scrolltoRef = useRef();
    const handleAboutUs = () => {
        ref.current?.scrollIntoView({behaviour:"smooth"});
    };
    const handleLogin = ()=>{

            navigate("/login");

    }
    const handlehome=()=>{
        navigate("/Home")
    }
    

    return(
        <div className="home-page">
        
        <header>
        <h5 className='logo'>NewsRadar</h5>
        
        
        <nav className="navbar">
        <li onClick={handleLogin}>LOGIN</li>
        <li onClick={handlehome}>HOME</li>
        <li onClick={handleAboutUs}>ABOUT US</li> 
        </nav>
        
        </header>
        <div className='hero'></div>
        <div className='content'>
            <motion.h5 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.3 }} 
            className='paper'>A Paper only for you.</motion.h5>
            <h1 className='main-heading' > Find out all <br/> about your Locality </h1>
            <button className='get-started' onClick={()=> {scrolltoRef.current.scrollIntoView({behaviour:"smooth"})}} ><FaReadme style={{verticalAlign:"middle"}}/> Get Started!</button>
            
        </div>
       
        

    <div>
     <div className='top-news' ref={scrolltoRef}>
        <div className='top-title'>
            TOP NEWS
        </div>
        <hr/>
        <div class="top-cards"> 	
	  	   <NewsCard/>
      </div>
    </div>
    

        <div className='about-us' ref={ref}>
            <footer>
                <h3>About Us</h3>

                <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium,e veritatis et quasi </p>
                <p className='copyright'>Copyright @2023 | Designed With by Takniki Wizz</p>
            </footer>
            
        </div>


      </div>
       </div>
       
        
            
    );
}
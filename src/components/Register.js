import '../App.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const Register = () => {
    return(
        <div className='register-page'>
        
        <div className="container">
        <div className='title'>
          Register Now
        </div>
             
         <div className='user-details'>
         <form action="#" className='register' style={{alignItems:'center'}}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email id"/>
            <input type="text" placeholder="Phone No."/>
            <input type="text" placeholder="College" />
            <input type="text" placeholder="Branch"/>
            <input type="text" placeholder="Batch Year"/>
            <textarea placeholder='About You'/>
            <input type='text' placeholder='City'/>
            <input type='text' placeholder='State'/>
            <input type='text' placeholder='Postal Code'/>
            <input type="password" placeholder="New Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <button type='submit' className='sign-up'><ExitToAppIcon style={{verticalAlign:'middle'}}/> SIGN ME UP!</button>

            
        </form>
         </div>    
        
        </div>
        </div>
       
    );
}
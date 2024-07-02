import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding '>
            <div className='sb_footer-links'>
               
              
                <div className='sb_footer-links_div'>
                    <h4>Partners</h4>
                    < a href="https://www.linkedin.com/in/nikhil-vats-b28464b5/">
                        <p>Nikhil Vats </p>
                        </a>
                    < a href="https://www.linkedin.com/in/aditya-agarwal-b66a5750/">
                        <p>Aditya Agarwal </p>
                        </a>
                    < a href="https://www.linkedin.com/in/vibhu-jain-14a13720/">
                        <p>Vibhu Jain </p>
                        </a>
                        
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Company</h4>
                    <a href="http://appmontize.co.in/">
                        <p>About</p>
                    </a>
    
                    <a href = "https://www.linkedin.com/company/appmontize-media-pvt-ltd-company/">
                        <p>Linkedin</p>
                    </a>
            
                    <a href="http://appmontize.co.in/">
                        <p>Contact</p>
                    </a>

                </div>
                

          
            </div>

        <hr></hr>
        <div className='sb_footer-below'>
            <div className='sb_footer_copyright'>
               
            </div>
            <div className='sb_footer-below-links'>
                 <p>
                    @{new Date().getFullYear()} Appmontize Media. All rights reserved.
                </p>
               
            </div>
        </div>

        </div>
    
    </div>
  )
}

export default Footer;
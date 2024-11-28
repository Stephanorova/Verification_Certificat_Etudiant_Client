import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerTitre">
          <div className="radiuse">
              <div className="footerLeft">
                <h1>
                  <div className="graounde">
                  <img src="VerificationCertificat/image/log.png" alt="" />
                  </div>
                  TechSkills Learning Institute
                  </h1>
                  <span>Stay in the loop and sign  up for the</span>
                  <span> Wardiere newsletter</span>
              </div>
              <div className="footerRigth">
                  <div className="company">
                    <span>Company</span>
                    <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Solutions</li>
                      <li>Prieing</li>
                      <li>E-learning</li>
                      <li>Career</li>
                    </ul>
                  </div>
                  <div className="documentation">
                  <span>Documentation</span>
                  <ul>
                      <li>Help Center</li>
                      <li>Contact</li>
                      <li>FAQ</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                  <div className="mediasocial">
                  <span>Social</span>
                  <ul>
                      <li>Facebokk</li>
                      <li>Instagram</li>
                      <li>Youtub</li>
                      <li>Linkedin</li>
                    </ul>
                  </div>
              </div>
          </div>
         <hr />
         <div className="techskills">
             <span>© TechSkills. All Rights Reserved 2024</span>
             <span>Terms & Conditions</span>
         </div>
        </div>
    </div>
  )
}

export default Footer

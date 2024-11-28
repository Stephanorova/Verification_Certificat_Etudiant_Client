import './index.css'
import Verification from './Sousverification/Verification'

const Verifications = () => {
  return (
    <>
    <div className='verification'>
        <div className="row">
            <h1><i>Verification</i><img src="VerificationCertificat/image/suivre.png" alt="" /></h1>
            <hr />
            <p>Students</p>
        </div>
    </div>
    <div className="souverification">
        <Verification/>
    </div>
    </>
  )
}

export default Verifications

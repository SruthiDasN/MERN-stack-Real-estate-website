import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import { BiVideo } from 'react-icons/bi'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
            <span className='orangeText'>Contact Us</span>
            <span className='primaryText'>Easy to contact us</span>
            <span className='secondaryText'>We always ready to help you by providing the best service<br/>
            We believe that a good place to live can enhance your quality of life
            </span>

            <div className="flexColStart contactModes">
                {/* first row */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>                            
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>021 123 145 11</span>
                            </div>                            
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>

                {/* second mode */}
                <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>                            
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>021 123 145 11</span>
                            </div>                            
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>
                </div>

                {/* second row */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BiVideo size={25}/>                            
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span>
                                <span className='secondaryText'>021 123 145 11</span>
                            </div>                            
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>

                {/* fourth mode */}
                <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>                            
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>021 123 145 11</span>
                            </div>                            
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>
                </div>
            </div>
            


        </div>

        {/* right side */}
        <div className="c-right">
            <div className="image-container">
                <img src="./office.jpg" alt="contact image" />
            </div>
        </div>


        </div>
    </section>
  )
}

export default Contact
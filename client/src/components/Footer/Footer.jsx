import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img className='img' src="./LMlogo1.png" alt="logo" />

                <span className="secondaryText">
                Our vision is to make it possible for all people<br />
                to find the best places to live for them.
                </span>
            </div>

            {/* righe side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>LM HOUSING</span>
                <span className='secondaryText'>Ernakulam, Kerala, India</span>

                <div className="flexCenter f-menu">
                   <span>Property</span>
                   <span>Services</span>
                   <span>Product</span>
                   <span>About Us</span> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
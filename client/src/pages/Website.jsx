import Companies from '../components/companies/companies';
import Residencies from '../components/Residencies/Residencies';
import Value from '../components/Value/Value';
import Contact from '../components/Contact/Contact';
import GetStarted from '../components/GetStarted/GetStarted';

import Hero from '../components/Hero/Hero';

const Website = () => {
  return (
    <div className="App">
        <div>
            <div className="white-gradient" />     
            <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
       
    </div>
  )
}

export default Website
import Image from 'react-bootstrap/Image';


function About() {
  return (
    <div style={{ position: 'relative', height: '100vh',width: '100%'}}>
      <Image src= "https://images.unsplash.com/photo-1549769311-eb1f5f68d838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', color: 'white' }}>
        <h1>Wellness Coaching PNW</h1>
        <h3>Serving Residents of WA</h3>
        <p>
        "If we did all the things we are capable of, we would literally astound ourselves." -Thomas Edison
        </p>
      </div>
    </div>
  );
} 

export default About;
import Accordion from 'react-bootstrap/Accordion';
import myImage from './images/bev.JPG';
import './css/App.css'

function Tabs() {
  return (
    <div style={{ width: '100%' }}>
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is a Nurse Coach?</Accordion.Header>
        <Accordion.Body>
        A Nurse Coach is a Nurse with specialized training in health and wellness coaching to be able to support clients and communities. We walk alongside our clients to empower, listen, and help our clients see their full potential, so they can believe in themselves to create the habits necessary to reach their goals and live a lifestyle that promotes health and wellness.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About Me</Accordion.Header>
        <Accordion.Body>
        <div className='about-container'>
            <div className='about-image'>
                <img src={myImage} alt="Profile" style={{ borderRadius: '50%' }}height="500" />
            </div>
            <div className='about-text'>
                My Name is Beverly. I have been a Registered Nurse for 9 years. Professionally, I have worked in the hospital, diabetes education, and outpatient procedures. My passion is health & wellness. When I became a nurse, I realized how important taking care of yourself is. While seeing so many patients dealing with complications from chronic conditions related to diseases of lifestyle, it sparked a passion in me to learn what could prevent, halt, or even reverse chronic conditions so I personally could live a life with a long healthspan and be able to enjoy life to the fullest. Now I want to support others, and that is why I created Wellness Coaching PNW so I can walk alongside you on your journey to wellness.
            </div>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>My Services</Accordion.Header>
        <Accordion.Body>
        <h1>One on One virtual coaching via phone or video for residents of WA State.</h1>
        <div className="service-list">
          <ul>
            <li>FREE Consultation to determine if this is the right fit for you. Email wellnesscoachingpnw@gmail.com to set up.</li>
            <li>Over the course of 12 weeks we will meet 8 times after our initial free consultation.</li>
            <li>Between sessions I will provide support and encouragement through messaging and am available for your needs.</li>
            <li>Coaching will be comprehensive as complete wellness addresses all areas of your health including nutrition, activity, sleep, mental/emotional health, social, and more. </li>
          </ul>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>My Approach</Accordion.Header>
        <Accordion.Body>
        <h1>I am not here to sell anything or offer quick fixes. This approach is about making sustainable changes in habits that are client driven that have positive downstream effects on your health as a whole. Some areas of focus can include:</h1>
        <div className="service-list">
          <ul>
            <li>Plant focused diet that is low in saturated fat, high in fiber, and low in processed food to support optimal health. The breakdown of this will look different for each individual.</li>
            <li>Movement is extremely important for overall health. Finding movement that you can enjoy and can stick to is of most importance.</li>
            <li>Adequate sleep is essential for your body to perform at its best.</li>
            <li>Your relationship with yourself, food, family/friends, etc. All have a huge impact on your health.</li>
          </ul>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Tabs;
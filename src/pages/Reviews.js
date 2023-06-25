import Card from 'react-bootstrap/Card';
import './css/App.css';

function Reviews() {
  return (
    <div className='reviews-container'>
    <Card>
      <Card.Body>
        <Card.Title style={{fontSize : '1.5em', color: '#646D74'}}>Client 1:</Card.Title>
        <Card.Text>
            <p>
            “Working with Bev has been so wonderful. She’s understanding and I never once felt judged. If anything she helped validate my feelings and the season of life that I’m currently in and helped make this new journey not so overwhelming. I could feel how sincere she was during each session and how proud she was for even the smallest achievements. 
            I’m excited and pleased to say that I’ve made a lot of progress and accomplished a lot of goals during my time with Bev. The most beneficial thing that I learned is that small changes make a big difference. I’m realizing this first hand as I’m slowly changing daily habits to reflect that healthier lifestyle that I’m seeking. Forever grateful to be able to be coached by Beverly and for her knowledge, insight and advice. She’s amazing at what she does.”
            </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title style={{fontSize : '1.5em'}}>Client 2:</Card.Title>
        <Card.Text>
            <p>
            “When I started working with Beverly I was at a very low point in my motivation to sustain a healthy lifestyle.  I was lazy with my nutrition and my physical fitness which was starting to have an impact on my overall mental wellbeing.  I knew the tools were available to me but I had no direction or confidence on where to even begin… 
            I have a much better understanding of myself after working with Beverly.  Celebrating the small accomplishments and not giving up on myself if things don't go as planned.  Finding the connections between physical, nutritional health and mental health was a main focus that she broke down for me and she was also able to provide me or recommend different resources if I wanted more information.”
            </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title style={{fontSize : '1.5em'}}>Client 3:</Card.Title>
        <Card.Text>
            <p>
            “Having a coach helped me stay focused on my goals where I began to feel physically better by eating differently and exercising. This in turn made me want to make more consistent efforts toward my personal goals.”
            </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title style={{fontSize : '1.5em'}}>Client 4:</Card.Title>
        <Card.Text>
            <p>
            “Prior to starting my coaching session, I was not working out and had a lot of stress in my life with work. My coach asked me some hard questions that made me really take a step back and take a look at my life and what I was putting all of my energy into. Through this process, I set goals for myself and reprioritized what is really important, and that is me. It was a challenge for me to change my thinking because I have operated this way for so long; I have to remind myself that no one is going to show up for me but me! When the old self creeps in, I hear my coach encouraging me to make the choice of me.”
            </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Reviews;
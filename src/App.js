import pic from './pictureOfMe.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="items">
          <img id="pic" src={pic} />
          <div id="caption"> 
            <p> <b> Hey, I am Kirat </b> </p>
            <p style={{top: '-5vh', width: '70%', fontSize: 'medium', color: '#ffaf47'}}> 
              I am a UNSW Commerce student passionate about software development and all things tech. 
              By joining DevSoc, I am hoping to pick up technical and soft skills that will help me pursue a career in software dev.
            </p>
          </div>
        </div>
      </header>

      <div id="story">
          <br />
          <h1 class="story"> My story :o </h1>
          <p class="story" style={{width: '80%'}}> 
            When I first came to university, I selected a major in finance, but I was not passionate about crunching
            numbers and making rich people richer. I wanted to pursue something that would be more fulfilling and would 
            genuinely make a difference to the people living in our society. The money and work-life balance sounded 
            great, but I was really interested in learning and building my own things. I have slowly done a career shift
            since, by majoring in Information Systems and interning in various tech roles. 
            <br />
            <br />
            <br />
            I now understand where my place in this world is and I am working towards finding other aspiring developers
          </p>
      </div>

      <div class="harmony-discord-headline">
        <h1 class="harmony-discord-text"> Things that bring me peace and joy </h1>
      </div>

      <div>
        <ul>
            <li> <b> Doom-scolling: </b> 
              I love to scroll away on Reddit or 'Tech'-tok for hours where I can learn something new about the world 
            </li>
            <li> <b> Reading: </b> 
              I try my best to make a conscious effort to read about computing or anything else tech-related as it will
              help me grow into my career
            </li>
            <li> <b> Watching movies and TV: </b>
              I am watching Mr. Robot currently. The last movie I watched was 'Oppenheimer' by Christopher Nolan. Drop
              any recommendations if you think I should watch something else.
             </li>
        </ul>
      </div>

      <div class="harmony-discord-headline">
        <h1 class="harmony-discord-text"> Things that I am working on </h1>
      </div>

      <div>
        <ul>
            <li> <b> Building lasting friendships </b> 
              As a Business student, I joined some Business societies at university. As I am not a heavy-drinker and I 
              also didn't fit the mould of a typical business student, I was often made fun of and didn't fit
              into the business crowd sometimes. I wasn't able to make many friends in my degree so I am trying to build
              more friendships by joining a community of more like-minded people
            </li>
            <li> <b> Imposter syndrome </b> 
              My business degree does not position me to be a software developer, so I do not fit in with the typical
              Computer Science crowd. While I try to self-learn by myself or work on my own projects, I am trying to join
              developer communities without feeling too out of place where I a may be under-qualified to join. My goal
              (which will most likely change as I learn more about software dev) is to become a full-stack developer
            </li>
        </ul>
      </div>

      <br />

      <div id="links">
        <h1 class="harmony-discord-text"> Talk to me directly: </h1>
      </div>

      <div id="links">
        <ul>
          <li> <a href="https://www.linkedin.com/in/kirat-s/"> LinkedIn </a> </li>
          <li> <a href="https://www.facebook.com/profile.php?id=100009339177692"> Facebook </a> </li>
          <li> <a href="https://github.com/kirattech"> GitHub </a> </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

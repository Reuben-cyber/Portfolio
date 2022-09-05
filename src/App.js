import './App.css';
import * as React  from 'react';
import HorizontalTimeline from "react-horizontal-timeline";
import myimg from'./assets/3.gif';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import event from './assets/event mgmt.jpg';
import disha from './assets/disharangaalay.jpg';
import juniberry from './assets/juniberry.jpg';
import doc from'./assets/event doc.jpg';
import jewel from'./assets/artsy.jpg';
import newb from'./assets/students.jpg';
import scan from'./assets/pocketscanner.jpg';
import count from'./assets/counter.jpg';
import dust from'./assets/bin.jpg';
import stats from'./assets/stats.JPG';
import movinture from './assets/movinture.jpg';
import designing from './assets/desgning.JPG';
import iot from './assets/IoT.JPG';
import insta from'./assets/insta.png';
import git from'./assets/git.png';
import linkedin from'./assets/linkedin.png';
import resume from './assets/resume.png';

function App(){
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  
  // Values should be only date
  const VALUES = ["01/02/2018", "04/04/2021", "01/06/2023"];
  
  // Description array corresponding to values
  const description = [
    <a href="https://stvincentspune.com/" className='link' title="Click here to know more about St.Vincent's">St.Vincent's High School,Pune (Class 1 to Class 12)</a>,
    <a href="https://www.bmcc.ac.in/web/" className='link' title="Click here to know more about BMCC">Brihan Maharashtra College Of Commerce,Pune (BBA-CA)</a>,
    <a href="https://christuniversity.in/" className='link' title="Click here to know more about Christ">Christ(Deemed to be University),Bangalore (MCA)</a>,
  ];
  return (
    <>
      <div className="nametext">
      Hello,it's me 
      </div>
      <div className="myname">
      <span className="hey">R</span>euben<span className="hey">.</span><br></br>
      </div>
      <div className='intro'>
      A work oriented full stack web developer who uses<br></br>
      technologies like wordpress,HTML,PHP,NodeJS,MySql.
      </div>
        <img src={myimg} className="picture"/>
  
      <div className='journey'>
      My <span className="hey">Journey</span> So Far
      </div>
      {/* <img src={journey} className="journeypic"/> */}
      <div className="root-div">
      <div style={{ width: "50%",
                    height: "90px", 
                    margin: "0 auto"
                     }}>
        <HorizontalTimeline
          styles={{ outline: "#ffffff", foreground: "#FF3131" }}
          index={value}
          indexClick={(index) => {
            setValue(index);
            setPrevious(value);
          }}
          values={VALUES}
        />
      </div>
      <div className="text-center">{description[value]}</div>
    </div>
    <div className='journey'>
      My <span className="hey">Projects</span>
      </div>
{/* //First Row of cards  */}
      <div className='cardadjust1'>
        <a href="https://www.bmccastitva.in/" className='link'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={event}
          alt="Astitva Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Astitva Event Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Website made to manage an annual intercolligate event at BMCC,Pune.
           Built on PHP,MySql,HTML,CSS.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>

    <a href="https://disharangaalay.com/" className='link'>
    <Card sx={{ maxWidth: 345 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={disha}
          alt="Coloring Studio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Disharangaalay
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Website made to showcase the different project done by 
            Disharangaalay.Pvt.Ltd.
            Built and maintained using wordpress.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>

    <a href="https://github.com/Reuben-cyber/Juniberry" className='link'>
    <Card sx={{ maxWidth: 345 }} className="card2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={juniberry}
          alt="Juniberry Soaps"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Juniberry Soaps
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Website made to showcase the various handmade products by 
           Juniberry.Pvt.Ltd.
           Built and maintained using wordpress.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
    </div>
{/* 
Second Row of cards */}
    <div className='cardadjust2'>
    <a href="https://github.com/Reuben-cyber/Event-Management" className='link'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={doc}
          alt="Event Doc"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Event Doc
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Local system made to manage all event related documentations and reports.
            Built using HTML,PHP,MySQL.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>

    <a href="https://github.com/Reuben-cyber/Artsy-Jewellery" className='link'>
    <Card sx={{ maxWidth: 345 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={jewel}
          alt="Artsy Jewellery"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Artsy Jewellery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Website built to showcase all the handmade jewellery by 
            Artsy Pvt.LTD. which is a start-up by students.
            Built on wordpress.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>

    <a href="https://github.com/Reuben-cyber/Newbie.com" className='link'>
    <Card sx={{ maxWidth: 345 }} className="card2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={newb}
          alt="Newbie.com"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Newbie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Website used to help students from different states,
            helping them find daily stuff around college.Built using HTML,EJS,NodeJs,MySql.  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
    </div>


{/* Third row of cards  */}
    <div className='cardadjust3'>
    <a href="https://play.google.com/store/apps/details?id=com.appars.pocketscanner" className='link'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={scan}
          alt="Pocket Scanner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pocket Scanner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Android application made to scan documents and converts to pdf as well as scans QR codes.
            Built using java in android studio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</a>

<a href="https://play.google.com/store/apps/details?id=com.appar.counter" className='link'>
    <Card sx={{ maxWidth: 345 }} className="cards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={count}
          alt="Simple Counter"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Simple Counter
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Android application built to help people count better and faster.
            Built using java in andorid studio. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>

    <a href="https://www.hackster.io/innovation4x/smart-dustbin-using-wiznet-evb-pico-and-tinyml-8956c7" className='link'>
    <Card sx={{ maxWidth: 345 }} className="card2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={dust}
          alt="Smart Dustbin"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Smart Dustbin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Iot project where the dustbin opens automatically if a human waves his/sher hand.
            Built using Wiznet Pico board and Arduino IDE.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
    </div>
{/* 
  //new section   */}
    <div className='journey'>
      Work <span className="hey">Experience</span>
      </div>
  {/* //First Row of cards  */}
  <div className='cardadjust1'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={stats}
          alt="Statsfield Software Consultancy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Statsfield Software Consultancy,Pune.
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Web development firm.
           Worked there on PHP,HTML,CSS,MySql for 2 Projects.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ maxWidth: 345 }} className="cardsw">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={movinture}
          alt="Movinture Pvt.LTD."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Movinture (India) Pvt. Ltd,Pune.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Software firm. 
            Worked on react-native,HTML,CSS,NodeJS,MySql,MongoDb.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className='journey'>
      My <span className="hey">Certifications</span>
      </div>
      {/* //First Row of cards  */}
  <div className='cardadjust1'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={designing}
          alt="Responsive Web Development"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Responsive Web Development Course.
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Did a course of responsive web development 
           from freecodecamp.org.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ maxWidth: 345 }} className="cardsw">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={iot}
          alt="IoT"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Introduction of Internet Of Things
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Did a course of IoT from 
            infosys Springboard.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className='journey'>
    <span className="hey">Contact</span> Me
    </div>
    <div className='contact'>
      Hey! Hope you liked my work<br></br>
      Want to collaborate and work together ?<br></br>
      Ping me at any of the handles below<span className="hey">.</span><br></br>
      </div>
      <div className='socialmedia'>
        <a href="https://www.instagram.com/i_ran_over_myself/" title="Instagram profile"><img src={insta} className="img1"/></a>
        <a href="https://github.com/Reuben-cyber" title="Github Profile"><img src={git} className="img2"/></a>
        <a href="https://www.linkedin.com/in/reuben-kurian/" title="LinkedIn Profile"><img src={linkedin} className="img2"/></a>
        <a href="https://drive.google.com/file/d/1YUsJ1EcXp4R8T_pAHBgpP4ZUzoDM9sV9/view?usp=sharing" title="Get Resume Here"><img src={resume} className="img2"/></a>
      </div>
      </>
  );
}

export default App;

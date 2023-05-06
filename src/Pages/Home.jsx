import { Box, Title, Paper, Text, Container, Flex } from "@mantine/core";
import Footer from ".././Components/Footer";
import "../Pages/Home.css";
import "../Components/coordinatorMessage.css";
// Images
import one from "../assets/HomePageImg/Home.jpg";
import two from "../assets/HomePageImg/Home2-.jpeg";
import three from "../assets/HomePageImg/Home3.jpg";
import four from "../assets/HomePageImg/Home4.jpeg";


import six from "../assets/HomePageImg/Home6.jpg";
// Linkage Images
import Linkage1 from "../assets/linkageImg/linkageIMG1.png";
import Linkage2 from "../assets/linkageImg/linkageIMG2.jpg";
import Linkage3 from "../assets/linkageImg/linkageIMG3.png";
import Linkage4 from "../assets/linkageImg/linkageIMG4.jpg";
import Linkage5 from "../assets/linkageImg/linkageIMG5.jpeg";
import Linkage6 from "../assets/linkageImg/linkageIMG6.png";
import Linkage7 from "../assets/linkageImg/linkageIMG7.png";
import Linkage8 from "../assets/linkageImg/linkageIMG8.jpeg";
import Linkage9 from "../assets/linkageImg/linkageIMG9.jpeg";
import Linkage10 from "../assets/linkageImg/linkageIMG10.png";
import Linkage11 from "../assets/linkageImg/linkageIMG11.jpeg";

import Carousel from "../Components/Carousel";

const Home = () => {
  const data = [one,two,three,four,six];

  return (
    <Box>
    
      {/* <Carousel images={data} /> */}
<Container>
<div className="coordinator-message">
      <h2 className="coordinator-message__title">Coordinator Message</h2>
      <Flex justify="center">
<img></img>
<p></p>
      </Flex>
    </div>
</Container>
     

      <Container>
      <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700"}}>Home</Text>
        <Box mt={32}>
          <Paper>
            <Text style={{lineHeight:"2", fontSize:"20px"}}>
            Established in 2019 as a part of the Rashtriya Uchhtar Shiksha Abhiyan, Guru Nanak Dev University’s Golden Jubilee Centre for Entrepreneurship and Innovation has the primary purpose of encouraging students to promote new ideas and budding ventures. At the center, we evaluate raw inventions and innovations and guide aspiring entrepreneurs on how to take off their businesses. Prof. (Dr.) P.K. Pati is the team leader, followed by 300 academic mentors, 20 council members, and numerous club members. At GJCEI, we aim to equip students with entrepreneurial opportunities and facilitate their innovations by guiding them throughout their journey to becoming successful businesses. Our mentors are always on the go to provide your work with constructive feedback and necessary advice. And our endeavors don’t stop there; we help you expand the horizons of your connections, provide you with high-tech lab resources, and award promising propositions with seed money. Needless to say, GJCEI acts as a tech hub and brings together the best of all worlds, viz., tech, content, advisory, judiciary, and much more. It’s one of the best places to seek when thinking of giving wings to your dreams.  
            </Text>
          </Paper>
        </Box>
<Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700",margin:"50px 0"}}>Industrial Linkage</Text>


        </Container>  
        <div class="cards">
<div class="card"><img className="LinkageImg" style={{height:"200px"}} src={Linkage11}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage2}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage3}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage4} ></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage5}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage6}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage7}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage8}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage9}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage10}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage1}></img></div>
</div>
        

      <Footer/>
    </Box>
  );
};

export default Home;

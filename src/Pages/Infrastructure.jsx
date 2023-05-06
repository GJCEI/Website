import { Box, Title, Paper, Text, Container, Flex } from "@mantine/core";
import Infra from "../Components/Infra"
// Images
import one from "../assets/InfrastructureImg/IMGA.jpg";
import two from "../assets/InfrastructureImg/IMGB.jpg";
import three from "../assets/InfrastructureImg/IMGC.jpeg";
import four from "../assets/InfrastructureImg/IMGD.jpeg";
import five from "../assets/InfrastructureImg/IMGE.jpeg";
import six from "../assets/InfrastructureImg/IMGF.jpeg";
import seven from "../assets/InfrastructureImg/IMGG.jpeg";
import eight from "../assets/InfrastructureImg/IMGH.jpeg";
import nine from "../assets/InfrastructureImg/IMGI.jpeg";
import ten from "../assets/InfrastructureImg/IMGJ.jpeg";
import eleven from "../assets/InfrastructureImg/IMGK.jpeg";

import Carousel from "../Components/Carousel";
import  Footer  from "../Components/Footer";
import "./Staff.css";
const Infrastructure = () => {
  const data = [one, two, three, four, five,six, seven, ten,eleven];

  return (
    <Box>
    
    
      <Carousel images={data} />

      <Container>
      <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700"}}>About Infrastructure</Text>
        <Box mt={32}>
          <Paper>
            <Text style={{lineHeight:"2", fontSize:"20px"}}>
            Golden Jubilee Centre for Entrepreneurship and Innovation (GJCEI) established at Guru Nanak Dev University under component-4 (Quality and Excellence in Select State Universities) of RUSA 2.0 is actively engaged in building an ecosystem of entrepreneurship and innovation which will catalyze the economy of the state and country at large. 
Aligned with the mandate of the centre, a state of the art infrastructure has been created. Around 120 All in One computers, servers, printers, workstations, and photocopier machines have been procured by the centre. A high-speed internet facility has been provided to the centre for its routine functioning. Further, the centre has set up a 3D printing facility with a capacity to develop 3D prototypes having dimensions of 600*600*600 mm3. In addition, a 3D Scanning facility has also been developed which can scan and develop 3D models of any micro/macro object. Furthermore, to help the young minds in developing their own 3D models and in printing 3D prototypes, ANSYS and SOLIDWORKS software have also been made available at the centre. The centre has also set up a discovery lab equipped with PCB Design Machine, Electronic Workbenches and numerous other equipment necessary for developing a working electronic model/prototype. 
To impart skill-based training for generating employability and enhancing entrepreneurship, the centre has developed two skill labs. To promote start-up activities, a coworking space and adequate start-up cabins have been designed at the centre. To facilitate IPR (Intellectual Property Rights) related activities, an IPR cell has also been made functional at the centre. Besides these, a video conferencing facility to hold online meetings and interact with various stakeholders has been set up. 
<Flex
              justify="space-around"
              sx={(theme) => ({
                flexDirection: "column",
                alignItems: "center",
                [theme.fn.largerThan("md")]: {
                  flexDirection: "row",
                },
              })}
            >
              <div className="grid-row">
                <div className="grid-item">
                <Infra
              image = {five}
              title = "Co-working space"
              description = "svsdbs"
            />
                </div>
             <div className="grid-item" >
             <Infra
              image = {four}
              title = "IPR Cell"
              description = "svsdbs"
            />
             </div>
          <div className="grid-item" >
          <Infra
              image = {five}
              title = "Rent Out Space"
              description = "svsdbs"
            />
          </div>
            <div className="grid-item" >
            <Infra
              image = {five}
              title = "Startup Cell"
              description = "svsdbs"
            />
            </div>
            <div className="grid-item" >
            <Infra
              image = {five}
              title = "Discovery Lab"
              description = "svsdbs"
            />
            </div>
            <div className="grid-item" >

            <Infra
              image = {eleven}
              title = "Skill Labs"
              description = "svsdbs"
            />
            </div>
              
              </div>
           
</Flex>
           
            </Text>
          </Paper>
        </Box>
      </Container>
    <Footer></Footer>
    </Box>
  );
};

export default Infrastructure;

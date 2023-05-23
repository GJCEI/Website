import { Box, Title, Paper, Text, Container} from "@mantine/core";

import "./StudentCouncil.css";
// Images
import SC0 from ".././assets/StudentCouncilImg/SC0.jpg";
import SC1 from ".././assets/StudentCouncilImg/SC1.png";
import SC2 from ".././assets/StudentCouncilImg/SC2.png";
import SC3 from ".././assets/StudentCouncilImg/SC3.png";
import SC4 from ".././assets/StudentCouncilImg/SC4.png";
import SC5 from ".././assets/StudentCouncilImg/SC5.png";
import SC6 from ".././assets/StudentCouncilImg/SC6.png";
import SC7 from ".././assets/StudentCouncilImg/SC7.png";
import SC8 from ".././assets/StudentCouncilImg/SC8.png";
import SC9 from ".././assets/StudentCouncilImg/SC9.png";
import SC10 from ".././assets/StudentCouncilImg/SC10.png";
import SC11 from ".././assets/StudentCouncilImg/SC11.png";
import SC12 from ".././assets/StudentCouncilImg/SC12.png";
import SC13 from ".././assets/StudentCouncilImg/SC13.jpeg";
import SC14 from ".././assets/StudentCouncilImg/SC14.png";
import SC16 from ".././assets/StudentCouncilImg/SC16.png";
import SC17 from ".././assets/StudentCouncilImg/SC17.png";
import SC19 from ".././assets/StudentCouncilImg/SC19.png";
import SC20 from ".././assets/StudentCouncilImg/SC22.png";
import SC21 from ".././assets/StudentCouncilImg/SC23.png";
import SC22 from ".././assets/StudentCouncilImg/SC24.png";
import SC23 from ".././assets/StudentCouncilImg/SC25.png";
import SC24 from ".././assets/StudentCouncilImg/SC26.png";
import SC25 from ".././assets/StudentCouncilImg/SC27.png";
import SC26 from ".././assets/StudentCouncilImg/SC28.png";
import SC27 from ".././assets/StudentCouncilImg/SC29.png";
import SC28 from ".././assets/StudentCouncilImg/SC30.png";
import SC29 from ".././assets/StudentCouncilImg/SC31.png";
import SC30 from ".././assets/StudentCouncilImg/SC32.png";
import SC31 from ".././assets/StudentCouncilImg/SC33.png";
import SC32 from ".././assets/StudentCouncilImg/SC34.png";
import SC33 from ".././assets/StudentCouncilImg/SC35.png";
import Student1 from ".././assets/StudentCouncilImg/Students1.jpeg";
import Student2 from ".././assets/StudentCouncilImg/Students2.jpeg";
import Student3 from ".././assets/StudentCouncilImg/Students3.jpg";
import Student4 from ".././assets/StudentCouncilImg/Students4.jpg";
import Student5 from ".././assets/StudentCouncilImg/Students5.jpg";
import Student6 from ".././assets/StudentCouncilImg/Students6.jpg";
import Student7 from ".././assets/StudentCouncilImg/Students7.jpeg";


import Profile from "../Components/Profile";
import Footer  from "../Components/Footer";
import  Carousel  from "../Components/Carousel";

const StudentCouncil = () => {
const data = [SC0,Student1,Student2,Student3,Student4,Student5,Student6,Student7];

  return (
    <Box >

      
<Carousel images={data}></Carousel>
      <Container>
      
      <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700", marginTop:"20px",textAlign:"center"}}>Student Council</Text>
        <Box mt={32}>
          <Paper>
            <Text>

            <div class="section">
  <div class="container">
  <Text style={{fontSize:"25px",color:"#10243f",fontWeight:"500", margin:"20px",textAlign:"center"}}>Startups events and main holdings</Text>
    <div class="grid-row">
    <div className="grid-item">
      <Profile
            avatar={SC12}
            name="Parminder singh"
            job="Innovation and event Management, Promotion and Outreach activities"
            Department="Department: Mechanical Engineering"
            ></Profile>
      </div>
      <div class="grid-item">
      <Profile
            avatar={SC13}
            name="Raumit Raj"
            job="Innovation and event Management"
            Department="Department: Electronics Technology"
            ></Profile>
      </div>
      <div class="grid-item">
      <Profile
            avatar={SC2}
            name="Sukhbeer Singh"
            job="Innovation and event Management"
            Department = "Department: Electronics Technology"
            ></Profile>
      </div>
      <div class="grid-item">
      <Profile
        avatar={SC1}
        name="Simran Mehra"
        job="I.T and Social Media Development"
        Department="Department: Chemistry"
        ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC5}
            name="Arshdeep Kaur"
            job="Innovation and event Management"
            Department = "Department: Physics"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC19}
            name="Jaismeen Kaur"
            job="Press and publication"
            Department="Department: Human Genetics"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC30}
            name="Srishti Sharma"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
    </div>
    <Text style={{fontSize:"25px",color:"#10243f",fontWeight:"500", margin:"20px",textAlign:"center"}}>E-Prayas</Text>
    <div class="grid-row">
    <div className="grid-item">
      <Profile
            avatar={SC29}
            name="Simarpreet Singh"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC23}
            name="Nishith Arora"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC32}
            name="Udaydeep Singh"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC14}
            name="Harvir Kaur"
            job="Innovation and event Management"
            Department="Department: Law"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC11}
            name ="Jyoti Yadav"
            job="Innovation and event Management"
            Department="Department: Biotechnology"
            ></Profile>
      </div>
      <div class="grid-item">
      <Profile
        avatar={SC20}
        name="Divya Acharya"
        job="I.T and Social Media Development,Innovation and event Management"
        Department="Department:CET"
        ></Profile>
      </div>
    </div>
     
  
      
      <Text style={{fontSize:"25px",color:"#10243f",fontWeight:"500", margin:"20px",textAlign:"center"}}>E-Chupal</Text>
    <div class="grid-row">
      {/* Event And Innovation */}
      <div class="grid-item">
      <Profile
            avatar={SC8}
            name="Ankit Partap"
            job="I.T and Social Media Development"
            Department="Department: Computer Science"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC24}
            name="Neelam"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: Law"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC22}
            name="Rohain Singh Aulakh"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>

      <div className="grid-item">
      <Profile
            avatar={SC27}
            name="Saryoo Arora"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC26}
            name="Palak Chopra"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
</div>
      <Text style={{fontSize:"25px",color:"#10243f",fontWeight:"500", margin:"20px",textAlign:"center"}}>E-Spotlight</Text>
    <div class="grid-row">

    <div className="grid-item">
      <Profile
            avatar={SC28}
            name="Priya Bhardwaj"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC16}
            name="Ishmanpreet Kaur"
            job="Promotion and Outreach activities"
            Department="Department: Electronics Technology"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC21}
            name="Damini"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            avatar={SC25}
            name="Niyti Sharma"
            job="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
    </div>
    <Text style={{fontSize:"25px",color:"#10243f",fontWeight:"500", margin:"20px",textAlign:"center"}}>I-Buzz</Text>
    <div class="grid-row">
    <div class="grid-item">
      <Profile
            avatar={SC3}
            name="Jasmine Kaur"
            job="Promotion and Outreach activities,Content Development"
            Department="Department: Mass Communications"
            ></Profile>
      </div>
      </div>
    <Text style={{fontSize:"25px",color:"#10243f",fontWeight:"500", margin:"20px",textAlign:"center"}}>IT and Web</Text>

    <div class="grid-row">
   
      </div>
  
  
   
    
     
      </div>
    
     
   
   
     
       {/* IT and Social Media */}
     
      
      
      {/* Promotion */}
     
     
      {/* <div className="grid-item">
      <Profile
            avatar={SC17}
            name="Shabnampreet Kaur"
            job="Promotion and Outreach activities,Content Development"
            Department="Department: Mass Communications"
            ></Profile>
      </div> */}
    
      {/* Press */}
   
   
      {/* Industry */}
     
     
    
  
      
     
      
    
     
  
    
    

</div>         
            </Text>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default StudentCouncil;

import { Box, Title, Paper, Text, Container, Flex } from "@mantine/core";

import "./Staff.css";
// Images
import SC0 from ".././assets/StudentCouncilImg/SC0.jpg";
import St1 from ".././assets/StaffImg/St1.png";
import St2 from ".././assets/StaffImg/St2.png";
import St3 from ".././assets/StaffImg/St3.png";
import St4 from ".././assets/StaffImg/St4.png";
import St5 from ".././assets/StaffImg/St5.png";
import St6 from ".././assets/StaffImg/St6.png";
import St7 from ".././assets/StaffImg/St7.png";
import St8 from ".././assets/StaffImg/St8.png";
import St9 from ".././assets/StaffImg/St9.png";
import St10 from ".././assets/StaffImg/St10.png";
import St11 from ".././assets/StaffImg/St11.png";
import St12 from ".././assets/StaffImg/St12.png";
import S13 from ".././assets/StaffImg/S13.png";


// Images

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
import Profile from "../Components/Profile";
import Footer from "../Components/Footer";

const Committee = () => {
  return (
    <Box>
      <Container>
        <Text
          style={{
            fontSize: "30px",
            color: "#10243f",
            fontWeight: "700",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Organizational Structure
        </Text>
        <Box mt={32}>
          <Paper>
            <Flex justify="center">
              <Profile
                avatar={S13}
                name="Prof. (Dr.) Jaspal Singh Sandhu"
                job="Vice chancellor"
              />
            </Flex>
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
              <Profile
                avatar={St12}
                name="Prof. Sarabjot Singh behl"
                job="Nodal Officer Rusa 2.0"
              />

              <Profile
                avatar ={St8}
                name="Prof. (Dr) P.K. Pati"
                job="Coordinator, GJCEI"
              />
            </Flex>

            <Text>
              <div class="section">
                <div className="container">
                  <div className="grid-row">
                    <div className="grid-item"></div>
                  </div>
                  <div className="grid-row">
                    <div class="grid-item"></div>
                    <div className="grid-item"></div>
                  </div>
                </div>
                <div class="container">
                  <Text
                    style={{
                      fontSize: "30px",
                      color: "#10243f",
                      fontWeight: "700",
                      marginTop: "40px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Faculty Mentors
                  </Text>
                  <div class="grid-row">
                    <div class="grid-item">
                      <Profile
                        avatar={St2}
                        name="Ms. Harkirandeep Kaur"
                        job="Incharge IPR Cell GJCEI"
                        Department="Department: Law"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        avatar={St1}
                        name="Dr. Swati Mehta"
                        job="Startup and Promotions"
                        Department="Department: Economics"
                      ></Profile>
                    </div>

                    <div className="grid-item">
                      <Profile
                        avatar={St3}
                        name="Dr. Prabhpreet Singh"
                        job="Facility Mentor for Startup Activities"
                        Department="Department: Chemistry"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        avatar={St10}
                        name="Dr. Kuldeep Singh Brar"
                        job="Faculty Mentor for Discovery Lab"
                        Department="Department: Electronics"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        avatar={St11}
                        name="Dr. Rajdeep Singh Sohal"
                        job="Faculty Mentor for Discovery Lab"
                        Department="Department: Electronics"
                      ></Profile>
                    </div>
                  </div>
                </div>
                <div className="container" style={{ marginTop: "20px" }}>
                  <Text
                    style={{
                      fontSize: "30px",
                      color: "#10243f",
                      fontWeight: "700",
                      marginTop: "40px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Staff
                  </Text>
                  <div className="grid-row">
                    <div class="grid-item">
                      <Profile
                        avatar={St4}
                        name="Dr. Hardesh Kumar"
                        job="Senior Technician"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        avatar={St9}
                        name="Pardeep Dutta"
                        job="Data Entry Operator"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        avatar={St5}
                        name="Gurmeet Kaur"
                        job="Data Entry Operator"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        avatar={St6}
                        name="Bikram Singh"
                        job="Staff"
                      ></Profile>
                    </div>

                  </div>
                </div>

                <Container>
              
                  <Box mt={32}>
                   
                  </Box>
                </Container>
              </div>
            </Text>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Committee;

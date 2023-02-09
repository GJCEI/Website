import { Box, Text, UnstyledButton,Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconMail,
  IconPhone
} from "@tabler/icons";
import Logo from ".././assets/Logo/logo.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "70px" }}>
      <footer>
        <div class="footer">
          <div className="Logo">
            <img src={Logo} className="LogoImg"></img>
            <Text style={{ fontSize: "30px", color: "white" }}>GJCEI</Text>
          </div>

          <div class="row">
            <Text style={{ fontSize: "20px", marginBottom: "16px" }}>
              Lets Connect
            </Text>
            <a href="https://www.instagram.com/gjcei_gndu/">
              <IconBrandInstagram style={{ fontSize: "35px" }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100070405665356">
              <IconBrandFacebook style={{ fontSize: "35px" }} />
            </a>
            <a href="https://twitter.com/GJCEI1">
              <IconBrandTwitter style={{ fontSize: "35px" }} />
            </a>
          </div>
      

          <Box class="row">
            <ul>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/AboutUs")}
                >
                  Mandate
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/NewsEvents")}
                >
                  News & Events
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/Activities")}
                >
                  Activities
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/ContactUs")}
                >
                  Contact Us
                </UnstyledButton>
              </li>
            </ul>

          </Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.9534497968935!2d74.82288674736114!3d31.636359216362447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196524044e0c05%3A0xd8dfd2fb2fa3406c!2sGuru%20Nanak%20Dev%20University%20Museum!5e0!3m2!1sen!2sin!4v1675925834357!5m2!1sen!2sin" style={{height:"100%",width:"500px"}}></iframe>

          <div class="row">GJCEI Copyright © 2022</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

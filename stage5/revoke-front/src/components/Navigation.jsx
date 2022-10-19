import { Navbar, Container, Nav } from "react-bootstrap";
import config from "../config/config.json"
export const Navigation = () => {
  return (
    <Navbar bg={config.style.primaryColor} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={config.logoUrl_small}
            height="40"
            alt=""
          />
        </Navbar.Brand>     
       
        <b
                style={{
                  color:config.features.bottomBarColors[1],
                  fontSize: "large",
                  textAlign: "right"
                  
                }}
              >
               Revoke Verifable Credentials App
              </b>
       
      </Container>
    </Navbar>
  );
};

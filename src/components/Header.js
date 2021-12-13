import { StdHeader, Nav } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Logo } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"

export default function header() {
    return (
        
        <StdHeader>
            <Container>
          <Nav>
              <Logo src='./images/logo.svg' />
              <Button>Try it free</Button>
          </Nav>
        </Container>
        </StdHeader>
    )
}

import { StdHeader, Nav, Image } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
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
          <Flex>
              <div>
                  <h1>
                      Build the Community
                  </h1>
                  <p>
                      lorem ipsum
                      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

                  </p>

                  <Button bg='#ff0099' color='#fff'>
                      Get Started For Free
                  </Button>
              </div>

              <Image src="./images/illustration-mockups.svg" alt="">

              </Image>
          </Flex>
        </Container>
        </StdHeader>
    )
}

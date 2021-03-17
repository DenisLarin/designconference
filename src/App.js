import React from 'react';
import MainSection from "./sections/main/MainSection";
import Container from "./HOC/Container";
import Wrapper from "./HOC/Wrapper";
import Menu from "./components/menu/Menu";

function App(props) {
    return (
        <Container>
            <Wrapper>
                <Menu/>
                {/*<MainSection/>*/}
            </Wrapper>
        </Container>
    );
}

export default App;
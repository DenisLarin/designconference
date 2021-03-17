import React from 'react';
import Container from "./HOC/Container";
import Wrapper from "./HOC/Wrapper";
import Menu from "./components/menu/Menu";

function App(props) {
    return (
        <Container>
            <Wrapper>
                <Menu/>
            </Wrapper>
        </Container>
    );
}

export default App;
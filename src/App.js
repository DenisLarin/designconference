import React, {lazy, Suspense} from 'react';
import Container from "./HOC/Container";
import Wrapper from "./HOC/Wrapper";
import Menu from "./components/menu/Menu";
// import MainSection from "./sections/main/MainSection";

const MainSection = lazy(()=>import('./sections/main/MainSection'))

function App(props) {
    return (
        <Container>
            <Wrapper>
                <Menu/>
                <Suspense fallback={null}>
                    <MainSection/>
                </Suspense>
            </Wrapper>
        </Container>
    );
}

export default App;
import React from 'react';
import Container from "../../HOC/Container";
import defaultClasses from './../../styles/default.module.scss'
import Wrapper from "../../HOC/Wrapper";
import Header from "../../components/header/Header";
import mainBGImage from './../../public/images/mainScreenBG.png'


function MainSection(props) {
    return (
        <Container style={{
            backgroundImage: `url(${mainBGImage})`,
            height: '768px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} classNames={[defaultClasses.container]}>
            <Wrapper className={defaultClasses.wrapper}>
                <Header fontSize={'80px'} color={"#fff"}>Дизайн конференция</Header>
            </Wrapper>
        </Container>
    );
}

export default MainSection;
import React from 'react';
import Container from "../../HOC/Container";
import defaultClasses from './../../styles/default.module.scss'
import Wrapper from "../../HOC/Wrapper";
import Header from "../../components/header/Header";
import mainBGImage from './../../public/images/mainScreenBG.png'
import PostHeader from "../../components/postHeader/PostHeader";
import classes from './main.module.scss'

import main_1 from './../../public/images/main_1.png'
import main_2 from './../../public/images/main_2.png'
import main_3 from './../../public/images/main_3.png'



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
                <PostHeader color={'#fff'}>Главное событие в дизайне и архитектуре <br/> для профессионалов</PostHeader>
                <div className={classes.imagesLinks}>
                    <div className={classes.imagesLink__item}>
                        <img className={classes.imagesLink__item_image} src={main_1} alt="main_1"/>
                        <p className={classes.imagesLink__item_text}><span className={classes.imagesLink__item_line}/>О
                            бизнесе и творчестве</p>
                    </div>
                    <div className={classes.imagesLink__item}>
                        <img className={classes.imagesLink__item_image} src={main_2} alt="main_2"/>
                        <p className={classes.imagesLink__item_text}><span className={classes.imagesLink__item_line}/>О
                            трудных клиентах и вдохновении</p>
                    </div>
                    <div className={classes.imagesLink__item}>
                        <img className={classes.imagesLink__item_image} src={main_3} alt="main_3"/>
                        <p className={classes.imagesLink__item_text}><span className={classes.imagesLink__item_line}/>О
                            принципах работы, пользе и результатах</p>
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}

export default MainSection;
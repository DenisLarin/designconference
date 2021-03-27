import React from 'react';
import classes from './menu.module.scss'
import Container from "../../HOC/Container";
import Wrapper from "../../HOC/Wrapper";
import Button from "../button/Button";

function Menu(props) {
    return (
        <div className={classes.menu}>
            <Container>
                <Wrapper className={classes.menuWrapper}>
                    <div >
                        <h1 className={classes.header}>DESIGN CONFERENCE</h1>
                        <div className={classes.links}>
                            <ul className={classes.links__container}>
                                <li className={[classes.link__item, classes.link__item_active].join(' ')}>
                                    <a href="#">О конференции</a>
                                </li>
                                <li className={classes.link__item}>
                                    <a href="#">Спикеры</a>
                                </li>
                                <li className={classes.link__item}>
                                    <a href="#">Программа</a>
                                </li>
                                <li className={classes.link__item}>
                                    <a href="#">Фотогалерея</a>
                                </li>
                                <li className={classes.link__item}>
                                    <a href="#">Организаторы</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.menuFooter}>
                        <span className={classes.date}>7-9 Апреля</span>
                        <span className={classes.place}>Культурный центр "ЗИЛ"</span>
                        <Button className={classes.button}>Зарегистрироваться</Button>
                    </div>
                </Wrapper>
            </Container>
        </div>
    );
}


export default Menu;
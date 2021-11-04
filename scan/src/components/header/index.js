import React from 'react';
import { useHistory } from 'react-router';
import { ImgTheme, StyledHeader } from '../../config/styled';
import { darkTheme, lightTheme } from '../../config/thems';
import {BsMoonFill} from 'react-icons/bs'


const Header = ({currentTheme, setCurrentTheme}) => {

    // eslint-disable-next-line
    const switchTheme = (theme) => {
        setCurrentTheme(theme)
        localStorage.setItem("theme", theme.name)
    }
    const history = useHistory()

    return (
        <StyledHeader>
            { currentTheme.name !== "ligthTheme" ? <ImgTheme src="https://image.flaticon.com/icons/png/512/25/25019.png" onClick={() =>switchTheme(lightTheme)} /> : null}
            { currentTheme.name !== "darkTheme" ? <BsMoonFill size="100px" onClick={() =>switchTheme(darkTheme)}/> : null}
            <p onClick={ () => history.push(`/`)}>Home</p>
        </StyledHeader>
    );
};

export default Header;
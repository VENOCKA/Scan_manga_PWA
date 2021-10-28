import React from 'react';
import { useHistory } from 'react-router';
import { ImgTheme, StyledHeader } from '../../config/styled';
import { darkTheme, lightTheme } from '../../config/thems';


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
            { currentTheme.name !== "darkTheme" ? <ImgTheme src="https://img2.freepng.fr/20180503/jzw/kisspng-lunar-phase-crescent-moon-symbol-clip-art-moon-clipart-5aeabac3cfacf1.1305081315253326758507.jpg" onClick={() =>switchTheme(darkTheme)}/> : null}
            <p onClick={ () => history.push(`/`)}>Home</p>
        </StyledHeader>
    );
};

export default Header;
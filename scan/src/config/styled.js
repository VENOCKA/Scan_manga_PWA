import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    min-height: 100px;
    max-height: 100px;
    background-color: ${props => props.theme.primary};
`

const ImgTheme = styled.img`
    max-height: 100px;
`

const InfoManga = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ImgHome = styled.img`
    max-width: 200px;
    min-width: 200px;
`

const NameManga = styled.p`

`

const DescriptionManga = styled.p`
    padding: 20px;
`

const ListManga = styled.div``

const ChapitreP = styled.p`
    font-weight: bold;
`

const ScanNb = styled.p``

const ScanImg = styled.img`
    width: 100%;
`

export {StyledHeader, ImgTheme, InfoManga, ImgHome, NameManga, DescriptionManga, ListManga, ChapitreP, ScanNb, ScanImg}
import React from 'react';
import { useHistory } from 'react-router';
import Api from '../components/api';
import { ImgHome, InfoManga, NameManga } from '../config/styled';

const Home = () => {

    const history = useHistory()

    return (
        <>
            {
            Api.map((item) => (
                <InfoManga key={item.id} onClick={ () => history.push(`/${item.nom}`)}>
                    <ImgHome src={item.ImagePP} />
                    <NameManga> {item.nom} {item.nombreScan}</NameManga>
                </InfoManga>
            ))
            
            }
        </>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Api from '../components/api';
import { ChapitreP, DescriptionManga, ImgHome, InfoManga, ListManga, NameManga, ScanNb } from '../config/styled';

const Manga = () => {

    const {nom} = useParams()
    const [manga, setManga] = useState({})
    const [scan, setScan] = useState([])
    const newArray = []
    
    useEffect(() => {
        Api.forEach((item) => {
            if (item.nom === nom) {
                setManga(Api[item.id]);
            }
        })
    },[nom])

    useEffect(() => {
        for (let e = 1; e <= manga.nombreScan; e++) {
            newArray.push(e)
            console.log("boucle") 
        }
        newArray.reverse()
        console.log(newArray)
        setScan(newArray)
    // eslint-disable-next-line
    },[manga])

    const history = useHistory()

    return (
        <InfoManga>
            <NameManga>{manga.nom}</NameManga>
            <ImgHome src={manga.ImagePP}/>
            <DescriptionManga>{manga.Description}</DescriptionManga>
            <ChapitreP>Chapitres</ChapitreP>
            <ListManga>
                {
                    scan.map((item) => (
                        <ScanNb key={item} onClick={ () => history.push(`/${manga.nom}/${item}`)}>{item}</ScanNb>
                    ))
                }
                
            </ListManga>
        </InfoManga>
    );
};

export default Manga;
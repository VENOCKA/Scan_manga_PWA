import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Api from '../components/api';
import { ScanImg } from '../config/styled';

const Scan = () => {

    // eslint-disable-next-line
    const {nom, nombre} = useParams()
    const [manga, setManga] = useState({})


    useEffect(() => {
        Api.forEach((item) => {
            if (item.nom === nom) {
                setManga(Api[item.id]);
            }
        })
    },[nom])

    return (
        <div>
            { manga.ScanImage !== `` ? <ScanImg src={manga.ScanImage}/> : <p>Scan Non Disponible</p>}
        </div>
    );
};

export default Scan;
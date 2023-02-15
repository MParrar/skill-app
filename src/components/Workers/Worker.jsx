import React from 'react'
import './worker.css'
import './listWorkers.css'
import { useNavigate } from "react-router-dom";
import { imgDefault } from '../../Constant';

export const Worker = ({ name, img, id }) => {
    const navigate = useNavigate()
    return (
        <div className="workers__box"
            onClick={() => navigate("/stats")}
        >
            <img
                className='img__worker'
                src={imgDefault} alt={name} width={'200px'} />
            <h1 className='name__worker'>{name}</h1>
        </div>
    )
}

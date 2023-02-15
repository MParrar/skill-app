import React from 'react'
import './team.css'
import './listTeam.css'
import { useNavigate } from "react-router-dom";

export const Team = ({ name, img, id }) => {
    const navigate = useNavigate()
    return (
        <div className="team__box"
            onClick={() => navigate("/workers")}
        >
            <img

                className='img__team'
                src={img} alt={name} width={'70%'} />
            <h1 className='name__team'>{name}</h1>
        </div>
    )
}

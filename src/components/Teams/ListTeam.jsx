import React from 'react'
import { Teams } from '../../Database/Teams'
import './listTeam.css'
import { Team } from './Team'

export const ListTeam = () => {
    console.log("ENTRA")
    return (
        <div className="container">
            <>
                {Teams.map(({ id, name, img }) => (
                    <Team
                        key={id}
                        name={name}
                        img={img}
                        id={id}
                    />

                ))

                }

            </>
        </div >
    )
}

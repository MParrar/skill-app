import React from 'react'
import { imgDefault } from '../../Constant'
import { Graphic } from './Graphic'
import './stats.css'
export const Stats = () => {
    return (
        <>
            <div class="stats__container">
                <div class="stats__column">
                    <div className='stats__info'>
                        <img
                            className='stats__img'
                            src={imgDefault}
                            alt='img'
                        />
                    </div>
                    <div className=''>
                        <div className='stats__worker'>
                            <h2>Name</h2>
                            <h2>Profile</h2>
                            <h2>Level</h2>
                            <h2>Date of admission</h2>

                        </div>
                    </div>
                </div>
                <div class="stats__column">
                    <div className='stats__graphic'>
                        <Graphic />

                    </div>
                </div>
            </div>
        </>
    )
}

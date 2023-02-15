import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
export const data = {
    labels: ['backend language', 'bd language', 'Infraestructure', 'comunication', 'leader', 'analisis'],
    datasets: [
        {
            label: 'Senior backend',
            data: [8.1, 8, 8, 9, 9, 9],
            backgroundColor: 'rgba(33,32,35)',
            borderColor: 'rgba(121, 205, 3, 0.2)',
            borderWidth: 4,
        },
    ],
};
export const Graphic = () => {

    return <Radar data={data} />;

}

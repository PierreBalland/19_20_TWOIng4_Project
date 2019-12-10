import './Nav.css';
import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';
import axios from "axios";

const API_URL_bedroom="http://localhost:3000/capteurs/location/bedroom";
const API_URL_livingroom="http://localhost:3000/capteurs/location/livingroom";
const API_URL_entrance="http://localhost:3000/capteurs/location/entrance";
const API_URL_bathroom="http://localhost:3000/capteurs/location/bathroom";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

 class Pie1 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

     constructor(props) {
         super(props);
         //this.state = this.louis();
     }

/*
     async louis() {
            await axios.get(`${API_URL_bedroom}`)
                 .then(function(response) {
                         const truc = response.data;
                         const main = truc.length;
                         //alert(main);
                         data[0].value=main;
                         //alert(data[0].value);
                     }
                 )
                 .catch(console.error);
           await  axios.get(`${API_URL_entrance}`)
                 .then(function(response) {

                     const truc1=response.data;
                     const main1 =truc1.length;
                     data[1].value=main1;
                 })
                 .catch(console.error);
           await  axios.get(`${API_URL_bathroom}`)
                 .then(function(response) {

                     const truc2=response.data;
                     const main2 =truc2.length;
                     data[2].value=main2;
                 })
                 .catch(console.error);
            await axios.get(`${API_URL_livingroom}`)
                 .then(function(response) {

                     const truc3=response.data;
                     const main3 =truc3.length;
                     data[3].value=main3;
                 })
                 .catch(console.error);
          // alert(data[0].value);
         return data;
         }*/
/*
fonction(){
         this.setState(data);
}*/

     render() {

        return (
            <div>
            <PieChart width={400} height={400}>

                <Pie
                    data={data}
                    cx={180}
                    cy={150}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>

            </PieChart>
            </div>
        );
    }
}

export default Pie1;
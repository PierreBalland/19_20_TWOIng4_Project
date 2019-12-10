import './Nav.css';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import axios from "axios";

const data = [
    {
        name: '18-24', uv: 100, pv: 2400, fill: '#8884d8',
    },
    {
        name: '25-29', uv: 50, pv: 4567, fill: '#83a6ed',
    },

];

const style = {
    top: 0,
    left: 200,
    lineHeight: '24px',
};


 class Pcircle extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';
    /* async componentDidMount() {
         // alert("hello");
         // Call API
         // console.log("Bjr");
         await axios.get(`${API_URL}`,{crossdomain: true})
             .then(({ data }) => {
                 // console.log(data);
                 const main =data.length;
                 document.getElementById('pierre').innerHTML=main;
             })
             .catch(console.error);
         await axios.get(`${API_URL2}`,{crossdomain: true})
             .then(({ data }) => {
                 // console.log(data);
                 const main =data.length;
                 document.getElementById('pierre2').innerHTML=main;
             })
             .catch(console.error);

     }*/
    render() {
        return (
            <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={50} data={data}>
                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                <Legend iconSize={10} width={100} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style}  />
            </RadialBarChart>
        );
    }
}
export default Pcircle;
import React from "react";
import {
    ResponsiveContainer, YAxis, XAxis, CartesianGrid, Legend, Label, Scatter, Line, ComposedChart} from "recharts";
import { CustomizedProdDot, CustomizedGddDot } from "./CustomizedDots";
import * as data from "./line.json";

const yprod_estimado = data.yprod_estimado;
const gdd_estimado = data.gdd_estimado;
const yprod_observado = data.yprod_observado;
const gdd_observado = data.gdd_observado;

const renderBlackLegendText = (value) => {
       return <span style={{ color: "black" }}>{value}</span>;
};

function Chart() {
    
    return (
 <ResponsiveContainer>
            <ComposedChart >
                <Legend 
                wrapperStyle={{left: 0, right: 0, marginLeft: "auto", marginRight: "auto", width: 500}} 
                verticalAlign="bottom" align="left"
                formatter={renderBlackLegendText} />
                
                <CartesianGrid/>

                <XAxis dataKey="dias" type="number" domain={[0, "dataMax + 10"]} tickCount={6} minTickGap={30} />

                <YAxis yAxisId="prod" tickCount={14}>
                    <Label id="prod-label" value="Produtividade" angle={-90} position="insideLeft" fontFamily="sans-serif"/>
                </YAxis>

                <YAxis yAxisId="gdd" orientation="right">
                    <Label id="gdd-label" value="Graus Dia Acumulado (°C)" angle={-90} position="insideRight" fontFamily="sans-serif"/>
                </YAxis>

                <Scatter dataKey="value" name="Produtividade Simulada (sc/ha)" data={yprod_estimado} yAxisId="prod"
                    fill="rgb(0, 35, 102, 0.5)" shape={<CustomizedProdDot/>}
                />

                <Scatter dataKey="value" name="Graus Dia Acumulado Simulado" data={gdd_estimado} yAxisId="gdd"
                    fill="rgb(255, 76, 41, 0.5)" shape={<CustomizedGddDot/>}
                   />

                <Line dataKey="value" name="Produtividade Atual (sc/ha)" data={yprod_observado} yAxisId="prod" 
                    stroke="rgb(0, 35, 102)" strokeWidth={4} legendType="plainline" dot={false}
                />

                <Line dataKey="value" name="Graus Dia Acumulado Atual" data={gdd_observado} yAxisId="gdd" 
                    stroke="rgb(255, 76, 41)" strokeWidth={4} legendType="plainline" dot={false}
                />
            </ComposedChart>
 </ResponsiveContainer>
    )};

export default Chart;

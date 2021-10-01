import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return (<div class="fixed-bottom nav justify-content-center">
    <p class="text-white">Carefully Designed for Precision by WaterTruth - {year}</p>
    </div>);
}

export default Footer;
window.onload = function() {
    var map = L.map("map", {
        center: [41.049134, 29.031836],
        zoom: 13
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    //5
    Data = [{ x: 130, y: 325000 }, { x: 110, y: 286000 }, { x: 180, y: 468000 }, { x: 140, y: 294000 }, { x: 260, y: 624000 }, { x: 150, y: 405000 }, { x: 280, y: 644000 }, { x: 140, y: 364000 }, { x: 260, y: 520000 }, { x: 170, y: 340000 }, { x: 140, y: 294000 }, { x: 200, y: 460000 }, { x: 300, y: 870000 }, { x: 190, y: 475000 }, { x: 110, y: 319000 }, { x: 240, y: 504000 }, { x: 190, y: 551000 }, { x: 260, y: 754000 }, { x: 250, y: 700000 }, { x: 300, y: 660000 }, { x: 220, y: 484000 }, { x: 140, y: 322000 }, { x: 290, y: 638000 }, { x: 120, y: 276000 }, { x: 110, y: 253000 }, { x: 260, y: 754000 }, { x: 210, y: 441000 }, { x: 130, y: 377000 }, { x: 140, y: 294000 }, { x: 120, y: 288000 }, { x: 290, y: 580000 }, { x: 150, y: 330000 }, { x: 300, y: 870000 }, { x: 160, y: 448000 }, { x: 300, y: 870000 }, { x: 180, y: 432000 }, { x: 230, y: 552000 }, { x: 120, y: 240000 }, { x: 140, y: 364000 }, { x: 120, y: 324000 }, { x: 270, y: 675000 }, { x: 300, y: 690000 }, { x: 230, y: 575000 }, { x: 270, y: 756000 }, { x: 290, y: 580000 }, { x: 120, y: 348000 }, { x: 150, y: 360000 }, { x: 150, y: 360000 }, { x: 290, y: 812000 }, { x: 130, y: 260000 }];

    var coordinates = [
        {x: 41.114120, y:29.028523}, {x:41.113909, y:29.032342}, {x:41.117132, y:29.022607}, {x:41.107440, y:28.995885}, {x: 41.08262, y:29.028121}, {x: 41.082156, y:29.025278}, {x: 41.083789, y:29.043794}, {x: 41.083866, y:29.041064}, {x:41.094625, y:29.035509}, {x:41.083134, y:29.037135}, {x:41.063883, y:29.025909}, {x:41.058887, y:29.028749}, {x:41.052773, y:29.024689}, {x:41.044110, y:29.001858}, {x:41.035515, y:28.985071}, {x:41.028010, y:28.978854}, {x:41.025489, y:28.971894}, {x:41.016686, y:28.972285}, {x:41.009419, y:28.970443}, {x:41.006561, y:28.965953}, {x:41.012526, y:28.956595}, {x:41.017553, y:28.959750}, {x:41.030194, y:29.032140}, {x:41.028855, y:29.022765}, {x:41.026317, y:29.018119}, {x:41.024552, y:29.016209}, {x:41.021755, y:29.010833}, {x:41.017626, y:29.011159}, {x:41.017473, y:29.016325}, {x:41.021403, y:29.021384}, {x:41.015476, y:29.028272}, {x:41.018908, y:29.029849}, {x:41.029841, y:29.036548}, {x:41.009296, y:29.038144}, {x:40.997846, y:29.045901}, {x:41.010608, y:29.058013}, {x:41.025896, y:29.037951}, {x:41.007766, y:28.949072}, {x:40.994130, y:29.029223}, {x:40.993858, y:29.040053}, {x:41.009198, y:29.034777}, {x:41.039126, y:29.093329}, {x:41.033027, y:29.092310}, {x:41.039547, y:29.075918}, {x:40.981178, y:29.121128}, {x:41.010482, y:28.926011}, {x:41.021426, y:29.028297}, {x:41.045367, y:28.981011}, {x:41.085592, y:28.987331}, {x:41.080749, y:28.980125}];

    let markers = [];
    let temp = [];
    let str = "";
    for(let i = 0;i<50;i++){
        str = "";
        temp[0] = coordinates[i].x;
        temp[1] = coordinates[i].y;  
        str += Data[i].x + "m²- " + Data[i].y/1000+  ".000" + "TL";
        markers[i] = L.marker(temp).bindPopup(str).addTo(map); 
    }
    
}



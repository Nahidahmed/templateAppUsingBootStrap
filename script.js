function updateGreeting(){
    $('#greetings').html('Hello, World!!')
}


updateGreeting();

var Cirlce = {
    x: 300,
    y:300,
    r:60,
    stroke : 'blue',
    width:4,
    fill: 'yellow'
}

var svg = d3.select("svg");

svg.select("circle")
.attr("cx",Cirlce.x)
.attr("cy",Cirlce.y)
.attr("r",Cirlce.r)
.style("stroke",Cirlce.stroke)
.style("stroke-width",Cirlce.width)
.style("fill",() =>{
    if(Cirlce.r < 50) return 'yellow';
    else return 'green';});

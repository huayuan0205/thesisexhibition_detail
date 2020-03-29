//svg width&height
var width = 600;
var height = 600;
var margin = { t: 20, l: 20, b: 40, r: 10 };

//svg
var svg = d3.select('#viz').append('svg') 
  .attr('width',width)
  .attr('height',height)
  .style("border", "1px solid grey");

var g_img = svg.append('g')
  .attr('class','g_img')
  .attr('transform', `translate(0, ${margin.t})`);
var g_text = svg.append('g')
  .attr('class','g_text')
  .attr('transform', `translate(0, 240)`);


var myImage = g_img.append("svg:image")
    .attr('width',"100%")
    .attr('height',"50%") 
    .attr('x',10)
var imgTable = g_text.append('text')
    .attr('class', 'title openvis-title')
    .attr('x', '100px')
    .attr('y', '10px')
    .style('fill',"red")
   


function p1(){
  myImage
    .attr('xlink:href',"img/img1.png");

   imgTable.text("Problem");

}

function p2(){
    myImage
    .attr('xlink:href',"img/img3.png")
  
    imgTable.text("222");
    
   
}

function p3(){
  myImage
  .attr('xlink:href',"img/img4.png")

  imgTable.text("333");
}

function p4(){
  myImage
  .attr('xlink:href',"img/img6.jpg")

  imgTable.text("444");
}

//waypoints scroll constructor
function scroll(n, offset, func1, func2){
  return new Waypoint({
    element: document.getElementById(n),
    handler: function(direction) {
       direction == 'down' ? func1() : func2();
    },
    //start 75% from the top of the div
    offset: offset
  });
};

//triger these functions on page scroll
new scroll('div2', '20%', p2, p1);
new scroll('div4', '25%', p3, p2);
new scroll('div6', '75%', p4, p3);

p1();
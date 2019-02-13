//js
var dataset = [1, 2, 3, 4, 5]



// d3.select('h1').style('color', 'red')

// d3.select('body').append('p').text('Appending this paragraph to the body element')
// d3.select('body').append('p').text('Second paragraph')
// d3.select('body').append('p').text('Third paragraph')

// d3.selectAll('p').style('color', 'blue')

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    // .text('D3 is cool')
    .text(function(d) {return d;})
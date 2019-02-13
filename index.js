//js

d3.select('h1').style('color', 'red')

d3.select('body').append('p').text('Appending this paragraph to the body element')
d3.select('body').append('p').text('Second paragraph')
d3.select('body').append('p').text('Third paragraph')

d3.selectAll('p').style('color', 'blue')
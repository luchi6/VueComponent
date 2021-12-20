import './test.css'
import logo from './background.jpg'

console.log('Hello Webpack2222!')
document.getElementById('root').innerHTML = '<h1>Hello333</h1>'

const image = new Image()
image.src = logo
document.getElementById('root').appendChild(image)
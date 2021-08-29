// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '../styles/hello.scss';
import { COLORS } from '../javascript/constants';

const keys = Object.keys(COLORS);
const randomColor = COLORS[keys[ keys.length * Math.random() << 0]];

interface HelloProps {
  name: string;
}

const Hello = ({name}: HelloProps) => (
  <div>Hello {name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name={randomColor} />,
    document.body.appendChild(document.createElement('div')),
  )
})

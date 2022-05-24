import React, {createElement} from 'react';
import styles from './index.module.scss';

const AboutUs = ({
  title,
  text,
  titleType,
}) => {
  const titleElement = createElement(
    titleType ?? 'h1',
    {className: styles.title},
    title,
  )
  const textElement = createElement(
    'div',
    {className: styles.text},
    text,
  )
  const wrapper = createElement(
    'div',
    {className: 'wrapper'},
    [titleElement, textElement],
  )
  const container = createElement(
    'div',
    {className: styles.AboutUs},
    wrapper,
  )
  return container
}

export default AboutUs

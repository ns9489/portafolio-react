import React from 'react'

export const ItemNavBar = ({ text = 'default', link}) => {
  return (
    <li><a href={link}>{text}</a></li>
  )
}

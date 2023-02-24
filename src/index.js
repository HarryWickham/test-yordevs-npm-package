import React from 'react'
import styles from './styles.module.css'

const footerMessage = [
  'Lovingly crafted',
  'Handmade',
  'Forged in fire',
  'Meticulously designed',
  'Carefully created'
]

export const ExampleComponent = () => {
  return (
    <div>
      © {new Date().getFullYear()},{' '}
      {footerMessage[Math.floor(Math.random() * footerMessage.length)]} by{' '}
      <a href='https://yordevs.com' target='_blank'>
        Yordevs
      </a>
    </div>
  )
}

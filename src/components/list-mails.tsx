import React from 'react'

import { Mails } from './../types'

interface ListMailsProps {
  mails: Array<Mails>,
  handler: any
}

export default function ListMails ({ mails, handler }: ListMailsProps): JSX.Element {
  return (
    <ul>
      {mails.map(mail => {
        return <li onClick={() => handler(mail.id)} key={mail.id}>[{mail.subject}]</li>
      })}
    </ul>
  )
}
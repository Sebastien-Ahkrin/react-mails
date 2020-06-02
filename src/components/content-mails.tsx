import React from 'react'

import { Mails } from './../types'

interface ContentMailsProps {
  mails: Array<Mails>,
  toSee: number | undefined
}

export default function ContentMails ({ mails, toSee }: ContentMailsProps): JSX.Element {
  if (mails.length === 0) return (<div></div>)
  return (
    <div>
      {(toSee === undefined && <p>Cliquez sur un message pour le voir ici.</p>)}
      {(toSee !== undefined && <p>{mails.find(mail => mail.id === toSee)!.message}</p>)}
    </div>
  )
}
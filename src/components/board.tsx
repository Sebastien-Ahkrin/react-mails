import React, { useReducer, useEffect } from 'react'

import ListMails from './list-mails'
import ContentMails from './content-mails'

import { Mails } from './../types'
import MailsData from './../mails.json'

interface State {
  mails: Array<Mails>
  toSee: number | undefined
}

const DEFAULT_STATE: State = {
  mails: new Array<Mails>(),
  toSee: undefined
}

const StateType = { intitialize: 'INITIALIZE', see: 'SEE_MESSAGE' }
function reducer (state: State, action: { type: string, value: any }): State {
  switch (action.type) {
    case StateType.intitialize:
      return { ...state, mails: action.value }
    case StateType.see:
      return { ...state, toSee: action.value }
    default: throw new Error('')
  }
}

export default function Board (): JSX.Element {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)

  useEffect(() => {
    const mails: Array<Mails> = MailsData
    dispatch({ type: StateType.intitialize, value: mails })
  }, [])

  function handleClick (id: number): void {
    dispatch({ type: StateType.see, value: id })
  }

  return (
    <div>
      <div>
        <p>Liste des mails</p>
        <ListMails mails={state.mails} handler={handleClick} />
      </div>
      <div>
        <p>Contenu du message</p>
        <ContentMails mails={state.mails} toSee={state.toSee} />
      </div>
    </div>
  )
}
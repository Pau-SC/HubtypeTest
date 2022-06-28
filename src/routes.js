import React from 'react'
import { Text, Reply } from '@botonic/react'
import gotCarousel from './actions/got-carousel'
import defaultAnswer from './actions/default-answer'
import getWords from './actions/get-words'

export const routes = [
  {
    path: 'initial',
    text: /hi/i,
    action: () => (
      <>
        <Text>Winter is coming...</Text>
        <Reply payload='starter'>Check houses</Reply>
      </>
    )
  }
,
  {
    path: 'gotCarousel',
    payload: /(starter)/,
    action: gotCarousel
  }
,
  {
    path: 'getWords',
    payload: /getWords/,
    action: getWords
  }
,
  {
    path: 'defaultAnswer',
    text: /.*/,
    action: defaultAnswer
  }
]
import React from 'react'
import { Text, Reply } from '@botonic/react'

import gotCarousel from './actions/got-carousel'
import defaultAnswer from './actions/default-answer'
import getWords from './actions/get-words'

export function routes({ input, session }) {

  if (session.is_first_interaction) {
    return [
      {
        path: 'initial',
        text: /.*/,
        payload: /(gotCarousel)/,
        action: gotCarousel,
      }
    ]
  } else return [
  
    {
      path: 'gotCarousel',
      payload: /(gotCarousel)/,
      action: gotCarousel
    }
  ,
    {
      path: 'defaultAnswer',
      text: /.*/,
      action: defaultAnswer
    }
  ,
    {
      path: 'getWords',
      payload: /(getWords)/,
      action: getWords
    }
  ]
}    





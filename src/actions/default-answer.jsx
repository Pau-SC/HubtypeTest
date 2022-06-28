import React from 'react'
import fetch from 'isomorphic-fetch'

import {Text, RequestContext} from '@botonic/react'

export default class extends React.Component {
      static contextType = RequestContext;

      static async botonicInit({ input, session, params, lastRoutePath }) {
        const url =
          'https://api.quotable.io/random'
        const res = await fetch(url, {
          url: url,
          method: 'GET',
          params: {},
        });

        session.resp = await res.json()
        console.log(session.resp)
      }
  render() {
    return(
        <> 
            <Text>{this.context.session.resp.content}</Text>
        </>
    )

  }
}
import React from 'react'
import fetch from 'isomorphic-fetch'

import {Text, RequestContext} from '@botonic/react'

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({input, session, params, lastRoutePath }) {
    const url =
      'https://www.anapioficeandfire.com/api/houses/' + (parseInt(params.house)+1)
    const res = await fetch(url, {
      url: url,
      method: 'GET',
      params: {},
    });
    session.resp = await res.json()
  }
  render() {
    return(
        <> 
            <Text>Words: {this.context.session.resp.words}</Text>
        </>
    )

  }
}
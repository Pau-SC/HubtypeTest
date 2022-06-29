import React from 'react'
import {
  Text,
  Button,
  Carousel,
  Pic,
  Element,
  Title,
  Subtitle,
  RequestContext
} from '@botonic/react'

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input, session, params, lastRoutePath }) {
    const url =
      'https://www.anapioficeandfire.com/api/houses'
    const res = await fetch(url, {
      url: url,
      method: 'GET',
      params: {},
    });

    var temp = await res.json();
    var result = [];
    var indexList = [];
    for(var i = 0; i<temp.length; i++){
      if(temp[i].words != ""){
        result.push(temp[i])
        indexList.push(i)
        console.log(temp[i])
      }
    }
    session.resp = result
    session.index = indexList

  }
  render() {
    return (
      <>
        <Text>Choose wisely</Text>
        <Carousel>
          {this.context.session.resp.map((e, i) => (
            <Element key={e.name}>
              <Title>{e.name}</Title>
              <Button path={'getWords?house=' + this.context.session.index[i]} >Check words</Button>
            </Element>
          ))}
        </Carousel>
      </>
    )
  }
}
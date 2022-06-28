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

    session.resp = await res.json()
    console.log(session.resp)
  }
  render() {
    // let movies = [
    //   {
    //     name: 'Pulp Fiction',
    //     desc: 'Le Big Mac',
    //     url: 'https://www.imdb.com/title/tt0110912',
    //     pic:
    //       'https://images-na.ssl-images-amazon.com/images/I/51Z95XQDHRL._SY445_.jpg',
    //   },
    //   {
    //     name: 'The Big Lebowski',
    //     desc: 'Fuck it Dude',
    //     url: 'https://www.imdb.com/title/tt0118715',
    //     pic:
    //       'https://upload.wikimedia.org/wikipedia/en/a/a7/Snatch_ver4.jpg',
    //   },
    //   {
    //     name: 'Snatch',
    //     desc: 'Five minutes, Turkish',
    //     url: 'https://www.imdb.com/title/tt0208092',
    //     pic: 'http://www.libertytuga.pt/wp-content/uploads/2011/11/snatch.jpg',
    //   },
    // ]

    return (
      <>
        <Text>Choose wisely</Text>
        <Carousel>
          {this.context.session.resp.map((e, i) => (
            <Element key={e.name}>
              <Title>{e.name}</Title>
              <Button payload='getWords'>Check Words</Button>
            </Element>
          ))}
        </Carousel>
      </>
    )
  }
}
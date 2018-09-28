import React from 'react'
import { withSiteData, withRouteData, Link } from 'react-static'

export default withRouteData(withSiteData(({posts}) => {
  console.log(posts);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Corporate Finance Notes</h1>
      <h3 style={{ textAlign: 'center' }}>By: <a href="https://www.twitter.com/chrisjpatty">@chrisjpatty</a></h3>
      <ul>
        {
          posts.map((post, i) => (
            <li key={i}>
              <Link to={`/notes/${post.data.slug}`}>{post.data.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}))

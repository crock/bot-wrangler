import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import img from "../images/robot.png"

const RecentPost = styled.div`
    width: 100%;
    height: 100px;
    max-width: 300px;
    box-shadow: rgb(236, 236, 236) 3px 3px 10px 0;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;

    img {
        margin-bottom: 0;
        margin-right: 15px;
        width: 48px;
        height: 48px;
    }
`

const Widget = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h5 {
        font-size: 1.35rem;
        font-weight: bold;
    }
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.75rem;
`

const PostTitle = styled(Link)`
    text-decoration: none;
    color: #F46912;
    font-weight: bold;
`

const PostDate = styled.small`
    color: grey;
    text-transform: uppercase;
`

const RecentPosts = () => (
        <StaticQuery
          query={graphql`
            query RecentPostsQuery {
                allTumblrPost(limit: 5) {
                    edges {
                        node {
                            id
                            title
                            date
                            slug
                            type
                        }
                    }
                }
            }
          `}
          render={data => {
            return (
                <Widget className="recent-posts">
                    <h5>Recent Posts</h5>
                    {
                        data.allTumblrPost.edges.map(edge => {
                            const { node } = edge
                            const post = node
                            return (
                                <RecentPost id={post.id} key={post.id}>
                                    <img src={img} alt="robot emoji"/>
                                    <TextGroup>
                                        <PostTitle to={`/blog/${post.slug}`} className="post-title">{post.title}</PostTitle>
                                        <PostDate className="post-date">{ new Date(post.date).toDateString() }</PostDate>
                                    </TextGroup>
                                </RecentPost>
                            )
                        })
                    }
                </Widget>
            )
          }}
        />
)

export default RecentPosts
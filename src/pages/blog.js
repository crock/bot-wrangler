import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledPost = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px;
    box-shadow: rgb(236, 236, 236) 3px 3px 10px 0;
    border-radius: 6px;
    margin-bottom: 25px;
`

const StyledLink = styled(Link)`
    width: 200px;
    height: 40px;
    line-height: 40px;
    border: none;
    border-radius: 6px;
    background-color: #F46912;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
`

const Blog = () => {

    const data = useStaticQuery(graphql`
        query PostsQuery {
            allTumblrPost {
                edges {
                    node {
                        id
                        title
                        slug
                        date
                        summary
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            {
                data.allTumblrPost.edges.map(edge => {
                    const { node } = edge
                    const post = node
                    return (
                        <StyledPost className="card post-card" id={post.id} key={post.id}>
                            <h2>{post.title}</h2>
                            <span className="post-meta">{ new Date(post.date).toLocaleDateString() }</span>
                            <div dangerouslySetInnerHTML={{ __html: post.summary }}></div>
                            <StyledLink to={`/blog/${post.slug}`}>Read More</StyledLink>
                        </StyledPost>
                    )
                })
            }
            
        </Layout>
    )
}

export default Blog
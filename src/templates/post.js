import React from 'react'
import styled from "styled-components"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostTitle = styled.h1`
    font-weight: bold;
    line-height: 1.25;
    color: black;
    font-size: 1.75rem;
`

const PostMeta = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    color: #c2c2c2;
    margin-bottom: 25px;

    span {
        padding: 0 10px;

        &:first-of-type {
            padding-left: 0;
        }

        a {
            color: #88e637;
            text-decoration: none;
        }
    }
`

const PostContent = styled.div`
    width: 100%;
    line-height: 1.75;
    // text-align: justify;
    // text-justify: inter-word;

    a {
        color: #88e637;
        text-decoration: none;
    }

    pre {
        background-color: black;
        color: lime;
    }
`

const Post = ({ pageContext }) => {
    const { id, title, content, slug, date } = pageContext

    let disqusConfig = {
        url: `https://botwrangler.me/blog/${slug}`,
        identifier: id,
        title: title,
    }


    return (
        <Layout>
            <SEO title={title} />
            <PostTitle>{title}</PostTitle>
            <PostMeta className="post-meta">
                <span>{ new Date(date).toLocaleDateString() }</span> 
                { `|` }
                <span><CommentCount config={disqusConfig} placeholder={'...'} /></span>
            </PostMeta>
            <PostContent dangerouslySetInnerHTML={{ __html: content }}></PostContent>
            <Disqus config={disqusConfig} />
        </Layout>
    )
}

export default Post
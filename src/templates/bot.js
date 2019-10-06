import React from 'react'
import styled from "styled-components"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BotTitle = styled.h1`
    font-weight: bold;
    line-height: 1.25;
    color: black;
    font-size: 1.75rem;
`

const BotMeta = styled.div`
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

const BotContent = styled.div`
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

const Bot = ({ pageContext }) => {
    const { id, content, data } = pageContext

    let disqusConfig = {
        url: `https://botwrangler.me/bot/${data.slug}`,
        identifier: id,
        title: data.title,
    }


    return (
        <Layout>
            <SEO title={data.title} />
            <BotTitle>{data.title}</BotTitle>
            <BotMeta className="post-meta">
                <span>Maintained by { data.maintainers.join(", ") }</span> 
                { `|` }
                <span><CommentCount config={disqusConfig} placeholder={'...'} /></span>
            </BotMeta>
            <BotContent dangerouslySetInnerHTML={{ __html: content }}></BotContent>
            <Disqus config={disqusConfig} />
        </Layout>
    )
}

export default Bot
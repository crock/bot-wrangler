import React from "react"
//import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTACard from '../components/cta-card'
//import BotCard from '../components/bot-card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CTACard />
    
  </Layout>
)

export default IndexPage

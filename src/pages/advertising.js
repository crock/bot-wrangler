import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

const AdvertisingPage = () => (
  <Layout>
    <SEO title="Advertising" />
    <h1>Advertising</h1>

    <h2>Sponsored Blog Posts</h2>
    <p>I offer sponsored blog posts that I write or that you provide and I can post. All sponsored blog posts are permanently on the site and are not taken down.</p>

    <h2>Banner Ads</h2>
    <p>I offer three banner ad locations</p>

    <ul>
        <li>Top</li>
        <li>Bottom</li>
        <li>Sidebar</li>
    </ul>
    <ContactForm name="Advertising" />
  </Layout>
)

export default AdvertisingPage
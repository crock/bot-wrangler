import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

const OrderPage = () => (
  <Layout>
    <SEO title="Commissions FAQ" />
    <h1>Commissions</h1>
    <p>Bot commissions are currently closed.</p>
    <ContactForm name="Commissions" />
  </Layout>
)

export default OrderPage
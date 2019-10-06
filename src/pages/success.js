import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => {

    return (
        <Layout>
            <SEO title="Thank you!" />
            <p>Your form responses have been saved and submitted successfully! Thank you for the feedback.</p>
        </Layout>
    )
}

export default SuccessPage
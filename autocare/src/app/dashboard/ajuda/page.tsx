'use client'

import Contato from "@/components/Compartilhados/Contato/Contato"
import FAQ from "@/components/Compartilhados/Faq/Faq"
import Footer from "@/components/Compartilhados/Footer/Footer"
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard/page"

const ajuda = () => {
    return (
        <>
        <HeaderDashboard />
        <FAQ />
        <Contato />
        <Footer />
        </>
    )
}

export default ajuda
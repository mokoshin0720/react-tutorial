import Link from "next/link"
import Layout from "../components/layout"

export default function Other() {
    return (
        <div>
            <Layout header="Next.js" title="Other page">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">This is Other page...!</h5>
                    <Link href="/">
                        <button className="btn btn-primary">&lt;&lt; Back to Top</button>
                        </Link>
                </div>
            </Layout>
        </div>
    )
}
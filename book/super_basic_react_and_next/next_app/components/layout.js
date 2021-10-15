import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossOrigin="anonymous"></link>
            </Head>

            <Header header={props.header} />
            <div className="container">
                <h3 className="my-3 text-primary text-center">{props.title}</h3>
                {props.children}
            </div>
            <Footer footer="copyright Shinya" />
        </div>
    )
}
import Head from "next/head";

export default function Header(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossOrigin="anonymous" />
        </Head>
    )
}
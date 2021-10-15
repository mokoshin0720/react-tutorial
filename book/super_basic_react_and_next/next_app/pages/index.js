import Header from "./header"

export default function Home() {
  let title = "Next.js page"
  let message = "React Next.js sample page"

  return (
    <div>
      <Header title={title}></Header>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        h2 {
          text-align: center;
          margin: 0px 5px;
          color: #aad;
          font-size: 36pt;
          font-weight: bold;
        }

        p {
          text-align: left;
          margin: 0px 5px;
          color: blue;
          font-size: 18pt;
        }
      `}</style>

      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h2 className="my-3 subtitle">{title}</h2>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}.</p>
        </div>
      </div>
    </div>
  )
}

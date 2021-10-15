import Layout from "../components/layout"
import useSWR from "swr"

export default function Home() {
  const func = (...args) => fetch(...args).then(res => res.json())
  const {data} = useSWR('/data.json', func)

  return (
    <div>
      <Layout header="Next.js" title="Top page">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {data != undefined ? data.message : "error..."}
          </h5>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data != undefined ? data.data.map((value, key) => (
                <tr key={key}>
                  <th>{value.name}</th>
                  <th>{value.mail}</th>
                  <th>{value.age}</th>
                </tr>
              )) : <tr><th></th><td>no data.</td></tr>}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  )
}

import { useState } from "react"
import usePersist from "../Persist"

const FindForm = (props) => {
    const [memo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [message, setMessage] = useState("")
    const [mode, setMode] = usePersist("mode", "find")

    const doChange = (e) => {
        setMessage(e.target.value)
    }

    const doAction = (e) => {
        if (message === "") {
            setMode("default")
            return
        }
        let res = memo.filter((item, key) => {
            return item.message.includes(message)
        })
        setFMemo(res)
        setMode("find")
        setMessage("")
    }

    return (
        <form onSubmit={doAction} action="">
            <div className="form-group row">
                <input type="text" className="form-control-sm col" onChange={doChange} value={message} />
                <input type="submit" value="Find" className="btn btn-primary btn-sm col-2" />
            </div>
        </form>
    )
}

export default FindForm
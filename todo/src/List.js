import { useEffect } from "react"

export const List = ({langs}) => {

    useEffect(() => {
        console.log('List');

        return () => {
            console.log("List unmount");
        }
    })
    return (
        <div>
            {
                langs.map((lang, index) => {
                    return <div key={index}>{lang}</div>
                })
            }
        </div>
    )
}
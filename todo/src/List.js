const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'Java',
    'Go'
]

export const List = () => {
    return (
        <div>
            {
                LANGUAGES.map((lang, index) => {
                    return <div key={index}>{lang}</div>
                })
            }
        </div>
    )
}
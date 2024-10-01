const name = ["ankita ", "reshmi", "shushila"]
const App = () => {
    const ans = name.map((key) => {
        return (
            <>
                <h1>{key}</h1>
            </>
        )
    })
    return (
        <>
            <h1>hellow world</h1>
            {ans}
        </>
    )

}
export default App;
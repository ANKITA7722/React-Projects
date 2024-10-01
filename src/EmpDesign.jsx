const EmpDesign=(props)=>{
    return(
        <>
            <tr>
                <th>{props.empno}</th>
                <th>{props.name}</th>
                <th>{props.dept}</th>
                <th>{props.sal}</th>
            </tr>
        </>
    )
}
export default EmpDesign;
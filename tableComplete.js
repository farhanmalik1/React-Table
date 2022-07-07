import React, {Component} from 'react'

const TableHeader = () =>{
  return(
  <thead>
        <tr>
            <th>ID</th>
            <th> First Name</th>
            <th>LastName</th>
            <th>City</th>
          </tr>
        </thead>
  )
}

const TableBody = (props) => {
    const tRows=props.tableData.map((data,index)=>{
        return(
            <tr key={index}>
                <td>{data.ID}</td>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.City}</td>
                

            </tr>

        )
    })
    return(
        <tbody>
      {tRows}
    </tbody>
    )}
//   const tRows = props.tableData.map((row, index)=>{
//     return(
//     <tr key={index}>
//       <td>{row.FirstName}</td>
//       <td>{row.LastName}</td>
//     </tr>
//     )
//   })
//   return(
//     <tbody>
//       {tRows}
//     </tbody>
//   )
// }
class TableComplete extends Component {
  render() {
    const {tableData} = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tableData = {tableData}/>
      </table>
    )
  }
}

export default TableComplete
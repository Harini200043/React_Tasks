import { Component } from "react";

class TableComponent extends Component{
    render(){
        return(
            <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>PhoneNumber</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Harini</td>
        <td>12345678</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Lavanya</td>
        <td>12345667889</td>
      </tr>
      <tr>
        <td>3</td>
        <td>UdayaSri</td>
        <td>12344556</td>
      </tr>
    </table>
        )
    }
}
export default TableComponent;
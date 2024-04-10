
import { employees } from "./list"

const ListShow = ()=>{
    
    return(
        <>
        <table>
            <tr>
               <th>Name</th>
              <th>Designation</th>
               <th>Salary</th>
             </tr>
             {employees
              .filter((val) => {
                return (
                  val.designation === "React Developer" && val.salary > 60000
                );
              })
              .map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{val.name}</td>
                    <td>{val.designation}</td>
                    <td>{val.salary}</td>
                  </tr>
                );
              })}
        </table>
        </>
    )
}
export default ListShow;








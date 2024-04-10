const TableComponent =(bye)=>{
   
    return(
       
        <div>
       <table>
           <tr>
               <th>S.No</th>
               <th>Name</th>
               <th>Image</th>
           </tr>
                {
                    bye.hi.map((eachObject,Index)=>{
                        return(
                            <tr key={Index}>
                               <td>{Index+1}</td>
                               <td>{eachObject.name}</td>
                               <td><img src={eachObject.imageURL} alt="pove" height={100} width={100}/></td>
                            </tr>
                        )
                    })

                }
                </table>
        </div>
    )
}

export default TableComponent;
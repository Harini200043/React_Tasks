import React, { Fragment } from "react"


const ListItems =(har)=>{
    console.log(har)
    return(
        <React.Fragment >
        <li>
       {har.item}
        </li>
        </React.Fragment>

    )
}
export default ListItems

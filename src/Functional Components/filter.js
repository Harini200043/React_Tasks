import { items } from "./list"

 export const FilterComp = () => {
    return (
      <>
        <table>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Image</th>
            </tr>
            {items
              .filter((val) => {
                return val.type === "Fruit";
              })
              .map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{val.name}</td>
                    <td>{val.type}</td>
                    <td><img src={val.img} alt="pove" height={100} width={100}/></td>
                    {/* <td style={{ fontSize: "50px" }}>{val.img}</td> */}
                  </tr>
                );
              })}
        </table>
        <table>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Image</th>
            </tr>
            {items
              .filter((val) => {
                return val.type === "Vegetable";
              })
              .map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{val.name}</td>
                    <td>{val.type}</td>
                    <td><img src={val.img} alt="pove" height={100} width={100}/></td>
                    {/* <td style={{ fontSize: "50px" }}>{val.img}</td> */}
                  </tr>
                );
              })}
        </table>
      </>
    );
  };
  
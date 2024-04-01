import ButtonComponent from "./Class Components/button"; 
import ImageComponent from "./Class Components/image";
import ListComponent from "./Class Components/list";
import TableComponent from "./Class Components/table";
import MyButton from "./Function Components/button";
import MyImage from "./Function Components/image";
import MyList from "./Function Components/list";
import MyTable from "./Function Components/table";

function App() {
  return (
    <div>
      <ImageComponent/>
      <MyImage/>
      <ButtonComponent/>
      <MyButton/> 
      <MyTable/>
      <TableComponent/>
      <MyList/>
      <ListComponent/>


      
    </div>
  );
}

export default App;
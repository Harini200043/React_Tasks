import './App.css';

import TableComponent from './Functional Components/table';

function App() {
  const listItems=[{
    name:"apple",
    type:"fruit",
    isFruit:true,
    imageURL:"https://png.pngtree.com/png-vector/20231129/ourmid/pngtree-hand-drawn-cute-apple-with-a-garland-and-funny-face-merry-png-image_10775301.png",
    id:1
   },{
    name:"mango",
    type:"fruit",
    isFruit:true,
    imageURL:"https://thumbs.dreamstime.com/b/d-funny-cartoon-mango-agriculture-fruit-healthy-food-ai-generated-d-funny-cartoon-mango-agriculture-fruit-304360075.jpg",
    id:2
   },
   {
    name:"potato",
    type:"vegetable",
    isFruit:false,
    imageURL:"https://img.freepik.com/premium-photo/potatoes-underground-plants-cooking_1000714-81.jpg",
    id:3
   }
]

  return (
    <TableComponent hi={listItems}/>
  );
}

export default App;
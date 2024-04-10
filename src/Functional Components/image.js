const CustomImage = (props) =>{
    const width=100;
    return(
        <>
        <img  src={props.url}  alt="image_not_found" width={width} height={100} />
        </>
    )
}
export default CustomImage
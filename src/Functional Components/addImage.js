import { Component } from "react";

class AddImage extends Component {
    state = {
        images: ["https://media.istockphoto.com/id/924169600/photo/laughing-orange-and-lemon-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=BCNKCfrDdSTkN52rQwJuphKiTY50fa4RghtmU4i_PDc=", 
        "https://media.istockphoto.com/id/924169682/photo/smiling-apple-and-a-smiling-pear-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=MG3_ze_VPz2Xntm4zR7Sy5bePorWauNqTmDPwNEA5H4=", 
        "https://media.istockphoto.com/id/1137283845/photo/laughing-lemons-2-unequal-siblings.jpg?s=612x612&w=0&k=20&c=74fRBez_sfJOY4MXJiPOjNYveqBU8ckuwCp6PVdW4PA="]
    }

    add = () => {
        this.setState({
            images: [...this.state.images, "https://img.freepik.com/photos-premium/fruit-qui-sourire_662214-97224.jpg"]
        })
    }

    delete = () => {
        const images = [...this.state.images];
        images.pop();
        this.setState({ images });
    }

    reset = () => {
        this.setState({
            images: ["https://media.istockphoto.com/id/924169600/photo/laughing-orange-and-lemon-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=BCNKCfrDdSTkN52rQwJuphKiTY50fa4RghtmU4i_PDc=", 
        "https://media.istockphoto.com/id/924169682/photo/smiling-apple-and-a-smiling-pear-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=MG3_ze_VPz2Xntm4zR7Sy5bePorWauNqTmDPwNEA5H4=", 
        "https://media.istockphoto.com/id/1137283845/photo/laughing-lemons-2-unequal-siblings.jpg?s=612x612&w=0&k=20&c=74fRBez_sfJOY4MXJiPOjNYveqBU8ckuwCp6PVdW4PA="]
     })
    }

    render() {
        return (
            <>
                <div className="btns">
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.delete}>Delete</button>
                    <button onClick={this.reset}>Reset</button>
                </div>

                <div className="images">
                    {
                        this.state.images.map((val) => {
                            return (
                                <img className="imgg" src={val} alt="none" height={500} width={600} />
                            )
                        })
                    }

                </div>
            </>
        )
    }
}

export default AddImage;
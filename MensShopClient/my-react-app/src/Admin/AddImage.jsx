import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function AddImage() {
    var [Product, setProduct] = useState([]);
    const { id } = useParams();
    const [imageFile, setImageFile] = useState(null);
    const history=useHistory();

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    useEffect(() => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/product/id/" + id);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                var data = JSON.parse(xhr.responseText);
                if (data !== 0) {
                    setProduct(data);
                }
            }
            else {
            }
        }
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    }, []);

                    


    const handleUpload = (No) => {
        debugger;
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append('imageFile', imageFile);
        xhr.open('POST', 'http://localhost:8080/product/uploadimage/' + No, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('File uploaded successfully!', xhr.responseText);
                } else {
                    console.error('Error uploading file:', xhr.statusText);
                }
            }
            window.location.href = '/';

        };
        xhr.send(formData);
    }

    return (
        <div className="col-md-8 offset-md-2" style={{ textAlign: "justify", marginTop: 5 + "px" }}>

            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Add Image</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>

                            <th>title</th>
                            <th>author</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>{Product.productName}</td>
                            <td>{Product.description}</td>
                            <td>{Product.price}</td>
                            <td><input type="file" onChange={handleFileChange} /></td>
                            <td><button onClick={() => {
                                handleUpload(id);
                            }} className="btn btn-success">Upload Image</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
        </div>
    );

}
export default AddImage;
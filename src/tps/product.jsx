import { useEffect, useState } from "react"
import ProductBody from "./productBody"
// import Searchproduct from "./search"

export default function ProductList() {
    const [productli, setProductLi] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    const [button, setButton] = useState('')
    const [getCategore, setgetCategore] = useState([])
    // useEffect(() => { getProduct() ;getcategores() }, [])
    useEffect(() => {
        const fetchData = async () => {
            await getProduct();
            await getCategores();
        };

        fetchData();
    }, []);

// this function handeling delete
const handleDelete=(id1) =>{
    const productTempdelet = productli.filter((item) => item.id !== id1)
    setProductLi(productTempdelet)
    console.log("Product deleted:", id1);
    // console.log(productTempdelet)
    // setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  
}

    function handlChange(e) {
        e.preventDefault();
        const input = document.getElementById("search").value
        const buttonText = e.currentTarget.textContent;
        setButton(buttonText);
        console.log("buttonText")
        console.log(buttonText)
        setInputSearch(input)
    }


    const getProduct = () => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json()) // Change Response to response
            .then(product => {
                // console.log(product)
                setProductLi(product); // Call the setProductLi function to handle the product
            })

    }
    // function get data of fakestoreapi name data gategore
    const getCategores = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(respons => respons.json())
            .then(respons => console.log(setgetCategore(respons)))
    }


    const displyCategory = () => {
        return getCategore.map((ctegory, key) => {
            return (
                <button className="btn btn-secondary" onClick={handlChange} key={key}>
                    {ctegory}
                </button>
            )
        })
    }
    // function search in table by input
    const displayProduct = () => {
        if (productli.length > 0) {

            console.log("button")
            console.log(button)
            if (button !== "") {
                const productTemp = productli.filter(product => {
                    return product.category.startsWith(button)
                })
                return productTemp.map((product) => {

                    // console.log(inputSearch)
                    return <ProductBody key={product.id}  productli={product} handleDelete={handleDelete} />
                });
            } else {
                const productTemp = productli.filter(product => {
                    // console.log(product.id)
                    return product.title.startsWith(inputSearch) || product.id.toString().startsWith(inputSearch) || product.category.startsWith(inputSearch) || product.description.includes(inputSearch)
                })
                return productTemp.map((product) => {

                    // console.log(inputSearch)
                    return <ProductBody key={product.id} productli={product} handleDelete={handleDelete}/>
                });
            }


        }

        return (
            <tr>
                <td colSpan={7}>No items found</td>
            </tr>
        );
    }



    return <div className="container-fluix mx-auto w-75 my-3">
        <form action="">
            <div className="d-flex " style={{ gap: "10px" }}>
                <label htmlFor="" className="">Search:</label>
                <input type="text" id="search" className="form-control" style={{ width: "400px" }} />
                <input type="submit" value="search" className="btn btn-primary" onClick={handlChange} />

            </div>
            <div>
                <hr />
            </div>
        </form>

        <h5 >Categores:</h5>
        <div className="btn-group" style={{ width: "100%" }}>
            {displyCategory()}

        </div>

        <h1>list the product :</h1>

        <table className="table">
            <thead>
                <tr>
                    <th>#Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>


            <tbody>

                
                {displayProduct()}

            </tbody>
        </table>
    </div>
}


// this is syntax object data

// "id": 3,
// "title": "Mens Cotton Jacket",
// "price": 55.99,
// "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
// "rating": {
//     "rate": 4.7,
//     "count": 500
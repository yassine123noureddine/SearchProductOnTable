import { PropTypes } from "prop-types";
// import { propTypes } from "react-bootstrap/esm/Image";
// import React from "react"
export default function ProductBody({ productli,handleDelete }) {
  // console.log(productli)
  return (
 <>
      <tr> 
        <td>{productli.id}</td>
        <td>{productli.title}</td>
        <td>{productli.price}</td>
        <td>{productli.description}</td>
        <td>{productli.category}</td>
        <td>{<img  style={{width:"150px",height:"150px"}} src={productli.image} alt={productli.title}></img>}</td>
        <td>{productli.rating.count}/{productli.rating.rate}</td>
        <td><button onClick={()=>handleDelete(productli.id)} className="btn btn-warning" >Delete</button></td>
      </tr>
 </>
    );
  }
  
  ProductBody.propTypes = {
    productli: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,

    // id : PropTypes.Number,
    // title : PropTypes.string,
    // price : PropTypes.Number,
    // description: PropTypes.string,
    // category: PropTypes.string,
    // image: PropTypes.string,
    // rating: PropTypes.object,

  }

// "id": 3,
// "title": "Mens Cotton Jacket",
// "price": 55.99,
// "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
// "rating": {
//     "rate": 4.7,
//     "count": 500
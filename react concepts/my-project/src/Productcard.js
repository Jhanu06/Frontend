function Productcard({title,image,price,rating})
{
   
    return(
        <div className="card">
            <img src={image}></img>
            <p> Title : {title}</p>
            <p> Price : $ {price}</p>
            <p >Rating: {rating.rate} ({rating.count} reviews)</p>

        </div>
    )
}
export default Productcard;
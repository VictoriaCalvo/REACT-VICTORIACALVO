import ItemCard from "./itemCard"



const ItemList = ({items}) => {

    return (
        <div>
            <h3>PRODUCTOS</h3>
            <hr/>

            <div className='row'>
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>


        </div>
    )
}

export default ItemList
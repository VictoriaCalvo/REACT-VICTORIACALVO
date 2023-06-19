import ItemCard from "./itemCard"



const ItemList = ({items}) => {

    return (
        <div>
            <h2>Productos</h2>
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
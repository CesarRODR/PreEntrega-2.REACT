import ItemList from "./ItemList";



export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;


import ItemList from "./ItemList";



export const ItemListContainer = ({ category, greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList category={category} />
    </div>
  );
};

export default ItemListContainer;


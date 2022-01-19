import { Item } from "components";

const List = ({ data = [] }) => {
  if (data.length === 0) return <div className="py-8 w-full">Not found.</div>;

  return (
    <div className="py-8 w-full">
      <div className="flex flex-wrap -mx-4">
        {data.map((element) => (
          <Item key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
};
export default List;

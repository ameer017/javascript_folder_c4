import Cell from "./Cell";

const Row = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

export default Row;

// Object.entries(item) is used to convert the properties of the item object into an array of [key, value] pairs. This array is then mapped over using .map(), where each key-value pair is processed to create a Cell component.

// Object.entries() is a method in JavaScript that returns an array of a given object's string-keyed property [key, value] pairs, 
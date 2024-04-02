const ListItem = ({ item }) => {
  return (
    //when a ul element is created, what's suppose to be it's child?
    <li>
      {/* this will return a stringified json format of the response*/}
      {JSON.stringify(item)}
    </li>
  );
};

export default ListItem;

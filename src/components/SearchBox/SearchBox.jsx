import s from "./SearchBox.module.css";

const SearchBox = ({ searchValue, onSearch }) => {
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="search"
        placeholder="...enter name"
        className={s.searchForm}
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

import { useState } from "react";
import data from "../../../data.json";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Pencarian = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchTerm(searchWord);
    const newFilter = data.filter((value) => {
      return value.merk.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    searchTerm("");
    setSearchTerm("");
  };

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon onClick={clearInput} />
            )}
          </div>
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={handleFilter}
          />

          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 30).map((item) => {
                return (
                  <div key={item.id} className="dataItem">
                    <a href="" className="a">
                      <p>{item.merk}</p>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Pencarian;

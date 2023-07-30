import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleClick = () => {
        fetchdata(search);
    };

    const fetchdata = (search) => {
        fetch(`https://backendtaknikiwizz--prem2310.repl.co/api/getNews?text=`+{search})
            .then((res) => res.json())
            .then((data) => setRecords(data));
    };

    useEffect(() => {
        fetchdata(search);
    }, [search]);

    return (
        <div className="homePage">
            <div className="sidebar">
                <ul className="sidebarElements">
                    <li className="logo">
                        logo
                    </li>
                    <li>
                        <CgProfile className="icon" />
                    </li>
                    <li>
                        <FaBookOpen className="icon" />
                    </li>
                </ul>
            </div>

            <nav className="homeNav">
                <div className="wrapper">
                    <div className="searchBar">
                        <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value={search} onChange={handleChange} />
                        <button onClick={handleClick} id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                            <HiOutlineSearch className="searchIcon" />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="latest-news">
                <h1>Latest News:</h1>
            </div>

            <div className="newsArea">
                {records.map((record) => (
                    <div key={record.id} className="Cards">
                        <div className="newsCards">
                            <div className="newsImg">
                                <img src={record.image} className="news" alt="News" />
                            </div>
                            <div>
                                <h5 className="newsTitle">{record.title}</h5>
                                <p className="author">{record.author} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

import React, {useState} from 'react';
import SubReddits from './components/SubReddits'
import SubRedditPosts from './components/SubRedditPosts'
import SearchBar from './components/SearchBar';

const RedditHome = () => {    
    let [selectedSubReddit, setselectedSubReddit] = useState("");
    let [searchSubReddit, setSearchSubReddit] = useState("");

    return (
    <>
        <h1> Mini Reddit </h1>

        <SearchBar
            handleSearch={setSearchSubReddit}
        />

        <SubReddits 
            selectedSubReddit={selectedSubReddit}
            handleSubRedditSelect={setselectedSubReddit}
            searchSubReddit={searchSubReddit}
        />

        <SubRedditPosts 
            subReddit={selectedSubReddit}
        />

    </>)
 }

 export default RedditHome;
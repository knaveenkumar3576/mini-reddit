import React, {useState} from 'react';
import SubReddits from '../SubReddits'
import SubRedditPosts from '../SubRedditPosts'
import SearchBar from '../SearchBar';

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
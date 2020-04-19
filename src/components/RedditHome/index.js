import React, {useState} from 'react';
import SubReddits from '../SubReddits'
import SubRedditPosts from '../SubRedditPosts'

const RedditHome = () => {    
    let [selectedSubReddit, setselectedSubReddit] = useState("");

    return (
    <>
        <h1> Mini Reddit </h1>
        <SubReddits 
            selectedSubReddit={selectedSubReddit}
            handleSubRedditSelect={setselectedSubReddit}
        />
        <SubRedditPosts subReddit={selectedSubReddit}/>
    </>)
 }

 export default RedditHome;
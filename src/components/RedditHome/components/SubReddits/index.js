import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Axios from 'axios';

const StyledButton = styled.button`
  &&& {
        background-color: ${({ isActive }) => (isActive ? `black` : `blue`)};
        color: white;
        :hover { 
            background-color: #ccc;
        }
    }
`;

const SubReddits = ({
    selectedSubReddit,
    handleSubRedditSelect,
    searchSubReddit
}) => {
    let [subReddits, setSubReddits] = useState([]);

    useEffect(() => {
        let url = "";
        
        if(searchSubReddit === "") {
            url = `https://www.reddit.com/subreddits/popular.json?raw_json=1`
        } else {
            url = `https://www.reddit.com/subreddits/search.json?q=${searchSubReddit}&raw_json=1`
        }

        Axios.get(url).then(result => {
            let subReddits = result.data.data.children.map((listing) => {
                return {
                    name : listing.data.display_name,
                    url : listing.data.display_name_prefixed
                }
            })
            setSubReddits(subReddits)
            handleSubRedditSelect(subReddits[0].url)
        })
    }, [searchSubReddit])

    let subRedditItems = subReddits.map((subReddit) => {
        return (
            <StyledButton    
                key={subReddit.name} 
                isActive= {selectedSubReddit === subReddit.url}
                value={subReddit.name} 
                onClick={() => handleSubRedditSelect(subReddit.url)}
            >
                {subReddit.name} 
            </StyledButton> 
        )
    })
    
    return (
        <>
        {subRedditItems}
        </>
    )

}


export default SubReddits;
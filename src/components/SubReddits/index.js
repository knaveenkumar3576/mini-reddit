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

const SubReddits = (props) => {
    let [subReddits, setSubReddits] = useState([]);
    
    useEffect(() => {
        Axios.get("https://www.reddit.com/subreddits/popular.json?raw_json=1").then(result => {
            let subReddits = result.data.data.children.map((listing) => {
                return {
                    name : listing.data.display_name,
                    url : listing.data.display_name_prefixed
                }
            })
            setSubReddits(subReddits)
            props.handleSubRedditSelect(subReddits[0].url)
        })
    }, [])

    let subRedditItems = subReddits.map((subReddit) => {
        return (
            <StyledButton    
                key={subReddit.name} 
                isActive= {props.selectedSubReddit === subReddit.url}
                value={subReddit.name} 
                onClick={() => props.handleSubRedditSelect(subReddit.url)}
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
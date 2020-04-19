import React from 'react'
import styled from 'styled-components';

const StyledPost= styled.div`
  &&& {
        box-sizing: border-box;
        padding: 20px;
        width: 50%;
        height: 80vh;
        display:block; 
        overflow: scroll;
    }
`;

const StyledPreview= styled.img`
  &&& {
        display: block;
        height: 200px;
        width: 200px;
        margin: 0 auto;
    }
`;

const StyledTitle= styled.div`
  &&& {
    font-size: 20px;
    text-align: center;
}
`;

const StyledPostContent= styled.p`
  &&& {
    font-size: 15px;
    text-align: left;
    border: 1px solid;
    padding: 5px;
}
`;

const StyledPostAuthor= styled.div`
  &&& {
        text-align: left;
        font-size: 20px;
        font-weight: bold;
    }
`;

const PostDetail = (props) => {
    console.log(props.post)
    let imageURL = props.post.url.endsWith(".jpg") ? props.post.url : "https://dummyimage.com/300x300&text=No+image+preview!" ;
    let postContent = props.post.selftext === "" ? "No content available" : props.post.selftext;
    return (
        <>
            <StyledPost>
                <StyledPreview src={imageURL}></StyledPreview>
                <StyledTitle>{props.post.title}</StyledTitle>
                <StyledPostAuthor> {"Author: " + props.post.author} </StyledPostAuthor>
                <StyledPostContent>{postContent}</StyledPostContent>
            </StyledPost>
        </>
    )
}

export default PostDetail;
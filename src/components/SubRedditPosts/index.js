import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import PostDetail from '../PostDetail'
import Axios from 'axios';

const SubRedditPostList = styled.table`
  &&& {
        width: 50%;
        display:block; 
        overflow: scroll;
        td:hover { 
            background-color: #ccc;
        }
        tr {
            height : 30px;
        }
    }
  }
`;

const TableRow = styled.tr`
&&& {
    background-color: ${({ rowColor }) => (rowColor ? `white` : `lightblue`)};
    border: 1px solid;
}
`;

const PostHeader = styled.div`
&&& {
    width: 100%;
    background-color: black;
    color: white;
    margin-top: 10px;
}
`;

const Container = styled.div`
  &&& {
        margin: 20px;
        display: flex;
        flex-direction: row;
        text-align: center;
        height: 80vh;
    }
`;

const SubRedditPosts = (props) => {
    let [posts, setPosts] = useState([]);
    let [selectedPost, setSelectedPost] = useState(-1);

    useEffect(() => {
        Axios.get(`https://www.reddit.com/${props.subReddit}/hot.json?raw_json=1`).then(result => {
            let posts = result.data.data.children.map((listing) => {
                return listing.data
            })
            setPosts(posts)
        })
    }, [props.subReddit])

    let postItems = posts.map((post, index) => {
        return (
            <TableRow key={index} rowColor={index%2 === 0} onClick={() => setSelectedPost(index)}>
                <td> {post.title} </td>
            </TableRow>
        )
    })
    
    return (
        <>
            <PostHeader> Post under subreddit {props.subReddit} </PostHeader>
            <Container>
                    <SubRedditPostList>
                        <tbody>
                            {postItems}
                        </tbody>
                    </SubRedditPostList>
                {selectedPost !== -1 && <PostDetail post={posts[selectedPost]}/>}
            </Container>
        </>
    )
}


export default SubRedditPosts;
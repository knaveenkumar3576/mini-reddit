import React from 'react'


const TogglePostType = ({
    handleToggle,
    selectedToggle
}) => {
    return (
        <div>
            <input type="radio" name="postsType" checked={selectedToggle === 'hot'} onChange={() => handleToggle("hot")} />
            <label for="hot">Hot</label>
            <input type="radio" name="postsType" checked={selectedToggle === 'new'} onChange={() => handleToggle("new")} />
            <label for="new">New</label>
        </div>
    )
}

export default TogglePostType;
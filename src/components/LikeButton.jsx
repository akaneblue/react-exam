import { useState } from "react"

const LikeButton = () => {
    const [like, setLike] = useState(0);
    const handleClick = () => {
        setLike((count) => count + 1);
    }
    return (
        <div>
            <p aria-live="polite">좋아요 {like}</p>
            <button type="button" onClick={handleClick}>👍</button>
        </div>
    )
}

export default LikeButton

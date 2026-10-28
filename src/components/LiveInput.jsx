import { useState } from "react"

const LiveInput = () => {
    const [text,setText] = useState("");

    const handleInput = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleInput} placeholder="텍스트를 입력하세요"/>
            <p>입력값:{text}</p>
        </div>
    )
}

export default LiveInput

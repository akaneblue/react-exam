import { useEffect } from "react"

const Page = () => {
    useEffect(() => {console.log("페이지 로딩...");},[]);
    return (
        <div>
            <h1>페이지</h1>
        </div>
    )
}

export default Page
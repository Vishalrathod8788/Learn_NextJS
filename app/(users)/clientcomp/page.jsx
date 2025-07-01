"use client";

import { useEffect, useState } from "react";

const ClientComp = () => {

    const [postData, setPostData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const URL = "https://jsonplaceholder.typicode.com/posts/";
            try {
                const res = await fetch(URL);
                const data = await res.json();

                console.log(data);
                setPostData(data);

                return data;
            } catch (error) {
                console.log("Error fetching data:", error);

            }
        }
        fetchData();
    }, [])

    return <>
        <h1 className="font-roboto">Client Component</h1>
        <p>This is a client component.</p>
        <button
            className="bg-blue-400 text-white p-5"
            onClick={() => alert("Hello from Client Component!")}>
            Click Me
        </button>

        <ul className="grid grid-cols-3 gap-5">
            {
                postData.map((curEle, index) => {
                    return (<li key={index}>{curEle.body}</li>)
                })
            }
        </ul>

    </>
}
export default ClientComp;
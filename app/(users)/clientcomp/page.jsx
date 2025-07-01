"use client";

import { useEffect, useState } from "react";

const ClientComp = () => {

    const [postData, setPostData] = useState([]);

    const fetchData = async () => {
        const URL = "https://jsonplaceholder.typicode.com/posts/1";
        try {
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error fetching data:", error);
            
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    
    return<>
        <h1 className="font-roboto">Client Component</h1>
        <p>This is a client component.</p>
        <button className="bg-blue-400 text-white p-5" onClick={() => alert("Hello from Client Component!")}>Click Me</button>
    </>
}
export default ClientComp;
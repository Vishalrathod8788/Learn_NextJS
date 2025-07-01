const ClientComp = () => {
    return<>
        <h1 className="font-roboto">Client Component</h1>
        <p>This is a client component.</p>
        <button className="bg-blue-400 text-white p-5" onClick={() => alert("Hello from Client Component!")}>Click Me</button>
    </>
}
export default ClientComp;
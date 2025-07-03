const Blog = async (props) => {
  const { slug } = await props.params;
  console.log(slug);

  return (
    <>
      <h1>Blog Page</h1>
      {slug.map((curEle, index) => {
        return <p key={index}>{curEle}</p>;
      })}
    </>
  );
};

export default Blog;

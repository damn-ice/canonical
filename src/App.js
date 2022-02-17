import { useEffect, useState } from "react";
import BlogList from "./components/BlogList";

function App() {
  const url = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {     
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [])

  return (
    <div>
      {blogs ? <BlogList blogs={blogs} />: <h1 className="u-align--center">LOADING...</h1>}
    </div>
  );
}

export default App;

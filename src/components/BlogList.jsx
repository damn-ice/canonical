import Blog from "./Blog";

const BlogList = ({ blogs }) => {

  return (
    <section id="blogs" className="row">
        { blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
    </section>
  );
}

export default BlogList;


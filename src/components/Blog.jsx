import Moment from "react-moment";

const Blog = ({ blog }) => {

  return (
    <article className="p-card--highlighted blog-card col-4">
      <header className="p-card__header">
        <h5>CLOUD AND SERVER</h5>
      </header>
      <hr className="dotted" />
      <div className="p-card__content" >
        <img className="p-card__image" src={blog.featured_media} alt={blog.title.rendered} />
        <h3 className="p-heading--3">
          <a href={blog.link}>{blog.title.rendered}</a>
        </h3>
        <p className="p-heading--5">
          <em>
            By <a href={blog._embedded.author[0].link}>{blog._embedded.author[0].name}</a> on <Moment format="DD MMMM YYYY" date={blog.date} />
          </em>
        </p>
      </div>
      <hr className="dotted"/>
      <p className="p-card__footer">Article</p>
    </article>
  );
}

export default Blog;
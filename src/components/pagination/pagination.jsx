import { useState, useEffect } from "react";

//per fare una paginazione facile facile
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
//per poter fare le fetch semplici
import axios from "axios";

function pagination() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  async function getBooks() {
    const posts = await axios.get(
      `${process.env.REACT_APP_URL}/posts?page=${page}&pageSize=${pageSize}`
    );
    console.log(
      `${process.env.REACT_APP_URL}/posts?page=${page}&pageSize=${pageSize}`
    );
    setPosts(posts.data.posts);
    setPage(posts.data.currentPage);
    setTotalPages(posts.data.totalPages);
    console.log(posts);
    return posts;
  }

  useEffect(() => {
    getBooks();
  }, [page, pageSize]);

  const onChangePage = (value) => setPage(value);
  const changeVisual = (val) => {
    setPageSize(val);
  };

  return (
    <div className="App">
      <input type="number" onChange={(e) => changeVisual(e.target.value)} />
      {posts &&
        posts.map((post) => (
          <div>
            <p>{post.title}</p>
          </div>
        ))}

      {totalPages && (
        <ResponsivePagination
          current={page}
          total={totalPages}
          onPageChange={onChangePage}
        />
      )}
    </div>
  );
}

export default pagination;

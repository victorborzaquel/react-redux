import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./app/Navbar"
import { AddPostForm } from "./features/posts/AddPostForm";
import { EditPostForm } from "./features/posts/EditPostForm";
import { PostsList } from "./features/posts/PostsList";
import { SinglePostPage } from "./features/posts/SinglePostPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route
            exact
            path='/posts/:postId'
            element={<SinglePostPage />}
          />
          <Route
            exact
            path='/editPost/:postId'
            element={<EditPostForm />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

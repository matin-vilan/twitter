import React from "react";
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSite from "./components/layout/mainSite/MainSite";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TweetByHashtags from "./components/layout/pages/tweetByHashtags/TweetByHashtags";
import NotFound from "./components/layout/pages/404/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<MainSite />} />
              <Route path="/hashtags">
                <Route path=":name" element={<TweetByHashtags />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

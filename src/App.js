// import axios from 'axios';
import './App.css';
import Product from "./product";

function App() {
  return (
    <div className="App">
      <Product/>
    </div>
  );
}

export default App;



// 2
  // https://www.jiosaavn.com/api.php?__call=webapi.get&token=KRslHDBmW1w&type=song&includeMetaTags=0&ctx=wap6dot0&api_version=4&_format=json&_marker=0
  // 3
  // https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&url=iPPGVzyogeiPwpro65A0eUaQggN%2B8%2BJ4%2B8dA%2FjNrkQJEZnhg%2BPkhfKZkfCgVBIyYdC%2BYrl%2F4IVaI8LYe8CPfkIPzFaL%2FaK97&bitrate=128&api_version=4&_format=json&ctx=wap6dot0&_marker=0
  // 4
  // https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=maroom&_format=json&_marker=0&ctx=wap6dot0
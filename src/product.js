import React, {useState} from "react";
import axios from 'axios';
import Cart from './cart';
// import Cart from "cart";

function Product() {

    const [input, setInput]= useState("")
    const [iid, setid]= useState("")
    const [url1, seturl]= useState("")
    const [url2, seturl2]= useState("")
    const [url3, seturl3]= useState("")
    const [url4, seturl4]= useState("")
    // const [favourite, setFavourite]= useState(" ")
             
    const changeHandler=(e) =>{
        setInput(e.target.value)
    }
    let x1;
    let x2;
    let x22;
    let x3;
    let x33;
    let url44;

    const clickHandler = ()=> {
        let url=`https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=${input}&_format=json&_marker=0&ctx=wap6dot0`;
        
        axios.get(url).then(data=>{
         console.log(data.data.albums.data[0]);
            x1 = data.data.songs.data[0].url.slice(-11);
            seturl(x1);
            setid(data.data.albums.data[0]);
          
          // clickHandler2();
          let url22=`https://www.jiosaavn.com/api.php?__call=webapi.get&token=${x1}&type=song&includeMetaTags=0&ctx=wap6dot0&api_version=4&_format=json&_marker=0`;
          console.log(url22)
          axios.get(url22).then(data=>{
                 console.log(data.data.songs[0].more_info.encrypted_media_url);
                    
                 x2 = data.data.songs[0].more_info.encrypted_media_url.replaceAll("/","%2F");
                 x22=x2.replaceAll("+","%2B");
                 seturl2(x22);
               
          // clickhandler3

          let url33=`https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&url=${x22}&bitrate=128&api_version=4&_format=json&ctx=wap6dot0&_marker=0`;
          
          axios.get(url33).then(data=>{
                //  console.log(data.data.songs[0].more_info.encrypted_media_url);
                    
                 x3 = data.data.auth_url;
                 x33=x3.slice(27, 71);
                    seturl3(x33);
          // clickhandler 4
          let url44=`https://sklktecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/${x33}`;
          console.log(url44);
          seturl4(url44);
      

          })
       
        })
      })
    }
    

    return (
      <div className="container"  style={{padding:"5%",backgroundColor:"#D980FA"}}>
        <h1>Play & Download Songs</h1>
        <input onChange={(e)=>{changeHandler(e)}} type="text" value={input}/>
        <button onClick={clickHandler}>search</button><br/><br/>
      
        <Cart tempData={iid}/>
        <br></br><div className="row">
      <div className="col-md-4 col-12 offset-md-4">
        <a style={{ color:"red", border:"1px solid yellow", padding:"5%", backgroundColor:"pink"}} href={url4}><b>play</b></a>
        </div><br/><br/>
      </div>
     
      </div>
    );
  }
  
  export default Product;

// 1
  // https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=${input}&_format=json&_marker=0&ctx=wap6dot0
// 2
  // https://www.jiosaavn.com/api.php?__call=webapi.get&token=KRslHDBmW1w&type=song&includeMetaTags=0&ctx=wap6dot0&api_version=4&_format=json&_marker=0
  // 3
  // https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&url=iPPGVzyogeiPwpro65A0eUaQggN%2B8%2BJ4%2B8dA%2FjNrkQJEZnhg%2BPkhfKZkfCgVBIyYdC%2BYrl%2F4IVaI8LYe8CPfkIPzFaL%2FaK97&bitrate=128&api_version=4&_format=json&ctx=wap6dot0&_marker=0
  // 4
  //  
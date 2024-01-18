import React from "react";
import { post_List } from "../utilis";
import { Link } from "react-router-dom";

export default function PostListing() {
  return (
    < >

      <div style={{textAlign:'center',fontSize:'50px',color:'green',backgroundColor:'yellow',boxShadow:'5px 5px 5px grey',height:'100px',width:'1000px'}}>PostListing</div>
      {post_List.map((post) => (
        <>
        <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <p style={{textAlign:'center',boxShadow:'5px 5px 5px grey',marginTop:'10px',backgroundColor:'sienna',width:'800px',height:'100px',alignItems:'center',justifyContent:'center',display:'flex',fontSize:'20px'}}>{post.title}</p>
          </div>
          <Link to={`/${post.id}`} style={{textAlign:'center'}}> Details</Link>
        </>
      ))}
    </>
  );
}
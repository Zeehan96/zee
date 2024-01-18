import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../utilis";
import { post_List } from "../utilis";
import '../App.css';

export default function postDetails() {
  const params = useParams();
  const [postDetails, setPostDetails] = useState();

  useEffect(() => {
    let post = getPostDetails(params.id);
    console.log(post, params.id);
    setPostDetails(post);
  }, []);
  return (
    <div className="PstDetaill" style={{textAlign:'center'}}>
      {postDetails && (
        <>
          <div>{postDetails.title}</div>
          <div style={{textAlign:'center'}}>{postDetails.body}</div>
        </>
      )}
    </div>
  );
}
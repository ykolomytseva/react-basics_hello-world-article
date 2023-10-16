import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle/>;
}
function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World Article</h1>
      <p>This is a paragraph</p>
    </article>
  );

}

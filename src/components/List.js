import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles,
    images : state.images};
};

const ConnectedList = ({ articles, images }) => (
   <div>
       <ul>
           {articles.map(el => (
               <li key={el.id}>{el.title}</li>
           ))}
       </ul>
       <p>
           {images}
       </p>
   </div>

);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
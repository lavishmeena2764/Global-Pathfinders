import React from 'react';
import '../styles.css';

const PageHeader = (props) => {
  return (
    <>
      <div className="parallax bg-gray-800 bg-opacity-80">
        <h1>{props.title}</h1>
      </div>
    </>
  )
}

export default PageHeader
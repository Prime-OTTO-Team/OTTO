import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { color, name, onClick, id } = props;
    return (
      <>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
          onClick={onClick}
        />
        <div className="pulse" />
      </>
    );
  };

  export default Marker;

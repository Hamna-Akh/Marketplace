// DeleteConfirmation.jsx
import React from 'react';
import './DeleteConfirmation.css';


function DeleteConfirmation({ product, onDelete, onCancel }) {
  return (
    <div className="delete-confirmation-overlay">
      <div className="delete-confirmation">
        <h2>Delete Product</h2>
        <p>Are you sure you want to delete {product.title}?</p>
        <div className="delete-confirmation-buttons">
          <button className="yes" onClick={onDelete}>Yes</button>
          <button className="no"  onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;

const Alert = ({ message }) => {
    return (
      <div className="alert">
        <div className="alert-content">
          <span className="alert-message">{message}</span>
        </div>
      </div>
    );
  };
  
  export default Alert;
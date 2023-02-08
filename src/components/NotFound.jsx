import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        marginBottom: "50vh",
        fontSize: "0.2em",
        textAlign: "center",
      }}
    >
      <h1>
        Error 404 <p> Page not found</p>
      </h1>
      <p>{<Link to="/">Go to Home</Link>}</p>
    </div>
  );
};

export default NotFound;

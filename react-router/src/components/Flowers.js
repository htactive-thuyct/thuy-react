import React from "react";
import { Link } from "react-router-dom";

class Flowers extends React.Component {
  render() {
    const list = this.props.student;
    const students = list
      .filter(student => student.name === "Flowers")
      .map((student, index) => (
        <div className="row" key={index}>
          {student.img.map((item, index) => (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index}>
              <div className="card" style={{ width: "350px", height: "400px" }}>
                <img
                  src={item.img}
                  style={{ width: "300px", height: "300px" }}
                  alt="Logo"
                />
                <div className="card-body">
                  <Link to={`detail-${index}`} className="btn btn-danger">
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <h1 className="age">{student.age} Tuổi</h1>
        </div>
      ));

    return <ul className="ul">{students}</ul>;
  }
}
export default Flowers;

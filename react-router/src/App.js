import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Flowers from "./components/Flowers.js";
import Shoes from "./components/Shoes.js";
import Vegatables from "./components/Vegatables.js";
import Detail from "./components/Detail.js";

const data = [
  {
    name: "Vegatables",
    age: 8,
    img: [
      {
        id: 1,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLBrWk0vcoCPgQfe6UzpW7dyX5KbUi4i_3bu_ADePLJiua0gX"
      },
      {
        id: 2,
        img: "http://www.jackieleonards.ie/wp-content/uploads/2015/03/mango.jpg"
      },
      {
        id: 3,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyuv1y04Orw3fHh7WOPiAmMjxQ6ypwF5CVapZvQ7r2zQyrR_r"
      },
      {
        id: 4,
        img:
          "https://beryfruit.com/wp-content/uploads/2018/08/d%C3%A2u-t%C3%A2y-korean-min.png"
      }
    ]
  },
  {
    name: "Shoes",
    age: 9,
    img: [
      {
        id: 1,
        img:
          "https://www.topoathletic.com/sca-product-images/M021.BrightGreen-Black_00.jpg"
      },
      {
        id: 2,
        img: "http://www.jackieleonards.ie/wp-content/uploads/2015/03/mango.jpg"
      },
      {
        id: 3,
        img:
          "https://s7d5.scene7.com/is/image/ColumbiaSportswear2/1827081_012_f?$COL_grid$"
      },
      {
        id: 4,
        img:
          "https://media2.s-nbcnews.com/j/newscms/2018_30/1291678/mizuno_3f7ce1f95a416e19e6f1dc6633af27ff.fit-720w.png"
      }
    ]
  },
  {
    name: "Flowers",
    age: 10,
    img: [
      {
        id: 1,
        img:
          "https://images.homedepot-static.com/productImages/612ae505-9daf-45c3-ac16-67f97dcb251d/svn/globalrose-flower-bouquets-prime-100-red-roses-64_1000.jpg"
      },
      {
        id: 2,
        img:
          "https://site-files.fiftyflowers.com/FiftyFlowers/Image/Product/Purple-Lagoon-Dahlia-Bloom-500_637453a5.jpg"
      },
      {
        id: 3,
        img:
          "https://ih1.redbubble.net/image.11437876.0305/ap,550x550,12x12,1,transparent,t.png"
      },
      {
        id: 4,
        img:
          "https://images.freeimages.com/images/small-previews/8d8/sunflower-1188753.jpg"
      }
    ]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: data
    };
  }

  render() {
    const list = this.state.student;
    const students = list.map((student, index) => (
      <div key={index}>
        <ul className="menu">
          <li>
            <Link to={{ pathname: student.name }}>{student.name}</Link>
          </li>
        </ul>
      </div>
    ));
    return (
      <BrowserRouter>
        <div>
          <ul className="ul">{students}</ul>
          <hr />
          <div className="main-route-place">
            <Switch>
              <Route path="/Shoes" render={() => <Shoes student={list} />} />
              <Route
                path="/Flowers"
                render={() => <Flowers student={list} />}
              />
              <Route path="/Detail" render={() => <Detail student={list} />} />
              <Route
                path="/:Vegatables?"
                render={() => <Vegatables student={list} />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

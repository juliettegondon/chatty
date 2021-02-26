import React  from "react";
import "./style.css";
import Typed from 'typed.js';



class TypedName extends React.Component {
    componentDidMount() {    const options = {
        strings: ["Software Engineer"],
        typeSpeed: 55,
        backSpeed: 40,
        loop: true,
      };
      this.typed = new Typed(this.el, options);
    }
  componentWillUnmount() {
      this.typed.destroy();
    }
    
    render() {
      return (
        <>
          <span ref={(el) => {this.el = el;}}
          />
        </>
      );
    }
  }
export default TypedName;  
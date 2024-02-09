import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';


export default function NavButton({ name, linkTo, scrollLink }) {
  if (scrollLink) {
    return (
      <ScrollLink to={linkTo} smooth={true} duration={500} className="button">
        {name}
      </ScrollLink>
    );
  } else {

    return (
      <Link to={linkTo} className="button">
        {name}
      </Link>
    );
  }
}
import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/hamburger-menu";
import "./scripts/reviews";
import "./scripts/scroll-to";
import "./scripts/works";
import Validate from "./scripts/validate";

const validate = new Validate ({
  element: '#form'
});

validate.init();
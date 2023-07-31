import React from "react";
import user from "../data/user";
import Links from "./Links";

const {links} = user

//console.log(links.github)



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin}/>
    </div>
  );
}

export default About;

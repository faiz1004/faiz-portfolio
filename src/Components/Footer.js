import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Faiz Mohammad</h4>
      <h4>Copyright &copy; 2024 FM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/faiz1004" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/faiz-mohammad-4b193b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:hey.itsfaiz786@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/ans___faiz/profilecard/?igsh=d3N0bnp6OWo4emM4" target="_blank"><FaInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer
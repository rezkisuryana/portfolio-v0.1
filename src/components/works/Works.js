/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import ReactPortfolioImg from '../../assets/recentprojects/rezki.webp';
import GagasStudioImg from '../../assets/recentprojects/gagas.webp';
import SungaiSailImg from '../../assets/recentprojects/sungaisail.webp';
import PPDBWebAppImg from '../../assets/recentprojects/ppdb.webp';
import YabahitImg from '../../assets/recentprojects/yabahit.webp';
import PusakaImg from '../../assets/recentprojects/pusakapest2.webp';
import DuacahayaImg from '../../assets/recentprojects/duacahaya.webp';
import GarudaUtamaPersadaImg from '../../assets/recentprojects/garuda.webp';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio Image',
      image: `${ReactPortfolioImg}`,
      url: 'https://rezkisuryana.vercel.app'
    },
    { 
      id: 2,
      title: 'Gagas Studio', 
      description: `A creative studio that provides design and branding services. built using customize wordpress.`,
      alter: 'Gagas Studio Image',
      image: `${GagasStudioImg}`,
      url: 'https://gagasstudio.co.id'
    },
    { 
      id: 3,
      title: 'Pusaka Pest', 
      description: `Developed using WordPress, this website features a seamless user experience, SEO optimization, and an intuitive interface for easy navigation.`,
      alter: 'Pusakapest Image',
      image: `${PusakaImg}`,
      url: 'https://pusakapest.com'
    },
    { 
      id: 4,
      title: 'PPDB Web App', 
      description: `An online admission (PPDB) web application built using React Js and PHP Laravel. It is designed for educational institutions to manage the admission process, complete with SEO optimization and a user-friendly interface.`,
      alter: 'PPDB Web App Image',
      image: `${PPDBWebAppImg}`,
      url: 'https://ppdbabudzar.evolusidigital.id/'
    },
    { 
      id: 5,
      title: 'Garuda Utama Persada', 
      description: `Garuda Utama Persada was developed using WordPress, featuring an intuitive navigation system, professional design, and responsive layout.`,
      alter: 'Garuda Utama Persada Image',
      image: `${GarudaUtamaPersadaImg}`,
      url: 'http://garudautamapersada.co.id/'
    },
    { 
      id: 6,
      title: 'Dua Cahaya Travel', 
      description: `Developed with WordPress, this site provides comprehensive information, intuitive navigation, and a professional design to attract prospective pilgrims.`,
      alter: 'Dua Cahaya Travel Image',
      image: `${DuacahayaImg}`,
      url: 'https://duacahaya.com'
    },
    { 
      id: 7,
      title: 'Yabahit', 
      description: `A corporate website for Yayasan Yabahit, focused on providing education for orphaned children and Quran memorization. Built with WordPress, the website features a professional design and SEO optimization for easy access.`,
      alter: 'Yabahit Image',
      image: `${YabahitImg}`,
      url: 'https://yabahit.or.id/'
    },
    { 
      id: 8,
      title: 'SungaiSail', 
      description: `Corporate website built with WordPress for a general contractor company, focusing on delivering high-quality results and timely project completion.`,
      alter: 'SungaiSail Image',
      image: `${SungaiSailImg}`,
      url: 'https://sungaisail.id/'
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="title">
                  <TextDecrypt text={ project.title } />
                </h3>
              </a>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

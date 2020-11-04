import React from 'react';
import './style.css';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
              <h1 className="mt-5">Bootcamp Portfolio</h1>
              <p>
                  In addition to React, I'm good with:
              </p>
              <div className="container">
                  <div className="row">
                      <div className="col-sm">
                          <ul>
                              <li>Node.js</li>
                              <li>Express.js</li>
                              <li>MongoDB</li>
                          </ul>
                      </div>
                      <div className="col-sm">
                          <ul>
                              <li>Sequelize</li>
                              <li>MySQL</li>
                              <li>jQuery</li>
                          </ul>
                      </div>
                      <div className="col-sm">
                          <ul>
                              <li>HTML/CSS</li>
                              <li>Bootstrap</li>
                              <li>Semantic UI</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <p>
                  A sample of a few things we worked on in the bootcamp:
              </p>
          </div>
          <div className="col-lg-12 text-dark">
              <div className="row">
                  <div className="col-lg mb-4">
                      <div className="card h-100 text-center text-dark">
                          <a href="https://cameronlay15.github.io/hw-06-weather-dash/" target="_card1">
                              <img className="card-img-top p-2" src="./assets/forecast.png"
                                  alt="Screenshot of weather dashboard"/>
                          </a>
                          <div className="card-body">
                              <h4 className="card-title">Weather Dashboard</h4>
                              <h6 className="card-subtitle mb-2">
                                  <a href="https://cameronlay15.github.io/hw-06-weather-dash/" target="_card1p">
                                      Homework 6
                                      <i className="fab fa-github"></i>
                                  </a>
                              </h6>
                              <p className="card-text">This project used local storage and a weather API</p>
                          </div>
                      </div>
                      <div className="col-lg mb-4">
                          <div className="card h-100 text-center text-dark">
                              <a href="https://cameronlay15.github.io/COGS-Inventory-Management/" target="_card2">
                                  <img className="card-img-top p-2" src="./assets/COGS.png"
                                      alt="Screenshot of scheduler"/>
                              </a>
                              <div className="card-body">
                                  <h4 className="card-title">COGS Inventory Management</h4>
                                  <h6 className="card-subtitle mb-2">
                                      <a href="https://cameronlay15.github.io/COGS-Inventory-Management/"
                                          target="_card2p">
                                          Project 2
                                          <i className="fab fa-github"></i>
                                      </a>
                                  </h6>
                                  <p className="card-text">
                                      This project we created an API utilizing backend Data Bases
                                      to
                                      link with front end design utilizing Materialize.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg mb-4">
                          <div className="card h-100 text-center text-dark">
                              <a href="https://crazyjoeshow.github.io/Happy-Camper/" target="_card3">
                                  <img className="card-img-top p-2" src="./assets/project1.png"
                                      alt="Screenshot of Happy Campers"/>
                              </a>
                              <div className="card-body">
                                  <h4 className="card-title">Happy Campers</h4>
                                  <h6 className="card-subtitle mb-2">
                                      <a href="https://crazyjoeshow.github.io/Happy-Camper/" target="_card3p">
                                          Project 1
                                          <i className="fab fa-github"></i>
                                      </a>
                                  </h6>
                                  <p className="card-text">
                                      This project called multiple external APIs and used jQuery,
                                      CSS, and JavaScript
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="mb-5">

          </div>
        </div>
      </div>
    </section>
  )
}

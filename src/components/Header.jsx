import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-transparent navbar-expand-lg navbar-dark ">
            <div class="container-fluid">
              <a class="navbar-brand" href="/flights">
                Airline App
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/flights">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/add-flight">
                      Add Flight
                    </a>
                  </li>
                  
                
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

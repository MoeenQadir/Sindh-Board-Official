import Router from "next/router";
import React from "react";
const Demo3Hero3 = () => {
  return (
    <section id="hero-3" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-lg-8 offset-lg-2">
            <div className="hero-txt text-center white-color">
              {/* Title */}
              <h2 className="h2-xs">
                <span>Board of Intermediate & Secondary Education</span>

              </h2>
              <span className={'h4'}> Sukkur,Sindhi Pakistan</span>
              {/* Text */}
              <p className="p-md">
                Empowering Minds, Inspiring Futures: Board of Intermediate & Secondary Education Sukkur, Sindhi Pakistan
              </p>
              {/*Hero Search Form */}
              {/*<form*/}
              {/*  className="hero-form"*/}
              {/*  onSubmit={(e) => {*/}
              {/*    e.preventDefault();*/}
              {/*    Router.push({*/}
              {/*      pathname: "/categories-list",*/}
              {/*    });*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <div className="input-group">*/}
              {/*    <input*/}
              {/*      type="text"*/}
              {/*      className="form-control"*/}
              {/*      placeholder="What do you want to learn?"*/}
              {/*      aria-label="Search"*/}
              {/*    />*/}
              {/*    <span className="input-group-btn">*/}
              {/*      <button type="submit" className="btn">*/}
              {/*        <i className="fa fa-search" aria-hidden="true" />*/}
              {/*      </button>*/}
              {/*    </span>*/}
              {/*  </div>*/}
              {/*</form>*/}
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3Hero3;

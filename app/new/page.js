"use client";
import { useEffect } from "react";
import { useState } from "react";
// import styles from "./page.module.css";
import Image from "next/image";
import "./page.css";
export default function New() {
  const [isHoveredpeople, setIsHoveredpeople] = useState(false);
  const [isHoveredlocation, setIsHoveredlocation] = useState(false);
  const [isHoveredevents, setIsHoveredevents] = useState(false);
  const [isHoveredshopping, setIsHoveredshopping] = useState(false);
  const [isSignin, setIsSignin] = useState(true);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <nav className="navbar navbar-expand-lg ">
        {/* <div> */}
        <Image
          src="logo.svg"
          alt=""
          width={293}
          height={60}
          // fill
          className="hobbycue-logo"
          style={{ marginLeft: 97, marginRight: 35 }}
        />

        <Image
          src="logo.svg"
          alt=""
          width={156}
          height={32}
          className="hobbycue-logo-sm"
          style={{ marginLeft: 22 }}
        />
        <Image
          src="searchblue.svg"
          alt=""
          width={24}
          height={24}
          style={{ marginLeft: 27 }}
          className="hobbycue-logo-sm"
        />
        <Image
          src="bell.svg"
          alt=""
          width={24}
          height={24}
          style={{ marginLeft: "-15px" }}
          className="hobbycue-logo-sm"
        />
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            height: 24,
            width: 24,
            marginRight: 23,
            marginLeft: "-15px",
          }}
        >
          <Image
            src="menu1.svg"
            alt=""
            width={24}
            height={24}
            className="hobbycue-logo-sm border-0"
            style={{ marginLeft: "-12px", marginTop: "-5px" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex custom-form">
            <input
              className="form-control custom-search-form-control custom-input"
              type="search"
              placeholder="Search here..."
              aria-label="Search"
              style={{ width: 260, height: 40 }}
            />
            <button className="btn custom-search-btn" type="submit">
              <Image
                src="search.svg"
                alt=""
                width={16}
                height={16}
                className=""
              />
            </button>
          </form>
        </div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="custom-option">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>
                    <Image
                      src="explore.svg"
                      alt=""
                      width={24}
                      height={24}
                      className=""
                    />
                    Explore&nbsp;
                    <Image
                      src="arrowdown.svg"
                      alt=""
                      width={24}
                      height={24}
                      className=""
                    />
                  </div>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{
                    margin: 10,
                    padding: 0,
                    paddingRight: "0px",
                    width: 220,
                    height: 210,
                    border: "0px",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "rgba(109, 116, 122, 1)",
                      }}
                    >
                      People - Community
                    </a>
                  </li>
                  <hr className="dropdown-divider" />

                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "rgba(109, 116, 122, 1)",
                      }}
                    >
                      Places - Venues
                    </a>
                  </li>
                  <hr className="dropdown-divider" />

                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "rgba(109, 116, 122, 1)",
                      }}
                    >
                      Programs - Events
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "rgba(109, 116, 122, 1)",
                      }}
                    >
                      Products - Store
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "rgba(109, 116, 122, 1)",
                      }}
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div>
                    <Image
                      src="hobbies.svg"
                      alt=""
                      width={24}
                      height={24}
                      className=""
                    />
                    Hobbies&nbsp;
                    <Image
                      src="arrowdown.svg"
                      alt=""
                      width={24}
                      height={24}
                      className=""
                    />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Image
                    src="bookmark.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <Image
                    src="bell.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <Image
                    src="bucket.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </a>
              </li>
              <li className="nav-item" style={{ marginTop: -10 }}>
                <a
                  className="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <Image
                    src="dp.svg"
                    alt=""
                    width={48}
                    height={48}
                    className=""
                  />
                  <Image
                    src="arrowdown.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main
        className="main"
        style={{
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* //Feature1 */}

        <div
          style={{
            backgroundColor: "white",
          }}
          className="d-flex parent-big-box "
        >
          <div className="feature1-box-head main-head" style={{}}>
            <Image src="Add.svg" alt="" width={40} height={40} className="" />
            &nbsp;&nbsp;&nbsp; Add your own
          </div>
          <div style={{}} className="parent-box">
            {/* Box1 */}
            <div
              className="feature1-box feature1-box-people"
              style={{ marginBottom: 24 }}
              onMouseEnter={() => setIsHoveredpeople(true)}
              onMouseLeave={() => setIsHoveredpeople(false)}
            >
              <div className="feature1-box-head">
                <Image
                  src={isHoveredpeople ? "peoplewhite.svg" : "people.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                &nbsp;&nbsp;&nbsp; People
              </div>
              <div className="feature1-box-des ">
                An Individual or Organization. Teacher, Coach, Professional or
                Online Seller. Company, Business or Association.
              </div>
            </div>
            {/* Box2 */}
            <div
              className="feature1-box feature2-box-people"
              style={{ marginBottom: 24 }}
              onMouseEnter={() => setIsHoveredshopping(true)}
              onMouseLeave={() => setIsHoveredshopping(false)}
            >
              <div className="feature1-box-head">
                <Image
                  src={isHoveredshopping ? "bucketwhite.svg" : "container.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                &nbsp;&nbsp;&nbsp;Product
              </div>
              <div className="feature1-box-des">
                An Item that you can Book, Buy or Rent. Appointment, Ticket, or
                Voucher. Equipment, Instrument or Activity Kit.
              </div>
            </div>
          </div>

          <div style={{}} className="parent-box">
            {/* Box3 */}
            <div
              className="feature1-box feature3-box-people"
              style={{ marginBottom: 24 }}
              onMouseEnter={() => setIsHoveredlocation(true)}
              onMouseLeave={() => setIsHoveredlocation(false)}
            >
              <div className="feature1-box-head">
                <Image
                  src={isHoveredlocation ? "locationwhite.svg" : "location.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                &nbsp;&nbsp;&nbsp;Place
              </div>
              <div className="feature1-box-des">
                An Address. Classroom, Shop, Performance or Event Venue, Sports
                Arena, Play Area, Studio, School or Campus.
              </div>
            </div>
            {/* Box4 */}
            <div
              className="feature1-box feature4-box-people"
              style={{ marginBottom: 24 }}
              onMouseEnter={() => setIsHoveredevents(true)}
              onMouseLeave={() => setIsHoveredevents(false)}
            >
              <div className="feature1-box-head">
                <Image
                  src={isHoveredevents ? "programwhite.svg" : "events.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                &nbsp;&nbsp;&nbsp;Program
              </div>
              <div className="feature1-box-des">
                An Event with Venue and Date. Meetup, Workshop or Webinar.
                Exhibition, Performance or Competition.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

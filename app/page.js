"use client";
import { useEffect } from "react";
import { useState } from "react";
// import styles from "./page.module.css";
import Image from "next/image";
import "./page.css";
export default function Home() {
  const [isHoveredpeople, setIsHoveredpeople] = useState(false);
  const [isHoveredlocation, setIsHoveredlocation] = useState(false);
  const [isHoveredevents, setIsHoveredevents] = useState(false);
  const [isHoveredshopping, setIsHoveredshopping] = useState(false);
  const [isSignin, setIsSignin] = useState(true);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="full">
      {/* <Navbar /> */}
      <nav className="navbar navbar-expand-lg ">
        <Image
          src="logo.svg"
          alt=""
          width={293}
          height={60}
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
            <button className="btn custom-search-btn" type="submit" 
              style={{
                backgroundColor: "rgb(128, 100, 162)",
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}>
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
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <button className="btn " type="submit">
                    Sign In
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="">
        {/* Home Screen */}
        <div className="d-flex flex-col  home-screen">
          {/* left side */}
          <div className="left">
            <div className="">
              <div className="head-explore">
                Explore your <span style={{ color: "#0096c8" }}>hobby</span> or{" "}
                <span style={{ color: "#8064a2" }}>passion</span>
              </div>
              <div className="head-explore-sign-des">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classNamees,
                workshops, and places to practice, participate or perform.
                <span>
                  Your hobby may be about visual or performing arts, sports,
                  games, gardening, model making, cooking, indoor or &nbsp;
                  outdoor activities…
                </span>
              </div>
              <div className="head-explore-If-des">
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </div>
            </div>

            <div className="home-screen-left-image hobbycue-logo">
              <Image
                src="Group27.svg"
                alt=""
                width={697.07}
                height={216}
                className=""
              />
            </div>
            <div className="home-screen-left-image hobbycue-logo-sm">
              <Image
                src="Group27.svg"
                alt=""
                width={312}
                height={96.74}
                className=""
              />
            </div>
          </div>
          {/* right side */}
          <div className="sign-in-box">
            <div className="d-flex">
              <div
                className="signin"
                onClick={() => setIsSignin(true)}
                style={
                  isSignin
                    ? {
                        color: "rgba(128, 100, 162, 1)",
                        borderBottom: "solid 2px rgba(128, 100, 162, 1)",
                      }
                    : {}
                }
              >
                Sign In
              </div>
              <div
                className="joinin "
                //  when Join in
                onClick={() => setIsSignin(false)}
                style={
                  !isSignin
                    ? {
                        color: "rgba(128, 100, 162, 1)",
                        borderBottom: "solid 2px rgba(128, 100, 162, 1)",
                      }
                    : {}
                }
                //  when Join in
              >
                Join In
              </div>
            </div>
            <div className="continue-with-both">
              <div style={{ marginTop: 32 }} className="google-facebook-button">
                <button className="btn button-continue-with button-continue-with-google">
                  <Image
                    src="Google.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="continue-with-icon icon-google"
                  />
                  Continue with Google
                </button>
                <button
                  className="btn button-continue-with button-continue-with-facebook"
                  style={{ marginBottom: 0 }}
                >
                  <Image
                    src="Facebook.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="continue-with-icon icon-facebook"
                  />
                  Continue with Facebook
                </button>
              </div>
              <div className="or-connect-with">
                <span style={{ marginRight: 8 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                Or connect with
                <span style={{ marginLeft: 8 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
              </div>
              <div className="form-email-pass">
                <form>
                  <input
                    type="text"
                    name="Email"
                    className="form-control email-textfeild"
                    placeholder="Email"
                    style={{ marginBottom: 16 }}
                  />
                  <input
                    type="text"
                    name="Password"
                    className="form-control email-textfeild"
                    placeholder="Password"
                  />
                  <span>
                    <Image
                      src={isSignin ? "Password.svg" : "Passwordop.svg"}
                      alt=""
                      width={16}
                      height={16}
                      className=""
                    />
                  </span>

                  {/* when Join in */}

                  <div
                    style={isSignin ? { display: "none" } : {}}
                    className="password-strength"
                  >
                    <div
                      style={{
                        color: "rgba(147, 156, 163, 1)",
                      }}
                      className="child1"
                    >
                      Password strength
                    </div>
                    <div className="child2">
                      <div className="d-flex justify-content-between sign-in-box-bottom">
                        <div
                          className="d-flex  by-continuing"
                          style={{
                            color: "rgba(109, 116, 122, 1)",
                          }}
                        >
                          By continuing, you agree to our&nbsp;
                          <span style={{ color: "black" }}>
                            Terms of Service{" "}
                          </span>{" "}
                          &nbsp;and&nbsp;
                          <span style={{ color: "black" }}>Privacy Policy</span>
                          .
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn button-continue-with"
                          style={{ backgroundColor: "#8064a2", color: "white" }}
                        >
                          Agree and Continue
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* when Join in */}
                  {/* when sign in */}
                  <div style={isSignin ? {} : { display: "none" }}>
                    <div className="d-flex justify-content-between sign-in-box-bottom">
                      <div className="d-flex">
                        <input
                          type="checkbox"
                          name="checkbox"
                          className="checkbox hobbycue-logo"
                        />
                        <input
                          type="checkbox"
                          className="checkboxsm hobbycue-logo-sm"
                          style={{ height: 16, width: 16 }}
                        />
                        &nbsp; Remember me
                      </div>
                      <div>
                        <Image
                          src="lock_black_24dp1.svg"
                          alt=""
                          width={16}
                          height={16}
                          className=""
                        />
                        &nbsp; Forgot password?
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn button-continue-with"
                        style={{ borderColor: "black" }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                  {/* when sign in */}
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* //Feature1 */}
        <div style={{}} className="d-flex feature1-box-top ">
          <div style={{}} className="feature1-box-top-section">
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
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </div>
              <button className="btn feature1-box-btn">Connect</button>
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
                  src={isHoveredshopping ? "bucketwhite.svg" : "shopping.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                &nbsp;&nbsp;&nbsp;Product
              </div>
              <div className="feature1-box-des">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </div>
              <button className="btn feature1-box-btn">Get it</button>
            </div>
          </div>

          <div style={{ marginRight: 24 }}>
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
                Find a className, school, playground, auditorium, studio, shop
                or an event venue. Book a slot at venues that allow booking
                through hobbycue.
              </div>
              <button className="btn feature1-box-btn">Meet up</button>
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
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </div>
              <button className="btn feature1-box-btn">Attend</button>
            </div>
          </div>
        </div>
        {/* //Testimonials */}
        <div
          style={{ backgroundColor: "rgb(247,253,255)" }}
          className="add-your-own-parent"
        >
          <div className="add-your-own">
            <div className="feature1-box-head">
              <Image src="Add.svg" alt="" width={40} height={40} className="" />
              &nbsp;&nbsp;&nbsp; Add your own
            </div>
            <div className="feature1-box-des">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <button className="btn feature1-box-btn">Add new</button>
          </div>
        </div>
        {/* //Testimonials */}
        <div style={{}} className="add-your-own-parent testimonials-real">
          <div className="add-your-own " style={{ backgroundColor: "#f7f5f9" }}>
            <div className="feature1-box-head">
              <Image
                src="quote.svg"
                alt=""
                width={40}
                height={40}
                className=""
              />
              <span>Testimonials</span>
            </div>
            <div className="feature1-box-des">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </div>
            <div className="d-flex">
              {/* //Audio track */}
              <div>
                {/* <Image src="play.svg" alt="" width={24} height={24} className="" />
                ------
                <Image src="mic.svg" alt="" width={32} height={32} className="" /> */}

                {/* <Image
                  src="Ellipse26.svg"
                  alt=""
                  width={60}
                  height={60}
                  className=""
                /> */}
                <Image
                  src="AudioTrack.svg"
                  alt=""
                  width={776}
                  height={100}
                  style={{ marginLeft: 44 }}
                  className=" hobbycue-logo"
                />
                <Image
                  src="profilesm.svg"
                  alt=""
                  width={264}
                  height={64}
                  style={{ marginLeft: 24, marginBottom: 32 }}
                  className="hobbycue-logo-sm"
                />
                <Image
                  src="audiosm.svg"
                  alt=""
                  width={264}
                  height={64}
                  style={{ marginLeft: 24 }}
                  className="hobbycue-logo-sm"
                />
              </div>
              <div
                className="d-flex audio-side-profile hobbycue-logo"
                style={{ paddingLeft: 80 }}
              >
                <Image
                  src="Ellipse26.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="hobbycue-logo"
                />
                <div
                  style={{ margin: "24px 0px 24px 24px " }}
                  className="hobbycue-logo"
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "rgba(128, 100, 162, 1)",
                    }}
                  >
                    Shubha Nagarajan
                  </div>
                  <div
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "rgba(0, 150, 200, 1)",
                    }}
                  >
                    Classical Dancer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //End */}
        <div style={{ backgroundColor: "#f7fdff" }} className="end">
          <div className="head-explore" style={{}}>
            Your <span style={{ color: "#8064a2" }}>Hobby</span> , Your &nbsp;
            <span style={{ color: "#0096c8" }}>Community...</span>
          </div>
          <button
            className="btn "
            style={{
              backgroundColor: "rgba(128, 100, 162, 1)",
              color: "white",
            }}
          >
            Get Started
          </button>

          <div style={{}} className="end-img">
            <Image
              src="Group99.svg"
              alt=""
              width={1240}
              height={302}
              className="hobbycue-logo"
            />
            <Image
              src="Group99.svg"
              alt=""
              width={312.05}
              height={76}
              className="hobbycue-logo-sm"
            />
          </div>
        </div>
        {/* //Footer */}
        <div className="footer">
          <div
            className="d-flex justify-content-between footer-next"
            style={{}}
          >
            <div className="footer-col">
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                Hobbycue
              </div>
              <div>About Us</div>
              <div>Our Services</div>
              <div>Work with Us</div>
              <div>FAQ</div>
              <div>Contact Us</div>
            </div>
            <div className="footer-col">
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                How Do I
              </div>
              <div>Sign Up</div>
              <div>Add a Listing</div>
              <div>Claim Listing</div>
              <div>Post a Query</div>
              <div>Add a Blog Post</div>
              <div>Other Queries</div>
            </div>
            <div className="footer-col">
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                Quick Links
              </div>
              <div>Listings</div>
              <div>Blog Posts</div>
              <div>Shop / Store</div>
              <div>Community</div>
            </div>
            {/* //Social Media */}
            <div style={{}} className="social-media">
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 16,
                  }}
                >
                  Social Media
                </div>
                <div className="d-flex justify-content-between">
                  <Image
                    src="Group60.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                  <Image
                    src="Group61.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                  <Image
                    src="Group62.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />

                  <Image
                    src="Group63.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                  <Image
                    src="Group59.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                  <Image
                    src="Group58.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                  <Image
                    src="Group57.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                  <Image
                    src="Group56.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginTop: 50,
                  marginBottom: 16,
                }}
              >
                Invite Friends
                <form
                  className="d-flex custom-form footer-invite-form"
                  style={{}}
                >
                  <input
                    className="form-control custom-search-form-control custom-input"
                    type="search"
                    placeholder="Email Id"
                    aria-label="Email Id"
                    style={{ backgroundColor: "white" }}
                  />
                  <button
                    className="btn custom-search-btn "
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      backgroundColor: "rgb(128, 100, 162)",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                    type="submit"
                  >
                    Invite
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(247, 245, 249, 1)",
            }}
            className="copyright"
          >
            © Purple Cues Private Limited
          </div>
        </div>
        {/* //go to top */}
        <div
          style={{
            color: "rgba(128, 100, 162, 1)",
            boxShadow: "rgba(120, 120, 120, 0.14)",
          }}
          className="hobbycue-logo"
        >
          <Image
            src="Group77.svg"
            alt=""
            width={60}
            height={60}
            style={{ marginLeft: 30, marginBottom: "-10px" }}
          />
          Go to top (Ctrl+Home)
        </div>
      </main>
    </div>
  );
}

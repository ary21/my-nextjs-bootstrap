/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAlignJustify } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="wrapper fullheight-side">
        <div
          className="logo-header position-fixed"
          data-background-color="blue"
        >
          <a href="index.html" className="logo">
            <img
              src="/img/logo.svg"
              alt="navbar brand"
              className="navbar-brand"
            />
          </a>
          <button
            className="navbar-toggler sidenav-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {<FontAwesomeIcon className="fa fas" icon={faAlignJustify} />}
            </span>
          </button>
          <button className="topbar-toggler more">
            <i className="icon-options-vertical"></i>
          </button>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              {<FontAwesomeIcon className="fa fas" icon={faAlignJustify} />}
            </button>
          </div>
        </div>
        <div className="sidebar sidebar-style-2" data-background-color="blue">
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <div className="user">
                <div className="avatar-sm float-left mr-2">
                  <img
                    src="/img/profile.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="info">
                  <a
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="true"
                  >
                    <span>
                      Joko Susilo
                      <span className="user-level">Administrator</span>
                      <span className="caret"></span>
                    </span>
                  </a>
                  <div className="clearfix"></div>

                  <div className="collapse in" id="collapseExample">
                    <ul className="nav">
                      <li>
                        <a href="#profile">
                          <span className="link-collapse">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="#edit">
                          <span className="link-collapse">Edit Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="#settings">
                          <span className="link-collapse">Settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="nav navbar-nav me-auto">
                <li className="nav-section">
                  <h4 className="text-section">Finance</h4>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>Annual Report</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>HR Report</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>Finance Report</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>Revenue Report</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>IPO Report</p>
                  </a>
                </li>
                <li className="nav-section">
                  <span className="sidebar-mini-icon">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                  </span>
                  <h4 className="text-section">Snippets</h4>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#email-nav">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>Email</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="email-nav">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="#">
                          <span className="sub-item">Inbox</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sub-item">Email Compose</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sub-item">Email Detail</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>Projects</p>
                    <span className="badge badge-count">5</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>Boards</p>
                    <span className="badge badge-count">4</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    {<FontAwesomeIcon className="fa fas" icon={faEnvelope} />}
                    <p>Invoices</p>
                    <span className="badge badge-count">6</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse" id="search-nav">
              <form className="navbar-left navbar-form nav-search mr-md-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button type="submit" className="btn btn-search pr-1">
                      <i className="fa fa-search search-icon"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="form-control"
                  />
                </div>
              </form>
            </div>
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              <li className="nav-item toggle-nav-search hidden-caret">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#search-nav"
                  role="button"
                  aria-expanded="false"
                  aria-controls="search-nav"
                >
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a
                  className="dropdown-toggle profile-pic"
                  data-toggle="dropdown"
                  href="#"
                  aria-expanded="false"
                >
                  <div className="avatar-sm">
                    <img
                      src="/img/profile.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                  <div className="dropdown-user-scroll scrollbar-outer">
                    <li>
                      <div className="user-box">
                        <div className="avatar-lg">
                          <img
                            src="/img/profile.jpg"
                            alt="image profile"
                            className="avatar-img rounded"
                          />
                        </div>
                        <div className="u-text">
                          <h4>Joko Susilo</h4>
                          <p className="text-muted">hello@example.com</p>
                          <a
                            href="profile.html"
                            className="btn btn-xs btn-secondary btn-sm"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        My Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        My Balance
                      </a>
                      <a className="dropdown-item" href="#">
                        Inbox
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Account Setting
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div className="main-panel full-height">
          <div className="container">
            <div className="page-inner">
              <div className="page-header">
                <h4 className="page-title">Dashboard</h4>
                <ul className="breadcrumbs">
                  <li className="nav-home">
                    <a href="#">
                      <i className="flaticon-home"></i>
                    </a>
                  </li>
                  <li className="separator">
                    <i className="flaticon-right-arrow"></i>
                  </li>
                  <li className="nav-item">
                    <a href="#">Pages</a>
                  </li>
                  <li className="separator">
                    <i className="flaticon-right-arrow"></i>
                  </li>
                  <li className="nav-item">
                    <a href="#">Starter Page</a>
                  </li>
                </ul>
              </div>
              <div className="page-category">Inner page content goes here</div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <nav className="pull-left">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Licenses
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright ml-auto">
                2018, made with{" "}
                <i className="fa fa-heart heart text-danger"></i>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

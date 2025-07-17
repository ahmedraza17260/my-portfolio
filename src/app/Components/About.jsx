"use client";

import Image from "next/image";

const About = ({ data }) => {
  if (!data) return <div>Loading About Section...</div>;

  const {
    name,
    image,
    bio,
    address = {},
    phone,
    email,
    resumedownload,
  } = data;

  const profilepic = `/images/${image}`; // ✅ Public folder path
  const { street = "", city = "", state = "", zip = "" } = address;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <Image
            className="profile-pic"
            src={profilepic}
            alt={`${name} Profile Pic`}
            width={150}
            height={150}
          />
          <br />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p style={{ fontWeight: "600", textAlign: "justify" }}>{bio}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>

            <div className="columns download">
              <p>
                <a
                  href={resumedownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <i className="fa fa-download"></i> View Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

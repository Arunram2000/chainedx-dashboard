import React, { ChangeEvent, FormEvent, useState } from "react";

import { Button } from "../../../components";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as Phone } from "../../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../../assets/icons/mail.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Google } from "../../../assets/icons/google.svg";
import { ReactComponent as Pinterest } from "../../../assets/icons/pinterest.svg";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactus">
      <div className="max pad">
        <div className="contactus_container">
          <div className="contact_info" data-aos="flip-right">
            <h1 className="mb-50">
              Contact with <span className="color-primary">us</span>
            </h1>
            <div className="contact_info_block">
              <p className="mb-50">
                Our office is located in abeutiful building and garden and fast
                growing city.
              </p>
              <div className="social_info_wrapper">
                <div className="social_info">
                  <p>
                    <Location />
                    <b>Address</b>
                  </p>
                  <p>
                    22 International Division
                    <br />
                    ViaG.B. Pirelli
                  </p>
                </div>
                <div className="social_info">
                  <p>
                    <Phone />
                    <b>Phone</b>
                  </p>
                  <p>+23 0123 4567</p>
                </div>
                <div className="social_info">
                  <p>
                    <Mail />
                    <b>EMAIL-ID</b>
                  </p>
                  <p>Yourmail@mail.com</p>
                </div>
                <div className="social_info">
                  <p>
                    <b>FOLLOW US</b>
                  </p>
                  <div>
                    <a href="/">
                      <Facebook />
                    </a>
                    <a href="/">
                      <Linkedin />
                    </a>
                    <a href="/">
                      <Pinterest />
                    </a>
                    <a href="/">
                      <Google />
                    </a>
                    <a href="/">
                      <Twitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_form" data-aos="flip-left">
            <h1 className="mb-50">
              Leave a Messag<span className="color-primary">e</span>
            </h1>
            <div className="contact_form_block">
              <form onSubmit={handleSubmit}>
                <div className="form_input">
                  <label htmlFor="name">Enter Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="email">Enter Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="subject">Enter Subject*</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="message">Message*</label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button>Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

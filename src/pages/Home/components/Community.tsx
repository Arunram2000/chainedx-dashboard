import React from "react";

import works_illustration from "../../../assets/images/community.svg";
import instagram from "../../../assets/icons/instagram.png";
import twitter from "../../../assets/icons/twitter.png";
import telegram from "../../../assets/icons/telegram.png";
import discord from "../../../assets/icons/discord.png";

const Community: React.FC = () => {
  return (
    <section className="works" style={{ marginBottom: 0 }}>
      <div className="mx pad">
        <div className="works_container">
          <div className="content">
            <h1 className="mb-30">
              Communit<span className="color-primary">y</span>
            </h1>
            <p className="mb-20">
              If you’d like to donate to the <strong>Devs</strong>, send{" "}
              <strong>ETH</strong>, <strong>SHIB</strong>,{" "}
              <strong>LEASH</strong>, or <strong>BONE</strong> here. Thank you
              for your support! WOOF!
            </p>
            <p className="mb-20">
              Our community grows stronger every day. Please follow our social
              platforms to get the most up-to-date, accurate ChainedX
              information.
            </p>
            <p>
              Using the links below, you can join our various groups alongside
              the 1M+ other members of the ChainedXperts.
            </p>
          </div>
          <div className="abstract">
            <img src={works_illustration} alt="works chainedx illsutration" />
          </div>
        </div>
        <div className="community_links">
          <p className="color-primary">
            Click here to search for your preferred country!
          </p>
          <div>
            <a href="/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="/">
              <img src={discord} alt="discord" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

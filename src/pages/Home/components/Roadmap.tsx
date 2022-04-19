import React from "react";

import roadmap_illstration from "../../../assets/images/roadmap.png";

import { roadmap } from "../../../data/roadmap";

const Roadmap: React.FC = () => {
  return (
    <section className="roadmap">
      <div className="mx pad">
        <div className="roadmap_container">
          <div className="roadmap_container-header">
            <h1 className="mb-20">
              Roadma<span className="color-primary">p</span>
            </h1>
            <p>
              The use of crypto-currencies has become more widespread, and they are now increasingly
              accepted as a legitimate currency for transactions.
            </p>
          </div>
          <div className="roadmap_section">
            {roadmap.slice(0, 3).map(({ description, title, icon }, index) => (
              <section key={index}>
                <img src={icon} alt="roadmap icon" />
                <b className="mb-10 mt-20">{title}</b>
                <p>{description}</p>
              </section>
            ))}
          </div>
          <img
            src={roadmap_illstration}
            alt="chainedx roadmap illustration"
            className="roadmap_abstract"
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

import React from "react";
import { Link } from "react-router-dom";
import SiteContainer from "../components/SiteContainer";

function Contact(siteLang) {
  const ContactNL = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="text-white font-bold text-5xl mb-3 mt-8">Hmm... Hier gaat iets fout... 🤔</h1>
          <p className="text-gray-300 mb-6 text-lg">Het blijkt dat de pagina die je zoekt zich hier niet bevindt...</p>
          <Link to={sessionStorage.getItem("latestPage")}>
            <p className="text-gray-300 mb-6 text-lg underline italic">Neem me weer terug graag!</p>
          </Link>
        </>
      </SiteContainer>
    );
  };

  const ContactEN = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="text-white font-bold text-5xl mb-3 mt-8">Hmm... Something is wrong... 🤔</h1>
          <p className="text-gray-300 mb-6 text-lg">It appears the page you're looking for isn't here...</p>
          <Link to={sessionStorage.getItem("latestPage")}>
            <p className="text-gray-300 mb-6 text-lg underline italic">Take me back please!</p>
          </Link>
        </>
      </SiteContainer>
    );
  };

  if (siteLang.siteLang === "NL") return <ContactNL />;
  else return <ContactEN />;
}

export default Contact;

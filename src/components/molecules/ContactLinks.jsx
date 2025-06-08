import React from "react";

import { Link } from "react-router";
import { Contact } from "../../data/variables";

const ContactLinks = () => {
  return (
    <>
      <Link
        to={`https://www.linkedin.com/in/${Contact.LinkedIn}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="h4 text-thin">
          <span className="material-icons">open_in_new</span>
          <span> Linked-in</span>
        </h3>
      </Link>
      <Link to={Contact.CV}>
        <h3 className="h4 text-thin">
          <span className="material-icons">picture_as_pdf</span>
          <span> C.V.</span>
        </h3>
      </Link>
      <Link to={`tel:${Contact.Phone}`}>
        <h3 className="h4 text-thin">
          <span className="material-icons">perm_phone_msg</span>
          <span> Call/SMS</span>
        </h3>
      </Link>
      <Link to={`mailto:${Contact.Email}`}>
        <h3 className="h4 text-thin">
          <span className="material-icons">email</span>
          <span> Email</span>
        </h3>
      </Link>
    </>
  );
};

export default ContactLinks;

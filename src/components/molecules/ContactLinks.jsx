import React from "react";

import { Link } from "react-router";
import { Contact } from "../../data/variables";
import Icon from "../atoms/Icon";

const ContactLinks = () => {
  return (
    <>
      <Link
        to={`https://www.linkedin.com/in/${Contact.LinkedIn}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="h4 text-thin">
          <Icon>open_in_new</Icon>
          <span> Linked-in</span>
        </h3>
      </Link>
      <Link to={Contact.CV}>
        <h3 className="h4 text-thin">
          <Icon>picture_as_pdf</Icon>
          <span> C.V.</span>
        </h3>
      </Link>
      <Link to={`tel:${Contact.Phone}`}>
        <h3 className="h4 text-thin">
          <Icon>perm_phone_msg</Icon>
          <span> Call/SMS</span>
        </h3>
      </Link>
      <Link to={`mailto:${Contact.Email}`}>
        <h3 className="h4 text-thin">
          <Icon>email</Icon>
          <span> Email</span>
        </h3>
      </Link>
    </>
  );
};

export default ContactLinks;

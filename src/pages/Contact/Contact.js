import React from 'react'
import { InfoSection } from '../../components/InfoSection/InfoSectionData'
import { homeObjOne } from '../Contact/ContactData'

function Contact() {
  return (
    <>
      <InfoSection primary {...homeObjOne} />
    </>
  );
};

export default Contact;

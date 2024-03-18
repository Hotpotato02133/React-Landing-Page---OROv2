import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne } from './SignUpData';

function SignUp() {
  return (
    <>
      <InfoSection primary {...homeObjOne} />
    </>
  );
}

export default SignUp;
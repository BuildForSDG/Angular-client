import React from 'react';
import Main from './Main';

const ProfilePage = () => (
  <Main>
    <h1>Profile Page</h1>
    console.log(this.status);
<h2>Hello {this.status.email}</h2>
  </Main>
)

export default ProfilePage;

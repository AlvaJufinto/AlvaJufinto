import React, { FC } from 'react';

// molecules 
import Footer from '../../molecules/Footer/Footer';

// organism
import ProfileContainer from '../../organisms/ProfileContainer/ProfileContainer';
import StackContainer from '../../organisms/StackContainer/StackContainer';
import ProjectsContainer from '../../organisms/ProjectsContainer/ProjectsContainer';


const Home: FC = () => {
  return (
    <div className="App">
      <ProfileContainer />
      <StackContainer />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default Home;

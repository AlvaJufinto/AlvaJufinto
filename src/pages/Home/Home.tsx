import React, { FC } from 'react';

// molecules 
import Footer from '../../components/molecules/Footer/Footer';

// organism
import ProfileContainer from '../../components/organisms/ProfileContainer/ProfileContainer';
import StackContainer from '../../components/organisms/StackContainer/StackContainer';
import ProjectsContainer from '../../components/organisms/ProjectsContainer/ProjectsContainer';


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

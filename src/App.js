
import  './App.css';
import NavBar from './components/navBar';
import ProfileSection from './components/profileSection';
import AboutSection from './components/aboutSection';
import ResumeSection from './components/resumeSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='containerOne'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.9" d="M0,128L60,138.7C120,149,240,171,360,197.3C480,224,600,256,720,234.7C840,213,960,139,1080,133.3C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
      <NavBar />
      <ProfileSection />
      <div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
      </div>
      <div  className='containerTwo'>
       {/* <AboutSection /> */}
       <ResumeSection />
       <Footer />
      </div>
     
    </div>
  );
}

export default App;

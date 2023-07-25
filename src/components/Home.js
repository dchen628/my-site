import Spline from '@splinetool/react-spline';

function Home() {
    return (
      <div className='bg-black'>
        <div className='absolute gap-10 right-10 top-5 flex flex-nowrap text-2xl'>
          <div className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>About</div>
          <div className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>Works</div>
          <div className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>Skills</div>
          <div className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>Contact</div>
        </div>
        <Spline
        scene="https://prod.spline.design/mbq80maoLWlqlplH/scene.splinecode"
      />
        <div className='text-white'>
            Welcome to my website!
        </div>
      </div>
    );
  }
  
  export default Home;
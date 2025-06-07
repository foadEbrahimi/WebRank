import Button from './Butoon/Button';
import Navbar from './Navbar/Navbar';

import logo from '../../../public/images/logo.png';

export default function Header() {
  return (
    <div className="md:mx-auto max-w-7xl md:gap-2 lg:gap-10 2xl:gap-24 px-5 flex items-center justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center cursor-pointer">
          <img src={logo} alt="logo png" className="w-20 mix-blend-screen" />
          <h1 className="text-xl text-white font-bold">WebRank</h1>
        </div>
      </div>
      <Button />
      <Navbar />
    </div>
  );
}

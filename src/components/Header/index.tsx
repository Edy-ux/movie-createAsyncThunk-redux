import { useState } from 'react';

//imports from redux
import { toogleTheme } from '../../features/theme/sliceTheme';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';

//imports from react-icons

import { BsSun, BsFillMoonFill } from 'react-icons/bs';
const Header = () => {
  //   const [darkTheme, setDarkTheme] = useState(null);

  const { darkTheme } = useAppSelector((RootState) => RootState);
  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toogleTheme());

  return (
    <header className="mb-8">
      <nav className="border-b border-gray-200 border-opacity-25 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl  font-semibold whitespace-nowrap">
              Movies
            </span>
          </a>

          <div className="flex items-center lg:order-2">
            {darkTheme && (
              <BsSun
                className="hover:opacity-40 cursor-pointer"
                onClick={onToggle}
              />
            )}
            {!darkTheme && (
              <BsFillMoonFill
                onClick={onToggle}
                className="hover:opacity-40 cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

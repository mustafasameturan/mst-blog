import { forwardRef } from 'react';
import { toggleMobileMenu } from '~/utils/helpers';
import {useTranslation} from "react-i18next";
import {navbarMenu} from "~/utils/consts/navbar.js";
import NavbarMobileItem from "~/layouts/web/components/navbar-mobile/components/navbar-mobile-item/index.jsx";

const NavbarMobile = forwardRef((props, ref) => {

  const { t } = useTranslation();
  const NAVBAR_MENU_ITEMS = navbarMenu(t);

  // SidebarMobile bileşeni burada oluşturulan JSX'i döndürür.
  return (
      <div ref={ref} className="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden">
          <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
            <i className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white" onClick={() => toggleMobileMenu(ref)}></i>
            <ul className="mt-8 flex flex-col">
              {NAVBAR_MENU_ITEMS.map((item, index) => (
                  <NavbarMobileItem
                      key={index}
                      path={item.path}
                      title={item.title}
                  />
              ))}
            </ul>
          </div>
        </div>
  );
});

export default NavbarMobile;
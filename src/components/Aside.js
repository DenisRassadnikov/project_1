import { Link } from "react-router-dom";
import { TbFridge } from "react-icons/tb";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { TbCooker } from "react-icons/tb";

const Aside = () => {
  return (
    <>
      <div className='sidebar-layout'>
        <aside className='sidebar'>
          <ul className='menu-categories'>
            <li className='menu-categories__item'>
              <Link className='menu-categories__link' to='freezers'>
                <TbFridge />
                Freezers
              </Link>
            </li>
            <li className='menu-categories__item'>
              <Link className='menu-categories__link' to='washing_machines'>
                <CgSmartHomeWashMachine />
                Washing machines
              </Link>
            </li>
            <li className='menu-categories__item'>
              <Link className='menu-categories__link' to='cookers'>
                <TbCooker />
                Cookers
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Aside;

import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./style.scss";
import 'antd/dist/antd.css';

function Header() {
return (
<div>
    <header className='d_flex a_items_center j_content_end'>
        <div className='userMenu d_flex a_items_center'>
            <div className='user'>
                <NavLink to="/user">
                    <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 32 32">
                        <g fill="white">
                            <path
                                d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.00693253 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM25.1429 26.1931V25.4983C25.1746 23.9399 24.5939 22.4312 23.5255 21.2963C22.457 20.1614 20.9861 19.4908 19.4286 19.4286H12.5714C11.0153 19.4911 9.54584 20.162 8.4793 21.2969C7.41277 22.4318 6.83438 23.9401 6.86858 25.4971C6.86858 25.5097 6.85715 25.5223 6.85715 25.5349V26.2034C4.7839 24.3528 3.32154 21.9161 2.66362 19.2161C2.00571 16.516 2.18327 13.6798 3.1728 11.0828C4.16233 8.48588 5.91717 6.25067 8.20505 4.67304C10.4929 3.09542 13.206 2.24977 15.985 2.24803C18.7641 2.24629 21.4782 3.08855 23.768 4.66331C26.0579 6.23808 27.8155 8.4711 28.8083 11.0668C29.8011 13.6625 29.9822 16.4985 29.3276 19.1994C28.6731 21.9003 27.2138 24.3388 25.1429 26.192V26.1931Z"
                                fill="white" />
                            <path
                                d="M15.9999 5.71429C14.8698 5.71429 13.765 6.04943 12.8252 6.67732C11.8855 7.30522 11.1531 8.19767 10.7206 9.24182C10.2881 10.286 10.175 11.4349 10.3954 12.5434C10.6159 13.6518 11.1602 14.67 11.9593 15.4692C12.7585 16.2683 13.7767 16.8126 14.8851 17.0331C15.9936 17.2536 17.1425 17.1404 18.1867 16.7079C19.2308 16.2754 20.1233 15.543 20.7512 14.6033C21.3791 13.6636 21.7142 12.5588 21.7142 11.4286C21.7142 9.91306 21.1122 8.45961 20.0405 7.38797C18.9689 6.31633 17.5155 5.71429 15.9999 5.71429Z"
                                fill="white" />
                        </g>
                    </svg>
                </NavLink>
            </div>
            <div className='menu'>
                <Link to="/menu">
                    <div className='menuBtn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </div>
    </header>
</div>
);
}

export default Header;
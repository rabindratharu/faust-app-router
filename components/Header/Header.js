import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <>
    <header className={cx('component')}>
      <SkipNavigationLink />
        <Container className="flex items-center justify-between py-4">
        <div className="site-branding">
            <div class="site-title">
              <Link href="/">
                  <a target="_self" className='text-4xl uppercase font-bold'>
                      logo
                  </a>
                </Link>
            </div>
        </div>
        <div class="navbar bg-base-100 p-0">
          <div class="primary-menu lg:flex w-full">
            <ul class="menu menu-horizontal p-0 items-center w-full justify-end">
              <li><a>Item 1</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul class="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
              <li>
              <a class="btn">Button</a>
              </li>
            </ul>
          </div>
        </div>
        </Container>
      </header>

    



    <header className={cx('component')}>
      <SkipNavigationLink />
        <Container>
          <div className={cx('navbar')}>
            <div className={cx('brand')}>
              <Link href="/">
                <a className={cx('title')}>{title}</a>
              </Link>
              {description && <p className={cx('description')}>{description}</p>}
            </div>
            <button
              type="button"
              className={cx('nav-toggle')}
              onClick={() => setIsNavShown(!isNavShown)}
              aria-label="Toggle navigation"
              aria-controls={cx('primary-navigation')}
              aria-expanded={isNavShown}
            >
              ☰
            </button>
            <NavigationMenu
              className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
              menuItems={menuItems}
            />
        </div>
      </Container>
    </header>
    </>
    
  );
}

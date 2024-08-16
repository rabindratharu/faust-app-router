import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component')}>
        <div className='widget-area'>
        <Container>
          <div className="container px-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <aside className="widget pb-4">
              <h3 className="capitalize text-md mb-4 font-semibold">Stay Connected</h3>
              <div className="textarea p-0">
                <p className="">Subscribe now and join with 6 Million+ users to get exclusive WordPress resources</p>
              </div>
            </aside>
            <aside className="widget pb-4">
              <h3 className="capitalize text-md mb-4 font-semibold">Products</h3>
              <ul>
                <li> 
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">about us</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">FAQs</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">blog</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">services</a>
                </li>
              </ul>
            </aside>
            <aside className="widget pb-4">
              <h3 className="capitalize text-md mb-4 font-semibold">Support</h3>
              <ul>
                <li> 
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">about us</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">FAQs</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">blog</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">services</a>
                </li>
              </ul>
            </aside>
            <aside className="widget pb-4">
              <h3 className="capitalize text-md mb-4 font-semibold">Company</h3>
              <ul>
                <li> 
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">about us</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">FAQs</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">blog</a>
                </li>
                <li>
                  <a href="#" className="capitalize mb-2 inline-block  hover:text-orange-500">services</a>
                </li>
              </ul>
            </aside>
          </div>
          </Container>
        </div>


        <Container>
        <NavigationMenu menuItems={menuItems} />
        <p className={cx('copyright')}>{`${title} © ${year}. Powered by WordPress.`}</p>
      </Container>
    </footer>
  );
}

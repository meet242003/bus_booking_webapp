import Header from './Header';
import "antd/dist/reset.css";


const Layout = ({ children }) => {
    console.log(children)
    return (
       <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
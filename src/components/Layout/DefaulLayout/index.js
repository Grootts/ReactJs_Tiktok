import Header from './Header';
import Sidebar from './Sidebar';

function DefaulLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="contant">{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;

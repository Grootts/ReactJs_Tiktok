import Upload from 'src/pages/Upload';
import Header from './Header';

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <Upload />
            </div>
        </div>
    );
}

export default HeaderOnly;

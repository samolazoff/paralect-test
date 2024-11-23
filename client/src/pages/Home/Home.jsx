import './Home.scss';

import { Link } from 'react-router-dom';

function Home() {
    return(
       <div className="app">
            <heaeder className="app-header container">
                <Link to='/'>
                    <h1 className="title">
                        Paralect test
                    </h1>
                </Link>
                <div className="box-btns">
                    <button>Add</button>
                    <button>Delete</button>
                </div>
            </heaeder>
            <main className="app-main">
                main
            </main>
            <footer className="app-footer">footer</footer>
       </div>
    )
};

export default Home;
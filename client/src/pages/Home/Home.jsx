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
                    <button className='btn-main'>Add</button>
                    <button className='btn-main btn__delete'>Delete</button>
                </div>
            </heaeder>
            <main className="app-main container">
                <h2 className='title-block'>Responses</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Vacancy</th>
                            <th scope="col">Salary range</th>
                            <th scope="col">Response status</th>
                            <th scope="col">Note</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Alfa Qualetet</th>
                            <td>Web </td>
                            <td>2000-3000</td>
                            <td>Hidden</td>
                            <td>Dodo</td>
                            <td>
                                <div className="btn-table">
                                    <button type="submit" className='btn__delete'>del</button>
                                    <button type="submit">red</button>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </main>
            <footer className="app-footer container">footer</footer>
       </div>
    )
};

export default Home;
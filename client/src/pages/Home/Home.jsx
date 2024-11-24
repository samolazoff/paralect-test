import './Home.scss';

import { Link } from 'react-router-dom';
import isHiddenElements from '../../utils/isHiddenElement';

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
                    <button className='btn-main' onClick={()=>isHiddenElements('.form-add')}>Add</button>
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
                <form action="/" method="post" className='form-add hidden'>
                    <div className="wrap-input">
                        <label for="name_company">Company:</label>
                        <input type="text" id="name_company" name="name_company" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="name_vacancy">Vacancy:</label>
                        <input type="text" id="name_vacancy" name="name_vacancy" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="salary">Salary range:</label>
                        <input type="number" id="salary" name="salary" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="response_status">Response status:</label>
                        <input type="text" id="response_status" name="response_status" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="note">Note:</label>
                        <input type="text" id="note" name="note" required/>
                    </div>
                    <div className="form-add-btn-box">
                        <button type="submit"  onClick={()=>isHiddenElements('.form-add')}>Add</button>
                        <button  onClick={()=>isHiddenElements('.form-add')}>Exit</button>
                    </div>
                </form>
            </main>
            <footer className="app-footer container">
                <Link to='https://github.com/samolazoff'>by Samolazoff</Link>
            </footer>
       </div>
    )
};

export default Home;
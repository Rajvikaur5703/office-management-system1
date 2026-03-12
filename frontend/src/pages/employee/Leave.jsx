import '../../assets/styles/employee/leave.css';
import { Link } from 'react-router-dom';

function Leave()
{
    return(
        <div className='leave'>
            <div className='top-section'>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search by Status..." />
                </div>
            </div>

            <div className="leave-section">

                <div className='add-leave'>
                    <div className='card'>
                        <h3>➕ Add Leave</h3>
                        <form className='add-leave-form'>

                            <label>Leave Type</label>
                            <input type="text" name="type" required /> 

                            <label>From</label>
                            <input type="date" name="from" required />

                            <label>To</label>
                            <input type="date" name="to" required />

                            <label>Description</label>
                            <input type="text" name="description" required />

                            <label>Applied Date</label>
                            <input type="date" name="applied-date" required />

                            <button type="submit" className='btn-add-leave'>Add Leave</button> 
                        </form>
                    </div>
                </div>

                <div className='total-leave'>
                    <div className='card'>
                        <h3>Total Leave</h3>
                        <div className='table-container'>
                            <table className='leave-table'>
                                <thead>
                                    <tr>
                                        <th>SNO</th>
                                        <th>LEAVE TYPE</th>
                                        <th>FROM - TO</th>
                                        <th>DESCRIPTION</th>
                                        <th>APPLIED DATE</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sick Leave</td>
                                        <td>9/1/2025 - 9/5/2025</td>
                                        <td>High Fever and Flu</td>
                                        <td>9/11/2025</td>
                                        <td className='green'>Approved</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Casual Leave</td>
                                        <td>9/14/2025 - 9/15/2025</td>
                                        <td>casual leave</td>
                                        <td>9/14/2025</td>
                                        <td className='red'>Rejected</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Annual Leave</td>
                                        <td>3/1/2025 - 3/15/2025</td>
                                        <td>annual leave</td>
                                        <td>2/20/2025</td>
                                        <td className='blue'>Pending</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Leave;
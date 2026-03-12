import '../../assets/styles/employee/attendence.css';

function Attendence()
{
    return(
        <div className='attendence'>
            <div className='attendence-section'>
                <div className='today-attendence'>
                    <h3>Today's Attendence</h3>
                    <form>
                        <div>
                            <label>Date : </label>
                            <label>11 March 2026</label>
                        </div>
                        <div>
                            <label>Status : </label>
                            <label>Not Marked</label>
                        </div>
                        <div>
                            <button className='btn-checkin'>Check In</button>
                            <button className='btn-checkout'>Check Out</button>
                        </div>
                    </form>
                </div>

                <div className='attendence-history'>
                    <h3>Attendence History</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Hours</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11 March 2026</td>
                                <td>09:00 AM</td>
                                <td>06:00 PM</td>
                                <td>9hr</td>
                                <td className="status-present">Present</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>       
    );
}

export default Attendence;
import { Link } from "react-router-dom";

export default function ViewEmployees() {
    return (
        <div className='header'>
            <h3 className='heading'>View Employee</h3>
            <Link to={'/'} className='btn add_btn'>Go Back</Link>
        </div>

    )
}
import { Link } from 'react-router-dom';
import classes from '../styles/Tutorials.module.css';
import Tutorial from './Tutorial';
export default function Tutorials()
{
    return(
        <div className={classes.tutorials}>
         <Link to="/quiz"><Tutorial /></Link>
         <Link to="/quiz"><Tutorial /></Link>
         <Link to="/quiz"><Tutorial /></Link>  
         <Link to="/quiz"><Tutorial /></Link>
         <Link to="/quiz"><Tutorial /></Link>
        </div>
    );
}
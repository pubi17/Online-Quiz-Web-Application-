import classes from '../styles/Tutorials.module.css';
import Tutorial from './Tutorial';
export default function Tutorials()
{
    return(
        <div className={classes.tutorials}>
            <Tutorial />
            <Tutorial />
            <Tutorial />
        </div>
    );
}
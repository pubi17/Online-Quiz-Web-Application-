import image from '../assets/images/3.jpg';
import classes from "../styles/Tutorial.module.css";
export default function Tutorial(){
    return( 
    <div className={classes.tutorial}>
      <img src={image} alt="Tutorial Title" />
      <p>DataStructure</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
    );
}
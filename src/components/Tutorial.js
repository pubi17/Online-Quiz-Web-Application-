
import classes from "../styles/Tutorial.module.css";
export default function Tutorial({title, id, noq}){
    return( 
    <div className={classes.tutorial}>
      <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Score : {noq*5} </p>
      </div>
    </div>
    );
}
const Liveact = (props) => {
    return ( 
        <section id="show">
            <article className="foto-container">
                <img src={props.showImg} alt=""/>
                <h2 className="centered">{props.showName}</h2>
            </article>
            <h3 className="timetable">{props.showDay}<br/>{props.showTime}</h3>
            <h4 className="show-text">{props.showDescription}</h4>
        </section>
     );
}
 
export default Liveact;

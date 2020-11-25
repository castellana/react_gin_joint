const Card = (props) => {
    return ( 
        <article id="insta-card">
            <div className="insta-logo">
                <img src="./assets/img/Group.svg" alt=""/>
            </div>
            <figure>
                <img className="insta-img" src={props.instaImg} alt=""/>
                <figcaption>
                    <h2 className="insta-p">{props.instaMessage}</h2>
                    <h3 className="insta-h3">{props.instaAuthor}</h3>
                </figcaption>
            </figure>
        </article>
     );
}
 
export default Card;
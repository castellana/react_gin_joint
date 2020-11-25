import Card from "./Card"

const Instagram = () => {
    return (
        <section id="instagram">
            <Card 
                instaImg="./assets/img/gin1.png"
                instaMessage='"A trick door opening to Bathtub Gin, a hopping Chelsea gin joint harkening back to the days of false store fronts"'
                instaAuthor="The Guardian"
            />
            <Card
                instaImg="./assets/img/jack1.png"
                instaMessage='"Life on the inside: exactly how you imagined it’d be... nailhead-tucked bar stools and—smack-dab in the center of the room—a glass-covered, claw-foot bathtub."'
                instaAuthor="Urban Daddy"
            />
        </section>
      );
}
 
export default Instagram;

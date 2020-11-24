import data_liveActs from '../data/data_live_acts.json'

import Liveact from './Liveact'

const ActsSection = () => {
    return (
        <section id="acts-section">
            <h3 className= "acts-h3">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</h3>
            
            <div className="grid">
                {data_liveActs.map(element => <Liveact
                    showName = {element.title}
                    showImg = {element.img}
                    showDay = {element.days}
                    showTime = {element.time}
                    showDescription = {element.description}
                    />)}
            </div>
        </section>

      );
}
 
export default ActsSection;
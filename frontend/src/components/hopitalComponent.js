import '../css/components/hopitalcomponent.css'

function HopitalComponent(props){

    return(
    <div className="card">
        <img src={props.image} alt="Image"></img>
        <div class="card-content">
            <div class="card-title">{props.title}</div>
            <div class="card-text">
                <strong>Temps d'attente : </strong> {props.temps}
            </div>
            <div class="card-text">
                <strong>Adresse : </strong> {props.adresse}
            </div>
            <div class="card-text">
                <strong>Ville : </strong> {props.ville}
            </div>
    </div>
</div>
    )
} 

export default HopitalComponent
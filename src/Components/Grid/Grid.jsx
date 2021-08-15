import "../Grid/grid.css"
function Grid(props) {
    return(
        <div>
          <div className="grid-item">
              <div className="card">
                <img className="card-img" src={props.img} alt={props.name} />
                <div className="card-content">
                  <h1 className="card-header">{props.name}</h1>
                  
                </div>
              </div>
            </div>
        </div>
    )
}
export default Grid;
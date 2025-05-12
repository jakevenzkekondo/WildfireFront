import loading from '../images/loading.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loading} alt="loading"></img>
            <h1>Fetching data from NASA...</h1>
            <h2>This may take a minute</h2>
        </div>
    )
}

export default Loader
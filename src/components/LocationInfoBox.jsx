import { Icon } from '@iconify/react';

const LocationInfoBox = ({ info, onClose }) => {
    return (
        <div className="location-info">
            <div className="location-info-header">
                <h2>Wildfire Data</h2>
                <button className="close-btn" onClick={onClose}>
                    <Icon icon="material-symbols:close" width="32" height="32"/>
                </button>
            </div>
            <ul>
                <li>TITLE: <strong>{ info.title }</strong></li>
                <li>LATITUDE: <strong>{ info.lat }</strong></li>
                <li>LONGITUDE: <strong>{ info.lng }</strong></li>
                <li>SOURCE: <strong>{ info.source }</strong></li>
                <li>DATE: <strong>{ info.date }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
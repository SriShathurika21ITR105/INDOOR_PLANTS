import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://th.bing.com/th/id/OIP.--Q0w2PWDQdDhWBVYzckdgHaHa?w=189&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                    title='Flowering Plants!'
                    comment='Launch Offer 50% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://th.bing.com/th/id/OIP.U3WYyD4HRptoWo0gTsAGuAHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                    title='Foliage Plants!'
                    comment='Launch Offer 25% off!'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection
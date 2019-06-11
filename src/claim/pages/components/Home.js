import React from 'react';
import {connect} from 'react-redux';
import * as HomeAction from './Home_action';
class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>Redux Saga</h1>
                <div>
                    {this.props.people.map( (person, i) => <span key={i}>{person}</span>)}
                </div>
                <div>
                    {this.props.planet.map((planet, i)=><span key={i}>{planet}</span>)}
                </div>
                <button onClick={()=>this.itemClick()}>Load More</button>
                <button onClick={()=>this.planetClick()}>load planet</button>
            </div>
        )
    }
    itemClick(){
        console.log(this.props);
        this.props.fetchStarWarsRequest()
    }
    planetClick(){
        console.log(this.props);
        this.props.fetchStarWarsPlanetsRequest()
    }
}
export default connect((state)=>{
    return state.HomeReducer;
}, HomeAction)(Home);

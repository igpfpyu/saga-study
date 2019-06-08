import React from 'react';
import {connect} from 'react-redux';
import * as HomeAction from './Home_action';
class Home extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Redux Saga</h1>
                <div>
                    {this.props.people.map( (person, i) => <h4 key={i}>{person}</h4>)}
                </div>
                <div>
                    {this.props.planet.map((planet, i)=><h4 key={i}>{planet}</h4>)}
                </div>
                <button onClick={this.props.fetchStarWarsRequest}>Load More</button>
                <button onClick={()=>this.planetClick()}>load planet</button>
            </div>
        )
    }
    itemClick(){
        console.log(this.props);
        console.log(this.props.fetchStarWarsRequest())
    }
    planetClick(){
        console.log(this.props);
        console.log(this.props.fetchStarWarsPlanetsRequest())
    }
}
export default connect((state)=>{
    return state.HomeReducer;
}, HomeAction)(Home);

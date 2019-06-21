import React from 'react';
import {connect} from 'react-redux';
import * as HomeAction from './Home_action';
class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>Redux Saga</h1>
                <div>
                    {this.props.people.map( (person, i) => <p key={i}>{person.name}</p>)}
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
        let params=[
            {name:"a"},
            {name:"b"},
            {name:"c"},
            {name:"d"},
            {name:"e"}
        ]
        this.props.fetchStarWarsRequest(params)
    }
    planetClick(){
        console.log(this.props);
        this.props.fetchStarWarsPlanetsRequest()
    }
}
export default connect((state)=>{
    return state.HomeReducer;
}, HomeAction)(Home);

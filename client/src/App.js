import React, {Component} from 'react'
import './App.css'
import {Board} from 'react-trello';
import axios from 'axios';


const data = require('./data.js')



class App extends Component {

    state = {
        boardData: {
            lanes: []
        }
    }

    handleDragStart = (cardId, laneId) => {
        console.log('drag started')
        console.log(`cardId: ${cardId}`)
        console.log(`laneId: ${laneId}`)
    }

    handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
        console.log('drag ended')
        console.log(`sourceLaneId: ${sourceLaneId}`)
        console.log(`targetLaneId: ${targetLaneId}`)
        axios.post(`http://localhost:5432/update?prevLane=${sourceLaneId}&nextLane=${targetLaneId}&cardId=${cardId}`, {
            sourceLaneId,
            targetLaneId,
        });
    }

    setEventBus = eventBus => {
        this.setState({eventBus})
    }

    async componentWillMount() {
        let response = await this.getLanes();
        this.setState({boardData: response});
    }

    getLanes() {
        return new Promise(resolve => {
            axios.get('http://localhost:5432/')
            .then((res) => {
                resolve(res.data)
            })
        })
    }

    shouldReceiveNewData = nextData => {
        // console.log('New card has been added')
        // console.log(nextData)
    }

    handleCardAdd = (card, laneId) => {
      console.log(`New card added to lane ${laneId}`);
      console.dir(card);
      let {title, description} = card;
      axios.post(`http://localhost:5432/add/${laneId}`, {
        id: title,
        title: title, 
        description: description
      }).then((response) => {
          this.setState({
            boardData: response.data
          })
      }).catch(err => console.log(err))
    }

    onCardDelete = (cardId, laneId) => {
        axios.delete(`http://localhost:5432/delete?prevLane=${cardId}&nextLane=${laneId}`, {
            cardId,
            laneId,
        });

        console.log(cardId, laneId);
    }

    laneSortFunction = (card1,card2) => {
        return card1 - card2;
    }

    render() {
        console.log(this.state.boardData);
        return (
            <div className="App">
                <div className="App-header">
                    <h3>React Trello Demo</h3>
                </div>
                <div className="App-intro">
                    <Board
                        editable
						onCardAdd={this.handleCardAdd}
                        data={this.state.boardData}
                        draggable
                        onDataChange={this.shouldReceiveNewData}
                        eventBusHandle={this.setEventBus}
                        handleDragStart={this.handleDragStart}
                        handleDragEnd={this.handleDragEnd}
                        onCardDelete={this.onCardDelete}
                        laneSortFunction={this.laneSortFunction}
                    />
                </div>
            </div>
        )
    }
}

export default App

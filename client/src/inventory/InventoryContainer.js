import React, {Component} from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/request';


class InventoryContainer extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.handlePost = this.handlePost.bind(this);
        this.handleAnimalPost = this.handleAnimalPost.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    // This is what data looks like
    // userInventoryData: {
    //     coins: 100;
    //     numberOfRooms: 0;
    //     areaCovered: 0;
    //     animals: 0;
    //     level: 1;
    //     score: 0;
    // }

    // gameBoard: {
    //     width: 20,
    //     height: 10,
    //     cellSize: 20
    // },
    
    handlePost(roomType){
        const request = new Request();
        request.post('http://localhost:8080/roomTypes', roomType);
    }

    handleAnimalPost(animalType){
        const request = new Request();
        request.post('http://localhost:8080/animalTypes', animalType)
    }

    loadData() {
        const dataArray = [{
            cellArray: [[1, 1], [1, 2], [1, 3]],
            roomMaxWidth: 1,
            roomMaxHeight: 3,
            roomType: 'red',
            roomStatus: 'room',
            area: 3,
            roomName: 'goose coop'
        }, {
                cellArray: [[1, 1]],
                roomMaxWidth: 1,
                roomMaxHeight: 1, roomType: 'yellow',
                roomStatus: 'room',
                area: 1,                roomName: 'hole'
            },
            {
                cellArray: [[1, 1], [1, 2], [2, 1], [2, 2]],
                roomMaxWidth: 2,
                roomMaxHeight: 2, roomType: 'red',
                roomStatus: 'room',
                area: 4,
                roomName: 'poop space'
            },
            {
                cellArray: [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]],
                roomMaxWidth: 3,
                roomMaxHeight: 3, roomType: 'blue',
                roomStatus: 'room',
                area: 9,
                roomName: 'Watering Space'
            }, {
                cellArray: [
                    [1, 1], [1, 2], [1, 3], [1,4], 
                [2, 1], [2, 2], [2, 3],[2,4],
                 [3, 1], [3, 2], [3, 3], [3,4],
                [4,1],[4,2],[4,3],[4,4]],
                roomMaxWidth: 4,
                roomMaxHeight: 4,
                roomType: 'red',
                roomStatus: 'room',
                area: 16,
                roomName: 'Centaurs Boudoir'
            },
            {
                cellArray: [[1, 1], [2, 1]],
                roomMaxWidth: 2,
                roomMaxHeight: 1,
                roomType: 'red',
                roomStatus: 'room',
                area: 2,
                roomName: 'Dungeon'
            },
            {
                cellArray: [[1, 1], [2, 1], [3, 1]],
                roomMaxWidth: 3,
                roomMaxHeight: 1,
                roomType: 'red',
                roomStatus: 'room',
                area: 3,
                roomName: 'Dragon Lair'
            },
            {
                cellArray: [[1, 1], [1, 2]],
                roomMaxWidth: 1,
                roomMaxHeight: 2,
                roomType: 'red',
                roomStatus: 'room',
                area: 2,
                roomName: 'Goose Throne'
            }]

        for(let data of dataArray){
            this.handlePost(data);
        }

        const animalArray = [
         {  cellArray: [[1, 1]],
            animalMaxWidth: 1,
            animalMaxHeight: 2,
            animalType: 'red',
            animalStatus: 'animal',
            animalName: 'chicken',
            imgSrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgSrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgSrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgSrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgSrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgSrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgSrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgSrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgSrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgSrc: 'dragon.png',
                animalName: 'dragon'
            }
        ];
        
        for(let animal of animalArray){
            this.handleAnimalPost(animal)
        }

       
    }

    render(){
    const gameBoard = this.props.gameBoard;
    const inventory = this.props.userInventoryData;
    const area = Math.round(( inventory.areaCovered ) / ( gameBoard.width * gameBoard.height) * 100);
   
        return (
            <section id="inventory-container" >
                <img id="house" src="house.png" />
                {/* <h3>Inventory</h3> */}
                <aside id="coins-display">
                    <h3 className="ui-coins" >{inventory.coins}</h3>
                    <img id="ui-coin-image" src="coin.svg" />
                </aside>

                <aside id="playing-data" >
                    <p className="user-data ui-rooms">
                        Rooms: {inventory.numberOfRooms} | {area}%
                    </p>
                
                    <p className="user-data ui-animals">
                        Animals: {inventory.animals}
                    </p>

                    <p className="user-data ui-score">
                        Score: {inventory.score}
                    </p>
                </aside>

                <aside id="buttons">
                    <button onClick={this.loadData}>Load Data</button>
                    <button onClick={this.props.loadChoices}>Load Choices</button>
                    <button onClick={this.props.tryAnimals}>Try Animals</button>
                </aside>

                <aside id="level-display">
                    Level {this.props.level}
                    <img id="level-board" src="woodBoard.png" /></aside>
            </section>
        )
    };
}

export default InventoryContainer;
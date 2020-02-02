import React, {Component} from 'react';
import GameBoardContainer from './GameBoardContainer';
import ChoiceCardContainer from '../cards/ChoiceCardContainer';

class MainBox extends Component {

    // This is the highest level where state is stored.
    // The data currently stored here is example data
    // which should be replaced with an API Fetchdata.  
  
    constructor(props) {
        super(props);
        this.state = {
            selectedOnChoiceCardContainer: null,
            mouseObject: null,
            selectedOnGameBoardContainer: null,
            hoverGameBoardLocation: null,
            gameBoardData: {
                gridData: {
                    width: 20,
                    height: 10,
                    cellSize: 20
                },
                
                objectsArray: [
                    {   objectType: 'Room',
                        objectPosition: [1, 1],
                        objectData: {
                            cellArray: [
                                [1, 1], [2, 1],
                                [1, 2], [2, 2]
                            ],
                            roomMaxWidth: 2,
                            roomMaxHeight: 2,
                            roomStatus: 'room',
                            roomType: 'red',
                            roomContents: [],
                            roomName: '2x2 Square'
                        }
                    },

                    {
                        objectType: 'Room',
                        objectPosition: [10, 5],
                        objectData: {
                            cellArray: [
                                [1, 1], [2, 1],
                                [3, 1], [4, 1]
                            ],
                            roomMaxWidth: 4,
                            roomMaxHeight: 1,
                            roomStatus: 'room',
                            roomType: 'red',
                            roomContents: [],
                            roomName: '4x1 Rectangle'
                        }
                    }
                ]
            },
            choiceContainerData: {
                selectedCard: null,
                choiceType: 'Room',
                cardArray: [
                    {
                        objectType: 'Room',
                        objectPosition: null,
                        objectData: {
                            cellArray: [
                                [1, 1], [2, 1],
                                [1, 2], [2, 2]
                            ],
                            roomMaxWidth: 2,
                            roomMaxHeight: 2,
                            roomStatus: 'room',
                            roomType: 'red',
                            roomContents: [],
                            roomName: '2x2 Square'
                        }
                    },

                    {
                        objectType: 'Room',
                        objectPosition: null,
                        objectData: {
                        cellArray: [
                            [1, 1], [2, 1],
                            [3, 1], [4, 1]
                        ],
                        roomMaxWidth: 4,
                        roomMaxHeight: 1,
                        roomStatus: 'room',
                        roomType: 'red',
                        roomContents: [],
                        roomName: '4x1 Rectangle'
                    }}
                ]

            }
        };

        this.handleChoiceCardSelection = this.handleChoiceCardSelection.bind(this);
        this.handleHoverGameBoardLocation = this.handleHoverGameBoardLocation.bind(this);
        this.handleGameBoardSelection = this.handleGameBoardSelection.bind(this);
        this.handleMouseObject = this.handleMouseObject.bind(this);
    }

   

    handleHoverGameBoardLocation(object) {
        this.setState({ hoverPosition: object })
    }

    handleChoiceCardSelection(choice){
        this.setState({ selectedOnChoiceCardContainer:choice.objectData});
        if (choice.objectType === "Room"){}
        this.setState({mouseObject:{
            type: 'Room',
            objectData: choice.objectData}
        })
    }

    handleMouseObject(){
        this.setState({mouseObject: null});
        this.setState({selectedOnChoiceCardContainer:null});
        this.setState({ selectedOnGameBoardContainer: null});
    }

    handleGameBoardSelection(choice){
        this.setState({selectedObject: choice});
        if (choice.objectType === "Room") { }
        this.setState({
            mouseObject: {
                type: 'Room',
                objectData: choice.objectData
            }
        })
    }

    render() {
        return(
            <>
                <GameBoardContainer
                    clickMethod={this.handleGameBoardSelection}
                    hoverMethod={this.handleHoverGameBoardLocation}
                    gameBoardData={this.state.gameBoardData} />
                <ChoiceCardContainer
                    clickMethod={this.handleChoiceCardSelection}
                    choiceCardData={this.state.choiceContainerData}/>
        
            </>

        )
    }
}

export default MainBox;
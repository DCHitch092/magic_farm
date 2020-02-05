import React, {Component} from 'react';
import ChoiceCard from './ChoiceCard';
import GenerateChoicesButton from './GenerateChoicesButton';

class ChoiceCardContainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            objects: [],
            choices: [],
            level: 1,
            buttonVisible: false
        }
        this.makeCardSelection = this.makeCardSelection.bind(this);
        this.generateRoomChoices = this.generateRoomChoices.bind(this);
    }

    componentDidMount() {
        const url = 'http://localhost:8080/roomTypes';

        fetch(url)
            .then(res => res.json())
            .then(roomTypes => this.setState({ objects: roomTypes._embedded.roomTypes }))
            .catch(err => console.err());
    }
    
    /// This is the new develop branch 
    generateRoomChoices(x){
        const roomTypes = this.state.objects;
        var length = roomTypes.length;
        const choices = []
        for (var i = 0; i < x; i++){
            var index = (Math.random() * length + 1);
            choices.push(roomTypes[index]);
        }
        this.setState({choices: choices});
    }

    makeCardSelection(card){
        this.props.clickMethod(card.id, this.props.choiceCardData.choiceType, card.objectData);
    }

    render() {

        const cards = this.state.choices.map((card, index) => {
            return (

                <ChoiceCard
                    cellSize={this.props.cellSize}
                    id={index}
                    key={index}
                    value={index}
                    type={this.props.choiceType}
                    choiceData={card}
                    clickMethod={this.makeCardSelection}
                    hoverMethod={this.props.hoverMethod}
                    selectedCard={this.props.selectedCard}
                    clearSelection={this.props.clearSelection}
                ></ChoiceCard>
            )

        });

            return (
                <>

                <section id="choice-card-container">
                   <GenerateChoicesButton objects={this.state.objects}
                   level={this.state.level} visible={this.state.buttonVisible}
                   clickMethod={this.generateRoomChoices}/>
                    <section id="current-cards">
                        {cards} 
                    </section>
                </section>
                </>
            )
        }
    }

export default ChoiceCardContainer;
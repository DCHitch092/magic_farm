import React, {useState} from 'react';
import Cell from './Cell';
import Room from '../rooms/Room';
import MouseObject from './MouseObject';

const Grid = (props) => {

    const grid = props.gridData;
    
    const mouseObjects = [];
    
    if (props.mouseObject !== null) {
        mouseObjects.push(props.mouseObject)
    };

    function doNothing() { return null; }

    const renderMouse = mouseObjects.map((object, index) => {

            switch (object.objectType) {
            case "Room": return (
                <Room
                    placedStatus={object.placedStatus}
                    cellSize={grid.cellSize}
                    key={index}
                    room={object.objectData}
                    position={props.hoverLocation}
                    clickMethod={doNothing}
                    hoverMethod={doNothing}
                />
            );
            case "Animal": return (
                <p key={index}>this will be an animal</p>
            );
            default: return null; };


    })
    

    const objects = props.objectsArray.map((object, index) => {
        let objectPositionStatus = 'fixed'

        switch(object.objectType){
            case "Room": return(
                <Room
                placedStatus={objectPositionStatus}
                cellSize={grid.cellSize}
                key={index}
                room={object.objectData}
                position={object.objectPosition}
                clickMethod={props.clickMethod}
                hoverMethod={props.hoverMethod}
                />
            ); 
            case "Animal": return(
                <p key={index}>this will be an animal</p>
            );
            default: return null;
        }

    });

    // BUILD AN EMPTY GRID
    const x = grid.width;
    const y = grid.height;
    const blankGrid = [];

    for (var j = 1; j <= x; j++) {
        for (var k = 1; k <= y; k++) {
            const position = [j,k]

            // Create an empty cell with that position
            const cell = {
                'empty': true,
                'position': position,
                'affiliation': 'game-board',
                'hover': false
            };
            
            blankGrid.push(cell);
        }
    }

    const blankCells = blankGrid.map((cell, index) => {
        
        return (
            <Cell key={index} cell={cell} clickMethod={props.clickMethod}
                hoverMethod={props.hoverMethod}/>
        )

    });

    const gridStyle = {
        display: 'grid',
        gridGap: '1px',
        gridTemplateRows: 'repeat(' + y + ', ' + grid.cellSize +'px)',
        gridTemplateColumns: 'repeat(' + x + ', ' + grid.cellSize +'px)'
    };

    return (
        <>
        <main style={gridStyle} className={'grid ' + props.id}>
            {renderMouse}
            {objects} 
            {blankCells}
        </main>
        </>
    )

}

export default Grid;
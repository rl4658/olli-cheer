import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from './helpers/tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS[type].color}>
        
    </StyledCell>
);

export default React.memo(Cell)
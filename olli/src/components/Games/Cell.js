import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from './helpers/tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={'J'} color={TETROMINOS['J'].color}>
        {console.log('rerender cell')}
        cell
    </StyledCell>
);

export default React.memo(Cell)
import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from './helpers/tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={'O'} color={TETROMINOS['O'].color}>
        {console.log('rerender cell')}
    </StyledCell>
);

export default React.memo(Cell)
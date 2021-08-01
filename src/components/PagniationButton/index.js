import React from 'react'
import './styles.scss';

export default function PaginationButton({Sign}) {
    return (
        <div>
            <button class="pagination second">{Sign}</button>
        </div>
    )
}

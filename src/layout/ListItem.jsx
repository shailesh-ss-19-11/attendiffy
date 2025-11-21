import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    const { setselectedlink, selector, selectedlink } = props;
    return (
        <>
            <li onClick={() => setselectedlink(selector)} className={selectedlink === selector ? 'selected-link p-2' : ''}>
                <Link to={selector}>{selector?.toUpperCase()}</Link>
            </li>
            {
                selectedlink === selector ?
                    <>
                        <li className='sideLink-child'>
                            <Link to={selector + "/create-" + selector}>
                                Create {selector.charAt(0).toUpperCase() + selector.slice(1, selector.length)}
                            </Link>
                        </li>
                        <li className='sideLink-child'>
                            <Link to={selector + "/update-" + selector}>
                                Update {selector.charAt(0).toUpperCase() + selector.slice(1, selector.length)}
                            </Link>
                        </li>
                    </>
                    : null
            }
        </>
    )
}

export default ListItem
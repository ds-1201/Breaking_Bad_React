import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const changeText = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <section className="search">
            <form>
                <input
                type="text"
                className="form-control"
                placeholder="seach characters"
                value={text}
                onChange={(e) => {changeText(e.target.value)}}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search

import React from 'react'
import useAuth  from '../hooks/useAuth'

function ArticlesList() {
const user=useAuth()

    return(
        <div>ARTICLE List</div>
    )
}

export default ArticlesList
import React from 'react'

const GitApi = ({data}) => {
    return (
        <>
            {
                data.map((errElm) => {
                    const { avatar_url, id,type } = errElm;
                    return (
                        <div key={id} className="container">
                            <img src={avatar_url} width="200" height="200" alt="github-Img" />
                            <span>{type}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default GitApi;

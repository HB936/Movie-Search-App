import React from 'react'

export default function Display(props) {
    return (
        <div className="row">
            {
                props.results.map(
                    (d, i) => {
                        return <Box key={i} img={`https://image.tmdb.org/t/p/w1280` + d.poster_path} title={d.title} />
                    }
                )
            }
        </div>

        // <div className="row">
        //     <Box img={"https://picsum.photos/200"} title="I am the title" />
        // </div>
    )
}


function Box(props) {
    const imageHandler = (e) => {
        e.target.src = "https://media.istockphoto.com/id/1500807425/vector/image-not-found-icon-vector-design.webp?s=1024x1024&w=is&k=20&c=h3cQFxpWy6M93hzbRb4dqJyhsV_kVps9R7Rj2PaH4xE="
    }
    return (
        <>
            <div className="col-3 mt-2">
                <div className="card overflow-hidden bg-secondary">
                    <img src={props.img} alt="" onError={imageHandler} />
                    <hr style={{ margin: 2 }} />
                    <div className="text-center my-2 fw-semibold text-light">{props.title}</div>
                </div>
            </div>
        </>
    )
}
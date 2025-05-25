import React from 'react'

export default function Display(props) {
    return (
        <div className="row">
            {
                props.results.map((d, i) => {
                    return (
                        <Box
                            key={i}
                            img={`https://image.tmdb.org/t/p/w1280${d.poster_path}`}
                            title={d.title}
                        />
                    )
                })
            }
        </div>
    )
}

function Box(props) {
    const imageHandler = (e) => {
        e.target.src = "https://media.istockphoto.com/id/1500807425/vector/image-not-found-icon-vector-design.webp?s=1024x1024&w=is&k=20&c=h3cQFxpWy6M93hzbRb4dqJyhsV_kVps9R7Rj2PaH4xE="
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
            <div className="card overflow-hidden bg-secondary h-100">
                <img
                    src={props.img}
                    alt={props.title}
                    onError={imageHandler}
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                />
                <hr style={{ margin: '0.5rem 0' }} />
                <div className="text-center my-2 fw-semibold text-light">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

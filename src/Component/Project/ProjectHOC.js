import React from 'react'

const mapLists = (project) => {
    let functs =  project.lists.map(
        (list) => {
            let dateTime = new Date().getTime()
            let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 2))

            return (
                <li key={timestamp}>{list}</li>
            )
        }
    )

    return (
        <ol>
            {functs}
        </ol>
    )
}

const mapImgs = (project) => {
    let dateTime = new Date().getTime()
    let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 2))

    return project.imgs.map(
        (img) => (
            <div key={timestamp}>
                <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} />
            </div>
        )
    )
}

export default (Slider, settings, projects) => {
    return class ProjectBox extends React.Component {
        render() {
            return projects.map(
                (project) => {
                    let functs = mapLists(project)
                    let imgs = mapImgs(project)
                    let dateTime = new Date().getTime()
                    let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 2))

                    return (
                        <div className='project-box' key={timestamp}>
                            <div>
                                <div className='project-title'>{project.title}</div>
                                <p>{project.location}</p>
                                {functs}
                            </div>
                                
                            <Slider {...settings} key={timestamp}>
                                {imgs}
                            </Slider>
                        </div>
                    )
                }
            )
        }
    }
}

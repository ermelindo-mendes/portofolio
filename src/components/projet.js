const Projet = ({ nom, img, lien, description }) => {
    return (
        <>
            <h2> {nom} </h2>
            <img src={img} alt={nom} style={{ width: '200px', height: 'auto' }} />
            <p>{description}</p>
            <a href={lien} title={nom} target='_blank' rel='noreferrer'>
                Redirection vers le projet
            </a>
        </>
    )
}

export default Projet

const Projet = ({nom, img, lien}) => {
    return (
        <>
            <h2>Je suis le Projet : {nom} </h2>
            <img src={img} alt={nom} style={{ width: '200px', height: 'auto' }} />
            <a href={lien} title={nom} target="_blank" rel='noreferrer'>
                Redirection vers le projet
            </a>

        </>
    )
}

export default Projet;
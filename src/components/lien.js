const Lien = ({nom, img, lien}) => {
    return (
        <>
            <img src={img} alt={nom} style={{ width: '50px', height: 'auto' }} />
            <a href={lien} title={nom} target="_blank" rel='noreferrer'>
                {nom}
            </a>

        </>
    )
}

export default Lien;
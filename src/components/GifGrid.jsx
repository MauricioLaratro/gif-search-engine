/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { GifItem } from "./GifItem"
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifLoader } from './GifLoader';



export const GifGrid = ({ category }) => {

  // Forma extensa y comun de aplicar la logica...
  // const [images, setImages] = useState([])

  // const getImages = async() => {
  //   const newImages = await getGifs( category )
  //   setImages(newImages)
  // }

  // useEffect( () => {
  //   getImages();
  // }, [])


  // Forma mas simplificada de aplicar la logica, mediante un Custom Hook
  const { images, isLoading } = useFetchGifs( category );


  return (
    <>
      <h3>{ category }</h3>

      {
        isLoading && ( <GifLoader>Hola</GifLoader>)
      }


      <div className="card-grid">
        {
          images.map(( image ) =>(
            <GifItem
              key={ image.id }
              title={ image.title }
              url={ image.url }
              // { ...image } en el caso de tener muchas props podriamos utilizar este metodo con el operador spred para enviar todas las props que contenga image y luego el componente hijo decide cuales utilizar al recibirlas.
            />
          ))
          // images.map(({id, title}) =>(
          //   <li key={ id }>{ title }</li>
          // ))
          // version completa del fragmento desestructurado anterior
          // images.map(gif =>(
          //   <li key={ gif.id }>{ gif.title }</li>
          // ))
        }
      </div>

    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.any.isRequired,
}
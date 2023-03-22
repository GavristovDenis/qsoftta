import CatLogo from "./img/cat_logo.png"
import DeereLogo from "./img/deere_logo.png"
import HenkelLogo from "./img/henkel_logo.png"
import IkeaLogo from "./img/ikea_logo.png"
import McLogo from "./img/mc_logo.png"
import NikeLogo from "./img/nike_logo.png"
import ReebookLogo from "./img/reebok_logo.png"
import { OneCard } from "./Card"

export const CardContainer = () => {

    const imageArray = [
        CatLogo,
        DeereLogo,
    ]
    console.log(imageArray)
    return (
        <div className="card_container" >

            {imageArray.map((image, index) => {
                return (
                    <img key={index} src={image} alt="Изображение не загрузилось" />)
            })}

        </div>
    )
}
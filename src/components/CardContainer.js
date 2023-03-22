import YTLogo from "./img/YT_logo.svg";
import OzonLogo from "./img/ozon_logo.png";
import HenkelLogo from "./img/henkel_logo.jpg";
import McLogo from "./img/mc_logo.png";
import SberLogo from "./img/sber_logo.png";

export const CardContainer = () => {
    const imageArray = [
        YTLogo,
        OzonLogo,
        HenkelLogo,
        YTLogo,
        McLogo,
        YTLogo,
        SberLogo,
    ];

    return (
        <div className="card_container">
            <h2 className="partners-text">НАШИ ПАРТНЁРЫ</h2>
            {imageArray.map((image, index) => {
                return (
                    <img
                        className="image"
                        key={index}
                        src={image}
                        alt="Изображение не загрузилось"
                    />
                );
            })}
        </div>
    );
};
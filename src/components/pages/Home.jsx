import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchFive, fetchTopSeller } from "../../utils/fetch";
import ProductsCarousel from "../Carousel";
import BtnScrollUp from "../BtnScrollUp";

function Home() {
    const [latest, setLatest] = useState([]);
    const [topFive, setTopFive] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [latest, topFive] = await Promise.all([fetchFive(), fetchTopSeller()]);
                setLatest(latest);
                setTopFive(topFive);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (

        <main className="homepage-main position-relative">
            <BtnScrollUp/>
            <div className="d-flex justify-content-around">
                <div className="d-flex w-50 flex-column text-center">
                    <div className="home-motto">
                        <h1 className="title-font">Recupera il passato, arreda il tuo futuro</h1>
                    </div>
                    <div className="sect-1-p pt-5">
                        <p className="p-font text-center">Non il solito ricondizionato, ma componenti elettronici obsoleti o guasti
                            trasformati in oggetti di design. Non compri solo
                            un oggetto, ti porti a casa un frammento di futuro distopico.</p>
                    </div>
                </div>
                <div className="z-3 w-50 h-100 sect-1-img-wrapper d-none d-md-inline">
                    <img src="public\imgs\img_elements_glitch\city.png" alt="" className="img-fluid" />
                </div>
            </div>

            <div className="container-xs position-relative">

                <div className="padrian-wrapper position-absolute w-100 h-25">
                    <img src="\imgs\img_background_glitch\padrian.jpg" alt="bg-lamp" className="img-fluid" />
                </div>

                <ProductsCarousel
                    title="Più Venduti"
                    items={topFive || []}
                    loading={loading}
                    error={error}
                />
                
                <div className="position-absolute">
                    <img src="/imgs/img_background_glitch/bg_img_lamp.jpg" alt="bg-lamp" className="img-fluid" />
                </div>
                <ProductsCarousel
                    title="Ultimi Arrivi"
                    items={latest || []}
                    loading={loading}
                    error={error}
                />

                <div className="d-flex flex-column align-items-center my-5 pt-4">
                    <p className="p-font text-muted small text-uppercase tracking-wider mb-2">
                    </p>
                    <Link to="/products" className="btn-distopic-cta">
                        Esplora i nostri prodotti
                    </Link>
                </div>            </div>
            <div className="scroll-section section-1 position-absolute">

            </div>
            <div className="scroll-section section-2 pt-4">
                <div className="sect-2-content-wrapper justify-content-center">
                    <div className="section-2-motto">
                        <h1 className="title-font">IL TUO NAVIGATORE NELLA RETE</h1>
                        <p className="p-font">Non perdere tempo a scorrere infiniti cataloghi. Chatta in tempo 
                        reale con la nostra intelligenza artificiale integrata: chiedi 
                        quello che cerchi, filtra per categoria e ricevi all'istante 
                        schede prodotto personalizzate direttamente nella tua console.
                         Il futuro dello shopping digitale è qui, ed è guidato dai dati.</p>
                    </div>
                    <div className="bg-lamp">
                        <img src="/imgs/img_background_glitch/bg_img_moon.jpg" alt="bg-moon" className="img-fluid" />
                    </div>
                </div>

            </div>


        </main>
    );
}
export default Home;
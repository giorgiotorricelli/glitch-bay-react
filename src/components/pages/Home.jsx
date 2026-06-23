import { useEffect, useState } from "react";
import { fetchFive, fetchTopSeller } from "../../utils/fetch";
import ProductsCarousel from "../Carousel";

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
        <main>
            <ProductsCarousel
                title="Più Venduto"
                items={topFive || []}
                loading={loading}
                error={error}
            />
            <ProductsCarousel
                title="Ultimi Arrivi"
                items={latest || []}
                loading={loading}
                error={error}
            />
        fetchFive().then((data) => {
            setProducts(data);
        })
            .catch((err) => console.error("Errore nel recupero prodotti:", err));
    }, [])

    return (

        <main className="homepage-main">
            <div className="scroll-section section-1">
                <div className="d-flex w-100 justify-content-around">
                    <div className="w-25">
                        <h1 className="title-font text-center">Recupera il passato, arreda il tuo futuro</h1>
                    </div>
                    <div className="sect-1-p pt-5">
                        <p className="p-font text-center">Non il solito ricondizionato, ma componenti elettronici obsoleti o guasti 
                            trasformati in oggetti di design. Esploriamo i resti del collasso tecnologico 
                            per recuperare hardware dimenticato, trasformando lo scarto industriale in pura 
                            estetica neo-noir. Luci neon, circuiti a vista e metallo grezzo si fondono in 
                            creazioni fatte a mano che sfidano l'obsolescenza programmata. Non compri solo 
                            un oggetto, ti porti a casa un frammento di futuro distopico.</p>
                    </div>
                </div>
                <div className="landscape-wrapper">
                    <img className="img-fluid w-50" src="public\imgs\img_elements_glitch\—Pngtree—city __silhouette cyberpunk effect landscape_8804123.png" alt="" />
                </div>
            </div>
            <div className="scroll-section section-2">
                <div className="container-xs">
                    <ProductList products={products} displayed={'home'} />
                </div>
            </div>
            <div className="scroll-section section-3"></div>
            <div className="scroll-section section-4"></div>
            <div className="scroll-section section-5"></div>


        </main>
    );
}
export default Home;
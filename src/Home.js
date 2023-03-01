
import  React  from "react";
import "./Home.css"
import Product from "./Product"
;

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://www.statcan.gc.ca/o1/sites/default/files/2021-11/shopping_2.jpg" alt="" className="home" />
                    <div className="home_row">
                        <Product id="556677"
                        title ="laptop sholder bag"
                        price = {11.96}
                        rating= {5}
                        image="https://www.nexgenshop.pk/wp-content/uploads/2020/07/1.-Nylon-Notebook-Business.jpg"
                        />
                        <Product id="101097"
                        title ="multicooker"
                        price = {100.95}
                        rating={5}
                        image='https://topappliances.eu/media/7/824.png'
                        />
                    </div>
                    <div className="home_row">
                    <Product id="252569"
                    title = "Sony LED 65X80K"
                    price ={2000}
                    rating={5}
                    image="https://s13emagst.akamaized.net/products/45030/45029396/images/res_ed316a4b0cadaf555b8fd49ba36f3961.jpg"

                    
                    />
                    <Product id="212165"
                    title ="French quad Door Fridge"
                    price = {1000}
                    rating={5}
                    image ="https://www.westinghouse.com.au/remote.jpg.ashx?urlb64=aHR0cHM6Ly9yZXNvdXJjZS5lbGVjdHJvbHV4LmNvbS5hdS9wdWJsaWMvaW1hZ2UyL3Byb2R1Y3QvMTExNjIzLzQxMjg3L1dILVByb2R1Y3Rab29tL2ZyaWRnZXNfd3FlNjA2MGJiX2dhbGxlcnlfMS5wbmc&hmac=DszUmqU_me8"
                    
                    />
                    <Product id="211987"
                    title ="Sonos Arc Dolby Atmos"
                    price={999}
                    rating={5}
                    image ='https://cdn.mos.cms.futurecdn.net/oAVuRwwUebTdJtNLK5xUcW.jpg'
                    
                    />

                    </div>
                    <div className="home_row">
                    <Product id="219785"
                    title = "LG Oven The Range Microwave"
                    price = {450}
                    rating={5}
                    image ="https://www.lg.com/us/images/cooking-appliances/md08002182/gallery/D_03.jpg"
                     />

                    </div>
                </div>
            </div>

        </div>

    )

}

export default Home
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./testimonals";
import "./testimonals.css"
import { dados } from "./testimonals";



function ShowTestimonals() {
    

    return (
        <>
            <h1 className="title-testimonal">Testemunhos</h1>
        
            <div className="ShowTestimonals">
                <Carousel 
                infinitity ={true}
                    itemsToShow={3} 
                    enableSwipe={true} 
                    showArrows={false} 
                    enableAutoPlay={true} 
                    autoPlaySpeed={9000} 
                    isRTL={false} 
                    itemsToScroll={1}
                     breakPoints = {[
                        { width: 500, itemsToShow: 1 },
                        { width: 768, itemsToShow: 2 },
                        { width: 1200, itemsToShow: 3 },
                    ]}
                    
                >
                    {
                        dados.map((item) => (
                            <div className="card-testimonal">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className="context">
                                        <h1>{item.name}</h1>

                                        <p>{item.message}</p>
                                    </div>

                                </div>

                            </div>
                        ))

                    }

                </Carousel>
            </div>
         
        </>
    );
}
export default ShowTestimonals;


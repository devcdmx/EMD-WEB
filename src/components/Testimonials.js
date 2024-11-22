import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Equipo</div>
          <div className="subtitle">Profesionales de la salud</div>
        </div>
        {/* testimonials items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.testimonials}>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_1_lv.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Lubia Velázquez</div>
                  <div className="company">Doctora en ciencias</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_2_je.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Jorge Escobedo</div>
                  <div className="company">Doctor en ciencias</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_3_avm.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Abril V. Muñoz</div>
                  <div className="company">Doctora en epidemiología</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_4_ip.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Ignacio Pineda</div>
                  <div className="company">Mtro. en Gestión TI</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_5_mh.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Mirelle Hernandez</div>
                  <div className="company">Dra. Especialista en Medicina Familiar</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_6_lv.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Luis Villarreal</div>
                  <div className="company">Dr. Especialista en Medicina Familiar</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_7_br.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Barbara Roa</div>
                  <div className="company">Nutrióloga</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_8_ra.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Renata Achar</div>
                  <div className="company">Nutrióloga</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_9_ael.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Ana Elisa Lam</div>
                  <div className="company">Nutrióloga</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/person_10_go.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">Gabriela Ortiz</div>
                  <div className="company">Nutrióloga</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="testimonials_prev prev fas fa-chevron-left" />
            <span className="testimonials_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;

// import React, { useState } from "react";
// import "./bf_form.css";
// import { Link } from "react-router-dom";

// const BF_form = (props) => {
//   // Состояния для хранения данных формы
//   const [formData, setFormData] = useState({
//     first_name: "",
//     second_name: "",
//     last_name: "",
//     email: "",
//     tel_num: "",
//     adults: "",
//     children: "",
//     check_in: "",
//     check_out: "",
//   });

//   // Состояние для хранения информации об успешном бронировании
//   const [bookingSuccess, setBookingSuccess] = useState(false);

//   // Обработчик изменений в полях ввода
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Обработчик отправки формы
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log('Booking successful:', data);
//       // Устанавливаем состояние успешного бронирования в true
//       setBookingSuccess(true);
//       // Дополнительные действия после успешного бронирования, например, перенаправление на страницу с подтверждением
//     } catch (error) {
//       console.error('Error booking:', error);
//       // Обработка ошибок при бронировании
//     }
//   };

//   // Если бронирование успешно, перенаправляем пользователя на страницу '/End'
//   if (bookingSuccess) {
//     return <Redirect to="/End" />;
//   }

//   return (
//     <div className="bf_form">
//       <div className="bf_form_body">
//         <div className="bf_form_img">
//           <img src={props.img} alt="" />
//         </div>
//         <form className="bf_form_inputs" onSubmit={handleSubmit}>
//           <div className="bf_form_input_title">
//             <label htmlFor="first_name">Ваше ФИО:</label>
//             <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
//           </div>
//           <div className="bf_form_input_desc">
//             <div className="mail">
//               <label htmlFor="email">Почта:</label>
//               <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
//             </div>
//             <div className="phone">
//               <label htmlFor="tel_num">Номер телефона:</label>
//               <input type="text" id="tel_num" name="tel_num" value={formData.tel_num} onChange={handleChange} />
//             </div>
//           </div>
//           <div className="bf_form_input_desc2">
//             <div className="adults">
//               <label htmlFor="adults">Количество взрослых:</label>
//               <input type="text" id="adults" name="adults" value={formData.adults} onChange={handleChange} />
//             </div>
//             <div className="children">
//               <label htmlFor="children">Количество детей:</label>
//               <input type="text" id="children" name="children" value={formData.children} onChange={handleChange} />
//             </div>
//           </div>
//           <div className="bf_form_input_desc3">
//             <div className="check-in">
//               <label htmlFor="check_in">Дата заезда:</label>
//               <input type="text" id="check_in" name="check_in" value={formData.check_in} onChange={handleChange} />
//             </div>
//             <div className="departure">
//               <label htmlFor="check_out">Дата выезда:</label>
//               <input type="text" id="check_out" name="check_out" value={formData.check_out} onChange={handleChange} />
//             </div>
//           </div>
//           <div className="bf_form_button">
//             <button type="submit">ЗАБРОНИРОВАТЬ</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BF_form;









import React, { useState } from "react";
import "./bf_form.css";
import { Link } from "react-router-dom";

const BF_form = (props) => {
  // Состояния для хранения данных формы
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    last_name: "",
    email: "",
    tel_num: "",
    adults: "",
    children: "",
    check_in: "",
    check_out: "",
  });

  // Обработчик изменений в полях ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('localhost:3000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Booking successful:', data);
      // Дополнительные действия после успешного бронирования, например, перенаправление на страницу с подтверждением
    } catch (error) {
      console.error('Error booking:', error);
      // Обработка ошибок при бронировании
    }
  };

  return (
    <div className="bf_form">
      <div className="bf_form_body">
        <div className="bf_form_img">
          <img src={props.img} alt="" />
        </div>
        <form className="bf_form_inputs" onSubmit={handleSubmit}>
          <div className="bf_form_input_title">
            <label htmlFor="first_name">Ваше ФИО:</label>
            <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
          </div>
          <div className="bf_form_input_desc">
            <div className="mail">
              <label htmlFor="email">Почта:</label>
              <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="phone">
              <label htmlFor="tel_num">Номер телефона:</label>
              <input type="text" id="tel_num" name="tel_num" value={formData.tel_num} onChange={handleChange} />
            </div>
          </div>
          <div className="bf_form_input_desc2">
            <div className="adults">
              <label htmlFor="adults">Количество взрослых:</label>
              <input type="text" id="adults" name="adults" value={formData.adults} onChange={handleChange} />
            </div>
            <div className="children">
              <label htmlFor="children">Количество детей:</label>
              <input type="text" id="children" name="children" value={formData.children} onChange={handleChange} />
            </div>
          </div>
          <div className="bf_form_input_desc3">
            <div className="check-in">
              <label htmlFor="check_in">Дата заезда:</label>
              <input type="text" id="check_in" name="check_in" value={formData.check_in} onChange={handleChange} />
            </div>
            <div className="departure">
              <label htmlFor="check_out">Дата выезда:</label>
              <input type="text" id="check_out" name="check_out" value={formData.check_out} onChange={handleChange} />
            </div>
          </div>
          <div className="bf_form_button">
            <Link to='/End'>
              <button type="submit">ЗАБРОНИРОВАТЬ</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BF_form;



// import React from "react";
// import "./bf_form.css";
// import { Link } from "react-router-dom";



// const BF_form = (props) => {
//   return (
//     <div className="bf_form">
//       <div className="bf_form_body">
//         <div className="bf_form_img">
//           <img src={props.img} alt="" />
//         </div>
//         <div className="bf_form_inputs">
//           <div className="bf_form_input_title">
//             <label htmlFor="adults">Ваше ФИО:</label>
//             <input type="text" />
//           </div>
//           <div className="bf_form_input_desc">
//             <div className="mail">
//               <label htmlFor="adults">Почта:</label>
//               <input type="text" />
//             </div>
//             <div className="phone">
//               <label htmlFor="adults">Номер телефона:</label>
//               <input type="text" />
//             </div>
//           </div>
//           <div className="bf_form_input_desc2">
//             <div className="adults">
//               <label htmlFor="adults">Количество взрослых:</label>
//               <input type="text" />
//             </div>
//             <div className="children">
//               <label htmlFor="adults">Количество детей:</label>
//               <input type="text" />
//             </div>
//           </div>
//           <div className="bf_form_input_desc3">
//             <div className="check-in">
//               <label htmlFor="adults">Дата заезда:</label>
//               <input type="text" />
//             </div>
//             <div className="departure">
//               <label htmlFor="adults">Дата выезда:</label>
//               <input type="text" />
//             </div>
//           </div>
//           <div className="bf_form_button">
//           <Link to='/End'>
//           <button>ЗАБРОНИРОВАТЬ</button>
//           </Link>
          
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BF_form;


import './App.css'
function HeaderApp(){
  return (
      <div id="header" >
          <div className="head-left">
              {/* <a href="/"><img src={logo} alt=""/></a> */}
              <span>Tốt & Nhanh</span>
          </div>
          <div className="head-right">
              <div className="head-right-top">
                  <form id="search-form" className="frm-search" method="post">
                      <i className="ti-search"></i>
                      <input id="input-search" className="input-search" type="text" name="key" placeholder="Giao nhanh 2H & đúng khung giờ"/>
                      <button className="btn-search" type="submit">Tìm kiếm</button>
                  </form>
                  <div className="nav">
                      <button className="btn btn-home" type="button">
                          <i className="icon ti-home"></i>
                          Trang chủ
                      </button>
                      <div className="div-nav">
                          <button className="btn btn-account" type="button">
                              <i className="icon ti-face-smile"></i>
                              Tài khoản
                          </button>
                          <ul className="subnav">
                              <li><a href="#">Thông tin tài khoản</a></li>
                              <li><a href="#">Đơn hàng của tôi</a></li>
                              <li><a href="#">Trung tâm hỗ trợ</a></li>
                              <li><a href="#">Đăng xuất</a></li>
                          </ul>
                      </div>
                      <a className="nav-cart" href="">
                          <i className="ti-shopping-cart"></i>
                          <span className="quantity-product-cart">0</span>
                      </a>
                  </div>
              </div>
              <div className="head-right-bottom">
                  <i className="ti-location-pin"></i>
                  <h4>Giao đến:</h4>
                  <a href="">Q.Hải Châu, P.Hải Châu, Đà Nẵng</a>
              </div>
          </div>
      </div>
  );
}
function App() {
return (
  <HeaderApp></HeaderApp>
);
}

export default App
